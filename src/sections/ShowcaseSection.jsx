import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";
import ProjectTitle from "../components/ProjectTitle";

gsap.registerPlugin(ScrollTrigger);

// Detect touch / small screens to decide overlay behavior
function useIsTouchLike() {
  const [touchLike, setTouchLike] = useState(false);
  useEffect(() => {
    const mqCoarse = window.matchMedia("(pointer: coarse)");
    const update = () => {
      setTouchLike(mqCoarse.matches || window.innerWidth < 768);
    };
    update();
    window.addEventListener("resize", update);
    mqCoarse.addEventListener?.("change", update);
    return () => {
      window.removeEventListener("resize", update);
      mqCoarse.removeEventListener?.("change", update);
    };
  }, []);
  return touchLike;
}

// Reusable image + hover overlay (inline styles only)
function HoverImageOverlay({ src, alt, description, github, wrapperBg }) {
  const isTouchLike = useIsTouchLike();
  const [hovered, setHovered] = useState(false);

  // On touch-like devices, show overlay by default
  useEffect(() => {
    if (isTouchLike) setHovered(true);
  }, [isTouchLike]);

  const wrapperStyle = {
    position: "relative",
    overflow: "hidden",
    borderRadius: 16,
    background: wrapperBg || "transparent",
    cursor: "pointer",
  };

  const imgStyle = {
    display: "block",
    width: "100%",
    height: "auto",
    transition: "transform 220ms ease, filter 220ms ease",
    filter: hovered ? "brightness(0.5) blur(3px)" : "none",
    transform: hovered ? "scale(1.03)" : "none",
  };

  const overlayStyle = {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    background:
      "linear-gradient(to top, rgba(0,0,0,.65), rgba(0,0,0,.3) 40%, rgba(0,0,0,0) 70%)",
    opacity: hovered ? 1 : 0,
    transition: "opacity 220ms ease",
    pointerEvents: hovered ? "auto" : "none",
    padding: 16,
  };

  const contentStyle = {
    maxWidth: 620,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 14,
    alignItems: "center",
    justifyContent: "center",
  };

  const descStyle = {
    color: "rgba(255,255,255,.95)",
    fontSize: "1rem",
    lineHeight: 1.45,
    margin: 0,
  };

  const btnStyle = {
    pointerEvents: "auto",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    fontWeight: 700,
    fontSize: "0.95rem",
    lineHeight: 1, // keep icon + text aligned
    textDecoration: "none",
    color: "#fff",
    background: "rgba(255,255,255,.18)",
    border: "1px solid rgba(255,255,255,.28)",
    padding: "10px 14px",
    borderRadius: 12,
    backdropFilter: "blur(6px)",
    transition: "transform 120ms ease, background 160ms ease",
  };

  // Icon as a background image to ignore PNG intrinsic padding
  const iconSpanStyle = {
    width: 16,
    height: 16,
    display: "inline-block",
    backgroundImage: "url(/images/github.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
    flexShrink: 0,
  };

  const handleToggle = () => {
    if (isTouchLike) setHovered((h) => !h); // tap to toggle on touch-like
  };

  return (
    <div
      className="image-wrapper"
      style={wrapperStyle}
      onMouseEnter={() => !isTouchLike && setHovered(true)}
      onMouseLeave={() => !isTouchLike && setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => !isTouchLike && setHovered(false)}
      onClick={handleToggle}
      role="button"
      aria-label={`${alt} – ${hovered ? "Hide" : "Show"} details`}
    >
      <img src={src} alt={alt} style={imgStyle} />
      <div className="project-overlay" style={overlayStyle} aria-hidden={!hovered}>
        <div className="overlay-content" style={contentStyle}>
          <p className="overlay-desc" style={descStyle}>{description}</p>
          <a
            href={github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`View code for ${alt} on GitHub`}
            style={btnStyle}
            onMouseEnter={() => setHovered(true)}
            onFocus={() => setHovered(true)}
          >
            <span style={iconSpanStyle} aria-hidden="true" />
            <span>View code</span>
          </a>
          {isTouchLike && (
            <span style={{ color: "rgba(255,255,255,.75)", fontSize: 12 }}>
              Tap image to hide/show details
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });

    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: { trigger: card, start: "top bottom-=100" },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase pt-[40px] mt-0">
      <div className="w-full">
        <div className="showcaselayout">
          {/* FEATURED */}
          <div ref={rydeRef} className="first-project-wrapper">
            <HoverImageOverlay
              src="/images/project1.png"
              alt="Ryde App Interface"
              description="Real-time collaborative crossword game with seamless cross-device play."
              github="https://github.com/mohan-sys/mohans_crossword"
            />
            <div className="text-content">
              <h2>Multiplayer Crossword Web-app</h2>
              <p className="text-white-50 md:text-xl">
                Built using React.js, Node.js, Express.js, WebSockets, and deployed on Vercel with CI/CD.
              </p>
            </div>
          </div>

          {/* GRID */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <HoverImageOverlay
                src="/images/project2.png"
                alt="ETL pipeline on GCP"
                description="ETL orchestration with monitoring in Cloud Composer."
                github="https://github.com/mohan-sys/storypoints-data-pipeline"
                wrapperBg="#FFEFDB"
              />
              <h2>End-to-End Data Engineering Pipeline with Orchestration on GCP</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <HoverImageOverlay
                src="/images/project3.png"
                alt="Mental Health Prediction"
                description="NLP pipeline analyzing Reddit posts for mental-health signals."
                github="https://colab.research.google.com/drive/1ziYUugVrgV7XygbnD9OxHBJjPvG5a03Y?usp=sharing"
                wrapperBg="#FFE7EB"
              />
              <h2>Mental Health Prediction from Reddit Posts</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { counterItems } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(
    () => {
      // filter out any nulls just in case
      countersRef.current = countersRef.current.filter(Boolean);

      countersRef.current.forEach((counter, index) => {
        const numberEl = counter.querySelector(".counter-number");
        if (!numberEl) return;

        const item = counterItems[index];
        const state = { val: 0 };

        numberEl.textContent = `0 ${item.suffix}`;

        gsap.to(state, {
          val: item.value,
          duration: 2.5,
          ease: "power2.out",
          snap: { val: 1 },
          scrollTrigger: {
            trigger: counter,
            start: "top 80%",
            once: true,
            // markers: true, // uncomment to debug
          },
          onUpdate: () => {
            numberEl.textContent = `${Math.round(state.val)} ${item.suffix}`;
          },
        });
      });
    },
    { scope: counterRef }
  );

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) countersRef.current[index] = el;
            }}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-white-50 text-5xl font-bold mb-2">
              0 {item.suffix}
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;

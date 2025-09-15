import { words } from '../constants';
import Button from '/src/components/Button.jsx';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.hero-text h1',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'power2.inOut' }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w/full w-screen md:pl-20 pl-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into real projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I'm Mohan, a MSc in CS graduate and a passionate Full-Stack Developer.
              Let's collaborate to bring your vision to life!
            </p>

            <Button className="md:w-80 md:h-16 w-60 h-12" id="button" text="See my work" />
          </div>
        </header>

      
        <figure>
          <div className="hero-photo md:h-[80vh] h-[60vh] w-full flex items-center justify-center">
            <img
              src="/images/mohan.png"          
              alt="Mohan portrait"
              className="max-h-full object-cover rounded-2xl shadow-lg"
              style={{ aspectRatio: '1 / 1' }}
            />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;

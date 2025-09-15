import React from 'react';

const AboutMe = ({ sectionRef }) => {
  return (
    <section
      id="aboutme"
      ref={sectionRef}
      className="relative md:px-20 px-5 py-16 bg-black"
    >
      <div className="max-w-4xl lg:max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white">About Me</h2>

        <p className="about-text text-white/80 md:text-xl leading-relaxed mb-6">
          Hi, I’m Mohan Raj Loganathan, a curious developer and problem solver. I’m currently a 
          <span className="font-semibold"> Data Engineering Intern at StoryPointsAI</span>, where I work on 
          ETL pipelines, cloud solutions, and preparing ML-ready datasets. Along the way, I’ve also built 
          <span className="font-semibold"> full-stack applications</span> with Spring Boot, React, and Node.js 
          from designing scalable APIs to crafting responsive frontends that actually feel good to use.
        </p>

        <p className="about-text text-white/80 md:text-xl leading-relaxed">
          I’m eager to grow into <span className="font-semibold">software and data engineering roles</span>, 
          where I can bring together my love for backend systems, cloud platforms, and high-performance data pipelines. 
          Some of the tools I reach for most often include Spring Boot, Hibernate, JUnit5, React, Next.js, Docker, AWS, 
          GCP, Apache Spark and Postgres, but what excites me most is learning, experimenting, and pushing myself to 
          build better systems every day.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;

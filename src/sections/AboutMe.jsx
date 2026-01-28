import React from 'react';

const AboutMe = ({ sectionRef }) => {
  return (
    <section
      id="aboutme"
      ref={sectionRef}
      className="relative md:px-20 px-5 py-16 bg-black"
    >
      <div className="w-full max-w-none">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white">About Me</h2>

        <p className="about-text text-white/80 md:text-xl leading-relaxed mb-6">
          Hi, I’m Mohan Raj Loganathan, a graduate software engineer focused on cloud development and currently seeking{" "}
          <span className="font-semibold">entry level roles</span>. I build backend systems and{" "}
          <span className="font-semibold">REST APIs</span> that are reliable, secure, and easy to maintain. I have completed
          internships where I shipped features, debugged production issues, and improved performance in real world applications.
        </p>

        <p className="about-text text-white/80 md:text-xl leading-relaxed">
          I’m focused on <span className="font-semibold">cloud native application development</span> and scalable system design.
          I enjoy event driven architectures, working with managed services, and automating delivery with{" "}
          <span className="font-semibold">CI/CD</span>. I have built projects using serverless patterns and data pipelines across{" "}
          <span className="font-semibold">AWS and GCP</span>, and I’m currently preparing for the{" "}
          <span className="font-semibold">AWS Developer Associate</span>.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;

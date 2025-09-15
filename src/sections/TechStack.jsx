// src/sections/TechStack.jsx
import TitleHeader from "../components/TitleHeader";
import { SKILL_TABS as SKILL_SECTIONS, SKILL_ICONS } from "../constants";

// Reuse the same card style as Education
const Card = ({ children }) => (
  <div className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 md:p-8 shadow-lg transition-transform duration-200 hover:scale-[1.01]">
    {children}
  </div>
);

const TechStack = () => {
  return (
    <section id="skills" className="flex-center section-padding xl:px-0">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />

        {/* 4 boxes → 2×2 grid on md+ */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {SKILL_SECTIONS.map((section) => (
            <Card key={section.key}>
              {/* Header */}
              <div>
                <h2 className="text-2xl font-bold">{section.title}</h2>
              </div>

              {/* Skills grid inside each box */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                {section.items.map((name) => {
                  const src = SKILL_ICONS[name];
                  if (!src) return null;
                  return (
                    <div
                      key={`${section.key}-${name}`}
                      className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2 md:px-4 md:py-3 transition-colors duration-200 hover:bg-white/10"
                      title={name}
                    >
                      <img
                        src={src}
                        alt={name}
                        loading="lazy"
                        className="h-6 w-6 md:h-7 md:w-7 object-contain"
                      />
                      <span className="text-sm md:text-base text-white/90">
                        {name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

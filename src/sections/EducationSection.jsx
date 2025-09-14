import TitleHeader from "../components/TitleHeader";
import { eduCards } from "../constants";

const Card = ({ children }) => (
  <div className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 md:p-8 shadow-lg transition-transform duration-200 hover:scale-[1.01]">
    {children}
  </div>
);

const Education = () => {
  return (
    <section id="education" className="flex-center md:mt-40 mt-20 section-padding xl:px-0">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="Education" sub="🎓 Where I Studied" />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {eduCards.slice(0, 2).map((card, i) => (
            <Card key={`${card.university}-${card.degree}-${i}`}>
              {/* Header */}
              <div className="flex items-start gap-4">
                {card.logoPath ? (
                  <img
                    src={card.logoPath}
                    alt={`${card.university} logo`}
                    className="h-12 w-12 object-contain shrink-0"
                  />
                ) : null}
                <div>
                  <h2 className="text-2xl font-bold">{card.university}</h2>
                  <p className="text-white/70 mt-1">🗓️ {card.date}</p>
                </div>
              </div>

              {/* Degree + grade */}
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{card.degree}</h3>
                {card.grade ? (
                  <p className="mt-2">
                    <span className="px-3 py-1 rounded-md bg-white/10 text-white text-sm font-medium">
                      Grade: {card.grade}
                    </span>
                  </p>
                ) : null}
              </div>

              {/* Coursework */}
              {card.coursework?.length ? (
                <div className="mt-6">
                  <p className="text-[#839CB5] italic mb-3">Relevant Coursework</p>
                  <ul className="list-disc ms-5 space-y-2 text-white/80">
                    {card.coursework.map((course, idx) => (
                      <li key={idx} className="text-base leading-relaxed">
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

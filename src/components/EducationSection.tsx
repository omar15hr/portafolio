import { Certifications } from "./Certifications";
import { SchoolIcon } from "./Icons";

const EDUCATION = [
  {
    institution: "Duoc UC",
    degree: "Analista Programador Computacional",
    period: "2021 - 2024",
    description:
      "Analista programador computacional, especializado en el desarrollo Full Stack. Carrera cursada en el Instituto Profesional Duoc UC.",
    color: "indigo",
  },
];

export function EducationSection() {
  return (
    <section id="educacion" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mi Educación</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Formación académica y certificaciones que respaldan mis
            conocimientos técnicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION.map((edu, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div
                className={`h-2 ${
                  edu.color === "blue" ? "bg-blue-600" : "bg-indigo-600"
                }`}
              ></div>
              <div className="p-6">
                <div className="flex items-start">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      edu.color === "blue"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-indigo-100 text-indigo-600"
                    }`}
                  >
                    <div className="mx-4">
                      <SchoolIcon />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                    <p
                      className={`text-sm font-medium ${
                        edu.color === "blue"
                          ? "text-blue-600"
                          : "text-indigo-600"
                      } mb-2`}
                    >
                      {edu.institution}
                    </p>
                    <p className="text-gray-500 text-sm mb-3">{edu.period}</p>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Certifications />
      </div>
    </section>
  );
}

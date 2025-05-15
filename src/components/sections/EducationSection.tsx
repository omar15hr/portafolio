import { Certifications } from "./Certifications";
import { EducationCard } from "./EducationCard";

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
            <EducationCard {...edu} key={index} />
          ))}
        </div>

        <Certifications />
      </div>
    </section>
  );
}

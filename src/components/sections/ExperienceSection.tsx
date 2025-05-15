import { ExperiencieCard } from "../ExperienceCard";

const EXPERIENCE = [
  {
    id: 1,
    company: "Fortius Exp.",
    position: "Frontend Developer",
    period: "Diciembre 2024 - Febrero 2025",
    description:
      "Desarrollo de interfaz de usuario para Ecommerce de alimentos. Implementación de arquitecturas escalables y optimización de rendimiento.",
    achievements: [
      "Diseño completo de la plataforma principal.",
      "Implementación de sistema de componentes reutilizables",
      "Funciones del sitio como carritos de compras, filtrado de productos y pasarela de pago.",
    ],
  },
  {
    id: 2,
    company: "Dyatec",
    position: "Full Stack Developer",
    period: "Agosto 2024 - Noviembre 2024",
    description:
      "Desarrollo de interfaces de usuario, creación de base de datos, migración de servidores de sitios web y actualización de versiones.",
    achievements: [
      "Desarrollé un plugin para la descarga masiva de certificados en un archivo zip por nombre para más de 300 alumnos en Moodle.",
      "Desarrollé un plugin local que permite a una plataforma de cursos online filtrar por cursos y obtener la información de alumnos y su estado de aprobación en Moodle.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experiencia" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mi Experiencia
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trayectoria profesional y roles que he desempeñado en el mundo del
            desarrollo web.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

          <div className="space-y-12">
            {EXPERIENCE.map((job) => (
              <ExperiencieCard key={job.id} {...job} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

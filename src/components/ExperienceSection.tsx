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
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

          <div className="space-y-12">
            {[
              {
                company: "TechSolutions Inc.",
                position: "Senior Frontend Developer",
                period: "Enero 2023 - Presente",
                description:
                  "Desarrollo de interfaces de usuario para aplicaciones empresariales utilizando React y TypeScript. Implementación de arquitecturas escalables y optimización de rendimiento.",
                achievements: [
                  "Rediseño completo de la plataforma principal, mejorando la velocidad en un 40%",
                  "Implementación de sistema de componentes reutilizables",
                  "Liderazgo de equipo de 5 desarrolladores frontend",
                ],
                icon: "fa-laptop-code",
              },
              {
                company: "Innovate Digital",
                position: "Full Stack Developer",
                period: "Marzo 2020 - Diciembre 2022",
                description:
                  "Desarrollo de aplicaciones web completas utilizando MERN stack. Diseño e implementación de APIs RESTful y bases de datos.",
                achievements: [
                  "Desarrollo de sistema de e-commerce con más de 10,000 usuarios activos",
                  "Optimización de consultas a base de datos, reduciendo tiempos de respuesta en un 60%",
                  "Implementación de CI/CD con GitHub Actions",
                ],
                icon: "fa-code-branch",
              },
              {
                company: "WebCraft Studios",
                position: "Frontend Developer",
                period: "Junio 2018 - Febrero 2020",
                description:
                  "Desarrollo de interfaces de usuario para sitios web y aplicaciones utilizando HTML, CSS y JavaScript. Colaboración con diseñadores UX/UI.",
                achievements: [
                  "Desarrollo de más de 20 sitios web para clientes de diversos sectores",
                  "Implementación de metodología BEM para CSS, mejorando la mantenibilidad",
                  "Optimización de sitios para SEO y accesibilidad",
                ],
                icon: "fa-paint-brush",
              },
            ].map((job, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row items-center"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 z-10 shadow-lg"></div>

                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:pl-12 md:order-last"
                  }`}
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">{job.position}</h3>
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          index % 2 === 0
                            ? "bg-blue-100 text-blue-600"
                            : "bg-indigo-100 text-indigo-600"
                        } md:hidden`}
                      >
                        <i className={`fas ${job.icon}`}></i>
                      </div>
                    </div>
                    <div className="mb-2">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          index % 2 === 0
                            ? "bg-blue-100 text-blue-600"
                            : "bg-indigo-100 text-indigo-600"
                        }`}
                      >
                        {job.company}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm mb-4">{job.period}</p>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div
                  className={`hidden md:flex md:w-1/2 ${
                    index % 2 === 0
                      ? "md:pl-12 justify-start"
                      : "md:pr-12 justify-end"
                  }`}
                >
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      index % 2 === 0
                        ? "bg-blue-100 text-blue-600"
                        : "bg-indigo-100 text-indigo-600"
                    }`}
                  >
                    <i className={`fas ${job.icon} text-2xl`}></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

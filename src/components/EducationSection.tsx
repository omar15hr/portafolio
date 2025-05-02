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
          {[
            {
              institution: "Universidad Tecnológica Nacional",
              degree: "Ingeniería en Sistemas de Información",
              period: "2014 - 2019",
              description:
                "Formación completa en desarrollo de software, bases de datos, redes y sistemas operativos. Especialización en desarrollo web y aplicaciones móviles.",
              icon: "fa-university",
              color: "blue",
            },
            {
              institution: "Bootcamp Full Stack",
              degree: "Desarrollo Web Full Stack",
              period: "2020",
              description:
                "Programa intensivo de 6 meses enfocado en tecnologías modernas de desarrollo web. Proyecto final: plataforma de e-learning con más de 20 funcionalidades.",
              icon: "fa-laptop-code",
              color: "indigo",
            },
          ].map((edu, index) => (
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
                    <i className={`fas ${edu.icon} text-xl`}></i>
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

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Certificaciones
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "React Developer",
                issuer: "Meta",
                date: "Diciembre 2022",
                icon: "fab fa-react",
                color: "blue",
              },
              {
                name: "JavaScript Algorithms",
                issuer: "freeCodeCamp",
                date: "Agosto 2021",
                icon: "fab fa-js-square",
                color: "yellow",
              },
              {
                name: "AWS Cloud Practitioner",
                issuer: "Amazon Web Services",
                date: "Marzo 2023",
                icon: "fab fa-aws",
                color: "orange",
              },
              {
                name: "Python Developer",
                issuer: "Coursera",
                date: "Enero 2021",
                icon: "fab fa-python",
                color: "green",
              },
              {
                name: "UI/UX Fundamentals",
                issuer: "Google",
                date: "Julio 2022",
                icon: "fas fa-paint-brush",
                color: "red",
              },
              {
                name: "Node.js Developer",
                issuer: "Udemy",
                date: "Abril 2022",
                icon: "fab fa-node-js",
                color: "green",
              },
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg border border-gray-100 shadow hover:shadow-md transition-shadow duration-300 flex items-center"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                    cert.color === "blue"
                      ? "bg-blue-100 text-blue-600"
                      : cert.color === "yellow"
                      ? "bg-yellow-100 text-yellow-600"
                      : cert.color === "orange"
                      ? "bg-orange-100 text-orange-600"
                      : cert.color === "green"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  <i className={`${cert.icon} text-lg`}></i>
                </div>
                <div>
                  <h4 className="font-bold">{cert.name}</h4>
                  <p className="text-sm text-gray-600">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

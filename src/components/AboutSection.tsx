export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-200 rounded-xl transform rotate-3"></div>
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20Latino%20male%20software%20developer%20in%20his%2030s%2C%20casual%20professional%20attire%2C%20friendly%20smile%2C%20modern%20office%20background%2C%20soft%20lighting%2C%20high%20quality%20professional%20headshot%2C%20natural%20pose&width=600&height=700&seq=profile1&orientation=portrait"
                alt="Carlos Mendoza"
                className="relative z-10 rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Mí</h2>
            <p className="text-gray-600 mb-6">
              Soy un desarrollador web full stack con más de 5 años de
              experiencia creando aplicaciones web modernas y escalables. Mi
              pasión es construir productos digitales que sean tanto funcionales
              como estéticamente atractivos.
            </p>
            <p className="text-gray-600 mb-6">
              Mi enfoque se centra en la experiencia del usuario, la
              accesibilidad y el rendimiento. Me encanta trabajar en equipo y
              enfrentar nuevos desafíos que me permitan seguir creciendo
              profesionalmente.
            </p>

            <h3 className="text-xl font-bold mb-4">Habilidades Personales</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { skill: "Trabajo en equipo", icon: "fa-users" },
                { skill: "Resolución de problemas", icon: "fa-puzzle-piece" },
                { skill: "Comunicación efectiva", icon: "fa-comments" },
                { skill: "Aprendizaje continuo", icon: "fa-book" },
                { skill: "Gestión del tiempo", icon: "fa-clock" },
                { skill: "Adaptabilidad", icon: "fa-sync-alt" },
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <i className={`fas ${item.icon} text-blue-600 mr-2`}></i>
                  <span>{item.skill}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer whitespace-nowrap !rounded-button">
                <i className="fas fa-envelope mr-2"></i>Contactarme
              </button>
              <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer whitespace-nowrap !rounded-button">
                <i className="fas fa-download mr-2"></i>Descargar CV
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Contacto</h3>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                  placeholder="tu@email.com"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                  placeholder="Asunto del mensaje"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                  placeholder="Tu mensaje aquí..."
                ></textarea>
              </div>
              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer whitespace-nowrap !rounded-button"
                >
                  Enviar Mensaje <i className="fas fa-paper-plane ml-2"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useEffect } from "react";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 50);

      // Determine active section based on scroll position
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
      closeMenu();
    }
  };

  // Typing animation for the professional title
  const [displayText, setDisplayText] = useState("");
  const fullText = "Desarrollador Web Full Stack";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Navbar */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          hasScrolled
            ? "bg-white/80 shadow-md backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="#inicio"
            className="text-2xl font-bold text-gray-800 cursor-pointer"
            onClick={() => scrollToSection("inicio")}
          >
            Carlos Mendoza
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              "inicio",
              "stacks",
              "proyectos",
              "experiencia",
              "educacion",
              "sobre-mi",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-base font-medium transition-colors duration-300 cursor-pointer whitespace-nowrap !rounded-button ${
                  activeSection === item
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-500"
                }`}
              >
                {item === "inicio"
                  ? "Inicio"
                  : item === "stacks"
                    ? "Tecnologías"
                    : item === "proyectos"
                      ? "Proyectos"
                      : item === "experiencia"
                        ? "Experiencia"
                        : item === "educacion"
                          ? "Educación"
                          : "Sobre Mí"}
              </button>
            ))}
            <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer whitespace-nowrap !rounded-button">
              Contacto
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none cursor-pointer whitespace-nowrap !rounded-button"
            onClick={toggleMenu}
          >
            <i
              className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}
            ></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden bg-white absolute w-full left-0 shadow-lg transition-transform duration-300 transform ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {[
              "inicio",
              "stacks",
              "proyectos",
              "experiencia",
              "educacion",
              "sobre-mi",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-base py-2 font-medium transition-colors duration-300 cursor-pointer whitespace-nowrap !rounded-button ${
                  activeSection === item ? "text-blue-600" : "text-gray-600"
                }`}
              >
                {item === "inicio"
                  ? "Inicio"
                  : item === "stacks"
                    ? "Tecnologías"
                    : item === "proyectos"
                      ? "Proyectos"
                      : item === "experiencia"
                        ? "Experiencia"
                        : item === "educacion"
                          ? "Educación"
                          : "Sobre Mí"}
              </button>
            ))}
            <button className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer whitespace-nowrap !rounded-button">
              Contacto
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="min-h-screen flex items-center relative overflow-hidden pt-20"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
          <img
            src="https://readdy.ai/api/search-image?query=Modern%20minimalist%20workspace%20with%20laptop%2C%20clean%20desk%20setup%2C%20soft%20natural%20lighting%2C%20elegant%20professional%20environment%2C%20high-end%20tech%20workspace%2C%20subtle%20blue%20accents%2C%20creative%20workspace%2C%20high%20resolution%20photography%2C%20soft%20focus%20background&width=1440&height=800&seq=hero1&orientation=landscape"
            alt="Hero background"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center relative z-20">
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <h2 className="text-xl md:text-2xl font-medium text-blue-600 mb-3">
              ¡Hola! Soy
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Carlos Mendoza
            </h1>
            <div className="h-8">
              <h3 className="text-xl md:text-2xl font-medium text-gray-700">
                {displayText}
                <span className="animate-pulse">|</span>
              </h3>
            </div>
            <p className="text-gray-600 my-6 max-w-lg mx-auto md:mx-0">
              Creando experiencias digitales atractivas y funcionales con un
              enfoque en usabilidad, rendimiento y diseño moderno.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer whitespace-nowrap !rounded-button">
                <i className="fas fa-download mr-2"></i>Descargar CV
              </button>
              <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer whitespace-nowrap !rounded-button">
                Ver Proyectos
              </button>
            </div>
            <div className="flex space-x-4 mt-8 justify-center md:justify-start">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
              >
                <i className="fas fa-envelope text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stacks Section */}
      <section id="stacks" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mis Tecnologías
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Herramientas y lenguajes que domino para crear soluciones web
              modernas y eficientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend Stack */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="inline-block p-4 bg-blue-50 rounded-full mb-4">
                  <i className="fas fa-code text-blue-600 text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold">Frontend</h3>
              </div>

              <div className="space-y-4">
                {[
                  { name: "HTML5", level: 90 },
                  { name: "CSS3 / SASS", level: 85 },
                  { name: "JavaScript", level: 85 },
                  { name: "React", level: 80 },
                  { name: "TypeScript", level: 75 },
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Stack */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="inline-block p-4 bg-indigo-50 rounded-full mb-4">
                  <i className="fas fa-server text-indigo-600 text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold">Backend</h3>
              </div>

              <div className="space-y-4">
                {[
                  { name: "Node.js", level: 80 },
                  { name: "Express", level: 75 },
                  { name: "Python", level: 70 },
                  { name: "Django", level: 65 },
                  { name: "SQL", level: 75 },
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Others */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="inline-block p-4 bg-purple-50 rounded-full mb-4">
                  <i className="fas fa-tools text-purple-600 text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold">Herramientas & Otros</h3>
              </div>

              <div className="space-y-4">
                {[
                  { name: "Git", level: 85 },
                  { name: "Docker", level: 70 },
                  { name: "AWS", level: 65 },
                  { name: "Figma", level: 75 },
                  { name: "Testing", level: 70 },
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-purple-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mis Proyectos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Una selección de mis trabajos más recientes y destacados en
              desarrollo web.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-l-lg cursor-pointer whitespace-nowrap !rounded-button">
                Todos
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 cursor-pointer whitespace-nowrap !rounded-button">
                Frontend
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 cursor-pointer whitespace-nowrap !rounded-button">
                Backend
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-r-lg cursor-pointer whitespace-nowrap !rounded-button">
                Full Stack
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Moderno",
                description:
                  "Tienda online completa con pasarela de pagos y gestión de inventario",
                image:
                  "https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%20with%20clean%20design%2C%20product%20display%2C%20shopping%20cart%2C%20minimalist%20UI%2C%20professional%20web%20application%20screenshot%20on%20laptop%20screen%2C%20high%20resolution%2C%20soft%20shadows&width=600&height=400&seq=proj1&orientation=landscape",
                tags: ["React", "Node.js", "MongoDB"],
                category: "Full Stack",
              },
              {
                title: "Dashboard Analítico",
                description:
                  "Panel de control para visualización de datos empresariales",
                image:
                  "https://readdy.ai/api/search-image?query=Clean%20analytics%20dashboard%20UI%20with%20charts%2C%20graphs%2C%20data%20visualization%2C%20business%20metrics%2C%20modern%20interface%20design%2C%20professional%20web%20application%20screenshot%20on%20monitor%2C%20high%20resolution%2C%20soft%20blue%20accent%20colors&width=600&height=400&seq=proj2&orientation=landscape",
                tags: ["Vue.js", "Express", "D3.js"],
                category: "Frontend",
              },
              {
                title: "Aplicación de Gestión",
                description:
                  "Sistema de gestión de proyectos y tareas para equipos",
                image:
                  "https://readdy.ai/api/search-image?query=Project%20management%20application%20interface%20with%20task%20boards%2C%20team%20collaboration%20features%2C%20modern%20UI%20design%2C%20professional%20web%20application%20screenshot%20on%20laptop%20screen%2C%20high%20resolution%2C%20soft%20purple%20accent%20colors&width=600&height=400&seq=proj3&orientation=landscape",
                tags: ["React", "TypeScript", "Firebase"],
                category: "Full Stack",
              },
              {
                title: "API de Servicios",
                description:
                  "Servicios RESTful para integración de sistemas empresariales",
                image:
                  "https://readdy.ai/api/search-image?query=API%20documentation%20interface%2C%20REST%20API%20testing%20console%2C%20code%20snippets%2C%20modern%20developer%20portal%2C%20professional%20web%20application%20screenshot%2C%20high%20resolution%2C%20soft%20gray%20background%20with%20blue%20accents&width=600&height=400&seq=proj4&orientation=landscape",
                tags: ["Node.js", "Express", "MongoDB"],
                category: "Backend",
              },
              {
                title: "Portal Educativo",
                description:
                  "Plataforma de cursos online con sistema de evaluación",
                image:
                  "https://readdy.ai/api/search-image?query=Online%20learning%20platform%20interface%2C%20educational%20portal%20with%20courses%2C%20video%20player%2C%20progress%20tracking%2C%20modern%20UI%20design%2C%20professional%20web%20application%20screenshot%20on%20laptop%2C%20high%20resolution%2C%20soft%20green%20accent%20colors&width=600&height=400&seq=proj5&orientation=landscape",
                tags: ["React", "Django", "PostgreSQL"],
                category: "Full Stack",
              },
              {
                title: "Aplicación Móvil",
                description:
                  "App híbrida para gestión personal y productividad",
                image:
                  "https://readdy.ai/api/search-image?query=Mobile%20app%20interface%20for%20productivity%2C%20task%20management%20application%20on%20smartphone%20screen%2C%20clean%20modern%20design%2C%20professional%20mobile%20application%20screenshot%2C%20high%20resolution%2C%20soft%20blue%20accent%20colors&width=600&height=400&seq=proj6&orientation=landscape",
                tags: ["React Native", "Redux", "Firebase"],
                category: "Frontend",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <button className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer whitespace-nowrap !rounded-button">
                      <i className="fas fa-eye mr-1"></i> Demo
                    </button>
                    <button className="text-gray-700 hover:text-gray-900 font-medium cursor-pointer whitespace-nowrap !rounded-button">
                      <i className="fab fa-github mr-1"></i> Código
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer whitespace-nowrap !rounded-button">
              Ver Más Proyectos <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
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
                    className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:order-last"}`}
                  >
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold">{job.position}</h3>
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${index % 2 === 0 ? "bg-blue-100 text-blue-600" : "bg-indigo-100 text-indigo-600"} md:hidden`}
                        >
                          <i className={`fas ${job.icon}`}></i>
                        </div>
                      </div>
                      <div className="mb-2">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${index % 2 === 0 ? "bg-blue-100 text-blue-600" : "bg-indigo-100 text-indigo-600"}`}
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
                    className={`hidden md:flex md:w-1/2 ${index % 2 === 0 ? "md:pl-12 justify-start" : "md:pr-12 justify-end"}`}
                  >
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center ${index % 2 === 0 ? "bg-blue-100 text-blue-600" : "bg-indigo-100 text-indigo-600"}`}
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

      {/* Education Section */}
      <section id="educacion" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mi Educación
            </h2>
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
                  className={`h-2 ${edu.color === "blue" ? "bg-blue-600" : "bg-indigo-600"}`}
                ></div>
                <div className="p-6">
                  <div className="flex items-start">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${edu.color === "blue" ? "bg-blue-100 text-blue-600" : "bg-indigo-100 text-indigo-600"}`}
                    >
                      <i className={`fas ${edu.icon} text-xl`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                      <p
                        className={`text-sm font-medium ${edu.color === "blue" ? "text-blue-600" : "text-indigo-600"} mb-2`}
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

      {/* About Section */}
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
                pasión es construir productos digitales que sean tanto
                funcionales como estéticamente atractivos.
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">Carlos Mendoza</h2>
              <p className="text-gray-400 mt-2">Desarrollador Web Full Stack</p>
            </div>

            <div className="flex space-x-6 mb-6 md:mb-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <i className="fas fa-envelope text-xl"></i>
              </a>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400">
                © {new Date().getFullYear()} - Todos los derechos reservados
              </p>
              <div className="flex justify-center md:justify-end mt-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm mr-4 cursor-pointer"
                >
                  Política de Privacidad
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm cursor-pointer"
                >
                  Términos de Servicio
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

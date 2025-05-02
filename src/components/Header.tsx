import { useEffect, useState } from "react";

export function Header() {
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
  return (
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
  );
}

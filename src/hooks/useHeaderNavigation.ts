import { useEffect, useState } from "react";

export function useHeaderNavigation() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 50);

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

  const navigationItems = [
    { id: "inicio", label: "Inicio" },
    { id: "stacks", label: "Tecnologías" },
    { id: "proyectos", label: "Proyectos" },
    { id: "experiencia", label: "Experiencia" },
    { id: "educacion", label: "Educación" },
    { id: "sobre-mi", label: "Sobre Mí" },
  ];

  return {
    activeSection,
    hasScrolled,
    isMenuOpen,
    navigationItems,
    scrollToSection,
    toggleMenu,
  };
}

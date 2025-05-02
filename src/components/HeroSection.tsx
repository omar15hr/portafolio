import { useEffect, useState } from "react";
import { GithubIcon, LinkedinIcon, LinkIcon } from "./Icons";
import desktopImage from "../assets/images/desktop.webp";

export function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Desarrollador Full Stack";

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
    <section
      id="inicio"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 z-0 mask-b-from-90% mask-b-to-95%">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
        <img
          src={desktopImage}
          alt="Hero background"
          className="size-full object-cover object-top"
        />
      </div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center relative z-20">
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <h2 className="text-xl md:text-2xl font-medium text-blue-600 mb-3">
            ¡Hola! Soy
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Omar Hernández
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
            <a
              href="#"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer whitespace-nowrap"
            >
              Ver CV
              <LinkIcon />
            </a>
            <a
              href="#proyectos"
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              Ver Proyectos
            </a>
          </div>
          <div className="flex space-x-4 mt-8 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/omar-alejandro-hernandez-diaz/"
              target="_blank"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://github.com/omar15hr"
              target="_blank"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
            >
              <GithubIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

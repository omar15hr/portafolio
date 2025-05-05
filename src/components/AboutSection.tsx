import { toast } from "sonner";
import { LinkIcon, MailIcon } from "./Icons";
import { useState } from "react";

export function AboutSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("omarhrn@gmail.com");
    setCopied(true);
    toast.success("Correo omarhrn@gmail.com copiado!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="sobre-mi" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-200 rounded-xl transform rotate-3"></div>
            </div>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Mí</h2>
            <p className="text-gray-600 mb-6">
              Soy un desarrollador web full stack con 1 año de experiencia
              creando aplicaciones web modernas y escalables. Mi pasión es
              construir productos digitales que sean tanto funcionales como
              atractivos.
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
              <button
                onClick={handleCopy}
                className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer whitespace-nowrap !rounded-button"
              >
                {copied ? (
                  <>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    ¡Copiado!
                  </>
                ) : (
                  <>
                    <MailIcon />
                    Contactarme
                  </>
                )}
              </button>
              <a
                href="https://drive.google.com/file/d/1fIsCUGJsVw9Yn575a6g2dg6n8rBCGBvi/view?usp=sharing"
                target="_blank"
                className="flex gap-3 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer whitespace-nowrap !rounded-button"
              >
                <LinkIcon />
                CV
              </a>
            </div>
          </div>
        </div>

        {/* <ContactForm /> */}
      </div>
    </section>
  );
}

import { GithubIcon, LinkedinIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Omar Hernández</h2>
            <p className="text-gray-400 mt-2">Desarrollador Web Full Stack</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <h3 className="font-bold text-gray-400">Social Links</h3>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
            >
              <LinkedinIcon />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
            >
              <GithubIcon />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400">
              © {new Date().getFullYear()} - Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Footer() {
  return (
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
  );
}

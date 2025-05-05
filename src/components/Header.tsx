import { useHeaderNavigation } from "../hooks/useHeaderNavigation";
import { CloseIcon, ToggleIcon } from "./Icons";

export function Header() {
  const {
    hasScrolled,
    scrollToSection,
    navigationItems,
    isMenuOpen,
    activeSection,
    toggleMenu,
  } = useHeaderNavigation();

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        hasScrolled
          ? "bg-white/90 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <a
          href="#inicio"
          className="text-xl sm:text-2xl font-bold text-gray-800 transition-colors hover:text-blue-600"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("inicio");
          }}
        >
          Omar Hernández
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-6">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-2 py-1 text-sm lg:text-base font-medium transition-all duration-300 hover:text-blue-500 rounded-md ${
                activeSection === item.id
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <CloseIcon /> : <ToggleIcon />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute w-full left-0 top-full transition-all duration-300 transform origin-top ${
          isMenuOpen
            ? "opacity-100 scale-y-100 shadow-lg"
            : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <div className="bg-white py-2 px-4 border-t border-gray-100">
          <div className="flex flex-col space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  activeSection === item.id
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="mt-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center font-medium">
              Contacto
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

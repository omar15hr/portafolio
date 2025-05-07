import { useHeaderNavigation } from "../hooks/useHeaderNavigation";

export function Header() {
  const { hasScrolled, scrollToSection, navigationItems, activeSection } =
    useHeaderNavigation();

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        hasScrolled
          ? "bg-white/90 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-center items-center">
        <nav className="flex flex-wrap text-center gap-5">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-2 py-1 text-sm lg:text-base font-medium transition-all duration-300 hover:text-blue-500 rounded-md cursor-pointer ${
                activeSection === item.id
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

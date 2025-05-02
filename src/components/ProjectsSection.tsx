import { ProjectCard } from "./ProjectCard";

export const projectFilters = ["Todos", "Frontend", "Backend", "Full Stack"];

export const projectsData = [
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
    description: "Panel de control para visualización de datos empresariales",
    image:
      "https://readdy.ai/api/search-image?query=Clean%20analytics%20dashboard%20UI%20with%20charts%2C%20graphs%2C%20data%20visualization%2C%20business%20metrics%2C%20modern%20interface%20design%2C%20professional%20web%20application%20screenshot%20on%20monitor%2C%20high%20resolution%2C%20soft%20blue%20accent%20colors&width=600&height=400&seq=proj2&orientation=landscape",
    tags: ["Vue.js", "Express", "D3.js"],
    category: "Frontend",
  },
  {
    title: "Aplicación de Gestión",
    description: "Sistema de gestión de proyectos y tareas para equipos",
    image:
      "https://readdy.ai/api/search-image?query=Project%20management%20application%20interface%20with%20task%20boards%2C%20team%20collaboration%20features%2C%20modern%20UI%20design%2C%20professional%20web%20application%20screenshot%20on%20laptop%20screen%2C%20high%20resolution%2C%20soft%20purple%20accent%20colors&width=600&height=400&seq=proj3&orientation=landscape",
    tags: ["React", "TypeScript", "Firebase"],
    category: "Full Stack",
  },
  {
    title: "API de Servicios",
    description: "Servicios RESTful para integración de sistemas empresariales",
    image:
      "https://readdy.ai/api/search-image?query=API%20documentation%20interface%2C%20REST%20API%20testing%20console%2C%20code%20snippets%2C%20modern%20developer%20portal%2C%20professional%20web%20application%20screenshot%2C%20high%20resolution%2C%20soft%20gray%20background%20with%20blue%20accents&width=600&height=400&seq=proj4&orientation=landscape",
    tags: ["Node.js", "Express", "MongoDB"],
    category: "Backend",
  },
  {
    title: "Portal Educativo",
    description: "Plataforma de cursos online con sistema de evaluación",
    image:
      "https://readdy.ai/api/search-image?query=Online%20learning%20platform%20interface%2C%20educational%20portal%20with%20courses%2C%20video%20player%2C%20progress%20tracking%2C%20modern%20UI%20design%2C%20professional%20web%20application%20screenshot%20on%20laptop%2C%20high%20resolution%2C%20soft%20green%20accent%20colors&width=600&height=400&seq=proj5&orientation=landscape",
    tags: ["React", "Django", "PostgreSQL"],
    category: "Full Stack",
  },
  {
    title: "Aplicación Móvil",
    description: "App híbrida para gestión personal y productividad",
    image:
      "https://readdy.ai/api/search-image?query=Mobile%20app%20interface%20for%20productivity%2C%20task%20management%20application%20on%20smartphone%20screen%2C%20clean%20modern%20design%2C%20professional%20mobile%20application%20screenshot%2C%20high%20resolution%2C%20soft%20blue%20accent%20colors&width=600&height=400&seq=proj6&orientation=landscape",
    tags: ["React Native", "Redux", "Firebase"],
    category: "Frontend",
  },
];

export function ProjectsSection() {
  return (
    <section id="proyectos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mis Proyectos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes y destacados en
            desarrollo web.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            {projectFilters.map((filter, index) => (
              <button
                key={filter}
                className={`px-4 py-2 text-sm font-medium border cursor-pointer whitespace-nowrap !rounded-button ${
                  index === 0
                    ? "text-white bg-blue-600 rounded-l-lg"
                    : index === projectFilters.length - 1
                    ? "text-gray-700 bg-white border-gray-200 rounded-r-lg"
                    : "text-gray-700 bg-white border-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

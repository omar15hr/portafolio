import { projectFilters, projectsData } from "../../utils/project-data";
import { ProjectCard } from "../ProjectCard";

export function ProjectsSection() {
  return (
    <section id="proyectos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
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

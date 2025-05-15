import { stackData } from "../../utils/stack-data";
import { StackCategory } from "../StackCategory";

export function StacksSection() {
  return (
    <section id="stacks" className="py-10 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mis Tecnologías
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Herramientas y lenguajes que domino para crear soluciones web
            modernas y eficientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stackData.map((category) => (
            <StackCategory
              key={category.title}
              title={category.title}
              Icon={category.Icon}
              bgColor={category.bgColor}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

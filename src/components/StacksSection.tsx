export function StacksSection() {
  return (
    <section id="stacks" className="py-20 bg-gray-50">
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
          {/* Frontend Stack */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-6">
              <div className="inline-block p-4 bg-blue-50 rounded-full mb-4">
                <i className="fas fa-code text-blue-600 text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold">Frontend</h3>
            </div>

            <div className="space-y-4">
              {[
                { name: "HTML5", level: 90 },
                { name: "CSS3 / SASS", level: 85 },
                { name: "JavaScript", level: 85 },
                { name: "React", level: 80 },
                { name: "TypeScript", level: 75 },
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Stack */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-6">
              <div className="inline-block p-4 bg-indigo-50 rounded-full mb-4">
                <i className="fas fa-server text-indigo-600 text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold">Backend</h3>
            </div>

            <div className="space-y-4">
              {[
                { name: "Node.js", level: 80 },
                { name: "Express", level: 75 },
                { name: "Python", level: 70 },
                { name: "Django", level: 65 },
                { name: "SQL", level: 75 },
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Others */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-6">
              <div className="inline-block p-4 bg-purple-50 rounded-full mb-4">
                <i className="fas fa-tools text-purple-600 text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold">Herramientas & Otros</h3>
            </div>

            <div className="space-y-4">
              {[
                { name: "Git", level: 85 },
                { name: "Docker", level: 70 },
                { name: "AWS", level: 65 },
                { name: "Figma", level: 75 },
                { name: "Testing", level: 70 },
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-purple-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

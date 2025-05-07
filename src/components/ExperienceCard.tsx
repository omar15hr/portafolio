import { motion } from "motion/react";
import { ComputerIcon } from "./Icons";

interface Props {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
}

export function ExperiencieCard({
  id,
  company,
  position,
  period,
  description,
  achievements,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative flex flex-col md:flex-row items-center"
    >
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 z-10 shadow-lg"></div>

      <div
        className={`md:w-1/2 ${
          id % 2 === 0 ? "md:pr-12 md:text-left" : "md:pl-12 md:order-last"
        }`}
      >
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">{position}</h3>
          </div>
          <div className="mb-2">
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                id % 2 === 0
                  ? "bg-blue-100 text-blue-600"
                  : "bg-indigo-100 text-indigo-600"
              }`}
            >
              {company}
            </span>
          </div>
          <p className="text-gray-500 text-sm mb-4">{period}</p>
          <p className="text-gray-600 text-md mb-4">{description}</p>
          
          <div className="mt-6">
            <h4 className="text-md font-semibold text-gray-700 mb-3 flex items-center">
              <span className="mr-2">✨</span>
              <span>Logros destacados</span>
            </h4>
            <ul className="space-y-3">
              {achievements.map((achievement, i) => (
                <li 
                  key={i} 
                  className={`group flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:translate-x-1 ${
                    id % 2 === 0
                      ? "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700"
                      : "bg-gradient-to-r from-indigo-50 to-indigo-100 text-indigo-700"
                  }`}
                >
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                    id % 2 === 0 ? "bg-blue-200" : "bg-indigo-200"
                  }`}>
                    <span className="text-sm font-bold">{i + 1}</span>
                  </div>
                  <span className="text-sm font-medium">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        className={`hidden md:flex md:w-1/2 ${
          id % 2 === 0 ? "md:pl-12 justify-start" : "md:pr-12 justify-end"
        }`}
      >
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center ${
            id % 2 === 0
              ? "bg-blue-100 text-blue-600"
              : "bg-indigo-100 text-indigo-600"
          }`}
        >
          <ComputerIcon />
        </div>
      </div>
    </motion.div>
  );
}

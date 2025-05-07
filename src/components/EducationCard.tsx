import { motion } from "motion/react";
import { SchoolIcon } from "./Icons";

interface Props {
  color: string;
  institution: string;
  description: string;
  period: string;
  degree: string;
}

export function EducationCard({
  color,
  institution,
  description,
  period,
  degree,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div
        className={`h-2 ${color === "blue" ? "bg-blue-600" : "bg-indigo-600"}`}
      ></div>
      <div className="p-6">
        <div className="flex items-start">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
              color === "blue"
                ? "bg-blue-100 text-blue-600"
                : "bg-indigo-100 text-indigo-600"
            }`}
          >
            <div className="mx-4">
              <SchoolIcon />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-1">{degree}</h3>
            <p
              className={`text-sm font-medium ${
                color === "blue" ? "text-blue-600" : "text-indigo-600"
              } mb-2`}
            >
              {institution}
            </p>
            <p className="text-gray-500 text-sm mb-3">{period}</p>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

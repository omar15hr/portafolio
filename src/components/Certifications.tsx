import { motion } from "motion/react";
import {
  AngularIcon,
  JavaScriptIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
} from "./Icons";

const CERTIFICATIONS = [
  {
    name: "React De cero a Experto",
    issuer: "Udemy",
    date: "Diciembre 2022",
    icon: <ReactIcon />,
    color: "blue",
  },
  {
    name: "JavaScript Moderno",
    issuer: "Udemy",
    date: "Enero 2023",
    icon: <JavaScriptIcon />,
    color: "yellow",
  },
  {
    name: "React PRO",
    issuer: "Udemy",
    date: "Marzo 2023",
    icon: <ReactIcon />,
    color: "blue",
  },
  {
    name: "Next Js",
    issuer: "Udemy",
    date: "Abril 2023",
    icon: <NextjsIcon />,
    color: "green",
  },
  {
    name: "Node Js",
    issuer: "Udemy",
    date: "Mayo 2023",
    icon: <NodejsIcon />,
    color: "green",
  },
  {
    name: "Angular De cero a Experto",
    issuer: "Udemy",
    date: "Agosto 2023",
    icon: <AngularIcon />,
    color: "red",
  },
];

export function Certifications() {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6 text-center">Certificaciones</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            key={index}
            className="bg-white p-4 rounded-lg border border-gray-100 shadow hover:shadow-md transition-shadow duration-300 flex items-center"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                cert.color === "blue"
                  ? "bg-blue-100 text-blue-600"
                  : cert.color === "yellow"
                  ? "bg-yellow-100 text-yellow-600"
                  : cert.color === "orange"
                  ? "bg-orange-100 text-orange-600"
                  : cert.color === "green"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {cert.icon}
            </div>
            <div>
              <h4 className="font-bold">{cert.name}</h4>
              <p className="text-sm text-gray-600">
                {cert.issuer} • {cert.date}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

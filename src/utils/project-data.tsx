import nextdo from "../assets/projects/nextdo.webp";
import muscari from "../assets/projects/muscari.webp";

export const projectFilters = ["Todos", "Frontend", "Backend", "Full Stack"];

export const projectsData = [
  {
    title: "Nextdo",
    description:
      "Aplicación de gestión de tareas. Incluye drag and drop, prioridad de tareas y varias categorías para identificar las tareas.",
    image: nextdo,
    tags: ["React", "Vite", "Zustand", "TypeScript", "Dnd Kit", "Tailwind CSS"],
    category: "Frontend",
    code: "https://github.com/omar15hr/nextdo",
    link: "https://nextdo-omarher.vercel.app/",
  },
  {
    title: "Muscari",
    description:
      "Plataforma Ecommerce para la venta de productos de moda. Carrito de compras, filtrado de productos y pasarela de pago.",
    image: muscari,
    tags: ["React", "Next Js", "Zustand", "TypeScript", "Tailwind CSS", "PostgreSQL", "Docker"],
    category: "Full Stack",
    code: "https://github.com/omar15hr/Muscari",
    link: "https://muscari.vercel.app/",
  },
];

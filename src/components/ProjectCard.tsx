import { ActionButton } from "./ActionButton";
import { CodeIcon, LinkIcon } from "./Icons";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  category,
}: Project) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4 py-2 items-center">
          <ActionButton icon={<LinkIcon size={24} />} label="Demo" />
          <ActionButton icon={<CodeIcon size={24} />} label="Código" />
        </div>
      </div>
    </div>
  );
}

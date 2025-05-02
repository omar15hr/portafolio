import { JSX } from "react";

type Skill = {
  name: string;
  icon: JSX.Element;
};

interface StackCategoryProps {
  title: string;
  Icon: JSX.Element;
  bgColor: string;
  skills: Skill[];
}

export function StackCategory({
  title,
  Icon,
  bgColor,
  skills,
}: StackCategoryProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="text-center mb-6">
        <div className={`inline-block p-4 ${bgColor} rounded-full mb-4`}>
          {Icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-5 items-center justify-center">
        {skills.map(({ name, icon }) => (
          <div key={name} className="flex flex-col items-center mb-1">
            <span className="text-sm text-gray-500">{icon}</span>
            <span className="font-medium">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

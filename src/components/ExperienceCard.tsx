import { AsteriskIcon, ComputerIcon } from "./Icons";

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
    <div className="relative flex flex-col md:flex-row items-center">
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
          <ul className="space-y-2 text-sm text-gray-600">
            {achievements.map((achievement, i) => (
              <li key={i} className="flex items-start gap-3">
                <AsteriskIcon />
                <span className="text-xs">{achievement}</span>
              </li>
            ))}
          </ul>
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
    </div>
  );
}

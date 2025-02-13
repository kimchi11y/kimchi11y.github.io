import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact, FaVuejs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "PHP", icon: <FaPhp className="text-purple-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-900" /> },
  { name: "Vue", icon: <FaVuejs className="text-green-500" /> },
];

const Box3 = () => {
  return (
    <div className="glass-box col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200 shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Tech Stack</h2>
      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-3 p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all">
            <span className="text-2xl">{skill.icon}</span>
            <span className="text-lg font-medium text-gray-700">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Box3;

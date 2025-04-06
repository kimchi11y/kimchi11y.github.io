import { FaHtml5 } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";

export default function Skill() {
    const skills = [
        {id : 1, name: "HTML", icon: < FaHtml5 />},
        {id : 2, name: "Laravel", icon: <FaLaravel />},
    ]

    return (
        <div className="container mx-auto px-5 max-w-4xl text-black pt-9">
            <h2 className="text-2xl font-semibold mb-4 md:text-2xl ">Skills</h2>
            <div className="flex flex-wrap  gap-3">
                {skills.map(skill => (
                    <div
                        key={skill.id}
                        className=" px-4 py-2 text-sm font-semibold text-gray-700 flex items-center gap-2 shadow-md hover:bg-gray-300 transition duration-300"
                    >
                        {skill.name} {skill.icon}
                    </div>
                ))}
            </div>
        </div>
    );
}

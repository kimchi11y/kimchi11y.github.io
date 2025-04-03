export default function Skill() {
    const skills = ["HTML", "CSS", "JavaScript", "React", "PHP", "Node.js", "MySQL", "MongoDB"];

    return (
        <div className="container mx-auto px-5 max-w-4xl text-black pt-9">
            <h2 className="text-2xl font-semibold mb-4 md:text-2xl ">Skills</h2>
            <div className="flex flex-wrap  gap-3">
                {skills.map(skill => (
                    <div
                        key={skill}
                        className="px-2 py-1 bg-blue-800 text-gray-300 rounded-lg transition hover:bg-blue-500 hover:text-white"
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    );
}

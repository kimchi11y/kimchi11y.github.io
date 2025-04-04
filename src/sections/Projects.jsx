import deta from "../assets/deta.png";

export default function Projects() {
    const projects = [
        {
            title: "DeTA website",
            image: deta, // Replace with actual image paths
            description: "DeTA, a community for developers to share interests in tech and software in IIUM.",
            link: "https://detacommunity.com/",
            language: "Next.js, Tailwind CSS"
        }

    ];

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-5 max-w-4xl">
                <h2 className="text-black font-semibold text-2xl md:text-3xl mb-8">
                    Projects
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
                            <div className="p-5">
                                <h3 className="text-xl font-semibold text-black">{project.title}</h3>
                                <h6 className="text-gray-600 text-base">{project.language}</h6>
                                <p className="text-gray-700 mt-2">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-3 text-blue-600 hover:underline"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

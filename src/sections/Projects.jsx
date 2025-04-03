export default function Projects() {
    const projects = [
        {
            title: "Personal Portfolio",
            image: "/images/portfolio.png", // Replace with actual image paths
            description: "A portfolio website showcasing my projects, skills, and experience.",
            link: "https://yourportfolio.com"
        },
        {
            title: "Personal Blog",
            image: "/images/blog.png",
            description: "A blog where I write about development, tech, and personal experiences.",
            link: "https://yourblog.com"
        },
        {
            title: "Movie App",
            image: "/images/movieapp.png",
            description: "A movie tracking app that allows users to save and review their favorite movies.",
            link: "https://yourmovieapp.com"
        },
        {
            title: "Todo App",
            image: "/images/todo.png",
            description: "A simple and efficient to-do list app to keep track of daily tasks.",
            link: "https://yourtodoapp.com"
        }
    ];

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-5 max-w-4xl">
                <h2 className="text-black font-bold text-3xl md:text-4xl text-center mb-8">
                    Projects
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
                            <div className="p-5">
                                <h3 className="text-xl font-semibold text-black">{project.title}</h3>
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

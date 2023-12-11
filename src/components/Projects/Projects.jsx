

const Projects = () => {
    // Sample project data (replace with your actual projects)
    const projects = [
        {
            id: 1,
            title: 'E-commerce Website',
            description: 'An online shopping platform built with React and Node.js.',
            // Add more project details like links, images, technologies used, etc.
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'A task management application using MERN stack.',
            // Add more project details like links, images, technologies used, etc.
        },
        {
            id: 3,
            title: 'Task Management App',
            description: 'A task management application using MERN stack.',
            // Add more project details like links, images, technologies used, etc.
        },
        // Add more projects as needed
    ];

    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-gray-200 p-6 rounded-md">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p>{project.description}</p>
                            {/* Render other project details like links, images, technologies used, etc. */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

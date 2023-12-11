

const Skills = () => {
    const skillsWithLogos = [
        { name: 'HTML', logo: 'https://i.postimg.cc/L5X6Dgtb/html.png' },
        { name: 'CSS', logo: 'https://i.postimg.cc/KYSjbzb1/css.png' },
        { name: 'Tailwind', logo: 'https://i.postimg.cc/QxzV6mnk/tailwind.png' },
        { name: 'Bootstrap', logo: 'https://i.postimg.cc/26TSn7ZW/bootstrap.png' },
        { name: 'JavaScript', logo: 'https://i.postimg.cc/Bn1bRFrW/js.png' },
        { name: 'React', logo: 'https://i.postimg.cc/6Qr3pX6Y/react.png' },
        { name: 'Node.js', logo: 'https://i.postimg.cc/TwTPy4pG/node.png' },
        { name: 'Express.js', logo: 'https://i.postimg.cc/rpDsXPKw/express.png' },
        { name: 'MongoDB', logo: 'https://i.postimg.cc/bv4Jz9tH/mongodb.png' },
    ];

    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 border-b-4 border-green-400 w-72 mx-auto text-center">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillsWithLogos.map((skill, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center bg-gray-900 text-white py-7 rounded transition-transform transform hover:scale-110 duration-500"
                        >
                            <img
                                src={skill.logo}
                                alt={skill.name}
                                className="h-16"
                            />
                            <span className="ml-2">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default Skills;

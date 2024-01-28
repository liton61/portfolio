

const SoftSkills = () => {
    const softSkillsData = [
        { name: 'Communication', level: 80 },
        { name: 'Teamwork', level: 85 },
        { name: 'Leadership', level: 90 },
        { name: 'Flexibility', level: 80 },
    ];

    return (
        <section className="bg-gray-900 py-16">
            <div className="lg:w-3/4 mx-auto lg:px-0 px-5">
                <h2 className="text-3xl font-bold mb-8 border-b-4 border-green-400 w-72 mx-auto text-center text-white pb-2">Soft Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {softSkillsData.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center justify-center">
                            <p className="mb-2 text-white">{skill.name}</p>
                            <div className="bg-gray-300 w-full h-8 rounded-full relative overflow-hidden" data-aos="zoom-in" data-aos-duration="2000">
                                <div
                                    className={`h-full rounded-full bg-gradient-to-r from-green-500 to-gray-500`}
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                                <span className="absolute inset-0 flex items-center justify-center text-white">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SoftSkills;

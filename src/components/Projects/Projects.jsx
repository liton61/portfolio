

const Projects = () => {
    const projects = [
        {
            title: 'Vector Gym',
            image: 'https://i.postimg.cc/Pqw61Jpz/car.webp',
            description: 'A Single Page Application Created With React. Where User Can Authenticated And Apply For A Social Work User Can Pick The Volunteering Subject According To Their Choice. And Can Fix A Voluntary Service By Using Their Google Account. Admin Can Add Or Delete Events And Modify The Volunteer List. Google Sign In And Dashboard Was Included In This Project',
        },
        {
            title: 'Flex Jobs',
            image: 'https://i.postimg.cc/Pqw61Jpz/car.webp',
            description: 'A Single Page Application Created With React. Where User Can Authenticated And Apply For A Social Work User Can Pick The Volunteering Subject According To Their Choice. And Can Fix A Voluntary Service By Using Their Google Account. Admin Can Add Or Delete Events And Modify The Volunteer List. Google Sign In And Dashboard Was Included In This Project',
        },
        {
            title: 'Automotive Zone',
            image: 'https://i.postimg.cc/Pqw61Jpz/car.webp',
            description: 'A Single Page Application Created With React. Where User Can Authenticated And Apply For A Social Work User Can Pick The Volunteering Subject According To Their Choice. And Can Fix A Voluntary Service By Using Their Google Account. Admin Can Add Or Delete Events And Modify The Volunteer List. Google Sign In And Dashboard Was Included In This Project',
        },

    ];

    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 border-b-4 border-green-400 w-72 mx-auto text-center pb-2">Projects</h2>
                <div className="grid grid-cols-1 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                            <div className="w-full md:w-1/2">
                                <img src={project.image} alt={project.title} className="w-full rounded-lg mb-4 md:mb-0" />
                            </div>
                            <div className="w-full md:w-1/2 border border-gray-300 rounded-lg p-4">
                                <h3 className="text-2xl font-bold mb-4 text-center">{project.title}</h3>
                                <p className="text-justify">{project.description}</p>
                                <div className="mt-5 flex flex-wrap">
                                    <strong className='bg-green-400 px-3 py-2 rounded my-2 md:mb-0 md:mr-2 mr-2'>Tailwind</strong>
                                    <strong className='bg-green-400 px-3 py-2 rounded my-2 md:mb-0 md:mr-2 mr-2'>React Js</strong>
                                    <strong className='bg-green-400 px-3 py-2 rounded my-2 md:mb-0 md:mr-2 mr-2'>Firebase</strong>
                                    <strong className='bg-green-400 px-3 py-2 rounded my-2 md:mb-0 md:mr-2 mr-2'>MongoDB</strong>
                                    <strong className='bg-green-400 px-3 py-2 rounded my-2 md:mb-0 md:mr-2 mr-2'>Express Js</strong>
                                    <strong className='bg-green-400 px-3 py-2 rounded my-2 md:mb-0 md:mr-2 mr-2'>Node Js</strong>
                                </div>
                                <div className="mt-5 flex justify-center">
                                    <button className="bg-gray-900 text-green-400 px-3 py-2 rounded font-bold mr-4">Live Site</button>
                                    <button className="bg-gray-900 text-green-400 px-3 py-2 rounded font-bold">Source Code</button>
                                </div>

                                {/* Add more project details as needed */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

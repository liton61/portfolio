import { Link } from "react-router-dom";


const Projects2 = () => {
    const projects = [
        // {
        //     title: 'Vector Gym',
        //     image: 'https://i.postimg.cc/d1x9hVZG/01.png',
        //     description: 'A Single Page Application Created With React. Where User Can Authenticated And Apply For A Social Work User Can Pick The Volunteering Subject According To Their Choice. And Can Fix A Voluntary Service By Using Their Google Account. Admin Can Add Or Delete Events And Modify The Volunteer List. Google Sign In And Dashboard Was Included In This Project',
        //     link: 'https://vector-gym.web.app'
        // },
        {
            title: 'Flex Jobs',
            image: 'https://i.postimg.cc/nhnQt93M/02.png',
            description: 'A single page application created with React. It is online job base web application. Where user can apply for jobs. Admin can add or delete jobs and modify.Google login added this project',
        },
        // {
        //     title: 'Automotive Zone',
        //     image: 'https://i.postimg.cc/tgTZsQQj/03.png',
        //     description: 'A Single Page Application Created With React. Where User Can Authenticated And Apply For A Social Work User Can Pick The Volunteering Subject According To Their Choice. And Can Fix A Voluntary Service By Using Their Google Account. Admin Can Add Or Delete Events And Modify The Volunteer List. Google Sign In And Dashboard Was Included In This Project',
        // },

    ];

    return (
        <section className="bg-white px-4">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                            <div className="w-full md:w-1/2">
                                <img src={project.image} alt={project.title} className="w-full h-80 rounded-lg mb-4 md:mb-0 border-2 border-green-400" />
                            </div>
                            <div className="w-full md:w-1/2 border border-green-400 rounded-lg p-4">
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
                                <div className="mt-3 flex justify-center">
                                    <Link to="https://flexjobs-964fa.web.app/" target="_blank">
                                        <button className="bg-gray-900 text-green-400 px-3 py-2 rounded font-bold mr-4">Live Site</button>
                                    </Link>
                                    <Link to="https://github.com/liton61/flexJobs-client-side" target="_blank">
                                        <button className="bg-gray-900 text-green-400 px-3 py-2 rounded font-bold">Source Code</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Projects2;

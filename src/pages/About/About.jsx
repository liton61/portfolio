/* eslint-disable react/no-unescaped-entities */
import img from '../../assets/liton.jpg';

const About = () => {
    return (
        <div className="bg-gray-900 py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 mb-4 md:mb-0">
                        <img
                            src={img}
                            alt=""
                            className="w-96 h-auto rounded-lg"
                        />
                    </div>
                    <div className="md:w-3/4 md:pl-8 text-white">
                        <div>
                            <h1 className="text-4xl font-bold mb-4 text-center">Hi, I'm Liton Mia</h1>
                            <p className="text-md text-justify">
                                I am a MERN stack developer passionate about crafting clean, efficient, and scalable web applications. With a solid foundation in MongoDB, Express.js, React.js, and Node.js, I aim to contribute innovative solutions while continuously learning and growing in this dynamic field.
                            </p>
                        </div>
                        <div className='mt-5'>
                            <h2 className="text-xl font-semibold mb-2">Educational Background</h2>
                            <ul className="list-disc pl-5 mb-4">
                                <li>Bachelor's Degree in Computer Science & Engineering</li>
                                <li>Sonargaon University</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Contact Me</h2>
                            <ul className="list-disc pl-5 mb-4">
                                <li className='font-medium'><i className="fa-solid fa-phone"></i>  01738751356</li>
                                <li className='font-medium'><i className="fa-solid fa-envelope"></i>  litonofficial61@gmail.com
                                </li>
                                <li>
                                    <a href=""><i className="fab fa-facebook text-2xl mr-3"></i></a>
                                    <a href=""><i className="fab fa-linkedin text-2xl mr-3"></i></a>
                                    <a href=""> <i className="fa-brands fa-github text-2xl"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

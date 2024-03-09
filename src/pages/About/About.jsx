/* eslint-disable react/no-unescaped-entities */
import { Typewriter } from 'react-simple-typewriter';
import img from '../../assets/liton.jpg';

const About = () => {
    return (
        <div className="bg-gray-900 py-20">
            <div className="lg:w-3/4 mx-auto lg:px-0 px-5">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 mb-4 md:mb-0">
                        <img
                            src={img}
                            alt=""
                            className="w-96 h-auto rounded-lg" data-aos="zoom-in" data-aos-duration="2000"
                        />
                    </div>
                    <div className="md:w-3/4 md:pl-8 text-white">
                        <div>
                            <h1 className="text-4xl font-bold mb-4 text-center" data-aos="zoom-in" data-aos-duration="2000"><span style={{ color: 'white', fontWeight: 'bold', fontFamily: 'Satisfy' }}>
                                <Typewriter
                                    words={["Hi, I'm Liton Mia"]}
                                    loop={5}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span></h1>
                            <p className="text-md text-justify" data-aos="zoom-in" data-aos-duration="2000">
                                A MERN stack developer passionate about crafting clean, efficient, and scalable web applications. With a solid foundation in MongoDB, Express.js, React.js, and Node.js, I aim to contribute innovative solutions while continuously learning and growing in this dynamic field.
                            </p>
                        </div>
                        <div className='mt-5' data-aos="zoom-in" data-aos-duration="2000">
                            <h2 className="text-xl font-semibold mb-2">Educational Background</h2>
                            <ul className="list-disc pl-5 mb-4">
                                <li>Bachelor's Degree in Computer Science & Engineering</li>
                                <li>Sonargaon University</li>
                            </ul>
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="2000">
                            <h2 className="text-xl font-semibold mb-2 ">Contact Me</h2>
                            <ul className="list-disc pl-5 mb-4">
                                <li className='font-medium'><i className="fa-solid fa-phone"></i>  01738751356</li>
                                <li className='font-medium'><i className="fa-brands fa-whatsapp"></i>  01732907620</li>
                                <li className='font-medium'><i className="fa-solid fa-envelope"></i>  litonmia2k1@gmail.com
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100092320843338" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook text-2xl mr-3"></i></a>
                                    <a href="https://www.linkedin.com/in/liton-mia-3212522a5" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin text-2xl mr-3"></i></a>
                                    <a href="https://github.com/liton61" target="_blank" rel="noopener noreferrer"> <i className="fa-brands fa-github text-2xl"></i></a>
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

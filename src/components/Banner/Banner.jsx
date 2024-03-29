/* eslint-disable react/no-unescaped-entities */
import liton from '../../assets/liton.jpg';
import resume from '../../assets/Liton Mia-Resume.pdf';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    return (
        <section className="bg-gray-900 text-white py-16">
            <div className="lg:w-3/4 mx-auto lg:px-0 px-5 flex items-center justify-center">
                <div className="w-full md:w-1/2">
                    <img
                        src={liton}
                        alt=""
                        className="rounded-full w-40 h-40 mx-auto mb-8" data-aos="zoom-in" data-aos-duration="2000"
                    />
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
                    <p className="text-md text-justify shadow-lg shadow-[#040c16] p-5" data-aos="zoom-in" data-aos-duration="2000">
                        A MERN stack developer passionate about crafting clean, efficient, and scalable web applications. With a solid foundation in MongoDB, Express.js, React.js, and Node.js, I aim to contribute innovative solutions while continuously learning and growing in this dynamic field.
                    </p>
                    <div className='flex justify-center mt-5' data-aos="zoom-in" data-aos-duration="2000">
                        <a href={resume} download="liton-resume.pdf">
                            <button className='bg-green-400 px-4 py-3 font-medium rounded text-gray-900'>Download Resume <i className="fa-solid fa-download"></i></button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;

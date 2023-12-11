/* eslint-disable react/no-unescaped-entities */
import liton from '../../assets/liton.jpg';

const Banner = () => {
    return (
        <section className="bg-gray-900 text-white py-16 px-4">
            <div className="max-w-5xl mx-auto flex items-center justify-center">
                <div className="w-full md:w-1/2">
                    <img
                        src={liton}
                        alt=""
                        className="rounded-full w-40 h-40 mx-auto mb-8"
                    />
                    <h1 className="text-4xl font-bold mb-4 text-center">Hi, I'm Liton Mia</h1>
                    <p className="text-md text-justify">
                        I am a MERN stack developer passionate about crafting clean, efficient, and scalable web applications. With a solid foundation in MongoDB, Express.js, React.js, and Node.js, I aim to contribute innovative solutions while continuously learning and growing in this dynamic field. My enthusiasm for problem-solving and collaboration drives my ambition to build user-centric, impactful projects.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Banner;

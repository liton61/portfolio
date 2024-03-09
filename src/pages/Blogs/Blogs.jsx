

const Blogs = () => {
    const blogPosts = [
        {
            id: 1,
            image: 'https://i.postimg.cc/JhQt8Trv/js.png',
            title: 'What is JavaScript ?',
            content: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. Initially designed for enhancing web pages with client-side functionality, it has evolved into a versatile language used for both front-end and back-end development.',
            date: 'October 1, 2023',
        },
        {
            id: 2,
            image: 'https://i.postimg.cc/4x9JfW5w/variable.png',
            title: 'Variables and Data Types',
            content: 'JavaScript supports various data types such as strings, numbers, booleans, arrays, objects, and more. Variables are declared using `let` or `const`.',
            date: 'October 10, 2023',
        },
        {
            id: 3,
            image: 'https://i.postimg.cc/KvByMR6D/function.jpg',
            title: 'Functions',
            content: 'Functions are a fundamental part of JavaScript, allowing developers to encapsulate reusable blocks of code. Arrow functions are a concise way to define functions.',
            date: 'October 15, 2023',
        },
        {
            id: 4,
            image: 'https://i.postimg.cc/TPPGwCrv/dom.jpg',
            title: 'DOM Manipulation',
            content: 'The Document Object Model (DOM) enables the manipulation of HTML elements and their properties. JavaScript interacts with the DOM to dynamically modify web page content.',
            date: 'October 20, 2023',
        },
        {
            id: 5,
            image: 'https://i.postimg.cc/Tw0JSq5J/nextjs.png',
            title: 'What is Next Js ?',
            content: 'Next.js is a React framework that provides a streamlined approach to building web applications. It introduces several features that enhance the development experience, including server-side rendering (SSR), static site generation (SSG), and automatic code splitting.',
            date: 'March 09, 2024',
        },
    ];

    return (
        <div className="bg-gray-900 py-16">
            <div className="lg:w-3/4 mx-auto lg:px-0 px-5">
                {/* <h1 className="text-4xl font-bold mb-8 text-white text-center">---JavaScript---</h1> */}
                <div className="grid grid-cols-1 gap-7">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="bg-white p-6 rounded lg:transition-transform transform hover:scale-105" data-aos="zoom-in" data-aos-duration="2000">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                <img className="w-full lg:h-72 md:h-96 h-44 rounded" src={post.image} alt="" />
                                <div className="flex items-center">
                                    <div className="w-full">
                                        <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                                        <p className="text-gray-500 mb-2">{post.date}</p>
                                        <p className="text-justify">{post.content}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;

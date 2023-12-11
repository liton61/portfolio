

const Blogs = () => {
    const blogPosts = [
        {
            id: 1,
            title: 'What is JavaScript ?',
            content: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. Initially designed for enhancing web pages with client-side functionality, it has evolved into a versatile language used for both front-end and back-end development.',
            date: 'October 1, 2023',
        },
        {
            id: 2,
            title: 'Variables and Data Types',
            content: 'JavaScript supports various data types such as strings, numbers, booleans, arrays, objects, and more. Variables are declared using `let` or `const`.',
            date: 'October 10, 2023',
        },
        {
            id: 3,
            title: 'Functions',
            content: 'Functions are a fundamental part of JavaScript, allowing developers to encapsulate reusable blocks of code. Arrow functions are a concise way to define functions.',
            date: 'October 15, 2023',
        },
        {
            id: 4,
            title: 'DOM Manipulation',
            content: 'The Document Object Model (DOM) enables the manipulation of HTML elements and their properties. JavaScript interacts with the DOM to dynamically modify web page content.',
            date: 'October 20, 2023',
        },
    ];

    return (
        <div className="bg-gray-900 py-16 px-4">
            <div className="max-w-3xl mx-auto">
                {/* <h1 className="text-4xl font-bold mb-8">Blogs</h1> */}
                <div className="grid gap-6">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="bg-white p-6 rounded-lg lg:transition-transform transform hover:scale-105">
                            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                            <p className="text-gray-500 mb-2">{post.date}</p>
                            <p className="text-justify">{post.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;

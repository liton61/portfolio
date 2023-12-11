import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission, e.g., sending data to backend, etc.
        console.log(formData); // Replace this with your form submission logic
        // You might also want to add a form submission success message or redirect the user
    };

    return (
        <section className="bg-gray-900 text-white py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 text-lg">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md text-black focus:outline-none"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-lg">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md text-black focus:outline-none"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block mb-2 text-lg">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md text-black focus:outline-none"
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-green-400 text-black font-medium py-2 px-4 rounded-md hover:bg-green-400 transition duration-300 w-full"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;

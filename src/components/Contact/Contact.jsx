import { useState } from 'react';
import Swal from 'sweetalert2';

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
        console.log(formData);
        Swal.fire({
            title: "Good job!",
            text: "You you have successfully submitted !",
            icon: "success"
        });
    };

    return (
        <section className="bg-gray-900 text-white py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 border-b-4 border-green-400 w-72 mx-auto text-center pb-2 text-white">Contact Me</h2>
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



const Services = () => {
    const services = [
        {
            title: 'Web Development',
            image: 'https://i.postimg.cc/Xv5BpPjH/web.png',
        },
        {
            title: 'Front-end Development',
            image: 'https://i.postimg.cc/MpvQ8Th8/frontend.png',
        },
        {
            title: 'Back-end Development',
            image: 'https://i.postimg.cc/NMw9TxLg/backend.png',
        },
        {
            title: 'MERN Stack Development',
            image: 'https://i.postimg.cc/J4TkgJYq/mern.png',
        },
        {
            title: 'Deployment and Hosting',
            image: 'https://i.postimg.cc/T32WhBrc/Hosting.png',
        },
    ];

    return (
        <section className="bg-gray-900 py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 border-b-4 border-green-400 w-72 mx-auto text-center pb-2 text-white">Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-3 rounded-lg flex flex-col items-center">
                            <img src={service.image} alt={service.title} className="w-full h-32 mb-4 rounded-full" />
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

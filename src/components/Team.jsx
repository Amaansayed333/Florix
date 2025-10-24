export default function Team() {
    return (
        <section id="team" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Our Team
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Meet the innovative minds behind FLORIX technology
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Team Lead */}
                    <div className="bg-gray-50 rounded-xl p-8 shadow-md flex flex-col items-center">
                        <img
                            src="Teamlead.jpeg"
                            alt="C-Rajavarman"
                            className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-100"
                        />
                        <h3 className="text-2xl font-bold text-gray-800">C Rajavarman</h3>
                        <p className="text-blue-600 font-medium mb-4">Team Lead</p>
                        <div className="flex space-x-4 mb-4">
                            <a href="mailto:example1@gmail.com" className="text-gray-600 hover:text-blue-600">
                                <i className="fas fa-envelope text-xl"></i>
                            </a>
                            <a href="tel:+1234567890" className="text-gray-600 hover:text-blue-600">
                                <i className="fas fa-phone text-xl"></i>
                            </a>
                        </div>
                        <p className="text-gray-600 text-center">
                            Visionary leader with expertise in piezoelectric technology and Electronics.
                        </p>
                    </div>
{/* 
                   
                    <div className="bg-gray-50 rounded-xl p-8 shadow-md flex flex-col items-center">
                        <img
                            src="/myphoto.jpeg"
                            alt="C-Rajavarman"
                            className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-100"
                        />

                        <h3 className="text-2xl font-bold text-gray-800">Amaan Sayed</h3>
                        <p className="text-blue-600 font-medium mb-4">AIML Developer</p>
                        <div className="flex space-x-4 mb-4">
                            <a href="mailto:amaan@example.com" className="text-gray-600 hover:text-blue-600">
                                <i className="fas fa-envelope text-xl"></i>
                            </a>
                            <a href="tel:+1987654321" className="text-gray-600 hover:text-blue-600">
                                <i className="fas fa-phone text-xl"></i>
                            </a>
                        </div>
                        <p className="text-gray-600 text-center">
                            AIML developer specializing in smart monitoring systems.
                        </p>
                    </div>

                 
                    <div className="bg-gray-50 rounded-xl p-8 shadow-md flex flex-col items-center">
                        <img
                            src="/people.png"
                            alt="C-Rajavarman"
                            className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-100"
                        />
                        <h3 className="text-2xl font-bold text-gray-800">Anagha</h3>
                        <p className="text-blue-600 font-medium mb-4">Fullstack Developer</p>
                        <div className="flex space-x-4 mb-4">
                            <a href="mailto:anagha@example.com" className="text-gray-600 hover:text-blue-600">
                                <i className="fas fa-envelope text-xl"></i>
                            </a>
                            <a href="tel:+1122334455" className="text-gray-600 hover:text-blue-600">
                                <i className="fas fa-phone text-xl"></i>
                            </a>
                        </div>
                        <p className="text-gray-600 text-center">
                            Fullstack developer building our web interfaces and backend systems.
                        </p>
                    </div> */}
                </div>
            </div>
        </section>
    );
}

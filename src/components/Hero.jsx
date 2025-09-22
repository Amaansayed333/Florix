export default function Hero() {
    return (
        <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-gray-800 to-blue-600 text-white relative overflow-hidden">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                {/* Left */}
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                        Smart Floors That Generate Energy & Monitor Spaces
                    </h1>
                    <p className="text-xl mb-8 text-blue-100">
                        Revolutionary piezoelectric technology that harvests energy from footsteps while providing non-intrusive AI-powered monitoring solutions
                    </p>

                    <ul className="mb-8 space-y-3">
                        <li className="flex items-center">
                            <i className="fas fa-bolt text-yellow-400 mr-3"></i>
                            <span>Generate clean energy from human movement</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-brain text-yellow-400 mr-3"></i>
                            <span>AI-powered anonymous monitoring and analytics</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-user-shield text-yellow-400 mr-3"></i>
                            <span>Zero privacy invasion - weight-based tracking only</span>
                        </li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3 rounded-md">
                            Request Investment Package
                        </button>
                        <a
                            href="#demo"
                            className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 text-white font-bold px-6 py-3 rounded-md flex items-center"
                        >
                            <i className="fas fa-play-circle mr-2"></i> Watch Technology Demo
                        </a>

                    </div>
                </div>

                {/* Right - Tiles */}
                <div className="md:w-1/2 flex justify-center">
                    <div className="relative w-full max-w-md p-6 bg-white bg-opacity-10 rounded-2xl shadow-xl border border-white border-opacity-20">
                        <div className="grid grid-cols-5 gap-3 mb-6">
                            {[...Array(25)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`rounded-lg aspect-square ${
                                        [0, 6, 12, 18, 24].includes(i)
                                            ? "bg-yellow-400 animate-pulse"
                                            : "bg-gray-300 bg-opacity-30"
                                    }`}
                                ></div>
                            ))}
                        </div>

                        <div className="bg-black bg-opacity-30 rounded-lg p-4">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-blue-200">Energy Generated:</span>
                                <span className="font-mono text-yellow-400">0.0 kWh</span>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-blue-200">Footsteps Detected:</span>
                                <span className="font-mono text-yellow-400">0</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-blue-200">Occupancy:</span>
                                <span className="font-mono text-yellow-400">0%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

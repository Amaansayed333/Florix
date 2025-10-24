export default function Technology() {
    return (
        <section id="technology" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        How FLORIX Works
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our innovative piezoelectric technology transforms ordinary floors
                        into smart, energy-generating surfaces with powerful monitoring
                        capabilities.
                    </p>
                </div>

                {/* Three steps */}
                <div className="flex flex-col md:flex-row mb-16">
                    <div className="md:w-1/3 p-6">
                        <div className="piezo-tile bg-gray-50 rounded-xl p-6 h-full shadow-sm">
                            <img
                                src="/energy_harvesting.png"
                                alt="Data Insights"
                                className="w-16 h-16 mx-auto mb-4"
                            />
                            <h3 className="text-xl font-bold text-center mb-3 text-gray-800">
                                1. Energy Harvesting
                            </h3>
                            <p className="text-gray-600 text-center">
                                Piezoelectric tiles convert the mechanical energy from footsteps
                                into usable electricity, generating clean power with every step.
                            </p>
                        </div>
                    </div>

                    <div className="md:w-1/3 p-6">
                        <div className="piezo-tile bg-gray-50 rounded-xl p-6 h-full shadow-sm">
                            <img
                                src="/smart_detection.jpeg"
                                alt="Data Insights"
                                className="w-16 h-16 mx-auto mb-4"
                            />
                            <h3 className="text-xl font-bold text-center mb-3 text-gray-800">
                                2. Smart Detection
                            </h3>
                            <p className="text-gray-600 text-center">
                                Advanced AI algorithms analyze weight patterns and movement to
                                provide valuable insights without compromising privacy.
                            </p>
                        </div>
                    </div>

                    <div className="md:w-1/3 p-6">
                        <div className="piezo-tile bg-gray-50 rounded-xl p-6 h-full shadow-sm">

                            <img
                                src="/data_insights.png"
                                alt="Data Insights"
                                className="w-16 h-16 mx-auto mb-4"
                            />
                            <h3 className="text-xl font-bold text-center mb-3 text-gray-800">
                                3. Data Insights
                            </h3>
                            <p className="text-gray-600 text-center">
                                Real-time analytics dashboard provides actionable data on foot
                                traffic, energy generation, and space utilization.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Specs */}
                <div className="bg-gray-50 rounded-xl p-8 md:p-12 shadow-sm">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                        Technical Specifications
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-lg font-semibold text-blue-600 mb-3">
                                Piezoelectric Material
                            </h4>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-yellow-400 mt-1 mr-2"></i>
                                    <span>Advanced PZT composite</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-yellow-400 mt-1 mr-2"></i>
                                    <span>Durability: 10+ million steps per tile</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-yellow-400 mt-1 mr-2"></i>
                                    <span>Energy output: 2-5 watts per step</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-yellow-400 mt-1 mr-2"></i>
                                    <span>Operating temp: -20°C to 60°C</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-blue-600 mb-3">
                                AI Monitoring System
                            </h4>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-yellow-400 mt-1 mr-2"></i>
                                    <span>Weight-based tracking (no cameras)</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-yellow-400 mt-1 mr-2"></i>
                                    <span>Real-time occupancy 98% accuracy</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-yellow-400 mt-1 mr-2"></i>
                                    <span>Directional movement tracking</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-yellow-400 mt-1 mr-2"></i>
                                    <span>Customizable alert system</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function Applications() {
    return (
        <section id="applications" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Market Applications
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        FLOORIX technology has diverse applications across multiple
                        industries, creating value through energy generation and smart
                        monitoring.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            image: "/buildings.jpg",
                            title: "Smart Buildings",
                            desc: "Office complexes, shopping malls, and commercial spaces can reduce energy costs while gaining valuable foot traffic analytics.",
                        },
                        {
                            image: "/publicspace.jpg",
                            title: "Public Spaces",
                            desc: "Airports, train stations, and universities can monitor crowd density and generate clean energy from high traffic.",
                        },
                        {
                            image: "/healthcare2.jpg",
                            title: "Healthcare",
                            desc: "Hospitals and elderly care facilities can discreetly monitor patient movement without intrusive cameras.",
                        },
                        {
                            image: "/analytics.jpg",
                            title: "Retail Analytics",
                            desc: "Stores can analyze customer flow patterns to optimize layouts and staffing while offsetting costs.",
                        },
                        {
                            image: "/security.jpg",
                            title: "Security",
                            desc: "Facilities can implement perimeter monitoring that detects unusual movement patterns without cameras.",
                        },
                    ].map((app, i) => (
                        <div
                            key={i}
                            className="market-card bg-white rounded-xl overflow-hidden shadow-md"
                        >
                            {/* Top Image */}
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={app.image}
                                    alt={app.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 text-gray-800">
                                    {app.title}
                                </h3>
                                <p className="text-gray-600 mb-4">{app.desc}</p>
                                <div className="flex items-center text-blue-600 font-medium">
                                    <span>Learn More</span>
                                    <i className="fas fa-arrow-right ml-2"></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

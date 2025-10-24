export default function Demosection() {
    return (
        <section id="demo" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Technology Demo
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore how FLORIX works in real environments through our demo
                        showcase.
                    </p>
                </div>

                {/* Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {["smart_tile1.jpg", "smart_tile2.jpg", "monitor_1.jpg", "monitor_2.jpg"].map((img, i) => (
                        <div
                            key={i}
                            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
                        >
                            <img
                                src={`/${img}`}
                                alt={`Demo ${i + 1}`}
                                className="w-full h-64 object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

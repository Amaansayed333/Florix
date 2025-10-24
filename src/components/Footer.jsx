export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <img
                                    src="/Florix.jpeg"
                                    alt="Florix Logo"
                                    className="h-10 w-30  mx-7"
                                />

                            </div>
                        </div>
                        <p className="mt-2 text-gray-400">
                            Smart Floors That Generate Energy & Monitor Spaces
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        {["home", "technology", "applications", "team", "contact"].map((id) => (
                            <a key={id} href={`#${id}`} className="hover:text-blue-400 capitalize">
                                {id}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2023 FLORIX. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

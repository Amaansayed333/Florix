import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed w-full bg-white shadow-md z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo + Brand */}
                <div className="flex items-center">
                    <img
                        src="/Florix.jpeg"
                        alt="Floorix Logo"
                        className="h-12 w-30 mr-3 mx-7"
                    />
                </div>

                {/* Desktop nav */}
                <nav className="hidden md:flex space-x-8">
                    <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">
                        Home
                    </a>
                    <a href="#technology" className="text-gray-700 hover:text-blue-600 font-medium">
                        Technology
                    </a>
                    <a href="#applications" className="text-gray-700 hover:text-blue-600 font-medium">
                        Applications
                    </a>
                    <a href="#team" className="text-gray-700 hover:text-blue-600 font-medium">
                        Team
                    </a>
                    <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">
                        Contact
                    </a>
                </nav>

                {/* Desktop schedule demo */}
                <a
                    href="#contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium hidden md:block"
                >
                    Schedule Demo
                </a>

                {/* Mobile menu toggle */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <i className="fas fa-bars text-2xl"></i>
                </button>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white py-4 px-4 shadow-lg">
                    <a href="#home" className="block py-2 text-gray-700 hover:text-blue-600">
                        Home
                    </a>
                    <a href="#technology" className="block py-2 text-gray-700 hover:text-blue-600">
                        Technology
                    </a>
                    <a href="#applications" className="block py-2 text-gray-700 hover:text-blue-600">
                        Applications
                    </a>
                    <a href="#team" className="block py-2 text-gray-700 hover:text-blue-600">
                        Team
                    </a>
                    <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600">
                        Contact
                    </a>

                    {/* Mobile schedule demo */}
                    <a
                        href="#contact"
                        className="mt-2 w-full block text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium"
                    >
                        Schedule Demo
                    </a>
                </div>
            )}
        </header>
    );
}

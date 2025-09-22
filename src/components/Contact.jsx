import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", interest: "", message: "" });

    const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your inquiry! We will contact you shortly.");
        setForm({ name: "", email: "", interest: "", message: "" });
    };

    return (
        <section id="contact" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Contact Us
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Interested in investing or partnering with us? Get in touch!
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:flex">
                    {/* Left */}
                    <div className="md:w-1/2 gradient-bg p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">Investment Inquiries</h3>
                        <p className="mb-6">
                            We're currently seeking strategic investors and partners to help
                            scale our technology.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <i className="fas fa-envelope mt-1 mr-3"></i>
                                <div>
                                    <h4 className="font-bold">Email</h4>
                                    <a href="mailto:example1@gmail.com" className="hover:underline">
                                        florixenergy@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <i className="fas fa-phone mt-1 mr-3"></i>
                                <div>
                                    <h4 className="font-bold">Phone</h4>
                                    <a href="tel:+1234567890" className="hover:underline">
                                        +91 6360799180
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div className="md:w-1/2 p-8">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {["name", "email"].map((field) => (
                                <div key={field}>
                                    <label className="block text-gray-700 font-medium mb-1 capitalize">
                                        {field}
                                    </label>
                                    <input
                                        id={field}
                                        type={field}
                                        value={form[field]}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            ))}

                            <div>
                                <label className="block text-gray-700 font-medium mb-1">
                                    Investment Interest
                                </label>
                                <select
                                    id="interest"
                                    value={form.interest}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select an option</option>
                                    <option value="seed">Seed Round</option>
                                    <option value="series-a">Series A</option>
                                    <option value="partnership">Strategic Partnership</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    value={form.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md"
                            >
                                Submit Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

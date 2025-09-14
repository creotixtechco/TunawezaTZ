import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general'
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="pt-16 lg:pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-green-50 section-padding">
                <div className="container-custom">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="heading-xl mb-6">Contact Us</h1>
                        <p className="text-body">
                            We'd love to hear from you. Whether you have questions about our programs, 
                            want to get involved, or need more information, we're here to help.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Information & Form */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Information */}
                        <div>
                            <h2 className="heading-lg mb-8">Get in Touch</h2>
                            
                            <div className="space-y-8">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-green-600 text-xl">📍</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
                                        <p className="text-gray-600">
                                            Pasiansi-Papa Street Block 'A'#66<br />
                                            Mwanza, Tanzania<br />
                                            P.O. Box 10263
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-blue-600 text-xl">📞</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                                        <p className="text-gray-600">
                                            <a href="tel:+255783386879" className="hover:text-green-600 transition-colors duration-200">
                                                +255 783 386 879
                                            </a>
                                        </p>
                                        <p className="text-sm text-gray-500 mt-1">
                                            Monday - Friday: 8:00 AM - 5:00 PM EAT
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-orange-600 text-xl">✉️</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                                        <div className="space-y-1">
                                            <p className="text-gray-600">
                                                <a href="mailto:info@tunawezatz.org" className="hover:text-green-600 transition-colors duration-200">
                                                    info@tunawezatz.org
                                                </a>
                                            </p>
                                            <p className="text-gray-600">
                                                <a href="mailto:tunaweza.mza@gmail.com" className="hover:text-green-600 transition-colors duration-200">
                                                    tunaweza.mza@gmail.com
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-purple-600 text-xl">🌐</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Follow Us</h3>
                                        <div className="flex space-x-4">
                                            <a 
                                                href="https://www.facebook.com/tunaweza-mwanza-1380476892066942/" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                                            >
                                                Facebook
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Office Hours */}
                            <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Office Hours</h3>
                                <div className="space-y-2 text-gray-600">
                                    <div className="flex justify-between">
                                        <span>Monday - Friday</span>
                                        <span>8:00 AM - 5:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Saturday</span>
                                        <span>9:00 AM - 2:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sunday</span>
                                        <span>Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                                
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Inquiry Type */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            What can we help you with?
                                        </label>
                                        <select
                                            name="inquiryType"
                                            value={formData.inquiryType}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        >
                                            <option value="general">General Information</option>
                                            <option value="programs">Program Enrollment</option>
                                            <option value="volunteer">Volunteer Opportunities</option>
                                            <option value="partnership">Partnership Inquiry</option>
                                            <option value="donation">Donation Information</option>
                                            <option value="shop">Shop & Products</option>
                                            <option value="media">Media & Press</option>
                                        </select>
                                    </div>

                                    {/* Name and Email */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                                placeholder="Your full name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                                placeholder="your.email@example.com"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone and Subject */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                                placeholder="+255 xxx xxx xxx"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Subject *
                                            </label>
                                            <input
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                                placeholder="Brief subject line"
                                            />
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-vertical"
                                            placeholder="Please provide details about your inquiry..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                                    >
                                        Send Message
                                    </button>
                                </form>

                                <p className="text-xs text-gray-500 text-center mt-4">
                                    We typically respond within 24 hours during business days.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Contact Options */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="heading-lg mb-4">Quick Contact Options</h2>
                        <p className="text-body max-w-2xl mx-auto">
                            Need immediate assistance? Here are the fastest ways to reach us 
                            for specific inquiries.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Program Enrollment",
                                description: "Questions about joining our training programs",
                                contact: "programs@tunawezatz.org",
                                icon: "🎓"
                            },
                            {
                                title: "Volunteer Coordination",
                                description: "Information about volunteer opportunities",
                                contact: "volunteer@tunawezatz.org",
                                icon: "🤝"
                            },
                            {
                                title: "Donations & Support",
                                description: "Questions about making donations or partnerships",
                                contact: "donate@tunawezatz.org",
                                icon: "💝"
                            },
                            {
                                title: "Shop & Products",
                                description: "Product inquiries and custom orders",
                                contact: "shop@tunawezatz.org",
                                icon: "🛍️"
                            },
                            {
                                title: "Media & Press",
                                description: "Press inquiries and media requests",
                                contact: "media@tunawezatz.org",
                                icon: "📰"
                            },
                            {
                                title: "General Information",
                                description: "All other questions and information",
                                contact: "info@tunawezatz.org",
                                icon: "ℹ️"
                            }
                        ].map((option, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                                <div className="text-4xl mb-4">{option.icon}</div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                                <a 
                                    href={`mailto:${option.contact}`}
                                    className="text-green-600 font-medium hover:text-green-700 transition-colors duration-200"
                                >
                                    {option.contact}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Location Map Placeholder */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="heading-lg mb-4">Find Us</h2>
                        <p className="text-body max-w-2xl mx-auto">
                            Located in the heart of Mwanza, our center is easily accessible 
                            by public transportation and private vehicle.
                        </p>
                    </div>
                    
                    <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
                        <div className="text-center">
                            <div className="text-6xl mb-4">🗺️</div>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Interactive Map</h3>
                            <p className="text-gray-600">
                                Pasiansi-Papa Street Block 'A'#66, Mwanza, Tanzania
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                Map integration coming soon
                            </p>
                        </div>
                    </div>
                    
                    <div className="mt-8 text-center">
                        <p className="text-gray-600 mb-4">
                            <strong>Directions:</strong> We're located near the main market area, 
                            easily accessible by dalla dalla (local bus) or taxi.
                        </p>
                        <p className="text-sm text-gray-500">
                            Parking is available on-site for visitors.
                        </p>
                    </div>
                </div>
            </section>

            {/* Emergency Contact */}
            <section className="section-padding bg-green-600 text-white">
                <div className="container-custom text-center">
                    <h2 className="heading-lg mb-4">Need Immediate Assistance?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                        For urgent matters or emergencies related to our students or programs, 
                        please call our emergency contact line.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="tel:+255783386879" 
                            className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                        >
                            Call Now: +255 783 386 879
                        </a>
                        <a 
                            href="mailto:emergency@tunawezatz.org" 
                            className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                        >
                            Emergency Email
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
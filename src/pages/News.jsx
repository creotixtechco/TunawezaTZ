import React from 'react';
import { Link } from 'react-router-dom';

const News = () => {
    const newsArticles = [
        {
            id: 1,
            title: "New Jewelry Making Workshop Opens to Great Success",
            excerpt: "Our latest program launch has attracted 25 new students eager to learn the art of jewelry design and manufacturing.",
            date: "2024-01-15",
            category: "Programs",
            image: "https://images.pexels.com/photos/6195127/pexels-photo-6195127.jpeg?auto=compress&cs=tinysrgb&w=600",
            featured: true
        },
        {
            id: 2,
            title: "Partnership with Local Health Centers Expands Medicinal Plant Program",
            excerpt: "Three health centers in Mwanza now source medicinal plants from our ecological gardening program, creating new opportunities for our graduates.",
            date: "2024-01-10",
            category: "Partnerships",
            image: "https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=600",
            featured: false
        },
        {
            id: 3,
            title: "Annual Skills Exhibition Showcases Student Achievements",
            excerpt: "Over 200 community members attended our annual exhibition, where students displayed their handmade products and demonstrated their skills.",
            date: "2024-01-05",
            category: "Events",
            image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600",
            featured: false
        },
        {
            id: 4,
            title: "Graduate Success Story: Sarah's Tailoring Business Thrives",
            excerpt: "Former student Sarah Mwalimu now employs three people in her successful tailoring business, demonstrating the lasting impact of our programs.",
            date: "2023-12-28",
            category: "Success Stories",
            image: "https://images.pexels.com/photos/6195126/pexels-photo-6195126.jpeg?auto=compress&cs=tinysrgb&w=600",
            featured: false
        },
        {
            id: 5,
            title: "International Volunteer Program Brings New Expertise",
            excerpt: "Volunteers from Germany and Canada are sharing specialized skills in sustainable farming and digital marketing with our students.",
            date: "2023-12-20",
            category: "Volunteers",
            image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
            featured: false
        },
        {
            id: 6,
            title: "New Culinary Arts Kitchen Facility Opens",
            excerpt: "Thanks to generous donations, we've opened a state-of-the-art kitchen facility for our culinary arts program, doubling our training capacity.",
            date: "2023-12-15",
            category: "Facilities",
            image: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600",
            featured: false
        }
    ];

    const categories = ["All", "Programs", "Partnerships", "Events", "Success Stories", "Volunteers", "Facilities"];

    return (
        <div className="pt-16 lg:pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-green-50 section-padding">
                <div className="container-custom">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="heading-xl mb-6">News & Updates</h1>
                        <p className="text-body">
                            Stay updated with the latest news, success stories, and developments 
                            from Tunaweza Mwanza and our community of students and supporters.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Article */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    {newsArticles.filter(article => article.featured).map(article => (
                        <div key={article.id} className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl overflow-hidden shadow-lg mb-16">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                <div className="p-8 lg:p-12 flex flex-col justify-center">
                                    <div className="flex items-center mb-4">
                                        <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full mr-3">
                                            FEATURED
                                        </span>
                                        <span className="text-green-600 font-medium text-sm">{article.category}</span>
                                    </div>
                                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                        {article.title}
                                    </h2>
                                    <p className="text-lg text-gray-600 mb-6">
                                        {article.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-500 text-sm">
                                            {new Date(article.date).toLocaleDateString('en-US', { 
                                                year: 'numeric', 
                                                month: 'long', 
                                                day: 'numeric' 
                                            })}
                                        </span>
                                        <Link 
                                            to={`/news/${article.id}`} 
                                            className="text-green-600 font-medium hover:text-green-700 transition-colors duration-200"
                                        >
                                            Read Full Story →
                                        </Link>
                                    </div>
                                </div>
                                <div className="relative h-64 lg:h-auto">
                                    <img 
                                        src={article.image} 
                                        alt={article.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Category Filter */}
            <section className="bg-gray-50 py-8">
                <div className="container-custom">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                                    index === 0 
                                        ? 'bg-green-600 text-white' 
                                        : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* News Grid */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {newsArticles.filter(article => !article.featured).map(article => (
                            <article key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <img 
                                    src={article.image} 
                                    alt={article.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                                            {article.category}
                                        </span>
                                        <span className="text-gray-500 text-sm">
                                            {new Date(article.date).toLocaleDateString('en-US', { 
                                                month: 'short', 
                                                day: 'numeric' 
                                            })}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {article.excerpt}
                                    </p>
                                    <Link 
                                        to={`/news/${article.id}`}
                                        className="text-green-600 font-medium hover:text-green-700 transition-colors duration-200"
                                    >
                                        Read More →
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="section-padding bg-green-600 text-white">
                <div className="container-custom">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="heading-lg mb-4">Stay Updated</h2>
                        <p className="text-xl mb-8 opacity-90">
                            Subscribe to our newsletter to receive the latest news, success stories, 
                            and updates from Tunaweza Mwanza.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="text-sm opacity-75 mt-4">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Recent Events */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="heading-lg mb-4">Upcoming Events</h2>
                        <p className="text-body max-w-2xl mx-auto">
                            Join us at our upcoming events and see firsthand the impact of our programs.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Skills Exhibition 2024",
                                date: "March 15, 2024",
                                time: "10:00 AM - 4:00 PM",
                                location: "Tunaweza Center, Mwanza",
                                description: "Annual showcase of student work and achievements across all programs."
                            },
                            {
                                title: "Community Workshop: Sustainable Farming",
                                date: "March 22, 2024",
                                time: "2:00 PM - 5:00 PM",
                                location: "Ecological Garden, Tunaweza",
                                description: "Free workshop open to the community on sustainable farming practices."
                            },
                            {
                                title: "Volunteer Orientation",
                                date: "April 5, 2024",
                                time: "9:00 AM - 3:00 PM",
                                location: "Tunaweza Center, Mwanza",
                                description: "Orientation session for new volunteers interested in joining our mission."
                            }
                        ].map((event, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                                <div className="mb-4">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                                    <div className="space-y-1 text-sm text-gray-600">
                                        <p className="flex items-center">
                                            <span className="w-4 h-4 mr-2">📅</span>
                                            {event.date}
                                        </p>
                                        <p className="flex items-center">
                                            <span className="w-4 h-4 mr-2">⏰</span>
                                            {event.time}
                                        </p>
                                        <p className="flex items-center">
                                            <span className="w-4 h-4 mr-2">📍</span>
                                            {event.location}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-4">{event.description}</p>
                                <Link 
                                    to="/contact" 
                                    className="text-green-600 font-medium hover:text-green-700 transition-colors duration-200"
                                >
                                    Register →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default News;
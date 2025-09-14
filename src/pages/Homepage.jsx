import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div className="pt-16 lg:pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-green-50 to-blue-50 section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="fade-in">
                            <h1 className="heading-xl mb-6">
                                Empowering Young People with 
                                <span className="text-green-600"> Disabilities</span>
                            </h1>
                            <p className="text-body mb-8">
                                Tunaweza offers comprehensive vocational training and life skills development 
                                to help young people with disabilities achieve independence and build meaningful careers.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/programs" className="btn-primary">
                                    Explore Programs
                                </Link>
                                <Link to="/donate" className="btn-outline">
                                    Support Our Mission
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <img 
                                src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800" 
                                alt="Young people learning vocational skills"
                                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                                <div className="text-3xl font-bold text-green-600">500+</div>
                                <div className="text-sm text-gray-600">Lives Transformed</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Overview */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="heading-lg mb-4">Our Training Programs</h2>
                        <p className="text-body max-w-3xl mx-auto">
                            We offer diverse vocational training programs designed to equip young people 
                            with practical skills and confidence for independent living.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Batik Workshop",
                                description: "Learn traditional batik techniques and wax stamping for textile production.",
                                image: "https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=400"
                            },
                            {
                                title: "Tailoring & Sewing",
                                description: "Master tailoring skills to create colorful garments and textile products.",
                                image: "https://images.pexels.com/photos/6195126/pexels-photo-6195126.jpeg?auto=compress&cs=tinysrgb&w=400"
                            },
                            {
                                title: "Ecological Gardening",
                                description: "Develop horticulture skills and learn to grow medicinal plants sustainably.",
                                image: "https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=400"
                            },
                            {
                                title: "Culinary Arts",
                                description: "Learn food hygiene, preparation techniques, and diverse cuisine styles.",
                                image: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=400"
                            },
                            {
                                title: "Jewelry Making",
                                description: "Design and create beautiful ornaments and decorative accessories.",
                                image: "https://images.pexels.com/photos/6195127/pexels-photo-6195127.jpeg?auto=compress&cs=tinysrgb&w=400"
                            },
                            {
                                title: "Paper Crafts",
                                description: "Learn paper recycling techniques and create artistic designs.",
                                image: "https://images.pexels.com/photos/6195128/pexels-photo-6195128.jpeg?auto=compress&cs=tinysrgb&w=400"
                            }
                        ].map((program, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <img 
                                    src={program.image} 
                                    alt={program.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{program.title}</h3>
                                    <p className="text-gray-600 mb-4">{program.description}</p>
                                    <Link 
                                        to="/programs" 
                                        className="text-green-600 font-medium hover:text-green-700 transition-colors duration-200"
                                    >
                                        Learn More →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Stats */}
            <section className="section-padding bg-green-600 text-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="heading-lg mb-4">Our Impact</h2>
                        <p className="text-xl opacity-90 max-w-2xl mx-auto">
                            Together, we're creating lasting change in the lives of young people with disabilities.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { number: "500+", label: "Students Trained" },
                            { number: "15", label: "Training Programs" },
                            { number: "85%", label: "Employment Rate" },
                            { number: "10", label: "Years of Service" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                                <div className="text-lg opacity-90">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 text-center">
                        <h2 className="heading-lg mb-4">Join Our Mission</h2>
                        <p className="text-body mb-8 max-w-2xl mx-auto">
                            Your support helps us provide life-changing opportunities to young people with disabilities. 
                            Together, we can build a more inclusive future.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/donate" className="btn-primary">
                                Make a Donation
                            </Link>
                            <Link to="/get-involved" className="btn-secondary">
                                Volunteer With Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Homepage;
import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="pt-16 lg:pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-green-50 section-padding">
                <div className="container-custom">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="heading-xl mb-6">About Tunaweza Mwanza</h1>
                        <p className="text-body">
                            Empowering young people with disabilities through comprehensive vocational training, 
                            life skills development, and community support since 2014.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="heading-lg mb-6">Our Mission</h2>
                            <p className="text-body mb-6">
                                To create an inclusive environment where young people with disabilities can thrive 
                                and achieve their full potential through education, vocational training, and community engagement.
                            </p>
                            <p className="text-body">
                                We believe in the power of education and skill development as tools for social change, 
                                helping individuals gain confidence, independence, and meaningful employment opportunities.
                            </p>
                        </div>
                        <div className="relative">
                            <img 
                                src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800" 
                                alt="Students learning together"
                                className="rounded-2xl shadow-lg w-full h-96 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="heading-lg text-center mb-12">Our Story</h2>
                        <div className="space-y-8">
                            <div className="bg-white p-8 rounded-xl shadow-md">
                                <h3 className="text-2xl font-semibold mb-4 text-green-600">Founded in 2014</h3>
                                <p className="text-body">
                                    Tunaweza Mwanza was established with a vision to address the educational and 
                                    vocational needs of young people with disabilities in the Mwanza region of Tanzania. 
                                    Our founders recognized the lack of specialized training opportunities and set out 
                                    to create a comprehensive program that would empower these individuals.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-md">
                                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Growing Impact</h3>
                                <p className="text-body">
                                    Over the years, we have expanded our programs to include diverse vocational training 
                                    opportunities, from traditional crafts like batik and tailoring to modern skills 
                                    in horticulture and culinary arts. Our holistic approach ensures that students 
                                    develop both technical skills and essential life skills.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-md">
                                <h3 className="text-2xl font-semibold mb-4 text-orange-600">Looking Forward</h3>
                                <p className="text-body">
                                    Today, Tunaweza continues to evolve and adapt to meet the changing needs of our 
                                    community. We are committed to expanding our reach, improving our programs, and 
                                    creating more opportunities for young people with disabilities to achieve independence 
                                    and contribute meaningfully to society.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="heading-lg text-center mb-12">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Inclusion",
                                description: "We believe everyone deserves equal opportunities to learn, grow, and contribute to society.",
                                icon: "🤝"
                            },
                            {
                                title: "Empowerment",
                                description: "We focus on building confidence, independence, and self-advocacy skills in our students.",
                                icon: "💪"
                            },
                            {
                                title: "Excellence",
                                description: "We strive for the highest quality in our training programs and support services.",
                                icon: "⭐"
                            },
                            {
                                title: "Community",
                                description: "We foster a supportive environment where students, families, and staff work together.",
                                icon: "🏘️"
                            },
                            {
                                title: "Innovation",
                                description: "We continuously adapt and improve our methods to better serve our students.",
                                icon: "💡"
                            },
                            {
                                title: "Sustainability",
                                description: "We promote environmentally conscious practices and long-term community development.",
                                icon: "🌱"
                            }
                        ].map((value, index) => (
                            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                                <div className="text-4xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <h2 className="heading-lg text-center mb-12">Our Leadership Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Director",
                                role: "Executive Director",
                                description: "Leading our mission with over 15 years of experience in disability advocacy and education."
                            },
                            {
                                name: "Program Manager",
                                role: "Training Programs Manager",
                                description: "Overseeing all vocational training programs and curriculum development."
                            },
                            {
                                name: "Community Coordinator",
                                role: "Community Outreach Coordinator",
                                description: "Building partnerships and connecting our students with employment opportunities."
                            }
                        ].map((member, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                                <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-2xl text-green-600 font-bold">
                                        {member.name.charAt(0)}
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">{member.name}</h3>
                                <p className="text-green-600 font-medium mb-3">{member.role}</p>
                                <p className="text-gray-600">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="section-padding bg-green-600 text-white">
                <div className="container-custom text-center">
                    <h2 className="heading-lg mb-4">Join Our Mission</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                        Be part of our story and help us create more opportunities for young people with disabilities.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/get-involved" className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                            Get Involved
                        </Link>
                        <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 px-6 rounded-lg transition-all duration-200">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
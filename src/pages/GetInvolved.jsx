import React from 'react';
import { Link } from 'react-router-dom';

const GetInvolved = () => {
    return (
        <div className="pt-16 lg:pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-green-50 to-blue-50 section-padding">
                <div className="container-custom">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="heading-xl mb-6">Get Involved</h1>
                        <p className="text-body">
                            Join our mission to empower young people with disabilities. There are many ways 
                            to make a meaningful difference in our community.
                        </p>
                    </div>
                </div>
            </section>

            {/* Ways to Get Involved */}
            <section className="section-padding bg-white" id="volunteer">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                        <div>
                            <h2 className="heading-lg mb-6">Volunteer With Us</h2>
                            <p className="text-body mb-6">
                                Share your skills and time to directly impact the lives of our students. 
                                Whether you're a professional, student, or community member, we have 
                                volunteer opportunities that match your interests and availability.
                            </p>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Skills Training Assistant</h4>
                                        <p className="text-gray-600">Help instructors in workshops and provide one-on-one support to students.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Administrative Support</h4>
                                        <p className="text-gray-600">Assist with office tasks, data entry, and program coordination.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Community Outreach</h4>
                                        <p className="text-gray-600">Help with events, awareness campaigns, and community engagement activities.</p>
                                    </div>
                                </div>
                            </div>
                            <Link to="/contact" className="btn-primary">
                                Apply to Volunteer
                            </Link>
                        </div>
                        <div className="relative">
                            <img 
                                src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800" 
                                alt="Volunteers working with students"
                                className="rounded-2xl shadow-lg w-full h-96 object-cover"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20" id="partner">
                        <div className="order-2 lg:order-1 relative">
                            <img 
                                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                                alt="Partnership meeting"
                                className="rounded-2xl shadow-lg w-full h-96 object-cover"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="heading-lg mb-6">Partner With Us</h2>
                            <p className="text-body mb-6">
                                Organizations, businesses, and institutions can partner with us to create 
                                sustainable impact. We welcome collaborations that align with our mission 
                                and values.
                            </p>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Corporate Partnerships</h4>
                                        <p className="text-gray-600">Employee volunteer programs, skills-based volunteering, and CSR initiatives.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Educational Institutions</h4>
                                        <p className="text-gray-600">Student internships, research collaborations, and curriculum development.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Government & NGOs</h4>
                                        <p className="text-gray-600">Policy advocacy, resource sharing, and joint program implementation.</p>
                                    </div>
                                </div>
                            </div>
                            <Link to="/contact" className="btn-secondary">
                                Explore Partnerships
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" id="sponsor">
                        <div>
                            <h2 className="heading-lg mb-6">Sponsor a Program</h2>
                            <p className="text-body mb-6">
                                Make a direct impact by sponsoring specific programs or students. 
                                Your sponsorship provides the resources needed to deliver high-quality 
                                training and support services.
                            </p>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Full Program Sponsorship</h4>
                                        <p className="text-gray-600">Fund an entire training program for a year, including materials and instructor costs.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Student Scholarships</h4>
                                        <p className="text-gray-600">Sponsor individual students' training, materials, and support services.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Equipment & Materials</h4>
                                        <p className="text-gray-600">Provide specific tools, equipment, or materials needed for training programs.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/donate" className="btn-primary">
                                    Sponsor Now
                                </Link>
                                <Link to="/contact" className="btn-outline">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <img 
                                src="https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=800" 
                                alt="Students in training program"
                                className="rounded-2xl shadow-lg w-full h-96 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Volunteer Requirements */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="heading-lg mb-4">Volunteer Requirements</h2>
                        <p className="text-body max-w-3xl mx-auto">
                            We welcome volunteers from all backgrounds. Here's what you need to know 
                            about joining our volunteer team.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Time Commitment",
                                description: "Minimum 4 hours per week for at least 3 months. Flexible scheduling available.",
                                icon: "⏰"
                            },
                            {
                                title: "Background Check",
                                description: "All volunteers undergo a basic background check for the safety of our students.",
                                icon: "🔍"
                            },
                            {
                                title: "Orientation Training",
                                description: "Mandatory 2-day orientation covering our mission, policies, and working with disabilities.",
                                icon: "📋"
                            },
                            {
                                title: "Language Skills",
                                description: "Basic Swahili helpful but not required. English-speaking volunteers welcome.",
                                icon: "🗣️"
                            },
                            {
                                title: "Age Requirement",
                                description: "Volunteers must be at least 18 years old. Student volunteers accepted with supervision.",
                                icon: "👥"
                            },
                            {
                                title: "Commitment to Values",
                                description: "Alignment with our values of inclusion, respect, and empowerment is essential.",
                                icon: "❤️"
                            }
                        ].map((requirement, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                                <div className="text-4xl mb-4">{requirement.icon}</div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">{requirement.title}</h3>
                                <p className="text-gray-600">{requirement.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="heading-lg mb-4">Volunteer Testimonials</h2>
                        <p className="text-body max-w-2xl mx-auto">
                            Hear from our volunteers about their experiences and the impact they've made.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Maria Johnson",
                                role: "Skills Training Volunteer",
                                quote: "Working with Tunaweza has been incredibly rewarding. Seeing students gain confidence and skills is truly inspiring.",
                                duration: "2 years"
                            },
                            {
                                name: "David Mwangi",
                                role: "Administrative Volunteer",
                                quote: "The organization's commitment to empowerment is evident in everything they do. I'm proud to be part of this mission.",
                                duration: "1.5 years"
                            },
                            {
                                name: "Sarah Thompson",
                                role: "Community Outreach Volunteer",
                                quote: "Tunaweza has taught me as much as I've contributed. The resilience and determination of the students is amazing.",
                                duration: "3 years"
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-green-50 p-6 rounded-xl">
                                <div className="mb-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                                        <span className="text-green-600 font-bold text-lg">
                                            {testimonial.name.charAt(0)}
                                        </span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                                    <p className="text-green-600 text-sm font-medium">{testimonial.role}</p>
                                    <p className="text-gray-500 text-sm">Volunteering for {testimonial.duration}</p>
                                </div>
                                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="section-padding bg-green-600 text-white">
                <div className="container-custom text-center">
                    <h2 className="heading-lg mb-4">Ready to Make a Difference?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                        Join our community of volunteers, partners, and supporters who are creating 
                        lasting change in the lives of young people with disabilities.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                            Get Started Today
                        </Link>
                        <Link to="/about" className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 px-6 rounded-lg transition-all duration-200">
                            Learn More About Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GetInvolved;
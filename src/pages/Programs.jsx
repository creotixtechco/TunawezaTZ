import React from 'react';
import { Link } from 'react-router-dom';

const Programs = () => {
    const programs = [
        {
            title: "Batik Workshop",
            description: "Learn traditional batik techniques, wax stamping, and textile production methods. Students master the art of creating beautiful patterns and designs on fabric.",
            duration: "6 months",
            level: "Beginner to Advanced",
            image: "https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=600",
            skills: ["Wax application", "Pattern design", "Color mixing", "Fabric preparation", "Quality control"]
        },
        {
            title: "Tailoring & Sewing",
            description: "Comprehensive tailoring program covering garment construction, pattern making, and fashion design. Our backbone program that trains students to create colorful, professional clothing items.",
            duration: "8 months",
            level: "Beginner to Professional",
            image: "https://images.pexels.com/photos/6195126/pexels-photo-6195126.jpeg?auto=compress&cs=tinysrgb&w=600",
            skills: ["Pattern making", "Garment construction", "Machine operation", "Alterations", "Fashion design"]
        },
        {
            title: "Ecological Gardening",
            description: "Sustainable horticulture training focusing on medicinal plants, organic farming methods, and environmental conservation. Students learn to grow and maintain various plant species.",
            duration: "4 months",
            level: "Beginner to Intermediate",
            image: "https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=600",
            skills: ["Plant cultivation", "Soil management", "Pest control", "Harvesting", "Medicinal plant knowledge"]
        },
        {
            title: "Culinary Arts & Kitchen Skills",
            description: "Food preparation, hygiene standards, and diverse cuisine techniques. Students learn domestic economy principles and professional cooking methods.",
            duration: "5 months",
            level: "Beginner to Intermediate",
            image: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600",
            skills: ["Food safety", "Meal planning", "Cooking techniques", "Nutrition", "Kitchen management"]
        },
        {
            title: "Jewelry Manufacturing",
            description: "Design and production of ornaments and decorative accessories. Students learn various techniques for creating beautiful, marketable jewelry pieces.",
            duration: "4 months",
            level: "Beginner to Advanced",
            image: "https://images.pexels.com/photos/6195127/pexels-photo-6195127.jpeg?auto=compress&cs=tinysrgb&w=600",
            skills: ["Design principles", "Wire work", "Beading", "Metal work", "Quality finishing"]
        },
        {
            title: "Paper Crafts & Recycling",
            description: "Paper recycling techniques and artistic design creation. Students learn to transform waste paper into beautiful, functional items while promoting environmental sustainability.",
            duration: "3 months",
            level: "Beginner",
            image: "https://images.pexels.com/photos/6195128/pexels-photo-6195128.jpeg?auto=compress&cs=tinysrgb&w=600",
            skills: ["Paper recycling", "Artistic design", "Product development", "Environmental awareness", "Creative thinking"]
        }
    ];

    return (
        <div className="pt-16 lg:pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-green-50 to-blue-50 section-padding">
                <div className="container-custom">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="heading-xl mb-6">Training Programs</h1>
                        <p className="text-body">
                            Comprehensive vocational training programs designed to equip young people with disabilities 
                            with practical skills, confidence, and opportunities for independent living and meaningful employment.
                        </p>
                    </div>
                </div>
            </section>

            {/* Programs Grid */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {programs.map((program, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <img 
                                    src={program.image} 
                                    alt={program.title}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
                                        <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                                            {program.duration}
                                        </span>
                                    </div>
                                    
                                    <p className="text-gray-600 mb-6">{program.description}</p>
                                    
                                    <div className="mb-6">
                                        <div className="flex items-center mb-2">
                                            <span className="text-sm font-medium text-gray-700 mr-2">Level:</span>
                                            <span className="text-sm text-blue-600 font-medium">{program.level}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Skills You'll Learn:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {program.skills.map((skill, skillIndex) => (
                                                <span 
                                                    key={skillIndex}
                                                    className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <Link 
                                        to="/contact" 
                                        className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors duration-200"
                                    >
                                        Learn More & Apply →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Program Features */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="heading-lg mb-4">What Makes Our Programs Special</h2>
                        <p className="text-body max-w-3xl mx-auto">
                            Our comprehensive approach ensures students receive not just technical training, 
                            but also the life skills and support needed for long-term success.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Hands-On Learning",
                                description: "Practical, project-based training with real-world applications and immediate skill development.",
                                icon: "🛠️"
                            },
                            {
                                title: "Individual Support",
                                description: "Personalized attention and adaptive teaching methods tailored to each student's needs and abilities.",
                                icon: "👥"
                            },
                            {
                                title: "Life Skills Integration",
                                description: "Social skills, communication, and workplace readiness training integrated into all programs.",
                                icon: "🎯"
                            },
                            {
                                title: "Market-Ready Skills",
                                description: "Training aligned with local market demands and employment opportunities in the region.",
                                icon: "💼"
                            },
                            {
                                title: "Ongoing Mentorship",
                                description: "Continued support and guidance even after program completion to ensure long-term success.",
                                icon: "🤝"
                            },
                            {
                                title: "Community Integration",
                                description: "Opportunities to showcase work and connect with potential employers and customers.",
                                icon: "🌍"
                            }
                        ].map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories Preview */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="heading-lg mb-4">Success Stories</h2>
                        <p className="text-body max-w-2xl mx-auto">
                            Our graduates are making meaningful contributions to their communities and achieving independence.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Sarah M.",
                                program: "Tailoring & Sewing",
                                story: "Now runs her own tailoring business, employing 3 other people in her community.",
                                outcome: "Business Owner"
                            },
                            {
                                name: "James K.",
                                program: "Ecological Gardening",
                                story: "Manages a medicinal plant garden that supplies local health centers.",
                                outcome: "Agricultural Specialist"
                            },
                            {
                                name: "Grace L.",
                                program: "Jewelry Manufacturing",
                                story: "Her jewelry designs are sold in local markets and tourist shops across Mwanza.",
                                outcome: "Artisan & Designer"
                            }
                        ].map((story, index) => (
                            <div key={index} className="bg-green-50 p-6 rounded-xl">
                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold text-gray-900">{story.name}</h3>
                                    <p className="text-green-600 font-medium text-sm">{story.program} Graduate</p>
                                </div>
                                <p className="text-gray-600 mb-4 italic">"{story.story}"</p>
                                <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full inline-block">
                                    {story.outcome}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="section-padding bg-green-600 text-white">
                <div className="container-custom text-center">
                    <h2 className="heading-lg mb-4">Ready to Get Started?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                        Join our training programs and take the first step towards independence and a meaningful career.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                            Apply Now
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

export default Programs;
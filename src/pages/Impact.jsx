import React from 'react';
import { Link } from 'react-router-dom';

const Impact = () => {
    return (
        <div className="pt-16 lg:pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-green-50 section-padding">
                <div className="container-custom">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="heading-xl mb-6">Our Impact</h1>
                        <p className="text-body">
                            Measuring the meaningful change we create in the lives of young people with disabilities 
                            and their communities across Mwanza, Tanzania.
                        </p>
                    </div>
                </div>
            </section>

            {/* Key Statistics */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {[
                            { number: "500+", label: "Students Trained", description: "Young people who have completed our programs" },
                            { number: "85%", label: "Employment Rate", description: "Graduates who found meaningful work" },
                            { number: "15", label: "Training Programs", description: "Diverse vocational skills offered" },
                            { number: "10", label: "Years of Service", description: "Decade of community impact" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center bg-gray-50 p-6 rounded-xl">
                                <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">{stat.number}</div>
                                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                                <div className="text-sm text-gray-600">{stat.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="heading-lg mb-4">Success Stories</h2>
                        <p className="text-body max-w-3xl mx-auto">
                            Real stories from our graduates who are now leading independent, productive lives 
                            and contributing to their communities.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {[
                            {
                                name: "Sarah Mwalimu",
                                age: 24,
                                program: "Tailoring & Sewing",
                                image: "https://images.pexels.com/photos/6195126/pexels-photo-6195126.jpeg?auto=compress&cs=tinysrgb&w=400",
                                story: "After completing the tailoring program in 2022, Sarah opened her own shop in Mwanza's central market. She now employs three other young people and has become a mentor for new students.",
                                achievement: "Business Owner & Employer",
                                quote: "Tunaweza didn't just teach me to sew - they taught me to believe in myself."
                            },
                            {
                                name: "James Kiprotich",
                                age: 26,
                                program: "Ecological Gardening",
                                image: "https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=400",
                                story: "James now manages a medicinal plant garden that supplies three local health centers. His expertise in sustainable farming has made him a sought-after consultant in the region.",
                                achievement: "Agricultural Specialist",
                                quote: "I'm proud to contribute to my community's health while protecting our environment."
                            },
                            {
                                name: "Grace Lupembe",
                                age: 22,
                                program: "Jewelry Manufacturing",
                                image: "https://images.pexels.com/photos/6195127/pexels-photo-6195127.jpeg?auto=compress&cs=tinysrgb&w=400",
                                story: "Grace's unique jewelry designs are now sold in tourist shops across Mwanza and online. She has participated in several craft fairs and won awards for her innovative designs.",
                                achievement: "Award-Winning Artisan",
                                quote: "My disability doesn't define me - my creativity and skills do."
                            },
                            {
                                name: "Peter Mwanza",
                                age: 25,
                                program: "Culinary Arts",
                                image: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=400",
                                story: "Peter works as a head chef at a popular restaurant in Mwanza. His expertise in both local and international cuisine has earned him recognition throughout the hospitality industry.",
                                achievement: "Professional Chef",
                                quote: "Cooking is my passion, and Tunaweza helped me turn it into a successful career."
                            }
                        ].map((story, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                <img 
                                    src={story.image} 
                                    alt={story.name}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                                            <p className="text-green-600 font-medium">{story.program} Graduate</p>
                                        </div>
                                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                                            Age {story.age}
                                        </span>
                                    </div>
                                    
                                    <p className="text-gray-600 mb-4">{story.story}</p>
                                    
                                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                                        <p className="text-green-800 italic">"{story.quote}"</p>
                                    </div>
                                    
                                    <div className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full inline-block">
                                        {story.achievement}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Community Impact */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="heading-lg mb-4">Community Impact</h2>
                        <p className="text-body max-w-3xl mx-auto">
                            Our work extends beyond individual success stories to create lasting positive change 
                            in the broader Mwanza community.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Economic Empowerment",
                                description: "Our graduates contribute over $50,000 annually to the local economy through their businesses and employment.",
                                icon: "💰",
                                metrics: ["25 new businesses created", "60+ jobs generated", "$50K+ economic contribution"]
                            },
                            {
                                title: "Social Inclusion",
                                description: "Breaking down barriers and changing perceptions about disability in the community.",
                                icon: "🤝",
                                metrics: ["500+ families impacted", "15 community partnerships", "100% inclusion rate"]
                            },
                            {
                                title: "Skills Development",
                                description: "Building a skilled workforce that meets local market demands and drives innovation.",
                                icon: "🎯",
                                metrics: ["15 vocational skills taught", "85% skill retention rate", "90% program completion"]
                            },
                            {
                                title: "Environmental Impact",
                                description: "Promoting sustainable practices through our ecological gardening and recycling programs.",
                                icon: "🌱",
                                metrics: ["200+ medicinal plants grown", "50% waste reduction", "10 sustainable practices"]
                            },
                            {
                                title: "Health & Wellness",
                                description: "Improving community health through medicinal plant cultivation and nutrition education.",
                                icon: "🏥",
                                metrics: ["3 health centers supplied", "100+ medicinal plants", "50 families educated"]
                            },
                            {
                                title: "Education & Awareness",
                                description: "Raising awareness about disability rights and capabilities throughout the region.",
                                icon: "📚",
                                metrics: ["20 awareness campaigns", "1000+ people reached", "5 schools partnered"]
                            }
                        ].map((impact, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                                <div className="text-4xl mb-4">{impact.icon}</div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">{impact.title}</h3>
                                <p className="text-gray-600 mb-4">{impact.description}</p>
                                <div className="space-y-2">
                                    {impact.metrics.map((metric, metricIndex) => (
                                        <div key={metricIndex} className="flex items-center text-sm">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                            <span className="text-gray-700">{metric}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Future Goals */}
            <section className="section-padding bg-green-600 text-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="heading-lg mb-4">Our 2025 Goals</h2>
                        <p className="text-xl opacity-90 max-w-3xl mx-auto">
                            We're committed to expanding our impact and reaching even more young people 
                            with disabilities across Tanzania.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { target: "750", label: "Students Trained", current: "500+" },
                            { target: "20", label: "Training Programs", current: "15" },
                            { target: "90%", label: "Employment Rate", current: "85%" },
                            { target: "50", label: "New Businesses", current: "25" }
                        ].map((goal, index) => (
                            <div key={index} className="text-center bg-white/10 p-6 rounded-xl">
                                <div className="text-3xl font-bold mb-2">{goal.target}</div>
                                <div className="text-lg font-semibold mb-2">{goal.label}</div>
                                <div className="text-sm opacity-75">Currently: {goal.current}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom text-center">
                    <h2 className="heading-lg mb-4">Help Us Expand Our Impact</h2>
                    <p className="text-body mb-8 max-w-2xl mx-auto">
                        Your support enables us to reach more young people, expand our programs, 
                        and create lasting change in communities across Tanzania.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/donate" className="btn-primary">
                            Support Our Mission
                        </Link>
                        <Link to="/get-involved" className="btn-secondary">
                            Get Involved
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Impact;
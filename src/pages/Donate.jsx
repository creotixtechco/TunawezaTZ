import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Donate = () => {
    const [selectedAmount, setSelectedAmount] = useState('');
    const [donationType, setDonationType] = useState('one-time');

    const donationAmounts = [25, 50, 100, 250, 500, 1000];

    return (
        <div className="pt-16 lg:pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-green-50 to-blue-50 section-padding">
                <div className="container-custom">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="heading-xl mb-6">Support Our Mission</h1>
                        <p className="text-body">
                            Your donation directly impacts the lives of young people with disabilities, 
                            providing them with the skills, confidence, and opportunities they need to thrive.
                        </p>
                    </div>
                </div>
            </section>

            {/* Impact of Donations */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="heading-lg mb-4">Your Impact</h2>
                        <p className="text-body max-w-3xl mx-auto">
                            Every donation, no matter the size, makes a meaningful difference. 
                            Here's how your contribution helps transform lives.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                amount: "$25",
                                impact: "Provides basic materials for one student for a month",
                                description: "Covers fabric, thread, and basic supplies for tailoring training"
                            },
                            {
                                amount: "$50",
                                impact: "Funds a student's complete jewelry making kit",
                                description: "Includes tools, beads, wire, and materials for the full program"
                            },
                            {
                                amount: "$100",
                                impact: "Sponsors one student's training for an entire program",
                                description: "Covers tuition, materials, and support services for 3-6 months"
                            },
                            {
                                amount: "$250",
                                impact: "Provides equipment for our ecological garden",
                                description: "Seeds, tools, and irrigation supplies for sustainable farming"
                            },
                            {
                                amount: "$500",
                                impact: "Funds a complete workshop setup",
                                description: "Equipment and materials to launch a new training program"
                            },
                            {
                                amount: "$1000",
                                impact: "Sponsors 10 students for a full year",
                                description: "Comprehensive support including training, materials, and mentorship"
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
                                <div className="text-3xl font-bold text-green-600 mb-3">{item.amount}</div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.impact}</h3>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Donation Form */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-center mb-8">Make a Donation</h2>
                            
                            {/* Donation Type */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-3">Donation Type</label>
                                <div className="flex space-x-4">
                                    <button
                                        onClick={() => setDonationType('one-time')}
                                        className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
                                            donationType === 'one-time'
                                                ? 'bg-green-600 text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    >
                                        One-time
                                    </button>
                                    <button
                                        onClick={() => setDonationType('monthly')}
                                        className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
                                            donationType === 'monthly'
                                                ? 'bg-green-600 text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    >
                                        Monthly
                                    </button>
                                </div>
                            </div>

                            {/* Amount Selection */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-3">
                                    Select Amount (USD)
                                </label>
                                <div className="grid grid-cols-3 gap-3 mb-4">
                                    {donationAmounts.map((amount) => (
                                        <button
                                            key={amount}
                                            onClick={() => setSelectedAmount(amount.toString())}
                                            className={`py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
                                                selectedAmount === amount.toString()
                                                    ? 'bg-green-600 text-white'
                                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                        >
                                            ${amount}
                                        </button>
                                    ))}
                                </div>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                                    <input
                                        type="number"
                                        placeholder="Other amount"
                                        value={selectedAmount}
                                        onChange={(e) => setSelectedAmount(e.target.value)}
                                        className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            {/* Donor Information */}
                            <div className="space-y-4 mb-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    required
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number (Optional)"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                            </div>

                            {/* Dedication */}
                            <div className="mb-6">
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    <span className="text-sm text-gray-700">Make this donation in honor or memory of someone</span>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                                Donate ${selectedAmount || '0'} {donationType === 'monthly' ? 'Monthly' : 'Now'}
                            </button>

                            <p className="text-xs text-gray-500 text-center mt-4">
                                Your donation is secure and processed through our trusted payment partners. 
                                You will receive a receipt via email.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Ways to Give */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="heading-lg mb-4">Other Ways to Support Us</h2>
                        <p className="text-body max-w-3xl mx-auto">
                            Beyond monetary donations, there are many ways to support our mission 
                            and make a meaningful impact in our community.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "In-Kind Donations",
                                description: "Donate materials, equipment, or supplies needed for our training programs.",
                                icon: "📦",
                                action: "View Wish List"
                            },
                            {
                                title: "Corporate Sponsorship",
                                description: "Partner with us through corporate social responsibility programs.",
                                icon: "🏢",
                                action: "Explore Partnerships"
                            },
                            {
                                title: "Volunteer Your Time",
                                description: "Share your skills and expertise by volunteering with our programs.",
                                icon: "🤝",
                                action: "Join Our Team"
                            },
                            {
                                title: "Fundraising Events",
                                description: "Organize or participate in fundraising events in your community.",
                                icon: "🎉",
                                action: "Plan an Event"
                            },
                            {
                                title: "Legacy Giving",
                                description: "Include Tunaweza in your will or estate planning for lasting impact.",
                                icon: "🌟",
                                action: "Learn More"
                            },
                            {
                                title: "Spread the Word",
                                description: "Share our mission with friends, family, and social networks.",
                                icon: "📢",
                                action: "Share Our Story"
                            }
                        ].map((option, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
                                <div className="text-4xl mb-4">{option.icon}</div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">{option.title}</h3>
                                <p className="text-gray-600 mb-4">{option.description}</p>
                                <Link 
                                    to="/contact" 
                                    className="text-green-600 font-medium hover:text-green-700 transition-colors duration-200"
                                >
                                    {option.action} →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Transparency */}
            <section className="section-padding bg-green-600 text-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="heading-lg mb-4">Financial Transparency</h2>
                        <p className="text-xl opacity-90 max-w-3xl mx-auto">
                            We believe in complete transparency about how your donations are used 
                            to create maximum impact for our students and community.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2">75%</div>
                            <div className="text-lg font-semibold mb-2">Program Services</div>
                            <div className="text-sm opacity-90">Direct support for training programs and student services</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2">15%</div>
                            <div className="text-lg font-semibold mb-2">Administration</div>
                            <div className="text-sm opacity-90">Operational costs and organizational management</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2">10%</div>
                            <div className="text-lg font-semibold mb-2">Fundraising</div>
                            <div className="text-sm opacity-90">Costs associated with raising funds for our programs</div>
                        </div>
                    </div>
                    
                    <div className="text-center mt-8">
                        <Link 
                            to="/contact" 
                            className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                        >
                            View Annual Report
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contact for Questions */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom text-center">
                    <h2 className="heading-lg mb-4">Questions About Donating?</h2>
                    <p className="text-body mb-8 max-w-2xl mx-auto">
                        Our team is here to help you understand how your donation will make an impact 
                        and answer any questions you may have about supporting our mission.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="btn-primary">
                            Contact Our Team
                        </Link>
                        <a 
                            href="mailto:info@tunawezatz.org" 
                            className="btn-outline"
                        >
                            Email Us Directly
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Donate;
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container-custom">
                <div className="py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Organization Info */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">T</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Tunaweza Mwanza</h3>
                                    <p className="text-gray-400 text-sm">Empowering Young People with Disabilities</p>
                                </div>
                            </div>
                            <p className="text-gray-300 mb-4 max-w-md">
                                Tunaweza offers young people with disabilities the chance to widen their social and vocational skills through comprehensive training programs and community support.
                            </p>
                            <div className="flex space-x-4">
                                <a 
                                    href="https://www.facebook.com/tunaweza-mwanza-1380476892066942/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors duration-200"
                                >
                                    <span className="text-sm font-bold">f</span>
                                </a>
                                <a 
                                    href="mailto:info@tunawezatz.org"
                                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors duration-200"
                                >
                                    <span className="text-sm font-bold">@</span>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><Link to="/about" className="text-gray-300 hover:text-green-400 transition-colors duration-200">About Us</Link></li>
                                <li><Link to="/programs" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Programs</Link></li>
                                <li><Link to="/impact" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Impact</Link></li>
                                <li><Link to="/news" className="text-gray-300 hover:text-green-400 transition-colors duration-200">News</Link></li>
                                <li><Link to="/shop" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Shop</Link></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Contact</h4>
                            <div className="space-y-2 text-gray-300">
                                <p className="text-sm">Pasiansi-Papa Street Block 'A'#66</p>
                                <p className="text-sm">Mwanza, Tanzania</p>
                                <p className="text-sm">P.O. Box 10263</p>
                                <p className="text-sm">Phone: +255 783386879</p>
                                <p className="text-sm">
                                    <a href="mailto:info@tunawezatz.org" className="hover:text-green-400 transition-colors duration-200">
                                        info@tunawezatz.org
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} Tunaweza Mwanza. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link to="/donate" className="text-green-400 hover:text-green-300 text-sm font-medium transition-colors duration-200">
                                Donate
                            </Link>
                            <Link to="/get-involved" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">
                                Get Involved
                            </Link>
                            <Link to="/contact" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
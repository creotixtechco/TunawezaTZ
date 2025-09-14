import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isGetInvolvedOpen, setIsGetInvolvedOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Programs', href: '/programs' },
        { name: 'Impact', href: '/impact' },
        { 
            name: 'Get Involved', 
            href: '/get-involved',
            dropdown: [
                { name: 'Volunteer', href: '/get-involved#volunteer' },
                { name: 'Partner with Us', href: '/get-involved#partner' },
                { name: 'Sponsor a Program', href: '/get-involved#sponsor' }
            ]
        },
        { name: 'News', href: '/news' },
        { name: 'Shop', href: '/shop' },
        { name: 'Contact', href: '/contact' }
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}>
            <div className="container-custom">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
                        <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">T</span>
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="text-xl lg:text-2xl font-bold text-gray-900">Tunaweza</h1>
                            <p className="text-sm text-gray-600 -mt-1">Mwanza</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <div key={item.name} className="relative">
                                {item.dropdown ? (
                                    <div 
                                        className="relative"
                                        onMouseEnter={() => setIsGetInvolvedOpen(true)}
                                        onMouseLeave={() => setIsGetInvolvedOpen(false)}
                                    >
                                        <Link
                                            to={item.href}
                                            className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                                                location.pathname === item.href
                                                    ? 'text-green-600'
                                                    : 'text-gray-700 hover:text-green-600'
                                            }`}
                                        >
                                            <span>{item.name}</span>
                                            <ChevronDownIcon className="w-4 h-4" />
                                        </Link>
                                        {isGetInvolvedOpen && (
                                            <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                                                {item.dropdown.map((dropdownItem) => (
                                                    <Link
                                                        key={dropdownItem.name}
                                                        to={dropdownItem.href}
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600 transition-colors duration-200"
                                                    >
                                                        {dropdownItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        to={item.href}
                                        className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                                            location.pathname === item.href
                                                ? 'text-green-600'
                                                : 'text-gray-700 hover:text-green-600'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* CTA Button & Mobile Menu Toggle */}
                    <div className="flex items-center space-x-4">
                        <Link
                            to="/donate"
                            className="btn-primary hidden sm:inline-flex items-center"
                        >
                            Donate Now
                        </Link>
                        
                        {/* Mobile menu button */}
                        <button
                            onClick={toggleMenu}
                            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 transition-colors duration-200"
                        >
                            {isMenuOpen ? (
                                <XMarkIcon className="w-6 h-6" />
                            ) : (
                                <Bars3Icon className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden border-t border-gray-200 bg-white">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <div key={item.name}>
                                    <Link
                                        to={item.href}
                                        className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                                            location.pathname === item.href
                                                ? 'text-green-600 bg-green-50'
                                                : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                                        }`}
                                        onClick={closeMenu}
                                    >
                                        {item.name}
                                    </Link>
                                    {item.dropdown && (
                                        <div className="ml-4 space-y-1">
                                            {item.dropdown.map((dropdownItem) => (
                                                <Link
                                                    key={dropdownItem.name}
                                                    to={dropdownItem.href}
                                                    className="block px-3 py-2 text-sm text-gray-600 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                                    onClick={closeMenu}
                                                >
                                                    {dropdownItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <Link
                                to="/donate"
                                className="block w-full mt-4 btn-primary text-center"
                                onClick={closeMenu}
                            >
                                Donate Now
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Bars3Icon, 
  XMarkIcon, 
  ChevronDownIcon,
  HeartIcon,
  UserGroupIcon,
  HandRaisedIcon
} from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Impact', href: '/impact' },
    { 
      name: 'Get Involved', 
      href: '/get-involved',
      dropdown: [
        { 
          name: 'Volunteer', 
          href: '/get-involved#volunteer',
          icon: UserGroupIcon,
          description: 'Join our volunteer team'
        },
        { 
          name: 'Partner with Us', 
          href: '/get-involved#partner',
          icon: HandRaisedIcon,
          description: 'Corporate partnerships'
        },
        { 
          name: 'Sponsor Programs', 
          href: '/get-involved#sponsor',
          icon: HeartIcon,
          description: 'Fund training programs'
        }
      ]
    },
    { name: 'News', href: '/news' },
    { name: 'Shop', href: '/shop' },
    { name: 'Contact', href: '/contact' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-18 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group" onClick={closeMenu}>
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-200">
                Tunaweza
              </h1>
              <p className="text-sm text-emerald-600 font-medium -mt-1">Mwanza</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div 
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-1 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                        location.pathname === item.href || location.pathname.startsWith('/get-involved')
                          ? 'text-emerald-600 bg-emerald-50'
                          : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </Link>
                    
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-custom border border-gray-100 py-4 animate-in slide-in-from-top-2 duration-200">
                        {item.dropdown.map((dropdownItem) => {
                          const IconComponent = dropdownItem.icon;
                          return (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="flex items-start space-x-3 px-6 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-all duration-200 group"
                            >
                              <IconComponent className="w-5 h-5 mt-0.5 text-emerald-500 group-hover:text-emerald-600" />
                              <div>
                                <div className="font-medium">{dropdownItem.name}</div>
                                <div className="text-sm text-gray-500">{dropdownItem.description}</div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                      location.pathname === item.href
                        ? 'text-emerald-600 bg-emerald-50'
                        : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
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
              className="btn-primary hidden sm:inline-flex items-center space-x-2 text-sm"
            >
              <HeartIcon className="w-4 h-4" />
              <span>Donate</span>
            </Link>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-xl text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-200"
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
          <div className="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.href}
                      className={`flex-1 px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
                        location.pathname === item.href
                          ? 'text-emerald-600 bg-emerald-50'
                          : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                      }`}
                      onClick={item.dropdown ? undefined : closeMenu}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="p-2 text-gray-500 hover:text-emerald-600 transition-colors duration-200"
                      >
                        <ChevronDownIcon className={`w-5 h-5 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                    )}
                  </div>
                  
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((dropdownItem) => {
                        const IconComponent = dropdownItem.icon;
                        return (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200"
                            onClick={closeMenu}
                          >
                            <IconComponent className="w-4 h-4 text-emerald-500" />
                            <span className="text-sm">{dropdownItem.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
              
              <Link
                to="/donate"
                className="block w-full mt-6 btn-primary text-center"
                onClick={closeMenu}
              >
                <HeartIcon className="w-4 h-4 inline mr-2" />
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
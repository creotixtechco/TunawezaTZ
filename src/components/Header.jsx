import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Bars3Icon, 
  XMarkIcon, 
  ChevronDownIcon,
  HeartIcon,
  UserGroupIcon,
  HandRaisedIcon,
  SparklesIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
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
          description: 'Join our volunteer community'
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
          icon: SparklesIcon,
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
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass shadow-custom-lg border-b border-white/20' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group" onClick={closeMenu}>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 via-teal-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-custom group-hover:shadow-custom-lg transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
                <BoltIcon className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse shadow-lg"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-3xl lg:text-4xl font-black text-slate-900 group-hover:text-purple-600 transition-colors duration-300">
                Tunaweza
              </h1>
              <p className="text-sm text-teal-600 font-bold -mt-1 tracking-wider">MWANZA</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
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
                      className={`flex items-center space-x-2 px-6 py-4 text-sm font-bold rounded-2xl transition-all duration-300 ${
                        location.pathname === item.href || location.pathname.startsWith('/get-involved')
                          ? 'text-white bg-purple-600 shadow-lg'
                          : 'text-slate-700 hover:text-purple-600 hover:bg-purple-50'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </Link>
                    
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-4 w-80 glass rounded-3xl shadow-custom-lg border border-white/30 py-6 animate-in slide-in-from-top-4 duration-300">
                        {item.dropdown.map((dropdownItem) => {
                          const IconComponent = dropdownItem.icon;
                          return (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="flex items-start space-x-4 px-8 py-4 text-slate-700 hover:bg-purple-50 hover:text-purple-600 transition-all duration-300 group"
                            >
                              <IconComponent className="w-6 h-6 mt-1 text-purple-500 group-hover:text-purple-600 group-hover:scale-110 transition-all duration-300" />
                              <div>
                                <div className="font-bold text-lg">{dropdownItem.name}</div>
                                <div className="text-sm text-slate-500">{dropdownItem.description}</div>
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
                    className={`px-6 py-4 text-sm font-bold rounded-2xl transition-all duration-300 ${
                      location.pathname === item.href
                        ? 'text-white bg-purple-600 shadow-lg'
                        : 'text-slate-700 hover:text-purple-600 hover:bg-purple-50'
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
              <HeartIcon className="w-5 h-5" />
              <span>Donate Now</span>
            </Link>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-3 rounded-2xl text-slate-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300"
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-7 h-7" />
              ) : (
                <Bars3Icon className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/20 glass">
            <div className="px-6 pt-6 pb-8 space-y-3">
              {navigation.map((item) => (
                <div key={item.name}>
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.href}
                      className={`flex-1 px-6 py-4 text-base font-bold rounded-2xl transition-all duration-300 ${
                        location.pathname === item.href
                          ? 'text-white bg-purple-600 shadow-lg'
                          : 'text-slate-700 hover:text-purple-600 hover:bg-purple-50'
                      }`}
                      onClick={item.dropdown ? undefined : closeMenu}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="p-3 text-slate-500 hover:text-purple-600 transition-colors duration-300"
                      >
                        <ChevronDownIcon className={`w-5 h-5 transition-transform duration-300 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                    )}
                  </div>
                  
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="ml-6 mt-3 space-y-2">
                      {item.dropdown.map((dropdownItem) => {
                        const IconComponent = dropdownItem.icon;
                        return (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="flex items-center space-x-3 px-6 py-3 text-slate-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300"
                            onClick={closeMenu}
                          >
                            <IconComponent className="w-5 h-5 text-purple-500" />
                            <span className="text-sm font-semibold">{dropdownItem.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
              
              <Link
                to="/donate"
                className="block w-full mt-8 btn-primary text-center"
                onClick={closeMenu}
              >
                <HeartIcon className="w-5 h-5 inline mr-2" />
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
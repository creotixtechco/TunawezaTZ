import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  HeartIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Impact Stories', href: '/impact' },
    { name: 'Latest News', href: '/news' },
    { name: 'Shop Products', href: '/shop' }
  ];

  const getInvolvedLinks = [
    { name: 'Volunteer', href: '/get-involved#volunteer' },
    { name: 'Partner with Us', href: '/get-involved#partner' },
    { name: 'Sponsor Programs', href: '/get-involved#sponsor' },
    { name: 'Corporate CSR', href: '/contact' },
    { name: 'Fundraise', href: '/contact' }
  ];

  const supportLinks = [
    { name: 'Make a Donation', href: '/donate' },
    { name: 'Monthly Giving', href: '/donate' },
    { name: 'Legacy Giving', href: '/contact' },
    { name: 'In-Kind Donations', href: '/contact' },
    { name: 'Sponsor a Student', href: '/donate' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {/* Organization Info */}
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-2xl">T</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Tunaweza Mwanza</h3>
                  <p className="text-emerald-400 font-medium">Empowering Young People with Disabilities</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-lg">
                Since 2014, we've been transforming lives through comprehensive vocational training, 
                life skills development, and unwavering community support. Every young person deserves 
                the opportunity to thrive.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <MapPinIcon className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <div>Pasiansi-Papa Street Block 'A'#66</div>
                    <div>Mwanza, Tanzania</div>
                    <div>P.O. Box 10263</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <a href="tel:+255783386879" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">
                    +255 783 386 879
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <a href="mailto:info@tunawezatz.org" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">
                    info@tunawezatz.org
                  </a>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/tunaweza-mwanza-1380476892066942/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-emerald-600 transition-all duration-300 group"
                >
                  <span className="text-lg font-bold group-hover:scale-110 transition-transform duration-200">f</span>
                </a>
                <a 
                  href="mailto:info@tunawezatz.org"
                  className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-emerald-600 transition-all duration-300 group"
                >
                  <EnvelopeIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h3 className="text-xl font-bold mb-6">Stay Connected</h3>
              <p className="text-gray-300 mb-8 text-lg">
                Get the latest updates on our programs, success stories, and ways to get involved 
                in our mission of empowerment.
              </p>
              
              <form className="space-y-4 mb-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    <span>Subscribe</span>
                    <ArrowRightIcon className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </form>
              
              <p className="text-sm text-gray-400">
                We respect your privacy. Unsubscribe at any time. No spam, just meaningful updates.
              </p>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-gray-800">
            <div>
              <h4 className="text-lg font-semibold mb-6 text-emerald-400">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRightIcon className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-sky-400">Get Involved</h4>
              <ul className="space-y-3">
                {getInvolvedLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-gray-300 hover:text-sky-400 transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRightIcon className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-amber-400">Support Us</h4>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-gray-300 hover:text-amber-400 transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRightIcon className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Tunaweza Mwanza. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <Link to="/contact" className="hover:text-emerald-400 transition-colors duration-200">
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors duration-200">
                  Terms of Service
                </Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <Link 
                to="/donate" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 flex items-center group"
              >
                <HeartIcon className="w-4 h-4 mr-2" />
                <span>Donate</span>
              </Link>
              <Link 
                to="/get-involved" 
                className="text-gray-400 hover:text-emerald-400 text-sm font-medium transition-colors duration-200"
              >
                Get Involved
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-400 hover:text-emerald-400 text-sm font-medium transition-colors duration-200"
              >
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
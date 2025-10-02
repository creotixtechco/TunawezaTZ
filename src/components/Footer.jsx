import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  HeartIcon,
  ArrowRightIcon,
  BoltIcon,
  SparklesIcon,
  GlobeAltIcon
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
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-teal-900/20"></div>
      <div className="container-custom relative">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
            {/* Organization Info */}
            <div>
              <div className="flex items-center space-x-6 mb-10">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 via-teal-500 to-rose-500 rounded-3xl flex items-center justify-center shadow-custom-lg">
                    <BoltIcon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-3xl font-black">Tunaweza Mwanza</h3>
                  <p className="text-purple-400 font-bold text-lg">Empowering Young People with Disabilities</p>
                </div>
              </div>
              
              <p className="text-slate-300 mb-10 text-xl leading-relaxed max-w-lg font-medium">
                Since 2014, we've been transforming lives through comprehensive vocational training, 
                life skills development, and unwavering community support. Every young person deserves 
                the opportunity to thrive.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-6 mb-10">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-slate-300 font-medium">
                    <div>Pasiansi-Papa Street Block 'A'#66</div>
                    <div>Mwanza, Tanzania</div>
                    <div>P.O. Box 10263</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 text-white" />
                  </div>
                  <a href="tel:+255783386879" className="text-slate-300 hover:text-purple-400 transition-colors duration-300 font-medium text-lg">
                    +255 783 386 879
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-rose-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <EnvelopeIcon className="w-6 h-6 text-white" />
                  </div>
                  <a href="mailto:info@tunawezatz.org" className="text-slate-300 hover:text-purple-400 transition-colors duration-300 font-medium text-lg">
                    info@tunawezatz.org
                  </a>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-6">
                <a 
                  href="https://www.facebook.com/tunaweza-mwanza-1380476892066942/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 group shadow-custom"
                >
                  <span className="text-2xl font-bold group-hover:scale-110 transition-transform duration-200">f</span>
                </a>
                <a 
                  href="mailto:info@tunawezatz.org"
                  className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 group shadow-custom"
                >
                  <EnvelopeIcon className="w-7 h-7 group-hover:scale-110 transition-transform duration-200" />
                </a>
                <a 
                  href="#"
                  className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 group shadow-custom"
                >
                  <GlobeAltIcon className="w-7 h-7 group-hover:scale-110 transition-transform duration-200" />
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <SparklesIcon className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl font-black">Stay Connected</h3>
              </div>
              <p className="text-slate-300 mb-10 text-xl font-medium">
                Get the latest updates on our programs, success stories, and ways to get involved 
                in our mission of empowerment.
              </p>
              
              <form className="space-y-6 mb-10">
                <div className="flex flex-col sm:flex-row gap-6">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-8 py-5 bg-slate-800 border-2 border-slate-700 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 font-medium"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 shadow-custom-lg hover:shadow-2xl group transform hover:scale-105"
                  >
                    <span>Subscribe</span>
                    <ArrowRightIcon className="w-5 h-5 ml-3 inline group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </form>
              
              <p className="text-sm text-slate-400 font-medium">
                We respect your privacy. Unsubscribe at any time. No spam, just meaningful updates.
              </p>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pt-16 border-t border-slate-800">
            <div>
              <h4 className="text-xl font-black mb-8 text-purple-400">Quick Links</h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-slate-300 hover:text-purple-400 transition-colors duration-300 flex items-center group font-medium text-lg"
                    >
                      <ArrowRightIcon className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-black mb-8 text-teal-400">Get Involved</h4>
              <ul className="space-y-4">
                {getInvolvedLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-slate-300 hover:text-teal-400 transition-colors duration-300 flex items-center group font-medium text-lg"
                    >
                      <ArrowRightIcon className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-black mb-8 text-rose-400">Support Us</h4>
              <ul className="space-y-4">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-slate-300 hover:text-rose-400 transition-colors duration-300 flex items-center group font-medium text-lg"
                    >
                      <ArrowRightIcon className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-10">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <p className="text-slate-400 text-sm font-medium">
                © {currentYear} Tunaweza Mwanza. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm text-slate-400">
                <Link to="/contact" className="hover:text-purple-400 transition-colors duration-300 font-medium">
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link to="/contact" className="hover:text-purple-400 transition-colors duration-300 font-medium">
                  Terms of Service
                </Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-8">
              <Link 
                to="/donate" 
                className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 flex items-center group shadow-custom transform hover:scale-105"
              >
                <HeartIcon className="w-5 h-5 mr-2" />
                <span>Donate</span>
              </Link>
              <Link 
                to="/get-involved" 
                className="text-slate-400 hover:text-purple-400 text-sm font-bold transition-colors duration-300"
              >
                Get Involved
              </Link>
              <Link 
                to="/contact" 
                className="text-slate-400 hover:text-purple-400 text-sm font-bold transition-colors duration-300"
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
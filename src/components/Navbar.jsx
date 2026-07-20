import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { branches } from '../data/gymData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Memberships', path: '/memberships' },
    { name: 'Testimonials', path: '/testimonials' },
  ];

  const isActive = (path) => location.pathname === path;
  const isLocationsActive = location.pathname.startsWith('/locations');

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setLocationsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-bg/95 backdrop-blur-sm border-b border-gray/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo area */}
          <div className="flex-shrink-0 z-50 relative">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo/rlogo.png"
                alt="Gym Republic Logo"
                className="h-16 w-auto flex-shrink-0 drop-shadow-md scale-[2.2] ml-4 translate-y-3"
              />
              <img
                src="/assets/tagline.jpg"
                alt="Gym Republic Tagline"
                className="h-8 md:h-10 w-auto ml-6 mix-blend-screen drop-shadow-md"
              />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${
                  isActive(link.path) ? 'text-gold' : 'text-white hover:text-gold'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Locations Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLocationsOpen(!locationsOpen)}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${
                  isLocationsActive ? 'text-gold' : 'text-white hover:text-gold'
                }`}
              >
                Locations
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${locationsOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Dropdown panel */}
              {locationsOpen && (
                <div className="absolute top-full right-0 mt-2 w-52 bg-bg border border-gold/40 shadow-2xl z-50">
                  <Link
                    to="/locations"
                    onClick={() => setLocationsOpen(false)}
                    className="block px-5 py-3 text-xs font-bold uppercase tracking-widest text-gray hover:text-gold hover:bg-white/5 border-b border-gray/20 transition-colors"
                  >
                    All Branches
                  </Link>
                  {branches.map((branch) => (
                    <Link
                      key={branch.id}
                      to={`/locations/${branch.slug}`}
                      onClick={() => setLocationsOpen(false)}
                      className="block px-5 py-3 text-sm font-bold uppercase tracking-wider text-white hover:text-gold hover:bg-white/5 transition-colors"
                    >
                      {branch.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="hover:scale-110 transition-transform duration-200 ml-2 flex items-center justify-center"
            >
              <img
                src="/assets/cta_button.png"
                alt="Join Now"
                className="h-14 w-auto object-contain drop-shadow-2xl"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold p-2 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-bg border-b border-gray/20">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 text-base font-bold uppercase tracking-wider border-b border-gray/10 ${
                  isActive(link.path) ? 'text-gold' : 'text-white hover:text-gold'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Locations accordion */}
            <div>
              <button
                onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                className={`w-full flex items-center justify-between px-3 py-3 text-base font-bold uppercase tracking-wider border-b border-gray/10 ${
                  isLocationsActive ? 'text-gold' : 'text-white'
                }`}
              >
                Locations
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${mobileLocationsOpen ? 'rotate-180 text-gold' : ''}`}
                />
              </button>
              {mobileLocationsOpen && (
                <div className="bg-white/5 border-l-2 border-gold ml-3">
                  <Link
                    to="/locations"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm font-bold uppercase tracking-wider text-gray hover:text-gold transition-colors"
                  >
                    All Branches
                  </Link>
                  {branches.map((branch) => (
                    <Link
                      key={branch.id}
                      to={`/locations/${branch.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-sm font-bold uppercase tracking-wider text-white hover:text-gold transition-colors"
                    >
                      {branch.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile CTA */}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 mt-2"
            >
              <img
                src="/assets/cta_button.png"
                alt="Join Now"
                className="h-14 w-auto object-contain drop-shadow-lg"
              />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

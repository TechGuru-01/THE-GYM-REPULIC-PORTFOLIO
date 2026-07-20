import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Mail, Phone } from 'lucide-react';
import { branches } from '../data/gymData';

const Footer = () => {
  return (
    <footer className="bg-bg border-t border-gray/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src="/logo/rlogo.png" alt="Gym Republic Logo" className="h-16 w-auto flex-shrink-0 drop-shadow-md scale-[2.2] ml-4" />
              <div className="flex flex-col ml-6">
                <span className="font-display text-gold text-xl leading-none tracking-wider">GYM REPUBLIC</span>
              </div>
            </Link>
            <p className="text-gray text-sm mb-6">
              Pambansang Gym Bakal. Train hard, stay consistent, and be your best self at any of our branches.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray hover:text-gold transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray hover:text-gold transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-white text-xl tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray hover:text-gold transition-colors text-sm uppercase font-bold tracking-wide">About Us</Link></li>
              <li><Link to="/services" className="text-gray hover:text-gold transition-colors text-sm uppercase font-bold tracking-wide">Services</Link></li>
              <li><Link to="/memberships" className="text-gray hover:text-gold transition-colors text-sm uppercase font-bold tracking-wide">Memberships</Link></li>
              <li><Link to="/testimonials" className="text-gray hover:text-gold transition-colors text-sm uppercase font-bold tracking-wide">Success Stories</Link></li>
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h4 className="font-display text-white text-xl tracking-wider mb-6">Our Branches</h4>
            <ul className="space-y-3">
              {branches.map(branch => (
                <li key={branch.id}>
                  <Link to={`/locations/${branch.slug}`} className="text-gray hover:text-gold transition-colors text-sm font-bold tracking-wide flex items-center gap-2">
                    <MapPin size={16} className="text-gold" />
                    {branch.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-white text-xl tracking-wider mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray text-sm">
                <Mail size={18} className="text-gold shrink-0 mt-0.5" />
                <span>info@gymrepublic.ph (Placeholder)</span>
              </li>
              <li className="flex items-start gap-3 text-gray text-sm">
                <Phone size={18} className="text-gold shrink-0 mt-0.5" />
                <span>+63 912 345 6789 (Placeholder)</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray text-xs">
            &copy; {new Date().getFullYear()} Gym Republic. All rights reserved.
          </p>
          <div className="text-gray text-xs flex gap-4">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

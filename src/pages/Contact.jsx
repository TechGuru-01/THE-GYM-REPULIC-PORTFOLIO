import Hero from '../components/Hero';
import { branches } from '../data/gymData';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      <Hero 
        title="Contact Us" 
        subtitle="Get in touch. We're ready when you are." 
        imageSrc="/assets/infog9.jpg" 
      />
      
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-4xl text-white uppercase mb-4">Send an Inquiry</h2>
              <div className="h-1 w-16 bg-red mb-8"></div>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray uppercase tracking-wider mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full bg-offwhite text-bg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Juan Dela Cruz" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray uppercase tracking-wider mb-2">Email Address</label>
                    <input type="email" id="email" className="w-full bg-offwhite text-bg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold" placeholder="juan@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray uppercase tracking-wider mb-2">Phone Number</label>
                    <input type="tel" id="phone" className="w-full bg-offwhite text-bg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold" placeholder="0912 345 6789" />
                  </div>
                </div>

                <div>
                  <label htmlFor="branch" className="block text-sm font-bold text-gray uppercase tracking-wider mb-2">Preferred Branch</label>
                  <select id="branch" className="w-full bg-offwhite text-bg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold appearance-none rounded-none">
                    <option value="">Select a branch...</option>
                    {branches.map(branch => (
                      <option key={branch.id} value={branch.id}>{branch.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray uppercase tracking-wider mb-2">Message</label>
                  <textarea id="message" rows="5" className="w-full bg-offwhite text-bg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold resize-none" placeholder="How can we help you?"></textarea>
                </div>

                <button type="submit" className="bg-red hover:bg-gold text-white hover:text-bg w-full py-4 font-bold uppercase tracking-widest transition-colors duration-300">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & Map Placeholder */}
            <div>
              <h2 className="font-display text-4xl text-white uppercase mb-4">Direct Contact</h2>
              <div className="h-1 w-16 bg-red mb-8"></div>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4 p-4 border border-gray/20 bg-gray/5">
                  <Mail className="text-gold shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-display text-xl text-white uppercase mb-1">Email</h4>
                    <p className="text-gray">info@gymrepublic.ph</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 border border-gray/20 bg-gray/5">
                  <Phone className="text-gold shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-display text-xl text-white uppercase mb-1">Phone (Main)</h4>
                    <p className="text-gray">+63 912 345 6789</p>
                  </div>
                </div>
              </div>

              {/* Map Embed Placeholder */}
              <div className="relative w-full h-64 bg-gray/10 border border-gray/20 flex flex-col items-center justify-center">
                <MapPin size={48} className="text-gray mb-4 opacity-50" />
                <span className="text-gray font-bold uppercase tracking-widest">Map Embed Placeholder</span>
                <span className="text-gray/70 text-sm mt-2 text-center px-4">An interactive Google Map with markers for all branches would go here.</span>
              </div>
            </div>

          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Contact;

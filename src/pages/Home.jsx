import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Dumbbell, MapPin, Star, ChevronRight, Trophy, Users, Clock } from 'lucide-react';
import { servicesList, pricingData, branches } from '../data/gymData';

const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-3 mb-4">
    <div className="h-1 w-10 bg-red"></div>
    <span className="text-red font-bold uppercase tracking-widest text-xs">{children}</span>
    <div className="h-1 w-10 bg-red"></div>
  </div>
);

const Home = () => {
  const logoRef = useRef(null);
  const contentRef = useRef(null);
  const videoRef = useRef(null);
  const isVisible = useRef(true);
  const isAnimatingOut = useRef(false);
  const isAnimatingIn = useRef(false);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'bounce.out', delay: 0.2 }
      );
    }
  }, []);

  const handleTimeUpdate = () => {
    if (!videoRef.current || !contentRef.current) return;
    const { currentTime, duration } = videoRef.current;
    if (!duration || isNaN(duration)) return;
    const timeLeft = duration - currentTime;

    if (timeLeft <= 5 && isVisible.current && !isAnimatingOut.current) {
      isVisible.current = false;
      isAnimatingOut.current = true;
      gsap.to(contentRef.current.children, {
        y: 100, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power4.in',
        onComplete: () => { isAnimatingOut.current = false; }
      });
    } else if (timeLeft > 5 && !isVisible.current && !isAnimatingIn.current) {
      isVisible.current = true;
      isAnimatingIn.current = true;
      gsap.fromTo(contentRef.current.children,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'bounce.out',
          onComplete: () => { isAnimatingIn.current = false; } }
      );
    }
  };

  const testimonials = [
    { name: 'Juan Dela Cruz', quote: 'Gym Republic changed my life. The equipment is raw, the people are serious, and the gains are real.' },
    { name: 'Maria Santos', quote: 'The community here is so supportive. The coaches actually care about your form and your progress.' },
    { name: 'Mark Reyes', quote: 'Best value for money. Complete equipment for powerlifting and bodybuilding. Been coming for 2 years.' },
  ];

  return (
    <div className="overflow-x-hidden">

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-bg/70 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] z-10"></div>
          <video ref={videoRef} onTimeUpdate={handleTimeUpdate} autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/assets/hero.mp4" type="video/mp4" />
            <img src="/assets/facility1.jpg" alt="Gym background fallback" className="w-full h-full object-cover" />
          </video>
        </div>

        <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-5xl mx-auto mt-16">
          <div ref={contentRef} className="flex flex-col items-center">
            <div ref={logoRef} className="w-full max-w-md md:max-w-2xl drop-shadow-2xl mb-8">
              <img src="/assets/logo(with_tagline).jpg" alt="Gym Republic Logo with Tagline" className="w-full h-auto object-contain mix-blend-screen scale-[1.2]" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6 md:mt-10 z-30 relative w-full">
            <Link 
              to="/memberships" 
              className="group flex items-center justify-center hover:scale-105 transition-transform duration-300 drop-shadow-2xl"
            >
              <img 
                src="/assets/cta_button.png" 
                alt="Join Now" 
                className="h-20 md:h-24 w-auto object-contain"
              />
            </Link>
            
            <Link 
              to="/locations" 
              className="inline-flex items-center gap-2 border-4 border-gold text-gold px-8 py-3 font-bold uppercase tracking-widest hover:bg-gold hover:text-bg transition-colors duration-300 shadow-xl"
            >
              View Branches <MapPin size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ─────────────────────────────────────── */}
      <section className="bg-gold py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-bg/20">
            <div className="p-4 flex flex-col items-center gap-2">
              <MapPin size={28} className="text-bg" />
              <h3 className="font-display text-3xl text-bg uppercase">3 Locations</h3>
              <p className="text-bg/80 font-bold text-sm">Cavite City · Tarlac · Lipa</p>
            </div>
            <div className="p-4 flex flex-col items-center gap-2">
              <Users size={28} className="text-bg" />
              <h3 className="font-display text-3xl text-bg uppercase">Expert Coaches</h3>
              <p className="text-bg/80 font-bold text-sm">Dedicated professionals to guide you</p>
            </div>
            <div className="p-4 flex flex-col items-center gap-2">
              <Dumbbell size={28} className="text-bg" />
              <h3 className="font-display text-3xl text-bg uppercase">Premium Gear</h3>
              <p className="text-bg/80 font-bold text-sm">Top-of-the-line equipment</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ───────────────────────────────────── */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img src="/assets/owners.jpg" alt="Gym Republic Owners" className="w-full h-72 md:h-96 object-cover border-l-8 border-gold shadow-2xl" />
              <div className="absolute -bottom-4 -right-4 bg-gold p-4 hidden md:block">
                <p className="font-display text-bg text-xl uppercase">Est. in Cavite</p>
              </div>
            </div>
            <div>
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl text-white uppercase mb-6 leading-tight">
                We Are Not Just <span className="text-gold">A Gym</span>
              </h2>
              <p className="text-gray text-lg mb-4 leading-relaxed">
                We are an institution of hard work. Gym Republic was built for those who are serious about their fitness journey — whether you're a beginner learning the ropes or a seasoned athlete pushing your limits.
              </p>
              <p className="text-gray mb-8 leading-relaxed">
                <strong className="text-white">Mission:</strong> To provide accessible, high-quality fitness facilities that empower individuals to train hard, stay consistent, and achieve their personal best.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 bg-red text-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-white hover:text-red transition-colors duration-300">
                Our Story <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ────────────────────────────────── */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>What We Offer</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl text-bg uppercase">Our Services</h2>
            <div className="h-1 w-24 bg-red mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {servicesList.map((service, index) => {
              const images = ['/assets/facility1.jpg', '/assets/members2.jpg','/assets/facility2.jpg', '/assets/members1.jpg' ];
              return (
                <div key={index} className="bg-bg border-b-4 border-gold group hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                  <div className="h-48 overflow-hidden relative">
                    <img src={images[index % images.length]} alt={service.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent opacity-90 group-hover:opacity-60 transition-opacity"></div>
                    <div className="absolute bottom-4 left-4 bg-gold text-bg p-2 rounded shadow-lg">
                      <Dumbbell size={24} />
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="font-display text-xl text-white uppercase mb-2 group-hover:text-gold transition-colors">{service.title}</h3>
                    <p className="text-gray text-sm leading-relaxed flex-grow">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <Link to="/services" className="inline-flex items-center gap-2 border-2 border-bg text-bg px-8 py-3 font-bold uppercase tracking-wider hover:bg-bg hover:text-white transition-colors duration-300">
              View All Services <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIPS PREVIEW ─────────────────────────────── */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl text-white uppercase">Membership Plans</h2>
            <div className="h-1 w-24 bg-red mx-auto mt-4"></div>
            <p className="text-gray mt-4 max-w-xl mx-auto">Simple, transparent pricing. No hidden fees. Just pure gains.</p>
          </div>

          {/* Infographic pricing assets */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="group relative overflow-hidden border border-gray/20 hover:border-gold transition-colors duration-300">
              <img src="/assets/infog4.png" alt="Gym Session Pricing" className="w-full h-auto object-contain bg-offwhite/5" />
            </div>
            <div className="group relative overflow-hidden border border-gold/60 hover:border-gold transition-colors duration-300">
              <div className="absolute -top-0 left-0 right-0 bg-gold text-bg text-center py-1 font-bold text-xs uppercase tracking-wider z-10">Most Popular</div>
              <img src="/assets/infog7.jpg" alt="Monthly Membership Pricing" className="w-full h-auto object-contain bg-offwhite/5" />
            </div>
            <div className="group relative overflow-hidden border border-gray/20 hover:border-gold transition-colors duration-300">
              <img src="/assets/infog8.jpg" alt="Additional Services Pricing" className="w-full h-auto object-contain bg-offwhite/5" />
            </div>
          </div>
          <div className="text-center">
            <Link to="/memberships" className="inline-flex items-center gap-2 bg-gold text-bg px-8 py-3 font-bold uppercase tracking-wider hover:bg-white transition-colors duration-300">
              See All Plans <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── LOCATIONS PREVIEW ───────────────────────────────── */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>Find Us</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl text-bg uppercase">Our Branches</h2>
            <div className="h-1 w-24 bg-red mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {branches.map((branch) => (
              <Link key={branch.id} to={`/locations/${branch.slug}`} className="group block bg-bg border-b-4 border-gray/20 hover:border-gold transition-all duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-bg to-gray/10 flex items-center justify-center relative overflow-hidden">
                  <img src="/assets/facility1.jpg" alt={branch.name} className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="font-display text-3xl text-white uppercase drop-shadow-lg group-hover:text-gold transition-colors duration-300">{branch.name}</h3>
                  </div>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray">
                    <MapPin size={16} className="text-gold flex-shrink-0" />
                    <span className="text-sm font-medium">{branch.address}</span>
                  </div>
                  <ChevronRight size={20} className="text-gold group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link to="/locations" className="inline-flex items-center gap-2 border-2 border-bg text-bg px-8 py-3 font-bold uppercase tracking-wider hover:bg-bg hover:text-white transition-colors duration-300">
              View All Locations <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOURS STRIP ─────────────────────────────────────── */}
      <section className="bg-bg py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <SectionLabel>Hours</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl text-white uppercase">Operating Hours</h2>
            <div className="h-1 w-24 bg-red mx-auto mt-4"></div>
          </div>
          <div className="flex justify-center">
            <img
              src="/assets/infog6.jpg"
              alt="Gym Republic Operating Hours"
              className="w-full max-w-2xl h-auto object-contain rounded-sm shadow-2xl border border-gray/20"
            />
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS PREVIEW ────────────────────────────── */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>Success Stories</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl text-white uppercase">What Our Members Say</h2>
            <div className="h-1 w-24 bg-red mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-offwhite/5 border border-gray/20 p-8 relative group hover:border-gold transition-colors duration-300">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-gold fill-gold" />)}
                </div>
                <p className="text-gray italic leading-relaxed mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center font-display text-bg text-lg">
                    {t.name[0]}
                  </div>
                  <span className="font-bold text-white text-sm uppercase tracking-wider">{t.name}</span>
                </div>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gold group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/testimonials" className="inline-flex items-center gap-2 border-2 border-gold text-gold px-8 py-3 font-bold uppercase tracking-wider hover:bg-gold hover:text-bg transition-colors duration-300">
              See All Stories <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────── */}
      <section className="py-24 bg-gold text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/assets/facility2.jpg')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <Trophy size={48} className="text-bg mx-auto mb-4" />
          <h2 className="font-display text-4xl md:text-6xl text-bg uppercase mb-4">Ready to Start?</h2>
          <p className="text-bg/80 font-bold text-lg mb-10">Join the Pambansang Gym Bakal. Train hard, stay consistent, be your best.</p>
          <Link to="/contact" className="inline-block hover:scale-110 transition-transform duration-300 drop-shadow-2xl">
            <img src="/assets/cta_button.png" alt="Join Now" className="h-24 md:h-32 w-auto object-contain mx-auto" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;

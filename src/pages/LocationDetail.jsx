import { useParams, Navigate, Link } from 'react-router-dom';
import Hero from '../components/Hero';
import CoachCard from '../components/CoachCard';
import ScheduleTable from '../components/ScheduleTable';
import { branches, sharedHours } from '../data/gymData';
import { MapPin, Clock } from 'lucide-react';

const LocationDetail = () => {
  const { branchSlug } = useParams();
  
  // Find the requested branch, otherwise 404/redirect
  const branch = branches.find(b => b.slug === branchSlug);
  
  if (!branch) {
    return <Navigate to="/locations" replace />;
  }

  // Placeholder data for the specific branch
  const coaches = [
    { name: "Coach Mike", specialty: "Powerlifting & Strength", imageSrc: "/assets/staffs.png" },
    { name: "Coach Anna", specialty: "HIIT & Conditioning", imageSrc: "/assets/staffs.png" },
    { name: "Coach Dave", specialty: "Bodybuilding", imageSrc: "/assets/staffs.png" },
  ];

  const placeholderSchedule = [
    { time: "07:00 AM", className: "Morning Grind", coach: "Coach Mike" },
    { time: "09:00 AM", className: "HIIT Circuit", coach: "Coach Anna" },
    { time: "05:00 PM", className: "Zumba & Dance", coach: "Guest Instructor" },
    { time: "07:00 PM", className: "Strength Basics", coach: "Coach Dave" },
  ];

  return (
    <div>
      <Hero 
        title={`Gym Republic ${branch.name}`} 
        subtitle="Your local headquarters for gains." 
        imageSrc="/assets/facility2.jpg" 
      />
      
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Branch Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            <div className="lg:col-span-2">
              <h2 className="font-display text-4xl text-white uppercase mb-6">Facility Overview</h2>
              <div className="h-1 w-16 bg-red mb-8"></div>
              <p className="text-gray text-lg mb-8 leading-relaxed">
                Welcome to Gym Republic {branch.name}. Designed for the dedicated, this branch features a fully equipped weight room, dedicated cardio zone, and spacious studios for group classes.
              </p>
              
              {/* Photo Gallery Grid (Placeholder) */}
              <div className="grid grid-cols-2 gap-4">
                <img src="/assets/facility1.jpg" alt="Gym weights" className="w-full h-48 object-cover border border-gray/20" />
                <img src="/assets/facility2.jpg" alt="Gym machines" className="w-full h-48 object-cover border border-gray/20" />
              </div>
            </div>
            
            <div className="bg-offwhite p-8 border-t-8 border-gold flex flex-col h-full">
              <h3 className="font-display text-2xl text-bg uppercase mb-6">Branch Info</h3>
              
              <div className="space-y-6 flex-grow">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="text-red" size={20} />
                    <h4 className="font-bold text-bg uppercase tracking-wide">Location</h4>
                  </div>
                  <p className="text-gray text-sm pl-7">{branch.address}</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="text-red" size={20} />
                    <h4 className="font-bold text-bg uppercase tracking-wide">Operating Hours</h4>
                  </div>
                  <div className="text-gray text-sm pl-7 space-y-1">
                    {sharedHours.map((h, i) => (
                      <p key={i}>{h.day}: <br/><span className="text-bg font-bold">{h.time}</span></p>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/contact" className="mt-8 block text-center bg-red hover:bg-bg text-white py-3 font-bold uppercase tracking-wider transition-colors">
                Contact Branch
              </Link>
            </div>
          </div>

          {/* Coaches Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl text-white uppercase mb-4">Meet The Coaches</h2>
              <div className="h-1 w-24 bg-red mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coaches.map((coach, idx) => (
                <CoachCard key={idx} name={coach.name} specialty={coach.specialty} imageSrc={coach.imageSrc} />
              ))}
            </div>
          </div>

          {/* Schedule Section */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
              <div>
                <h2 className="font-display text-4xl text-white uppercase mb-4">Class Schedule</h2>
                <div className="h-1 w-24 bg-red"></div>
              </div>
              <p className="text-gray mt-4 md:mt-0 italic">*Schedule subject to change.</p>
            </div>
            
            <div className="bg-offwhite/5 border border-gray/20">
              <ScheduleTable schedule={placeholderSchedule} />
            </div>
          </div>

          {/* Available Products Section */}
          <div className="border-t border-gray/20 pt-16 text-center">
            <h2 className="font-display text-2xl text-gold uppercase mb-4">Available Products</h2>
            <p className="text-gray mb-8">Fuel your workout. Available at the front desk.</p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 border border-gray/30 text-white font-mono text-sm">Soy Milk</span>
              <span className="px-4 py-2 border border-gray/30 text-white font-mono text-sm">Bottled Water</span>
              <span className="px-4 py-2 border border-gray/30 text-white font-mono text-sm">Energy Drinks</span>
              <span className="px-4 py-2 border border-gray/30 text-white font-mono text-sm">Protein Bars</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default LocationDetail;

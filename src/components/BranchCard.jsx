import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MapPin, Clock } from 'lucide-react';
import { sharedHours } from '../data/gymData';

const BranchCard = ({ branch }) => {
  return (
    <div className="bg-bg border border-gray/20 hover:border-gold transition-colors group flex flex-col h-full">
      {/* Branch Image Placeholder / Actual image if available */}
      <div className="relative h-48 w-full bg-gray/10 overflow-hidden">
        <div className="absolute inset-0 bg-bg/40 group-hover:bg-bg/20 transition-colors z-10"></div>
        <img 
          src={`/assets/facility1.jpg`} 
          alt={branch.name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
        />
        {/* Seal Badge */}
        <div className="absolute top-4 right-4 z-20 h-20 w-20 drop-shadow-lg">
          <img src="/logo/rlogo.png" alt="Seal" className="w-full h-auto scale-[2.2]" />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-display text-3xl text-white mb-4 uppercase">{branch.name}</h3>
        
        <div className="space-y-3 mb-6 flex-grow">
          <div className="flex items-start gap-3">
            <MapPin size={18} className="text-red shrink-0 mt-1" />
            <span className="text-gray text-sm">{branch.address}</span>
          </div>
          
          <div className="flex items-start gap-3">
            <Clock size={18} className="text-red shrink-0 mt-1" />
            <div className="text-gray text-sm flex flex-col">
              {sharedHours.map((h, i) => (
                <span key={i}>{h.day}: {h.time}</span>
              ))}
            </div>
          </div>
        </div>

        <Link 
          to={`/locations/${branch.slug}`} 
          className="inline-block w-full text-center bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-bg font-bold py-3 uppercase tracking-wider transition-colors"
        >
          View Branch Details
        </Link>
      </div>
    </div>
  );
};

BranchCard.propTypes = {
  branch: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export default BranchCard;

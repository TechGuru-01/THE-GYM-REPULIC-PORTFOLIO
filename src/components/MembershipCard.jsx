import PropTypes from 'prop-types';

const MembershipCard = ({ tier, isHighlighted }) => {
  return (
    <div className={`relative bg-offwhite p-8 border-2 transition-transform hover:-translate-y-2 ${isHighlighted ? 'border-red' : 'border-gray/20'}`}>
      
      {/* Small seal badge marker */}
      <div className="absolute -top-4 -right-4 h-24 w-24 opacity-20 pointer-events-none">
        <img src="/logo/rlogo.png" alt="Gym Republic Seal" className="w-full h-auto drop-shadow-md mix-blend-multiply scale-[2.2]" />
      </div>

      {isHighlighted && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red text-white font-bold uppercase tracking-wider text-xs px-4 py-1">
          Most Popular
        </div>
      )}

      <h3 className="font-display text-3xl text-bg mb-2 uppercase">{tier.name}</h3>
      <div className="mb-6 flex items-baseline gap-2">
        <span className="font-display text-5xl text-red">{tier.price}</span>
      </div>

      {/* Geometric divider */}
      <div className="h-px w-full bg-gray/30 mb-6"></div>

      <p className="text-gray font-medium text-sm">
        {tier.description}
      </p>
      
      <button className={`mt-8 w-full py-3 font-bold uppercase tracking-wider transition-colors ${
        isHighlighted 
          ? 'bg-red hover:bg-bg text-white' 
          : 'bg-bg hover:bg-gold text-white'
      }`}>
        Choose Plan
      </button>
    </div>
  );
};

MembershipCard.propTypes = {
  tier: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  isHighlighted: PropTypes.bool,
};

export default MembershipCard;

import PropTypes from 'prop-types';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ name, quote, beforeImage, afterImage }) => {
  return (
    <div className="bg-bg border border-gray/20 p-8 relative mt-12 group hover:border-gold transition-colors">
      <div className="absolute -top-8 left-8 bg-red p-3 rounded-full text-white">
        <Quote size={24} className="fill-current" />
      </div>

      <div className="mt-4 mb-8">
        <p className="text-white italic text-lg leading-relaxed">
          "{quote}"
        </p>
      </div>

      <div className="flex items-center justify-between border-t border-gray/20 pt-6">
        <h4 className="font-display text-2xl text-gold uppercase">{name}</h4>
      </div>

      {/* Optional Before/After photos space */}
      {(beforeImage || afterImage) && (
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="relative h-32 bg-gray/10">
            {beforeImage ? (
              <img src={beforeImage} alt={`Before ${name}`} className="w-full h-full object-cover grayscale" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray text-xs uppercase tracking-widest border border-dashed border-gray/30">Before</div>
            )}
            <span className="absolute bottom-2 left-2 bg-bg/80 text-white text-xs px-2 py-1 font-bold">BEFORE</span>
          </div>
          <div className="relative h-32 bg-gray/10">
            {afterImage ? (
              <img src={afterImage} alt={`After ${name}`} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray text-xs uppercase tracking-widest border border-dashed border-gray/30">After</div>
            )}
            <span className="absolute bottom-2 left-2 bg-red text-white text-xs px-2 py-1 font-bold">AFTER</span>
          </div>
        </div>
      )}
    </div>
  );
};

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  beforeImage: PropTypes.string,
  afterImage: PropTypes.string,
};

export default TestimonialCard;

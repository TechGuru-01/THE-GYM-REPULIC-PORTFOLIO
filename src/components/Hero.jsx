import PropTypes from 'prop-types';

const Hero = ({ title, subtitle, imageSrc }) => {
  return (
    <div className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc || '/assets/facility1.jpg'})` }}
      >
        <div className="absolute inset-0 bg-bg/80 mix-blend-multiply"></div>
        {/* Grunge texture overlay placeholder */}
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl text-white mb-4 tracking-wider uppercase">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gold font-bold text-lg md:text-xl uppercase tracking-widest max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        
        {/* Sharp geometric divider */}
        <div className="mt-8 flex justify-center">
          <div className="h-1 w-24 bg-red"></div>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  imageSrc: PropTypes.string,
};

export default Hero;

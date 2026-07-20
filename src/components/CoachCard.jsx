import PropTypes from 'prop-types';

const CoachCard = ({ name, specialty, imageSrc }) => {
  return (
    <div className="bg-bg border border-gray/20 p-6 flex flex-col items-center text-center">
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gold mb-4">
        <img 
          src={imageSrc || '/assets/staffs.png'} 
          alt={name} 
          className="w-full h-full object-cover" 
        />
      </div>
      <h4 className="font-display text-2xl text-white uppercase">{name}</h4>
      <div className="h-1 w-12 bg-red my-3"></div>
      <p className="text-gray text-sm">{specialty}</p>
    </div>
  );
};

CoachCard.propTypes = {
  name: PropTypes.string.isRequired,
  specialty: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
};

export default CoachCard;

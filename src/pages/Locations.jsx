import Hero from '../components/Hero';
import BranchCard from '../components/BranchCard';
import { branches } from '../data/gymData';

const Locations = () => {
  return (
    <div>
      <Hero 
        title="Our Locations" 
        subtitle="Find a Republic near you." 
        imageSrc="/assets/facility1.jpg" 
      />
      
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-white uppercase mb-4">Choose Your Battlefield</h2>
            <div className="h-1 w-24 bg-red mx-auto"></div>
            <p className="text-gray mt-6 max-w-2xl mx-auto">
              All our branches offer the same uncompromising commitment to your fitness goals. Select a branch below to see facility details and schedules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {branches.map((branch) => (
              <BranchCard key={branch.id} branch={branch} />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Locations;

import Hero from '../components/Hero';
import { servicesList } from '../data/gymData';
import { Dumbbell } from 'lucide-react';

const Services = () => {
  return (
    <div>
      <Hero 
        title="Our Services" 
        subtitle="Programs designed for maximum results." 
        imageSrc="/assets/facility2.jpg" 
      />
      
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-white uppercase mb-4">Training & Classes</h2>
            <div className="h-1 w-24 bg-red mx-auto"></div>
            <p className="text-gray mt-6 max-w-2xl mx-auto">
              Whether your goal is to build strength, lose weight, or improve overall fitness, we have a program for you. (Placeholder services pending owner confirmation).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesList.map((service, index) => (
              <div key={index} className="bg-offwhite p-8 border-l-4 border-gold group hover:bg-gold transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-bg text-gold p-3 rounded group-hover:bg-white group-hover:text-bg transition-colors">
                    <Dumbbell size={32} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-bg uppercase mb-2 group-hover:text-bg">{service.title}</h3>
                    <p className="text-gray font-medium group-hover:text-bg/80">
                      {service.description}
                    </p>
                    {service.placeholder && (
                      <span className="inline-block mt-4 text-xs font-bold uppercase tracking-wider text-red group-hover:text-white bg-red/10 group-hover:bg-red/40 px-2 py-1 rounded">
                        Placeholder
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Services;

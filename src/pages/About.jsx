import Hero from '../components/Hero';

const About = () => {
  return (
    <div>
      <Hero 
        title="Our Story" 
        subtitle="Building a stronger nation, one rep at a time." 
        imageSrc="/assets/owners.jpg" 
      />
      
      <section className="py-20 bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-offwhite text-bg p-8 md:p-12 border-l-8 border-gold">
            <h2 className="font-display text-4xl mb-6 uppercase">Mission & Vision</h2>
            
            <div className="space-y-6 text-gray text-lg">
              <p>
                <strong>Mission:</strong> To provide accessible, high-quality fitness facilities that empower individuals to train hard, stay consistent, and achieve their personal best.
              </p>
              <p>
                <strong>Vision:</strong> To be the leading "Pambansang Gym Bakal" in the Philippines, fostering a community of strength, discipline, and resilience across all our branches.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl text-white mb-6 uppercase">The Gym Republic Difference</h2>
              <div className="space-y-4 text-gray">
                <p>
                  We are not just a gym. We are an institution of hard work. Our facilities are designed for those who are serious about their fitness journey, whether you're a beginner learning the ropes or a seasoned athlete pushing your limits.
                </p>
                <p>
                  With top-tier equipment, expert guidance, and an environment that breathes motivation, we ensure that every session counts. 
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/assets/infog6.jpg" alt="Gym Action" className="w-full h-48 object-cover border border-gray/20" />
              <img src="/assets/infog7.jpg" alt="Gym Setup" className="w-full h-48 object-cover border border-gray/20 mt-8" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

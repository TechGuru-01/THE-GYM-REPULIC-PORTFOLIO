import Hero from '../components/Hero';
import TestimonialCard from '../components/TestimonialCard';

const Testimonials = () => {
  // Placeholder testimonials
  const testimonials = [
    {
      name: "Juan Dela Cruz",
      quote: "Gym Republic changed my life. The equipment is raw, the people are serious, and the gains are real. No excuses.",
      beforeImage: "", // Leave blank for placeholder
      afterImage: ""
    },
    {
      name: "Maria Santos",
      quote: "I used to be intimidated by gym bakal, but the community here is so supportive. The coaches actually care about your form.",
      beforeImage: "",
      afterImage: ""
    },
    {
      name: "Mark Reyes",
      quote: "Best value for money. Complete equipment for powerlifting and bodybuilding. I've been coming here for 2 years and I'm stronger than ever.",
      beforeImage: "",
      afterImage: ""
    }
  ];

  return (
    <div>
      <Hero 
        title="Success Stories" 
        subtitle="Real people. Real results." 
        imageSrc="/assets/members1.jpg" 
      />
      
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-white uppercase mb-4">Member Transformations</h2>
            <div className="h-1 w-24 bg-red mx-auto"></div>
            <p className="text-gray mt-6 max-w-2xl mx-auto">
              {/* Note: Real member photos/videos should be sourced from the Facebook page and dropped into /public/assets/ */}
              Don't just take our word for it. See what our members have to say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, index) => (
              <TestimonialCard 
                key={index} 
                name={test.name} 
                quote={test.quote} 
                beforeImage={test.beforeImage} 
                afterImage={test.afterImage} 
              />
            ))}
          </div>
          
          {/* Join CTA */}
          <div className="mt-24 bg-red p-12 text-center">
            <h2 className="font-display text-4xl text-white uppercase mb-4">Ready to Write Your Own Story?</h2>
            <p className="text-white/80 font-bold mb-8 max-w-xl mx-auto">
              Join Gym Republic today and start your journey towards a stronger, healthier you.
            </p>
            <a href="/contact" className="inline-block bg-white text-bg hover:bg-gold font-bold uppercase tracking-wider px-10 py-4 transition-colors text-lg">
              Start Training Now
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Testimonials;

import Hero from '../components/Hero';
import MembershipCard from '../components/MembershipCard';
import { pricingData } from '../data/gymData';

const Memberships = () => {
  return (
    <div>
      <Hero 
        title="Memberships" 
        subtitle="No hidden fees. Just pure gains." 
        imageSrc="/assets/infog8.jpg" 
      />
      
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-white uppercase mb-4">Pricing Plans</h2>
            <div className="h-1 w-24 bg-red mx-auto"></div>
            <p className="text-gray mt-6 max-w-2xl mx-auto">
              Simple and transparent pricing across all branches. Choose the plan that fits your goals.
            </p>
          </div>

          <div className="space-y-24">
            {pricingData.map((categoryData, idx) => (
              <div key={idx}>
                <h3 className="font-display text-3xl text-gold uppercase mb-8 border-b border-gray/20 pb-4">
                  {categoryData.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {categoryData.tiers.map((tier, tIdx) => (
                    <MembershipCard 
                      key={tIdx} 
                      tier={tier} 
                      isHighlighted={tier.name === "Regular" && categoryData.category === "Monthly Membership"} 
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-offwhite border border-gray/20 p-8 text-center">
            <h4 className="font-display text-2xl text-bg uppercase mb-2">Need a Custom Package?</h4>
            <p className="text-gray font-medium mb-6">Talk to our front desk for corporate rates and long-term commitments.</p>
            <a href="/contact" className="inline-block bg-bg text-white hover:bg-gold font-bold uppercase tracking-wider px-8 py-3 transition-colors">
              Contact Us
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Memberships;

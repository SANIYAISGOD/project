import React from "react";

const Features = () => {
  return (
    <section className="bg-background p-feature-padding">
      <h2 className="text-4xl font-semibold text-center text-foreground">Our Features</h2>
      <div className="grid md:grid-cols-3 gap-2 mt-8">  {/* Decreased gap to gap-2 */}
        
        {/* Feature 1 */}
        <div className="bg-[#FBDEE5] p-6 rounded-[20px] shadow-lg transition-shadow hover:shadow-xl w-[350px] mx-auto">
          <h3 className="text-2xl font-semibold text-primary-foreground">Fungible Tokens</h3>
          <p className="mt-4 text-card-foreground">Use tokens for general trading and market dynamics.</p>
          <a href="#" className="text-primary font-medium mt-4 inline-block hover:underline">Learn More</a>
        </div>

        {/* Feature 2 */}
        <div className="bg-[#CCEFF6] p-6 rounded-[20px] shadow-lg transition-shadow hover:shadow-xl w-[350px] mx-auto">
          <h3 className="text-2xl font-semibold text-primary-foreground">NFTs for Creator Interactions</h3>
          <p className="mt-4 text-card-foreground">Exclusive content for high-value fan interactions.</p>
          <a href="#" className="text-primary font-medium mt-4 inline-block hover:underline">Explore Report</a>
        </div>

        {/* Feature 3 */}
        <div className="bg-[#F9EB71] p-6 rounded-[20px] shadow-lg transition-shadow hover:shadow-xl w-[350px] mx-auto">
          <h3 className="text-2xl font-semibold text-primary-foreground">Influence on Pricing</h3>
          <p className="mt-4 text-card-foreground">Allow token holdings to influence NFT drop eligibility or pricing.</p>
          <a href="#" className="text-primary font-medium mt-4 inline-block hover:underline">Request Free Demo</a>
        </div>
      </div>
    </section>
  );
};

export default Features;



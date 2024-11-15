import React from "react";

const Features = () => {
  return (
    <section className="bg-background p-feature-padding">
      <h2 className="text-4xl font-semibold text-center text-blue">Our Features</h2>
      <div className="grid md:grid-cols-3 gap-4 mt-8">
        {/* Feature 1 (Center) */}
        <div
          className="bg-[#FBDEE5] p-6 rounded-[20px] shadow-lg transition-all hover:shadow-xl hover:scale-105 w-[350px] mx-auto animate-slide-up"
        >
          <h3 className="text-2xl font-semibold text-black">Fungible Tokens</h3>
          <p className="mt-4 text-card-foreground">
            Use tokens for general trading and market dynamics.
          </p>
          <a href="#" className="text-primary font-medium mt-4 inline-block hover:underline">
            Learn More
          </a>
        </div>

        {/* Feature 2 (Left) */}
        <div
          className="bg-[#CCEFF6] p-6 rounded-[20px] shadow-lg transition-all hover:shadow-xl hover:scale-105 w-[350px] mx-auto animate-slide-up-delay-1"
        >
          <h3 className="text-2xl font-semibold text-black">NFTs for Creator Interactions</h3>
          <p className="mt-4 text-card-foreground">
            Exclusive content for high-value fan interactions.
          </p>
          <a href="#" className="text-primary font-medium mt-4 inline-block hover:underline">
            Explore Report
          </a>
        </div>

        {/* Feature 3 (Right) */}
        <div
          className="bg-[#F9EB71] p-6 rounded-[20px] shadow-lg transition-all hover:shadow-xl hover:scale-105 w-[350px] mx-auto animate-slide-up-delay-2"
        >
          <h3 className="text-2xl font-semibold text-black">Influence on Pricing</h3>
          <p className="mt-4 text-card-foreground">
            Allow token holdings to influence NFT drop eligibility or pricing.
          </p>
          <a href="#" className="text-primary font-medium mt-4 inline-block hover:underline">
            Request Free Demo
          </a>
        </div>
      </div>

      <div className="mt-16"></div> {/* Adjust the gap here as needed */}
    </section>
  );
};

export default Features;

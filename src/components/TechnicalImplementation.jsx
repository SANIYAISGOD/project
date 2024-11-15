'use client';

import React, { useEffect, useState } from "react";

const TechnicalImplementation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);  // Trigger animation when section is visible
        } else {
          setIsVisible(false); // Reset when it goes out of view
        }
      },
      { threshold: 0.5 }  // Trigger when 50% of the section is visible
    );
    const element = document.querySelector('.technical-implementation');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      className={`py-20 technical-implementation transition-all ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} 
      style={{ backgroundColor: "#fff8f4" }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between px-18 max-w-6xl mx-auto">
        {/* Left Side (Text Content) */}
        <div className="md:w-1/2 text-black">
          <h2 className="text-4xl font-bold mb-6">Technical Implementation (Solana)</h2>
          <ul className="list-inside pl-8 space-y-6 text-black">
            <li className="text-xl font-semibold">Fungible Tokens:</li>
            <p className="text-base text-gray-800 leading-relaxed">Use Solana's SPL Token program to create and manage tokens. This enables seamless asset creation and trading.</p>

            <li className="text-xl font-semibold">NFTs:</li>
            <p className="text-base text-gray-800 leading-relaxed">Utilize Metaplex's Candy Machine for minting and distributing NFTs. This allows creators to distribute unique assets easily.</p>

            <li className="text-xl font-semibold">User Wallets:</li>
            <p className="text-base text-gray-800 leading-relaxed">Integrate with Solana wallets to manage user assets and facilitate secure transactions.</p>
          </ul>
        </div>

        {/* Right Side (Image or Illustration) */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img 
            src="/path-to-technical-image.jpg" 
            alt="Technical Implementation Illustration" 
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default TechnicalImplementation;



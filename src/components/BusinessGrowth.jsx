'use client';

import React, { useEffect, useState } from "react";

const BusinessGrowth = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);  // Trigger animation when section is visible
        }
      },
      { threshold: 0.3 }  // Trigger when 30% of the section is visible
    );
    const element = document.querySelector('.business-growth');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      className={`py-20 business-growth ${isVisible ? 'animate-slide-up' : ''}`} 
      style={{ backgroundColor: "#fff8f4" }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between px-18 max-w-6xl mx-auto">
        {/* Left Side (Image or Illustration) */}
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img 
            src="/path-to-business-image.jpg" 
            alt="Business Growth Illustration" 
            className="max-w-full h-auto rounded-lg"
          />
        </div>

        {/* Right Side (Text Content) */}
        <div className="md:w-1/2 text-black text-left">
          {/* Main heading */}
          <h2 
            className={`text-4xl font-bold mb-6 text-primary ${isVisible ? 'animate-slide-up' : ''}`}
          >
            Grow Your Business from One to a Hundred Stores Fast
          </h2>
          <p 
            className={`text-base mb-6 text-gray-800 leading-relaxed ${isVisible ? 'animate-slide-up' : ''}`}
          >
            The Sharp POS system helps you improve your operations for your customers. Here's how it can enhance your business:
          </p>

          <div className="space-y-6">
            {/* Features will slide-up together */}
            <div className={`text-xl font-semibold text-primary ${isVisible ? 'animate-slide-up-delay-1' : ''}`}>
              <h3>Use the same rewarding system across all chain stores</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Keep track of rewards for all customers across multiple locations to maintain consistency.
              </p>
            </div>

            <div className={`text-xl font-semibold text-primary ${isVisible ? 'animate-slide-up-delay-2' : ''}`}>
              <h3>Check employee performance & reward accordingly</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Evaluate employee efforts and performance to provide them with appropriate rewards and recognition.
              </p>
            </div>

            <div className={`text-xl font-semibold text-primary ${isVisible ? 'animate-slide-up-delay-3' : ''}`}>
              <h3>See purchase history of customers to know them better</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Access purchase history to provide a personalized experience and improve customer retention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessGrowth;

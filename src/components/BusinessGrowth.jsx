import React from "react";

const BusinessGrowth = () => {
  return (
    <section className="bg-business p-business-padding">
      <h2 className="text-4xl font-semibold text-right">Business Growth</h2>
      <div className="growth-content">
        <div className="content-left">
          <h3 className="text-2xl font-semibold">Scale Your Business</h3>
          <ul>
            <li>Increased visibility</li>
            <li>Enhanced marketing tools</li>
            <li>Seamless integrations</li>
            <li>Boost your bottom line</li>
          </ul>
        </div>
        <div className="content-right">
          <img src="/images/business-growth.jpg" alt="Business Growth" className="rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default BusinessGrowth;

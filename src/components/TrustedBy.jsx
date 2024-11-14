import React from "react";

const TrustedBy = () => {
  return (
    <section className="bg-trusted p-trusted-padding">
      <h2 className="text-4xl font-semibold text-center">Trusted By</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-8">
        <div className="trusted-logo">
          <img src="/images/logo1.png" alt="Logo 1" className="rounded-trusted-card" />
        </div>
        <div className="trusted-logo">
          <img src="/images/logo2.png" alt="Logo 2" className="rounded-trusted-card" />
        </div>
        <div className="trusted-logo">
          <img src="/images/logo3.png" alt="Logo 3" className="rounded-trusted-card" />
        </div>
        <div className="trusted-logo">
          <img src="/images/logo4.png" alt="Logo 4" className="rounded-trusted-card" />
        </div>
        <div className="trusted-logo">
          <img src="/images/logo5.png" alt="Logo 5" className="rounded-trusted-card" />
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;

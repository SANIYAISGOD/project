import React from "react";

const Features = () => {
  return (
    <section className="bg-primary-foreground p-feature-padding">
      <h2 className="text-4xl font-semibold text-center">Our Features</h2>
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {/* Feature 1 */}
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold">Feature One</h3>
          <p className="mt-2">Description of feature one.</p>
        </div>

        {/* Feature 2 */}
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold">Feature Two</h3>
          <p className="mt-2">Description of feature two.</p>
        </div>

        {/* Feature 3 */}
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold">Feature Three</h3>
          <p className="mt-2">Description of feature three.</p>
        </div>

        {/* Feature 4 */}
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold">Feature Four</h3>
          <p className="mt-2">Description of feature four.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;

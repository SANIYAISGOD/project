export default function BusinessGrowth() {
  return (
    <section className="py-20 bg-[#fff8f4]"> {/* Changed background color */}
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
        <div className="md:w-1/2 text-primary">
          <h2 className="text-2xl font-bold mb-4">Grow Your Business from One to a Hundred Stores Fast</h2>
          <p className="text-lg mb-6">Sharp POS system helps you improve your operations for your customers.</p>
          <ul className="list-disc list-inside pl-6 text-secondary-foreground space-y-2">
            <li>Use the same rewarding system across all chain stores</li>
            <li>Check employee performance & reward accordingly</li>
            <li>See purchase history of customers to know them better</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
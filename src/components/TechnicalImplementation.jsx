export default function TechnicalImplementation() {
    return (
      <section className="py-20 bg-[#fff8f4]"> {/* Changed background color */}
        <div className="flex flex-col md:flex-row items-center justify-between px-18 max-w-6xl mx-auto">
          {/* Left Side (Text Content) */}
          <div className="md:w-1/2 text-primary">
            <h2 className="text-2xl font-bold mb-4">Technical Implementation (Solana)</h2>
            <ul className="list-disc list-inside pl-6 text-secondary-foreground space-y-2">
              <li>Fungible Tokens: Use Solana's SPL Token program to create and manage tokens.</li>
              <li>NFTs: Utilize Metaplex's Candy Machine for minting and distributing NFTs.</li>
              <li>User Wallets: Integrate with Solana wallets to manage user assets.</li>
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
  }
import Navbar from "@/components/common/header/Navbar";
import TrustedBy from "@/components/TrustedBy"; 
import Features from "@/components/Features";
import BusinessGrowth from "@/components/BusinessGrowth";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <TrustedBy />
      <Features />
      <BusinessGrowth />
    </div>
  );
}


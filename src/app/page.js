import Navbar from "@/components/common/header/Navbar";
import TrustedBy from "@/components/TrustedBy";
import Features from "@/components/Features";
import TechnicalImplementation from "@/components/TechnicalImplementation";
import BusinessGrowth from "@/components/BusinessGrowth";

export default function Page() {
  return (
    <div className="bg-background text-primary">
      <Navbar />
      <TrustedBy />
      <Features />
      <TechnicalImplementation />
      <BusinessGrowth />
    </div>
  );
}

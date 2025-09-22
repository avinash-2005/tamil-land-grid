import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DistrictFilter from "@/components/DistrictFilter";
import PropertyListings from "@/components/PropertyListings";
import BUSSystem from "@/components/BUSSystem";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <DistrictFilter />
      <PropertyListings />
      <BUSSystem />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

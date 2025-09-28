import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServiceCategories from "@/components/ServiceCategories";
import FeaturedProviders from "@/components/FeaturedProviders";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServiceCategories />
      <FeaturedProviders />
      <Footer />
    </div>
  );
};

export default Index;

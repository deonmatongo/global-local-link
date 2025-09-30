import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Stats from "@/components/Stats";
import ServiceCategories from "@/components/ServiceCategories";
import HowItWorksSimple from "@/components/HowItWorksSimple";
import FeaturedProviders from "@/components/FeaturedProviders";
import PopularServices from "@/components/PopularServices";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <Stats />
      <ServiceCategories />
      <HowItWorksSimple />
      <FeaturedProviders />
      <PopularServices />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;

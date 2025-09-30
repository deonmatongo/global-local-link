import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional service providers helping expats"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 hero-gradient opacity-5"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Find trusted{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              English-speaking
            </span>{" "}
            service providers near you
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Connect with verified professionals who understand your needs as an expat. 
            From legal help to childcare, find trusted services in your language.
          </p>

          {/* Search Bar */}
          <div className="bg-card rounded-2xl p-6 shadow-soft max-w-2xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  placeholder="What service do you need?" 
                  className="pl-12 h-12 border-border bg-background"
                />
              </div>
              
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  placeholder="Enter your location" 
                  className="pl-12 h-12 border-border bg-background"
                />
              </div>
              
              <Button variant="hero" size="lg" className="h-12 px-8 whitespace-nowrap">
                Find Services
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>500+ Verified Providers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>10k+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>Available in 50+ Cities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
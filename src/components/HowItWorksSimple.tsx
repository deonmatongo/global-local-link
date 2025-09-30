import { Card } from "@/components/ui/card";
import { Search, UserCheck, Calendar, Star } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search",
    description: "Browse verified providers in your area"
  },
  {
    icon: UserCheck,
    title: "Choose",
    description: "Compare profiles and read reviews"
  },
  {
    icon: Calendar,
    title: "Book",
    description: "Schedule your service instantly"
  },
  {
    icon: Star,
    title: "Review",
    description: "Share your experience"
  }
];

const HowItWorksSimple = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Finding trusted service providers is easier than ever
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-6 text-center card-hover">
                <div className="w-16 h-16 rounded-full hero-gradient flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                  {index + 1}
                </div>
                <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSimple;

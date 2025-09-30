import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Scale, 
  Baby, 
  Stethoscope, 
  Plane, 
  GraduationCap, 
  Home,
  Heart,
  Briefcase 
} from "lucide-react";

const categories = [
  {
    icon: Scale,
    title: "Legal Services",
    description: "Immigration, contracts, and legal advice",
    count: "45+ providers",
    color: "text-blue-600"
  },
  {
    icon: Baby,
    title: "Childcare",
    description: "Nannies, babysitters, and daycare",
    count: "78+ providers",
    color: "text-pink-600"
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Doctors, therapists, and wellness",
    count: "67+ providers",
    color: "text-green-600"
  },
  {
    icon: Plane,
    title: "Relocation",
    description: "Moving services and settling assistance",
    count: "34+ providers",
    color: "text-purple-600"
  },
  {
    icon: GraduationCap,
    title: "Cultural Coaching",
    description: "Language tutoring and cultural guidance",
    count: "89+ providers",
    color: "text-orange-600"
  },
  {
    icon: Home,
    title: "Home Services",
    description: "Cleaning, maintenance, and repairs",
    count: "92+ providers",
    color: "text-teal-600"
  },
  {
    icon: Heart,
    title: "Personal Care",
    description: "Beauty, fitness, and wellness services",
    count: "56+ providers",
    color: "text-red-600"
  },
  {
    icon: Briefcase,
    title: "Business Services",
    description: "Consulting, accounting, and admin",
    count: "43+ providers",
    color: "text-indigo-600"
  }
];

const ServiceCategories = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Popular Service Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find exactly what you need from our comprehensive range of English-speaking professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="p-6 card-hover cursor-pointer card-gradient border-border/50"
              >
                <div className="text-center">
                  <div className={`inline-flex p-3 rounded-lg bg-background/80 mb-4 ${category.color}`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {category.description}
                  </p>
                  <span className="text-xs text-primary font-medium">
                    {category.count}
                  </span>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="btn-hover-lift">
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
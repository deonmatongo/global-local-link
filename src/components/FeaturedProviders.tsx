import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, CheckCircle } from "lucide-react";

const providers = [
  {
    id: 1,
    name: "Sarah Mitchell",
    title: "Immigration Lawyer",
    location: "Berlin, Germany",
    rating: 4.9,
    reviews: 127,
    price: "€150/hour",
    specialties: ["Visa Applications", "Work Permits", "Family Law"],
    verified: true,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c3?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Emma Thompson",
    title: "Pediatric Nurse & Nanny",
    location: "Amsterdam, Netherlands",
    rating: 5.0,
    reviews: 89,
    price: "€25/hour",
    specialties: ["Infant Care", "Medical Background", "Overnight Care"],
    verified: true,
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Dr. James Wilson",
    title: "General Practitioner",
    location: "Barcelona, Spain",
    rating: 4.8,
    reviews: 203,
    price: "€80/consultation",
    specialties: ["General Medicine", "Telehealth", "Expat Health"],
    verified: true,
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "Rachel Cooper",
    title: "Relocation Specialist",
    location: "Paris, France",
    rating: 4.9,
    reviews: 156,
    price: "€200/package",
    specialties: ["Apartment Hunting", "School Enrollment", "Banking Setup"],
    verified: true,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
  }
];

const FeaturedProviders = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Service Providers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet some of our top-rated professionals who are ready to help you settle in
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {providers.map((provider) => (
            <Card key={provider.id} className="p-6 card-hover cursor-pointer shadow-card">
              {/* Header */}
              <div className="text-center mb-4">
                <div className="relative inline-block mb-3">
                  <img
                    src={provider.avatar}
                    alt={provider.name}
                    className="w-16 h-16 rounded-full object-cover mx-auto"
                  />
                  {provider.verified && (
                    <div className="absolute -bottom-1 -right-1 bg-success rounded-full p-1">
                      <CheckCircle className="h-4 w-4 text-success-foreground" />
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {provider.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {provider.title}
                </p>
                <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4" />
                  <span>{provider.location}</span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium text-foreground">{provider.rating}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  ({provider.reviews} reviews)
                </span>
              </div>

              {/* Specialties */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1 justify-center">
                  {provider.specialties.slice(0, 2).map((specialty, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                  {provider.specialties.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{provider.specialties.length - 2}
                    </Badge>
                  )}
                </div>
              </div>

              {/* Price and CTA */}
              <div className="text-center">
                <div className="text-lg font-semibold text-primary mb-3">
                  {provider.price}
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  View Profile
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            Browse All Providers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProviders;
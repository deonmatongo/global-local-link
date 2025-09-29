import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Star, MapPin, Clock, DollarSign, CheckCircle } from "lucide-react";

const Services = () => {
  const providers = [
    {
      id: 1,
      name: "Sarah Mitchell",
      service: "Immigration Lawyer",
      rating: 4.9,
      reviews: 127,
      price: "$150/hr",
      location: "Berlin, Germany",
      verified: true,
      image: "SM"
    },
    {
      id: 2,
      name: "John Davies",
      service: "Relocation Consultant",
      rating: 4.8,
      reviews: 89,
      price: "$80/hr",
      location: "Amsterdam, Netherlands",
      verified: true,
      image: "JD"
    },
    {
      id: 3,
      name: "Maria Garcia",
      service: "Childcare Provider",
      rating: 5.0,
      reviews: 203,
      price: "$25/hr",
      location: "Madrid, Spain",
      verified: true,
      image: "MG"
    },
    {
      id: 4,
      name: "Dr. Thomas Weber",
      service: "Healthcare Professional",
      rating: 4.7,
      reviews: 156,
      price: "$120/hr",
      location: "Munich, Germany",
      verified: true,
      image: "TW"
    },
    {
      id: 5,
      name: "Emma Johnson",
      service: "Cultural Coach",
      rating: 4.9,
      reviews: 94,
      price: "$60/hr",
      location: "Paris, France",
      verified: true,
      image: "EJ"
    },
    {
      id: 6,
      name: "Carlos Rodriguez",
      service: "Tax Consultant",
      rating: 4.8,
      reviews: 112,
      price: "$100/hr",
      location: "Barcelona, Spain",
      verified: true,
      image: "CR"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Search & Filter Section */}
      <section className="border-b bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Browse Services</h1>
          
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <Input placeholder="Search services..." className="md:col-span-2" />
            <Input placeholder="Location" />
            <Button variant="hero">Search</Button>
          </div>

          <div className="flex flex-wrap gap-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Service Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="legal">Legal Services</SelectItem>
                <SelectItem value="childcare">Childcare</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="relocation">Relocation</SelectItem>
                <SelectItem value="cultural">Cultural Coaching</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5 Stars</SelectItem>
                <SelectItem value="4">4+ Stars</SelectItem>
                <SelectItem value="3">3+ Stars</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="immediate">Available Now</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <p className="text-muted-foreground">Showing {providers.length} results</p>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="reviews">Most Reviews</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {providers.map((provider) => (
              <Card key={provider.id} className="hover:shadow-lg transition-smooth">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full hero-gradient flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {provider.image}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">{provider.name}</CardTitle>
                        {provider.verified && (
                          <CheckCircle className="w-4 h-4 text-success" />
                        )}
                      </div>
                      <CardDescription>{provider.service}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="font-semibold">{provider.rating}</span>
                      <span className="text-muted-foreground">({provider.reviews} reviews)</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{provider.location}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <DollarSign className="w-4 h-4" />
                      <span>{provider.price}</span>
                    </div>

                    <Button variant="hero" className="w-full mt-4">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

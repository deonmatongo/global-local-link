import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, MapPin, Clock, DollarSign, CheckCircle, Heart, Zap, Globe, Award, MessageCircle, MapIcon, List } from "lucide-react";
import { useState } from "react";

const Services = () => {
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const [savedProviders, setSavedProviders] = useState<number[]>([]);

  const toggleSave = (id: number) => {
    setSavedProviders(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

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
      image: "SM",
      languages: ["English", "German", "French"],
      responseTime: "Within 2 hours",
      experience: "12 years",
      instantBook: true,
      backgroundCheck: true,
      specialties: ["Visa Applications", "Work Permits", "Family Law"]
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
      image: "JD",
      languages: ["English", "Dutch"],
      responseTime: "Within 4 hours",
      experience: "8 years",
      instantBook: true,
      backgroundCheck: true,
      specialties: ["Apartment Hunting", "School Enrollment", "Banking"]
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
      image: "MG",
      languages: ["English", "Spanish"],
      responseTime: "Within 1 hour",
      experience: "15 years",
      instantBook: false,
      backgroundCheck: true,
      specialties: ["Infant Care", "Educational Activities", "Overnight Care"]
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
      image: "TW",
      languages: ["English", "German"],
      responseTime: "Within 3 hours",
      experience: "20 years",
      instantBook: true,
      backgroundCheck: true,
      specialties: ["General Medicine", "Telehealth", "Expat Health"]
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
      image: "EJ",
      languages: ["English", "French", "Spanish"],
      responseTime: "Within 2 hours",
      experience: "10 years",
      instantBook: true,
      backgroundCheck: false,
      specialties: ["Cultural Integration", "Language Training", "Social Customs"]
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
      image: "CR",
      languages: ["English", "Spanish"],
      responseTime: "Within 24 hours",
      experience: "18 years",
      instantBook: false,
      backgroundCheck: true,
      specialties: ["Expat Taxation", "International Tax", "Accounting"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Search & Filter Section */}
      <section className="border-b bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Browse Services</h1>
            <div className="flex gap-2">
              <Button 
                variant={viewMode === "list" ? "default" : "outline"} 
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4 mr-2" />
                List
              </Button>
              <Button 
                variant={viewMode === "map" ? "default" : "outline"} 
                size="sm"
                onClick={() => setViewMode("map")}
              >
                <MapIcon className="w-4 h-4 mr-2" />
                Map
              </Button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <Input placeholder="Search services..." className="md:col-span-2" />
            <Input placeholder="Location" />
            <Button variant="hero">Search</Button>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {/* Filters Sidebar */}
            <Card className="p-4 h-fit">
              <h3 className="font-semibold mb-4">Filters</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium mb-3">Service Type</h4>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Services" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="legal">Legal Services</SelectItem>
                      <SelectItem value="childcare">Childcare</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="relocation">Relocation</SelectItem>
                      <SelectItem value="cultural">Cultural Coaching</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3">Languages</h4>
                  <div className="space-y-2">
                    {["English", "German", "French", "Spanish", "Dutch"].map((lang) => (
                      <div key={lang} className="flex items-center space-x-2">
                        <Checkbox id={lang} />
                        <label htmlFor={lang} className="text-sm cursor-pointer">
                          {lang}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3">Quick Filters</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="instant" />
                      <label htmlFor="instant" className="text-sm cursor-pointer">
                        Instant Booking
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="verified" />
                      <label htmlFor="verified" className="text-sm cursor-pointer">
                        Verified Only
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="background" />
                      <label htmlFor="background" className="text-sm cursor-pointer">
                        Background Checked
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3">Rating</h4>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any Rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 Stars</SelectItem>
                      <SelectItem value="4">4+ Stars</SelectItem>
                      <SelectItem value="3">3+ Stars</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3">Experience</h4>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any Experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5+ years</SelectItem>
                      <SelectItem value="10">10+ years</SelectItem>
                      <SelectItem value="15">15+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button variant="outline" className="w-full">
                  Clear All Filters
                </Button>
              </div>
            </Card>

            {/* Results Section */}
            <div className="md:col-span-3 space-y-6">

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

              {viewMode === "list" ? (
                <div className="grid gap-6">
                  {providers.map((provider) => (
                    <Card key={provider.id} className="hover:shadow-lg transition-smooth">
                      <div className="p-6">
                        <div className="flex flex-col md:flex-row gap-6">
                          {/* Provider Info */}
                          <div className="flex gap-4 flex-1">
                            <div className="w-20 h-20 rounded-full hero-gradient flex items-center justify-center text-primary-foreground font-bold text-xl flex-shrink-0">
                              {provider.image}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="text-xl font-semibold">{provider.name}</h3>
                                {provider.verified && (
                                  <CheckCircle className="w-5 h-5 text-success" />
                                )}
                              </div>
                              <p className="text-muted-foreground mb-3">{provider.service}</p>
                              
                              <div className="flex flex-wrap gap-4 text-sm mb-3">
                                <div className="flex items-center gap-1">
                                  <Star className="w-4 h-4 fill-primary text-primary" />
                                  <span className="font-semibold">{provider.rating}</span>
                                  <span className="text-muted-foreground">({provider.reviews})</span>
                                </div>
                                <div className="flex items-center gap-1 text-muted-foreground">
                                  <MapPin className="w-4 h-4" />
                                  <span>{provider.location}</span>
                                </div>
                                <div className="flex items-center gap-1 text-muted-foreground">
                                  <Clock className="w-4 h-4" />
                                  <span>{provider.responseTime}</span>
                                </div>
                                <div className="flex items-center gap-1 text-muted-foreground">
                                  <Award className="w-4 h-4" />
                                  <span>{provider.experience}</span>
                                </div>
                              </div>

                              <div className="flex flex-wrap gap-2 mb-3">
                                {provider.instantBook && (
                                  <Badge variant="secondary" className="gap-1">
                                    <Zap className="w-3 h-3" />
                                    Instant Book
                                  </Badge>
                                )}
                                {provider.backgroundCheck && (
                                  <Badge variant="secondary" className="gap-1">
                                    <CheckCircle className="w-3 h-3" />
                                    Background Checked
                                  </Badge>
                                )}
                                <Badge variant="outline" className="gap-1">
                                  <Globe className="w-3 h-3" />
                                  {provider.languages.length} languages
                                </Badge>
                              </div>

                              <div className="flex flex-wrap gap-2">
                                {provider.specialties.slice(0, 3).map((specialty, idx) => (
                                  <Badge key={idx} variant="outline" className="text-xs">
                                    {specialty}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex flex-col justify-between items-end gap-4 min-w-[200px]">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => toggleSave(provider.id)}
                              className="self-end"
                            >
                              <Heart 
                                className={`w-5 h-5 ${savedProviders.includes(provider.id) ? 'fill-red-500 text-red-500' : ''}`} 
                              />
                            </Button>

                            <div className="text-right">
                              <div className="text-2xl font-bold text-foreground mb-2">
                                {provider.price}
                              </div>
                              
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="outline" size="sm" className="w-full mb-2">
                                    <MessageCircle className="w-4 h-4 mr-2" />
                                    Quick View
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-2xl">
                                  <DialogHeader>
                                    <DialogTitle className="flex items-center gap-2">
                                      {provider.name}
                                      {provider.verified && (
                                        <CheckCircle className="w-5 h-5 text-success" />
                                      )}
                                    </DialogTitle>
                                    <DialogDescription>{provider.service}</DialogDescription>
                                  </DialogHeader>
                                  <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                      <div className="w-16 h-16 rounded-full hero-gradient flex items-center justify-center text-primary-foreground font-bold text-xl">
                                        {provider.image}
                                      </div>
                                      <div>
                                        <div className="flex items-center gap-2 mb-1">
                                          <Star className="w-4 h-4 fill-primary text-primary" />
                                          <span className="font-semibold">{provider.rating}</span>
                                          <span className="text-muted-foreground">({provider.reviews} reviews)</span>
                                        </div>
                                        <p className="text-sm text-muted-foreground">{provider.location}</p>
                                      </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <h4 className="font-semibold mb-2">Languages</h4>
                                        <p className="text-sm text-muted-foreground">
                                          {provider.languages.join(", ")}
                                        </p>
                                      </div>
                                      <div>
                                        <h4 className="font-semibold mb-2">Experience</h4>
                                        <p className="text-sm text-muted-foreground">{provider.experience}</p>
                                      </div>
                                      <div>
                                        <h4 className="font-semibold mb-2">Response Time</h4>
                                        <p className="text-sm text-muted-foreground">{provider.responseTime}</p>
                                      </div>
                                      <div>
                                        <h4 className="font-semibold mb-2">Rate</h4>
                                        <p className="text-sm font-semibold">{provider.price}</p>
                                      </div>
                                    </div>

                                    <div>
                                      <h4 className="font-semibold mb-2">Specialties</h4>
                                      <div className="flex flex-wrap gap-2">
                                        {provider.specialties.map((specialty, idx) => (
                                          <Badge key={idx} variant="secondary">
                                            {specialty}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>

                                    <Button variant="hero" className="w-full">
                                      Book Now
                                    </Button>
                                  </div>
                                </DialogContent>
                              </Dialog>

                              <Button variant="hero" size="sm" className="w-full">
                                Book Now
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="p-6 h-[600px] flex items-center justify-center">
                  <div className="text-center">
                    <MapIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Map View</h3>
                    <p className="text-muted-foreground">
                      Map integration coming soon. View providers on an interactive map.
                    </p>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

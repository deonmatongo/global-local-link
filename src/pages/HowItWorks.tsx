import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, UserCheck, Calendar, CreditCard, Star, Shield, MessageCircle } from "lucide-react";

const HowItWorks = () => {
  const forClients = [
    {
      icon: Search,
      title: "Search & Browse",
      description: "Browse through our curated list of verified English-speaking service providers. Filter by service type, location, ratings, and availability."
    },
    {
      icon: UserCheck,
      title: "Choose Your Provider",
      description: "Review provider profiles, read reviews from other expats, and compare prices to find the perfect match for your needs."
    },
    {
      icon: Calendar,
      title: "Book a Service",
      description: "Select your preferred date and time, provide service details, and confirm your booking with a few clicks."
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      description: "Pay securely through our platform. Your payment is protected until the service is completed to your satisfaction."
    },
    {
      icon: Star,
      title: "Leave a Review",
      description: "After the service is completed, share your experience to help other expats make informed decisions."
    }
  ];

  const forProviders = [
    {
      icon: UserCheck,
      title: "Create Your Profile",
      description: "Sign up and create a detailed profile showcasing your services, expertise, pricing, and availability."
    },
    {
      icon: Shield,
      title: "Get Verified",
      description: "Complete our verification process to earn a trust badge and stand out from the competition."
    },
    {
      icon: MessageCircle,
      title: "Receive Booking Requests",
      description: "Get notified when clients book your services. Accept or decline based on your availability."
    },
    {
      icon: Calendar,
      title: "Manage Your Schedule",
      description: "Use our calendar tool to manage bookings, update availability, and organize your workload."
    },
    {
      icon: CreditCard,
      title: "Get Paid",
      description: "Complete the service and receive payment automatically through our secure payment system."
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Verified Providers",
      description: "All service providers go through background checks and verification processes."
    },
    {
      icon: Star,
      title: "Real Reviews",
      description: "Read authentic reviews from verified clients to make informed decisions."
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Your payments are protected with industry-standard security measures."
    },
    {
      icon: MessageCircle,
      title: "Direct Communication",
      description: "Message providers directly through our platform before booking."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How ExpatConnect Works
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Connecting expats with trusted English-speaking service providers has never been easier.
          </p>
        </div>
      </section>

      {/* Main Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="clients" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="clients">For Clients</TabsTrigger>
              <TabsTrigger value="providers">For Providers</TabsTrigger>
            </TabsList>
            
            <TabsContent value="clients">
              <div className="space-y-8">
                {forClients.map((step, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <step.icon className="w-6 h-6 text-primary" />
                            <CardTitle>{step.title}</CardTitle>
                          </div>
                          <CardDescription className="text-base">{step.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Button variant="hero" size="lg">
                  Start Browsing Services
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="providers">
              <div className="space-y-8">
                {forProviders.map((step, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <step.icon className="w-6 h-6 text-primary" />
                            <CardTitle>{step.title}</CardTitle>
                          </div>
                          <CardDescription className="text-base">{step.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Button variant="hero" size="lg">
                  Become a Provider
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose ExpatConnect?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We've built trust and safety into every aspect of our platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is ExpatConnect available in my city?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We're currently available in major European cities and expanding rapidly. Check our search page to see if providers are available in your area.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How are providers verified?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All providers undergo identity verification, background checks, and professional credential verification where applicable. We also monitor reviews and ratings closely.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What payment methods do you accept?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We accept all major credit cards, debit cards, and digital payment methods. All transactions are secured with industry-standard encryption.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What if I'm not satisfied with a service?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We have a customer satisfaction guarantee. If you're not happy with a service, contact our support team within 48 hours and we'll work to make it right.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of expats who have found the services they need on ExpatConnect.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="hero" size="lg">
              Browse Services
            </Button>
            <Button variant="outline" size="lg">
              Become a Provider
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;

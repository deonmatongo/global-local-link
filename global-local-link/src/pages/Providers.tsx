import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, DollarSign, Users, Calendar, TrendingUp, Shield } from "lucide-react";

const Providers = () => {
  const benefits = [
    {
      icon: Users,
      title: "Access to Expat Community",
      description: "Connect with thousands of expats seeking trusted English-speaking service providers."
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Manage your availability and bookings on your own terms with our easy-to-use calendar."
    },
    {
      icon: DollarSign,
      title: "Set Your Own Rates",
      description: "You control your pricing. We only take a small commission to keep the platform running."
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Get paid safely and on time through our secure payment system with fraud protection."
    },
    {
      icon: TrendingUp,
      title: "Grow Your Business",
      description: "Build your reputation with reviews and ratings, attracting more clients over time."
    },
    {
      icon: CheckCircle,
      title: "Verification Badge",
      description: "Stand out with our verification badge after completing our simple background check process."
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Create Your Profile",
      description: "Sign up and tell us about your services, experience, and availability."
    },
    {
      number: "2",
      title: "Get Verified",
      description: "Complete our quick verification process to build trust with clients."
    },
    {
      number: "3",
      title: "Start Accepting Bookings",
      description: "Receive booking requests and start growing your client base."
    },
    {
      number: "4",
      title: "Get Paid",
      description: "Complete services and receive payments securely through our platform."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Grow Your Business with ExpatConnect
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join our platform and connect with expats who need your expertise. Build your reputation, manage bookings, and grow your income.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Join as Provider
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Join ExpatConnect?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We provide everything you need to succeed as a service provider in the expat community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How to Get Started</h2>
            <p className="text-muted-foreground text-lg">
              Four simple steps to start growing your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full hero-gradient flex items-center justify-center text-primary-foreground font-bold text-2xl mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-muted-foreground text-lg">
              Simple, fair pricing with no hidden fees
            </p>
          </div>

          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Commission Structure</CardTitle>
              <CardDescription>Only pay when you earn</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">15%</div>
                <p className="text-muted-foreground">Platform commission per booking</p>
              </div>
              
              <div className="border-t pt-6">
                <h4 className="font-semibold mb-4">What's Included:</h4>
                <ul className="space-y-3">
                  {[
                    "Unlimited profile visibility",
                    "Booking management system",
                    "Secure payment processing",
                    "Customer support",
                    "Marketing to expat community",
                    "Review and rating system"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button variant="hero" size="lg" className="w-full">
                Start Your Free Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of service providers already helping expats settle into their new homes.
          </p>
          <Button variant="hero" size="lg">
            Create Your Provider Account
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Providers;

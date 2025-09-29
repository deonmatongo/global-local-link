import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto p-8 md:p-12 text-center shadow-lg card-gradient">
          <div className="w-16 h-16 rounded-full hero-gradient flex items-center justify-center mx-auto mb-6">
            <Mail className="h-8 w-8 text-primary-foreground" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Stay Connected
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Get expat tips, new provider updates, and exclusive offers delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email"
              placeholder="Enter your email" 
              className="h-12 flex-1"
            />
            <Button variant="hero" size="lg" className="h-12 px-8 whitespace-nowrap">
              Subscribe
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;

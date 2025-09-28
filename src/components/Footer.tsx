import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Mail,
  Phone,
  MapPin 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg hero-gradient flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">EX</span>
              </div>
              <span className="text-xl font-bold text-foreground">ExpatConnect</span>
            </div>
            <p className="text-muted-foreground">
              Connecting expats with trusted English-speaking service providers worldwide.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* For Clients */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">For Clients</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/services" className="hover:text-foreground transition-smooth">Browse Services</a></li>
              <li><a href="/how-it-works" className="hover:text-foreground transition-smooth">How It Works</a></li>
              <li><a href="/safety" className="hover:text-foreground transition-smooth">Safety & Trust</a></li>
              <li><a href="/help" className="hover:text-foreground transition-smooth">Help Center</a></li>
            </ul>
          </div>

          {/* For Providers */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">For Providers</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/join" className="hover:text-foreground transition-smooth">Join as Provider</a></li>
              <li><a href="/provider-guide" className="hover:text-foreground transition-smooth">Provider Guide</a></li>
              <li><a href="/verification" className="hover:text-foreground transition-smooth">Verification Process</a></li>
              <li><a href="/success-stories" className="hover:text-foreground transition-smooth">Success Stories</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Stay Updated</h3>
            <p className="text-muted-foreground text-sm">
              Get the latest updates and tips for expat life.
            </p>
            <div className="space-y-2">
              <Input 
                placeholder="Enter your email" 
                className="h-10"
              />
              <Button variant="hero" size="sm" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 ExpatConnect. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="/privacy" className="hover:text-foreground transition-smooth">Privacy Policy</a>
              <a href="/terms" className="hover:text-foreground transition-smooth">Terms of Service</a>
              <a href="/cookies" className="hover:text-foreground transition-smooth">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
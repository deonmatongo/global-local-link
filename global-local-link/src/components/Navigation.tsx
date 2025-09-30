import { Button } from "@/components/ui/button";
import { Search, Menu, User } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg hero-gradient flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">EX</span>
            </div>
            <span className="text-xl font-bold text-foreground">ExpatConnect</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/services" className="text-foreground/80 hover:text-foreground transition-smooth">
              Browse Services
            </a>
            <a href="/providers" className="text-foreground/80 hover:text-foreground transition-smooth">
              For Providers
            </a>
            <a href="/how-it-works" className="text-foreground/80 hover:text-foreground transition-smooth">
              How it Works
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              Sign In
            </Button>
            <Button variant="hero" size="sm">
              Get Started
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
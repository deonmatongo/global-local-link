import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, TrendingUp } from "lucide-react";

const popularSearches = [
  "Immigration Lawyer",
  "English Nanny",
  "Relocation Services",
  "Family Doctor",
  "Tax Consultant",
  "Moving Company",
  "Language Tutor",
  "Childcare"
];

const PopularServices = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Trending Now</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Popular Searches
            </h2>
            <p className="text-xl text-muted-foreground">
              What other expats are looking for
            </p>
          </div>

          <Card className="p-8 shadow-lg">
            <div className="flex flex-wrap gap-3 justify-center">
              {popularSearches.map((search, index) => (
                <Badge 
                  key={index}
                  variant="outline"
                  className="text-sm px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  {search}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PopularServices;

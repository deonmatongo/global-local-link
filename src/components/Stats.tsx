import { Card } from "@/components/ui/card";
import { Star, TrendingUp, Users, Shield } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Happy Clients",
      color: "text-blue-600"
    },
    {
      icon: Shield,
      value: "500+",
      label: "Verified Providers",
      color: "text-green-600"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Average Rating",
      color: "text-yellow-600"
    },
    {
      icon: TrendingUp,
      value: "50+",
      label: "Cities Covered",
      color: "text-purple-600"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center card-hover">
              <div className={`inline-flex p-3 rounded-lg bg-background/80 mb-3 ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

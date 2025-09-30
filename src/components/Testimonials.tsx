import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael Chen",
    role: "Software Engineer",
    location: "Berlin, Germany",
    image: "MC",
    rating: 5,
    text: "Finding a reliable immigration lawyer was so stressful until I found ExpatConnect. Sarah helped me navigate the visa process smoothly. Highly recommend!"
  },
  {
    name: "Lisa Anderson",
    role: "Marketing Manager",
    location: "Amsterdam, Netherlands",
    image: "LA",
    rating: 5,
    text: "As a new parent in a foreign country, finding English-speaking childcare was crucial. Emma has been amazing with our daughter. This platform is a lifesaver!"
  },
  {
    name: "David Kumar",
    role: "Entrepreneur",
    location: "Barcelona, Spain",
    image: "DK",
    rating: 5,
    text: "The relocation service made our move so much easier. From finding an apartment to setting up utilities, Rachel handled everything professionally."
  }
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Expats Say About Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from expats who found the help they needed
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover shadow-card">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

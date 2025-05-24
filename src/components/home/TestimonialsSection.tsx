
import { Quote, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "CWPH changed my perspective on mental health. The peer support groups gave me a safe space to share and heal.",
      author: "Sarah M.",
      role: "Psychology Student",
      rating: 5
    },
    {
      quote: "The meditation sessions helped me manage stress during finals. I'm so grateful for this amazing community!",
      author: "Alex K.",
      role: "Engineering Student", 
      rating: 5
    },
    {
      quote: "Being part of CWPH as a volunteer has been incredibly rewarding. We're making a real difference on campus.",
      author: "Maya P.",
      role: "Pre-Med Student",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-wellness-forest mb-6">
            What Students <span className="text-gradient">Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from our community members about how CWPH has impacted their wellness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-wellness-cream to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-wellness-mint/20 animate-slide-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex items-center mb-4">
                <Quote className="h-6 w-6 text-wellness-sage mr-2" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t border-wellness-mint/20 pt-4">
                <p className="font-semibold text-wellness-forest">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/testimonials">
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-wellness-sage text-wellness-sage hover:bg-wellness-sage hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
            >
              Read More Stories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

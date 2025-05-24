
import { Quote, Star, Heart } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "CWPH changed my perspective on mental health. The peer support groups gave me a safe space to share and heal. I went from feeling isolated to having a community that truly understands.",
      author: "Sarah M.",
      role: "Psychology Student",
      program: "Peer Support Groups",
      rating: 5,
      impact: "Found community and support"
    },
    {
      quote: "The meditation sessions helped me manage stress during finals. I learned techniques that I still use daily. It's amazing how 30 minutes of mindfulness can change your entire day.",
      author: "Alex K.",
      role: "Engineering Student",
      program: "Meditation & Yoga",
      rating: 5,
      impact: "Reduced stress and anxiety"
    },
    {
      quote: "Being part of CWPH as a volunteer has been incredibly rewarding. We're making a real difference on campus. I've grown so much personally while helping others.",
      author: "Maya P.",
      role: "Pre-Med Student",
      program: "Campus Campaigns",
      rating: 5,
      impact: "Personal growth and leadership"
    },
    {
      quote: "The wellness workshops taught me practical skills for managing anxiety. The facilitators were knowledgeable and created such a welcoming environment.",
      author: "Jordan T.",
      role: "Business Student",
      program: "Wellness Workshops",
      rating: 5,
      impact: "Better anxiety management"
    },
    {
      quote: "I was struggling with depression and didn't know where to turn. CWPH connected me with resources and a support network that saved my college experience.",
      author: "Riley C.",
      role: "Literature Student",
      program: "Peer Support Groups",
      rating: 5,
      impact: "Mental health recovery"
    },
    {
      quote: "The health drives made wellness accessible and fun. I learned about nutrition and got connected with campus health services I didn't even know existed.",
      author: "Sam L.",
      role: "Computer Science Student",
      program: "Health Drives",
      rating: 5,
      impact: "Improved physical health"
    }
  ];

  const stats = [
    { number: "95%", label: "Would Recommend to a Friend" },
    { number: "87%", label: "Reported Improved Wellbeing" },
    { number: "92%", label: "Continued Participation" },
    { number: "500+", label: "Students Helped" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-wellness-cream via-wellness-sky/30 to-wellness-mint/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-wellness-forest animate-fade-in">
            Student <span className="text-gradient">Stories</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Real experiences from students whose lives have been positively impacted by our wellness programs. 
            These are their stories of growth, healing, and community.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-3xl md:text-4xl font-bold text-wellness-sage mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20 bg-wellness-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-wellness-forest mb-6">Transformative Experiences</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every story matters. Here's how CWPH has made a difference in students' lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-wellness-mint/20 group hover:-translate-y-1 animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center justify-between mb-4">
                  <Quote className="h-8 w-8 text-wellness-sage" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="border-t border-wellness-mint/20 pt-4 mb-4">
                  <p className="font-semibold text-wellness-forest text-lg">{testimonial.author}</p>
                  <p className="text-sm text-gray-600 mb-2">{testimonial.role}</p>
                  <p className="text-sm text-wellness-sage font-medium">{testimonial.program}</p>
                </div>
                
                <div className="bg-wellness-mint/10 rounded-xl p-3">
                  <p className="text-sm font-medium text-wellness-forest">Impact:</p>
                  <p className="text-sm text-gray-600">{testimonial.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 text-wellness-sage" />
          <h2 className="text-3xl md:text-4xl font-bold text-wellness-forest mb-6">Share Your Story</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Have you been part of CWPH programs? We'd love to hear about your experience 
            and how our community has impacted your wellness journey.
          </p>
          
          <div className="bg-wellness-cream/50 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-wellness-forest mb-4">Why Share Your Story?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-medium text-wellness-sage mb-2">Inspire Others</h4>
                <p className="text-gray-600 text-sm">Your experience could encourage someone to seek support</p>
              </div>
              <div>
                <h4 className="font-medium text-wellness-sage mb-2">Build Community</h4>
                <p className="text-gray-600 text-sm">Help others feel less alone in their wellness journey</p>
              </div>
              <div>
                <h4 className="font-medium text-wellness-sage mb-2">Reduce Stigma</h4>
                <p className="text-gray-600 text-sm">Normalize conversations about mental health and wellness</p>
              </div>
              <div>
                <h4 className="font-medium text-wellness-sage mb-2">Improve Programs</h4>
                <p className="text-gray-600 text-sm">Your feedback helps us enhance our offerings</p>
              </div>
            </div>
          </div>
          
          <Link to="/contact">
            <Button 
              size="lg"
              className="bg-wellness-sage hover:bg-wellness-forest text-white px-8 py-4 rounded-xl text-lg font-semibold"
            >
              Share Your Story
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-wellness-sage to-wellness-forest text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Story?</h2>
          <p className="text-xl text-wellness-cream mb-8 leading-relaxed">
            Join hundreds of students who have found support, community, and growth through CWPH programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/programs">
              <Button 
                size="lg"
                className="bg-white text-wellness-forest hover:bg-wellness-cream px-8 py-4 rounded-xl font-semibold"
              >
                Explore Programs
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-wellness-forest px-8 py-4 rounded-xl font-semibold"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

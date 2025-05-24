
import { Button } from "../ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-wellness-cream via-wellness-sky/30 to-wellness-mint/20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-wellness-lavender/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-32 h-32 bg-wellness-peach/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-wellness-mint/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-wellness-mint/20">
            <Sparkles className="h-4 w-4 text-wellness-sage" />
            <span className="text-sm font-medium text-wellness-forest">Student-Led Wellness Initiative</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-wellness-forest">Centre for</span>
            <br />
            <span className="text-gradient">Wellness & Positive Health</span>
          </h1>

          {/* Mission Statement */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering holistic wellness through positive community action
          </p>

          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join our student-led movement dedicated to promoting mental health, physical wellbeing, 
            and creating a supportive campus community where everyone can thrive.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/programs">
              <Button 
                size="lg" 
                className="bg-wellness-sage hover:bg-wellness-forest text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Explore Our Programs
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-wellness-sage text-wellness-sage hover:bg-wellness-sage hover:text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300"
              >
                Learn About Us
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-wellness-mint/20">
              <div className="text-3xl font-bold text-wellness-forest mb-2">500+</div>
              <div className="text-gray-600">Students Reached</div>
            </div>
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-wellness-mint/20">
              <div className="text-3xl font-bold text-wellness-forest mb-2">20+</div>
              <div className="text-gray-600">Wellness Programs</div>
            </div>
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-wellness-mint/20">
              <div className="text-3xl font-bold text-wellness-forest mb-2">3</div>
              <div className="text-gray-600">Years of Impact</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

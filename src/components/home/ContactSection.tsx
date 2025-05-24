
import { Mail, MessageCircle, Users, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-wellness-sage to-wellness-forest text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join Our <span className="text-wellness-mint">Community?</span>
          </h2>
          <p className="text-xl text-wellness-cream max-w-3xl mx-auto leading-relaxed">
            Whether you're looking for support, want to volunteer, or just have questions, 
            we're here to connect with you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center group animate-slide-up">
            <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <MessageCircle className="h-8 w-8 text-wellness-mint" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Get Support</h3>
            <p className="text-wellness-cream leading-relaxed">
              Reach out if you need someone to talk to or want to join our support groups.
            </p>
          </div>

          <div className="text-center group animate-slide-up" style={{animationDelay: '0.1s'}}>
            <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="h-8 w-8 text-wellness-mint" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Volunteer</h3>
            <p className="text-wellness-cream leading-relaxed">
              Join our team and help make a positive impact on campus wellness.
            </p>
          </div>

          <div className="text-center group animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail className="h-8 w-8 text-wellness-mint" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Stay Connected</h3>
            <p className="text-wellness-cream leading-relaxed">
              Get updates on events, programs, and wellness resources.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link to="/contact">
            <Button 
              size="lg"
              className="bg-white text-wellness-forest hover:bg-wellness-cream px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};


import { Heart, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-serenity-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white/10 p-2 rounded-xl">
                <Heart className="h-6 w-6 text-serenity-soft" />
              </div>
              <div>
                <span className="text-xl font-bold">CWPH</span>
                <p className="text-sm text-serenity-soft leading-tight">Centre for Wellness & Positive Health</p>
              </div>
            </div>
            <p className="text-serenity-mist mb-4 leading-relaxed">
              Empowering holistic wellness through positive community action. 
              We're a student-led organization dedicated to promoting mental and physical wellbeing on campus.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-serenity-soft hover:text-white transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z"/>
                </svg>
              </a>
              <a href="#" className="text-serenity-soft hover:text-white transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-serenity-soft">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-serenity-mist hover:text-white transition-colors duration-200">About Us</Link></li>
              <li><Link to="/programs" className="text-serenity-mist hover:text-white transition-colors duration-200">Our Programs</Link></li>
              <li><Link to="/events" className="text-serenity-mist hover:text-white transition-colors duration-200">Events</Link></li>
              <li><Link to="/contact" className="text-serenity-mist hover:text-white transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-serenity-soft">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-serenity-soft" />
                <span className="text-serenity-mist text-sm">cwph@university.edu</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-serenity-soft" />
                <span className="text-serenity-mist text-sm">Student Center, Room 204</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-serenity-soft/20 mt-8 pt-8 text-center">
          <p className="text-serenity-mist text-sm">
            © 2024 Centre for Wellness and Positive Health. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

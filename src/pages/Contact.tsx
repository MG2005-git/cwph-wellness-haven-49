
import { useState } from "react";
import { Mail, MapPin, Phone, Send, Heart, Users, MessageCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useToast } from "../hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "cwph@university.edu",
      description: "Send us a message anytime"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Student Center, Room 204",
      description: "Office hours: Mon-Fri 10AM-4PM"
    },
    {
      icon: Phone,
      title: "Crisis Support",
      details: "Campus Counseling: (555) 123-4567",
      description: "24/7 support available"
    }
  ];

  const reasons = [
    {
      icon: MessageCircle,
      title: "Need Support",
      description: "Looking for someone to talk to or want to join our support groups"
    },
    {
      icon: Users,
      title: "Want to Volunteer",
      description: "Interested in joining our team and helping make a positive impact"
    },
    {
      icon: Heart,
      title: "Share Feedback",
      description: "Have suggestions or want to share your experience with our programs"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-wellness-cream via-wellness-sky/30 to-wellness-mint/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-wellness-forest animate-fade-in">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Whether you're seeking support, want to get involved, or have questions about our programs, 
            we're here to connect with you. Your wellbeing matters to us.
          </p>
        </div>
      </section>

      {/* Contact Reasons */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div key={index} className="text-center group animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="bg-wellness-sage/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-wellness-sage group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-8 w-8 text-wellness-sage group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-wellness-forest mb-2">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-wellness-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-wellness-forest mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Fill out the form below and we'll get back to you within 24 hours. 
                All messages are confidential and handled with care.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-wellness-forest mb-2">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border-wellness-mint/30 focus:border-wellness-sage focus:ring-wellness-sage"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-wellness-forest mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border-wellness-mint/30 focus:border-wellness-sage focus:ring-wellness-sage"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-wellness-forest mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border-wellness-mint/30 focus:border-wellness-sage focus:ring-wellness-sage"
                    placeholder="What would you like to talk about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-wellness-forest mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full rounded-xl border-wellness-mint/30 focus:border-wellness-sage focus:ring-wellness-sage resize-none"
                    placeholder="Share your thoughts, questions, or how we can help you..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-wellness-sage hover:bg-wellness-forest text-white py-4 rounded-xl text-lg font-semibold group"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-wellness-forest mb-6">Other Ways to Reach Us</h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-wellness-mint/20">
                      <div className="flex items-start space-x-4">
                        <div className="bg-wellness-sage/10 p-3 rounded-xl">
                          <Icon className="h-6 w-6 text-wellness-sage" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-wellness-forest mb-1">{info.title}</h3>
                          <p className="text-wellness-sage font-medium mb-1">{info.details}</p>
                          <p className="text-gray-600 text-sm">{info.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-wellness-mint/20">
                <h3 className="font-semibold text-wellness-forest mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-wellness-sage/10 p-3 rounded-xl hover:bg-wellness-sage hover:text-white transition-all duration-300 group">
                    <svg className="h-6 w-6 text-wellness-sage group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-wellness-sage/10 p-3 rounded-xl hover:bg-wellness-sage hover:text-white transition-all duration-300 group">
                    <svg className="h-6 w-6 text-wellness-sage group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Emergency Notice */}
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mt-6">
                <h3 className="font-semibold text-red-800 mb-2">Need Immediate Help?</h3>
                <p className="text-red-700 text-sm mb-2">
                  If you're experiencing a mental health crisis, please contact:
                </p>
                <p className="text-red-800 font-medium">Crisis Hotline: 988</p>
                <p className="text-red-800 font-medium">Campus Security: (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

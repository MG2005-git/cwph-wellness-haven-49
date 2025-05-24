
import { Users, Target, Heart, Award, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const team = [
    {
      name: "Emily Chen",
      role: "Founder & President",
      description: "Psychology major passionate about mental health advocacy"
    },
    {
      name: "Marcus Johnson",
      role: "Vice President",
      description: "Pre-med student focused on holistic health approaches"
    },
    {
      name: "Aisha Patel",
      role: "Program Coordinator",
      description: "Social work student specializing in community wellness"
    },
    {
      name: "David Kim",
      role: "Outreach Director",
      description: "Communications major dedicated to wellness awareness"
    }
  ];

  const milestones = [
    { year: "2021", event: "CWPH Founded", description: "Started with 5 passionate students" },
    { year: "2022", event: "First Wellness Week", description: "Reached 200+ students campus-wide" },
    { year: "2023", event: "Peer Support Launch", description: "Established ongoing support groups" },
    { year: "2024", event: "500+ Members", description: "Growing community of wellness advocates" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-wellness-cream via-wellness-sky/30 to-wellness-mint/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-wellness-forest animate-fade-in">
            About <span className="text-gradient">CWPH</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Learn about our journey, mission, and the dedicated team working to create 
            a healthier, more supportive campus community.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-wellness-forest mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To create a campus environment where mental health is prioritized, stigma is eliminated, 
                and every student has access to the resources and support they need to thrive academically, 
                personally, and emotionally.
              </p>
              <div className="flex items-start space-x-4 mb-4">
                <Target className="h-6 w-6 text-wellness-sage flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-wellness-forest mb-2">Our Vision</h3>
                  <p className="text-gray-600">A campus community where wellness is woven into the fabric of student life.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop&crop=center"
                alt="Peaceful nature scene"
                className="w-full h-80 object-cover rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-wellness-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-wellness-forest mb-6">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From a small group of concerned students to a campus-wide movement
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-8 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="bg-wellness-sage text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-wellness-mint/20">
                  <h3 className="text-xl font-bold text-wellness-forest mb-2">{milestone.event}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-wellness-forest mb-6">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the passionate students leading the charge for campus wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="bg-gradient-to-br from-wellness-sage to-wellness-ocean w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-lg font-bold text-wellness-forest mb-2">{member.name}</h3>
                <p className="text-wellness-sage font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-wellness-sage to-wellness-forest text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 text-wellness-mint" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl text-wellness-cream mb-8 leading-relaxed">
            Ready to be part of a community that's making a real difference? 
            Get involved with CWPH and help us create positive change on campus.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/programs">
              <Button 
                size="lg"
                className="bg-white text-wellness-forest hover:bg-wellness-cream px-8 py-4 rounded-xl font-semibold group"
              >
                Explore Programs
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-wellness-forest px-8 py-4 rounded-xl font-semibold"
              >
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

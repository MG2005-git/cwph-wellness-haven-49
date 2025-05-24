
import { Users, Target, Heart, Award, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const facultyMember = {
    name: "Dr. Sarah Mitchell",
    designation: "Centre Lead",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
    bio: "Professor of Psychology with 15 years of experience in mental health research and student wellbeing initiatives."
  };

  const studentCoordinators = [
    {
      name: "Emily Chen",
      role: "Student Coordinator",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b593?w=300&h=300&fit=crop&crop=face",
      description: "Psychology major passionate about mental health advocacy"
    },
    {
      name: "Marcus Johnson", 
      role: "Student Coordinator",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "Pre-med student focused on holistic health approaches"
    }
  ];

  const studentMembers = [
    {
      name: "Aisha Patel",
      role: "Outreach Specialist",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "David Kim",
      role: "Event Coordinator",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Sofia Rodriguez",
      role: "Wellness Ambassador",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Alex Thompson",
      role: "Program Assistant",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Maya Singh",
      role: "Social Media Manager",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face"
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
      <section className="py-20 bg-gradient-to-br from-serenity-cloud via-serenity-ice/30 to-serenity-mist/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-serenity-deep animate-fade-in">
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
              <h2 className="text-3xl font-bold text-serenity-deep mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To create a campus environment where mental health is prioritized, stigma is eliminated, 
                and every student has access to the resources and support they need to thrive academically, 
                personally, and emotionally.
              </p>
              <div className="flex items-start space-x-4 mb-4">
                <Target className="h-6 w-6 text-serenity-sky flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-serenity-deep mb-2">Our Vision</h3>
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

      {/* Faculty Section */}
      <section className="py-20 bg-serenity-cloud/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-serenity-deep mb-6">Faculty Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet our dedicated faculty leader guiding CWPH's mission
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-serenity-mist/20 text-center animate-fade-in">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <img 
                  src={facultyMember.photo}
                  alt={facultyMember.name}
                  className="w-full h-full object-cover rounded-full border-4 border-serenity-soft"
                />
              </div>
              <h3 className="text-2xl font-bold text-serenity-deep mb-2">{facultyMember.name}</h3>
              <p className="text-serenity-sky font-semibold text-lg mb-4">{facultyMember.designation}</p>
              <p className="text-gray-600 leading-relaxed">{facultyMember.bio}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-serenity-deep mb-6">Meet Our Student Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Passionate students leading the charge for campus wellness
            </p>
          </div>

          {/* Student Coordinators */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-serenity-deep text-center mb-8">Student Coordinators</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {studentCoordinators.map((coordinator, index) => (
                <div key={index} className="bg-gradient-to-br from-serenity-mist to-serenity-ice rounded-3xl p-6 text-center group animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="w-24 h-24 mx-auto mb-4 relative">
                    <img 
                      src={coordinator.photo}
                      alt={coordinator.name}
                      className="w-full h-full object-cover rounded-full border-3 border-white group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-serenity-deep mb-2">{coordinator.name}</h4>
                  <p className="text-serenity-sky font-semibold mb-3">{coordinator.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{coordinator.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Student Members */}
          <div>
            <h3 className="text-2xl font-bold text-serenity-deep text-center mb-8">Student Members</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {studentMembers.map((member, index) => (
                <div key={index} className="text-center group animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="w-20 h-20 mx-auto mb-3 relative">
                    <img 
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full border-2 border-serenity-soft group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-serenity-deep mb-1">{member.name}</h4>
                  <p className="text-serenity-sky text-sm font-medium">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-serenity-cloud/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-serenity-deep mb-6">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From a small group of concerned students to a campus-wide movement
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-8 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="bg-serenity-sky text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-serenity-mist/20">
                  <h3 className="text-xl font-bold text-serenity-deep mb-2">{milestone.event}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-serenity-sky to-serenity-deep text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 text-serenity-mist" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl text-serenity-cloud mb-8 leading-relaxed">
            Ready to be part of a community that's making a real difference? 
            Get involved with CWPH and help us create positive change on campus.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/programs">
              <Button 
                size="lg"
                className="bg-white text-serenity-deep hover:bg-serenity-cloud px-8 py-4 rounded-xl font-semibold group"
              >
                Explore Programs
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-serenity-deep px-8 py-4 rounded-xl font-semibold"
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

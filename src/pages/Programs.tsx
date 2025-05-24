
import { Brain, Users, Heart, Activity, Megaphone, Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const Programs = () => {
  const programs = [
    {
      icon: Brain,
      title: "Wellness Workshops",
      description: "Interactive sessions covering stress management, mindfulness, and mental health awareness.",
      details: [
        "Weekly 90-minute sessions",
        "Topics include anxiety management, sleep hygiene, and emotional regulation",
        "Led by trained peer educators and licensed professionals",
        "Open to all students, no prior experience needed"
      ],
      schedule: "Wednesdays 4:00 PM - 5:30 PM",
      location: "Student Center Room 204",
      color: "from-wellness-sage to-wellness-forest"
    },
    {
      icon: Heart,
      title: "Meditation & Yoga",
      description: "Guided sessions to help students find inner peace and physical balance.",
      details: [
        "Beginner-friendly meditation and yoga classes",
        "Focus on stress relief and mindfulness practices",
        "All equipment provided",
        "Optional aromatherapy and sound healing sessions"
      ],
      schedule: "Mondays & Fridays 6:00 PM - 7:00 PM",
      location: "Campus Recreation Center",
      color: "from-wellness-mint to-wellness-sky"
    },
    {
      icon: Users,
      title: "Peer Support Groups",
      description: "Safe spaces for students to share experiences and support each other.",
      details: [
        "Small group settings (6-8 students)",
        "Facilitated by trained peer counselors",
        "Confidential and judgment-free environment",
        "Various groups for different topics and identities"
      ],
      schedule: "Multiple times weekly",
      location: "Counseling Center",
      color: "from-wellness-lavender to-wellness-peach"
    },
    {
      icon: Activity,
      title: "Health Drives",
      description: "Campus-wide initiatives promoting physical health and wellness awareness.",
      details: [
        "Free health screenings and flu shots",
        "Nutrition counseling and healthy cooking demos",
        "Fitness challenges and group activities",
        "Mental health resource fairs"
      ],
      schedule: "Monthly events",
      location: "Various campus locations",
      color: "from-wellness-ocean to-wellness-sky"
    },
    {
      icon: Megaphone,
      title: "Campus Campaigns",
      description: "Advocacy and awareness campaigns to destigmatize mental health conversations.",
      details: [
        "Mental Health Awareness Week programming",
        "Social media campaigns and educational content",
        "Collaboration with other student organizations",
        "Policy advocacy for student wellness"
      ],
      schedule: "Ongoing throughout semester",
      location: "Campus-wide",
      color: "from-wellness-peach to-wellness-cream"
    },
    {
      icon: Calendar,
      title: "Wellness Events",
      description: "Regular events, talks, and activities that bring the community together.",
      details: [
        "Guest speakers and expert panels",
        "Wellness workshops and skill-building sessions",
        "Social events and community building activities",
        "Seasonal celebrations and themed events"
      ],
      schedule: "2-3 events per month",
      location: "Various venues",
      color: "from-wellness-sage to-wellness-mint"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-wellness-cream via-wellness-sky/30 to-wellness-mint/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-wellness-forest animate-fade-in">
            Our <span className="text-gradient">Programs</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Discover comprehensive wellness programs designed to support every aspect of your wellbeing journey. 
            From mental health support to physical wellness activities.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {programs.map((program, index) => {
              const Icon = program.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-slide-up ${
                    isEven ? 'lg:grid-cols-2' : 'lg:grid-cols-2'
                  }`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className={`bg-gradient-to-br ${program.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h2 className="text-3xl font-bold text-wellness-forest mb-4">{program.title}</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">{program.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {program.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-wellness-sage rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-5 w-5 mr-3 text-wellness-sage" />
                        <span>{program.schedule}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-5 w-5 mr-3 text-wellness-sage" />
                        <span>{program.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <div className={`bg-gradient-to-br ${program.color} rounded-3xl p-1`}>
                      <img 
                        src={`https://images.unsplash.com/photo-${
                          index % 2 === 0 
                            ? '1581091226825-a6a2a5aee158' 
                            : '1506744038136-46273834b3fb'
                        }?w=600&h=400&fit=crop&crop=center`}
                        alt={program.title}
                        className="w-full h-80 object-cover rounded-3xl"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section className="py-20 bg-wellness-cream/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-wellness-forest mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            All of our programs are free and open to students. No prior experience needed – 
            just bring an open mind and willingness to prioritize your wellbeing.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-wellness-mint/20">
              <div className="bg-wellness-sage w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-bold text-wellness-forest mb-2">Choose a Program</h3>
              <p className="text-gray-600 text-sm">Browse our offerings and find what resonates with you</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-wellness-mint/20">
              <div className="bg-wellness-sage w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-bold text-wellness-forest mb-2">Sign Up</h3>
              <p className="text-gray-600 text-sm">Contact us or show up to get started – it's that simple</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-wellness-mint/20">
              <div className="bg-wellness-sage w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-bold text-wellness-forest mb-2">Start Your Journey</h3>
              <p className="text-gray-600 text-sm">Begin building healthy habits and connecting with community</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg"
                className="bg-wellness-sage hover:bg-wellness-forest text-white px-8 py-4 rounded-xl text-lg font-semibold group"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </Link>
            <Link to="/events">
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-wellness-sage text-wellness-sage hover:bg-wellness-sage hover:text-white px-8 py-4 rounded-xl text-lg font-semibold"
              >
                View Upcoming Events
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;


import { Brain, Users, Heart, Activity, Megaphone, Calendar } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export const ProgramsSection = () => {
  const programs = [
    {
      icon: Brain,
      title: "Wellness Workshops",
      description: "Interactive sessions covering stress management, mindfulness, and mental health awareness.",
      color: "from-wellness-sage to-wellness-forest"
    },
    {
      icon: Heart,
      title: "Meditation & Yoga",
      description: "Guided sessions to help students find inner peace and physical balance.",
      color: "from-wellness-mint to-wellness-sky"
    },
    {
      icon: Users,
      title: "Peer Support Groups",
      description: "Safe spaces for students to share experiences and support each other.",
      color: "from-wellness-lavender to-wellness-peach"
    },
    {
      icon: Activity,
      title: "Health Drives",
      description: "Campus-wide initiatives promoting physical health and wellness awareness.",
      color: "from-wellness-ocean to-wellness-sky"
    },
    {
      icon: Megaphone,
      title: "Campus Campaigns",
      description: "Advocacy and awareness campaigns to destigmatize mental health conversations.",
      color: "from-wellness-peach to-wellness-cream"
    },
    {
      icon: Calendar,
      title: "Wellness Events",
      description: "Regular events, talks, and activities that bring the community together.",
      color: "from-wellness-sage to-wellness-mint"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-b from-wellness-cream/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-wellness-forest mb-6">
            Our <span className="text-gradient">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer a diverse range of programs designed to support every aspect of student wellbeing, 
            from mental health to physical wellness and community building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-wellness-mint/10 group hover:-translate-y-2 animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`bg-gradient-to-br ${program.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-wellness-forest mb-3">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed">{program.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/programs">
            <Button 
              size="lg"
              className="bg-wellness-sage hover:bg-wellness-forest text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore All Programs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

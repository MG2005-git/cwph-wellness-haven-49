
import { Heart, Users, Target, Lightbulb } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We believe in creating a supportive environment where every student feels valued and heard."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building strong connections and fostering a sense of belonging within our campus community."
    },
    {
      icon: Target,
      title: "Holistic Approach",
      description: "Addressing mental, physical, and emotional wellbeing through comprehensive programs."
    },
    {
      icon: Lightbulb,
      title: "Student-Led Innovation",
      description: "Empowering students to lead change and create solutions that resonate with their peers."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-wellness-forest mb-6">
            About <span className="text-gradient">CWPH</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded by students, for students, the Centre for Wellness and Positive Health 
            is dedicated to creating a campus culture that prioritizes mental health and holistic wellbeing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-wellness-forest mb-4">Our Story</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              What started as a small group of passionate students has grown into a thriving organization 
              that touches the lives of hundreds of students across campus. We recognized the need for 
              accessible, peer-led wellness resources and decided to take action.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Today, CWPH serves as a bridge between students and wellness resources, offering everything 
              from meditation sessions and peer support groups to mental health workshops and campus-wide 
              wellness campaigns.
            </p>
            <Link to="/about">
              <Button className="bg-wellness-sage hover:bg-wellness-forest text-white rounded-xl">
                Read Our Full Story
              </Button>
            </Link>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-wellness-mint to-wellness-sky rounded-3xl p-1">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=center"
                alt="Students in wellness session"
                className="w-full h-80 object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center group animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="bg-gradient-to-br from-wellness-sage to-wellness-ocean w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-wellness-forest mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


import { Calendar, Clock, MapPin, Users, ArrowRight, Plus } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Mindfulness Monday",
      type: "Weekly Session",
      date: "Every Monday",
      time: "6:00 PM - 7:00 PM",
      location: "Student Center Room 204",
      description: "Weekly guided meditation and mindfulness practice session. Perfect for beginners and experienced practitioners alike.",
      capacity: "20 students",
      image: "photo-1518495973542-4542c06a5843"
    },
    {
      title: "Mental Health Awareness Week",
      type: "Special Event",
      date: "March 15-22, 2024",
      time: "Various Times",
      location: "Campus-wide",
      description: "A week of workshops, talks, and activities focused on mental health awareness, featuring guest speakers and interactive sessions.",
      capacity: "Open to all",
      image: "photo-1506744038136-46273834b3fb"
    },
    {
      title: "Stress-Free Study Sessions",
      type: "Academic Support",
      date: "During Finals Week",
      time: "2:00 PM - 6:00 PM",
      location: "Library Study Pods",
      description: "Quiet study spaces with wellness activities, healthy snacks, and stress-relief techniques to help you through finals.",
      capacity: "50 students",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Wellness Workshop: Sleep Hygiene",
      type: "Educational Workshop",
      date: "March 8, 2024",
      time: "4:00 PM - 5:30 PM",
      location: "Health Center Conference Room",
      description: "Learn evidence-based strategies for better sleep quality and how sleep affects your mental and physical health.",
      capacity: "25 students",
      image: "photo-1465146344425-f00d5f5c8f07"
    },
    {
      title: "Yoga & Breathwork Session",
      type: "Physical Wellness",
      date: "March 10, 2024",
      time: "7:00 PM - 8:00 PM",
      location: "Campus Recreation Center",
      description: "Gentle yoga flow combined with breathing exercises to reduce stress and increase mindfulness.",
      capacity: "30 students",
      image: "photo-1501854140801-50d01698950b"
    },
    {
      title: "Peer Support Group: Anxiety",
      type: "Support Group",
      date: "Every Wednesday",
      time: "5:00 PM - 6:00 PM",
      location: "Counseling Center",
      description: "A safe space to share experiences and coping strategies with other students who understand anxiety challenges.",
      capacity: "8 students",
      image: "photo-1649972904349-6e44c42644a7"
    }
  ];

  const eventTypes = [
    { name: "Weekly Sessions", color: "bg-wellness-sage", count: 3 },
    { name: "Workshops", color: "bg-wellness-mint", count: 5 },
    { name: "Support Groups", color: "bg-wellness-sky", count: 4 },
    { name: "Special Events", color: "bg-wellness-peach", count: 2 }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-wellness-cream via-wellness-sky/30 to-wellness-mint/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-wellness-forest animate-fade-in">
            Upcoming <span className="text-gradient">Events</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Join us for regular wellness activities, special events, and community gatherings designed to support your wellbeing journey.
          </p>
        </div>
      </section>

      {/* Event Types Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {eventTypes.map((type, index) => (
              <div key={index} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`${type.color} w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center`}>
                  <span className="text-white font-bold text-xl">{type.count}</span>
                </div>
                <h3 className="font-semibold text-wellness-forest">{type.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-wellness-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-wellness-forest mb-6">All Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From weekly sessions to special workshops, there's something for everyone at every stage of their wellness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-wellness-mint/20 group hover:-translate-y-2 animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/${event.image}?w=400&h=200&fit=crop&crop=center`}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-wellness-sage text-white px-3 py-1 rounded-full text-sm font-medium">
                      {event.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-wellness-forest mb-3 group-hover:text-wellness-sage transition-colors duration-200">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{event.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-wellness-sage" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Clock className="h-4 w-4 mr-2 text-wellness-sage" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-wellness-sage" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Users className="h-4 w-4 mr-2 text-wellness-sage" />
                      {event.capacity}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-wellness-sage hover:bg-wellness-forest text-white rounded-xl">
                    Register Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Register */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-wellness-forest mb-6">How to Register</h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Getting involved is easy! Most events are drop-in friendly, but some require registration.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-wellness-cream/50 rounded-2xl p-6">
              <div className="bg-wellness-sage w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-bold text-wellness-forest mb-2">Check the Schedule</h3>
              <p className="text-gray-600 text-sm">Browse our events and find ones that interest you</p>
            </div>
            
            <div className="bg-wellness-cream/50 rounded-2xl p-6">
              <div className="bg-wellness-sage w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-bold text-wellness-forest mb-2">Register or Drop-In</h3>
              <p className="text-gray-600 text-sm">Some events require registration, others welcome walk-ins</p>
            </div>
            
            <div className="bg-wellness-cream/50 rounded-2xl p-6">
              <div className="bg-wellness-sage w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-bold text-wellness-forest mb-2">Join Us</h3>
              <p className="text-gray-600 text-sm">Come as you are and be part of our wellness community</p>
            </div>
          </div>
          
          <div className="bg-wellness-mint/20 rounded-2xl p-8 mb-8">
            <Plus className="h-12 w-12 mx-auto mb-4 text-wellness-sage" />
            <h3 className="text-xl font-semibold text-wellness-forest mb-4">Want to Suggest an Event?</h3>
            <p className="text-gray-600 mb-4">
              We're always looking for new ideas and feedback from our community. 
              Have an idea for a workshop or event? Let us know!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg"
                className="bg-wellness-sage hover:bg-wellness-forest text-white px-8 py-4 rounded-xl text-lg font-semibold group"
              >
                Contact Us to Register
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </Link>
            <Link to="/programs">
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-wellness-sage text-wellness-sage hover:bg-wellness-sage hover:text-white px-8 py-4 rounded-xl text-lg font-semibold"
              >
                Learn About Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;


import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export const EventsSection = () => {
  const upcomingEvents = [
    {
      title: "Mindfulness Monday",
      date: "Every Monday",
      time: "6:00 PM - 7:00 PM", 
      location: "Student Center Room 204",
      description: "Weekly guided meditation and mindfulness practice session.",
      type: "Recurring"
    },
    {
      title: "Mental Health Awareness Week",
      date: "March 15-22, 2024",
      time: "Various Times",
      location: "Campus-wide",
      description: "A week of workshops, talks, and activities focused on mental health awareness.",
      type: "Special Event"
    },
    {
      title: "Stress-Free Study Sessions",
      date: "During Finals Week",
      time: "2:00 PM - 6:00 PM",
      location: "Library Study Pods",
      description: "Quiet study spaces with wellness activities and healthy snacks.",
      type: "Academic Support"
    }
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-wellness-cream/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-wellness-forest mb-6">
            Upcoming <span className="text-gradient">Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join us for regular wellness activities, special events, and community gatherings 
            designed to support your wellbeing journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {upcomingEvents.map((event, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-wellness-mint/20 group hover:-translate-y-1 animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="bg-wellness-sage/10 text-wellness-sage px-3 py-1 rounded-full text-sm font-medium">
                  {event.type}
                </span>
                <Calendar className="h-5 w-5 text-wellness-sage" />
              </div>
              
              <h3 className="text-xl font-bold text-wellness-forest mb-3 group-hover:text-wellness-sage transition-colors duration-200">
                {event.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-4 w-4 mr-2 text-wellness-sage" />
                  {event.date}
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-2 text-wellness-sage" />
                  {event.time}
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 text-wellness-sage" />
                  {event.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/events">
            <Button 
              size="lg"
              className="bg-wellness-sage hover:bg-wellness-forest text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              View All Events
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

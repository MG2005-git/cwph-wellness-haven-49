
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const AISidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your mental health virtual assistant. I'm here to provide support, resources, and a listening ear. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const predefinedResponses = {
    anxiety: "I understand you're feeling anxious. Here are some techniques that might help: 1) Try deep breathing exercises - breathe in for 4 counts, hold for 4, breathe out for 4. 2) Ground yourself using the 5-4-3-2-1 technique: name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste. 3) Remember that anxiety is temporary and you've overcome it before. Would you like me to guide you through a breathing exercise?",
    stress: "Stress is very common among students. Some effective stress management techniques include: 1) Breaking large tasks into smaller, manageable steps. 2) Taking regular breaks during study sessions. 3) Getting adequate sleep (7-9 hours). 4) Physical exercise, even a 10-minute walk can help. 5) Talking to friends, family, or counselors. Is there a specific area causing you stress that you'd like to discuss?",
    depression: "Thank you for reaching out. Feelings of sadness or depression are more common than you might think. While I can provide some initial support, it's important to speak with a mental health professional. Some things that might help in the meantime: 1) Maintain a daily routine. 2) Try to get some sunlight each day. 3) Stay connected with supportive people. 4) Consider gentle exercise. Please remember that seeking professional help is a sign of strength, not weakness.",
    help: "I'm here to provide mental health support and resources. I can help with topics like anxiety, stress, depression, study-related concerns, and general wellness tips. I can also provide information about campus mental health resources. What would you like to talk about?",
    resources: "Here are some mental health resources available to you: 1) Campus Counseling Center - offers free counseling sessions. 2) Crisis Hotline: 988 (Suicide & Crisis Lifeline). 3) Campus Health Services for medical concerns. 4) CWPH peer support groups (check our events page). 5) Mental Health First Aid workshops. Would you like specific information about any of these resources?"
  };

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('anxious') || message.includes('anxiety') || message.includes('worried')) {
      return predefinedResponses.anxiety;
    } else if (message.includes('stress') || message.includes('overwhelmed') || message.includes('pressure')) {
      return predefinedResponses.stress;
    } else if (message.includes('sad') || message.includes('depression') || message.includes('depressed') || message.includes('lonely')) {
      return predefinedResponses.depression;
    } else if (message.includes('help') || message.includes('support')) {
      return predefinedResponses.help;
    } else if (message.includes('resource') || message.includes('counseling') || message.includes('therapy')) {
      return predefinedResponses.resources;
    } else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm glad you reached out. I'm here to support you with any mental health concerns or questions you might have. What's on your mind today?";
    } else if (message.includes('thank')) {
      return "You're very welcome! Remember, taking care of your mental health is important, and reaching out shows great strength. Is there anything else I can help you with?";
    } else {
      return "I understand you're reaching out, and I'm here to listen. While I may not have specific information about that topic, I can help with general mental health support, stress management, anxiety, and connecting you with resources. Can you tell me more about what you're experiencing?";
    }
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputText),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);

    setInputText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-serenity-sky hover:bg-serenity-deep text-white rounded-full p-4 shadow-lg z-50 group"
          size="lg"
        >
          <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
          <span className="ml-2 hidden md:inline">Mental Health Assistant</span>
        </Button>
      )}

      {/* Sidebar */}
      {isOpen && (
        <div className="fixed inset-y-0 right-0 w-96 bg-white shadow-2xl z-50 flex flex-col border-l border-serenity-mist">
          {/* Header */}
          <div className="bg-gradient-to-r from-serenity-sky to-serenity-ocean text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bot className="h-6 w-6" />
              <div>
                <h3 className="font-semibold">Mental Health Assistant</h3>
                <p className="text-xs text-serenity-mist">Here to support you</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-full p-2"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.isUser 
                      ? 'bg-serenity-sky text-white' 
                      : 'bg-serenity-mist text-serenity-deep'
                  }`}>
                    {message.isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  </div>
                  <div className={`rounded-2xl p-3 ${
                    message.isUser 
                      ? 'bg-serenity-sky text-white' 
                      : 'bg-serenity-cloud text-serenity-deep'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-serenity-mist">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 border border-serenity-mist rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-serenity-sky focus:border-transparent"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="bg-serenity-sky hover:bg-serenity-deep text-white rounded-xl px-4 py-2"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              This is a basic AI assistant. For serious concerns, please contact professional support.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

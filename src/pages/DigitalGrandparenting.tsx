import React, { useState } from 'react';
import { Video, Calendar, Star, Heart, MessageSquare, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';

const MOCK_ACTIVITIES = [
  {
    id: 1,
    title: "Story Time",
    description: "Share stories and life experiences with young listeners",
    duration: "30-60 minutes",
    participants: "1 senior, 1-3 children",
    category: "Reading",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    title: "Virtual Cooking",
    description: "Cook traditional recipes together and share family traditions",
    duration: "45-90 minutes",
    participants: "1 senior, 1-2 children",
    category: "Cooking",
    image: "https://images.unsplash.com/photo-1576867757603-05b134ebc379?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  }
];

const MOCK_MATCHES = [
  {
    id: 1,
    name: "Emily & Grandpa Joe",
    image: "https://images.unsplash.com/photo-1511909525232-61113c912358?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    lastActivity: "Story Time",
    nextSession: "Tomorrow, 2:00 PM",
    rating: 4.9,
    duration: "6 months",
    interests: ["Reading", "Art", "History"]
  }
];

export function DigitalGrandparenting() {
  const [activeTab, setActiveTab] = useState<'activities' | 'matches'>('activities');

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Digital Grandparenting</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Bridge generations through meaningful virtual connections and activities
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex space-x-4 mb-6">
          <Button
            variant={activeTab === 'activities' ? 'primary' : 'outline'}
            onClick={() => setActiveTab('activities')}
          >
            Activities
          </Button>
          <Button
            variant={activeTab === 'matches' ? 'primary' : 'outline'}
            onClick={() => setActiveTab('matches')}
          >
            Your Matches
          </Button>
        </div>

        {activeTab === 'activities' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MOCK_ACTIVITIES.map((activity) => (
              <div key={activity.id} className="bg-gray-50 rounded-lg p-6">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{activity.title}</h3>
                <p className="text-gray-600 mb-4">{activity.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{activity.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{activity.participants}</span>
                  </div>
                </div>

                <Button variant="primary" className="w-full">
                  Schedule Activity
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {MOCK_MATCHES.map((match) => (
              <div key={match.id} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <img
                    src={match.image}
                    alt={match.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="text-xl font-semibold text-gray-900">{match.name}</h3>
                      <div className="flex items-center text-yellow-500">
                        <Star className="h-4 w-4 mr-1 fill-current" />
                        <span>{match.rating}</span>
                      </div>
                    </div>
                    
                    <div className="mt-2 grid grid-cols-2 gap-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>Next: {match.nextSession}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>Duration: {match.duration}</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2">
                        {match.interests.map((interest) => (
                          <span
                            key={interest}
                            className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex space-x-3">
                  <Button variant="primary" className="flex-1">
                    <Video className="h-4 w-4 mr-2" />
                    Start Call
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
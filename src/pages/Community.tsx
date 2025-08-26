import React, { useState } from 'react';
import { MessageSquare, Calendar, Users, Heart, Share2, ThumbsUp, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';

const MOCK_DISCUSSIONS = [
  {
    id: 1,
    title: "Tips for Staying Active After 60",
    author: {
      name: "Margaret Wilson",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    content: "I've found that gentle yoga and daily walks have made a huge difference in my mobility. What activities do you enjoy?",
    category: "Health & Wellness",
    likes: 24,
    comments: 8,
    timePosted: "2 hours ago"
  },
  {
    id: 2,
    title: "Book Club: 'The Thursday Murder Club'",
    author: {
      name: "Robert Chen",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    content: "Just finished this delightful mystery novel. Would anyone be interested in discussing it?",
    category: "Book Club",
    likes: 15,
    comments: 12,
    timePosted: "5 hours ago"
  }
];

const MOCK_EVENTS = [
  {
    id: 1,
    title: "Virtual Chess Tournament",
    date: "March 15, 2024",
    time: "2:00 PM - 4:00 PM",
    participants: 12,
    maxParticipants: 20,
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    organizer: "Chess Club for Seniors"
  },
  {
    id: 2,
    title: "Gardening Workshop",
    date: "March 18, 2024",
    time: "10:00 AM - 11:30 AM",
    participants: 8,
    maxParticipants: 15,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    organizer: "Green Thumb Society"
  }
];

export function Community() {
  const [activeTab, setActiveTab] = useState<'discussions' | 'events'>('discussions');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    'all',
    'Health & Wellness',
    'Book Club',
    'Hobbies',
    'Technology',
    'Travel'
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Community Hub</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Connect, share, and engage with fellow community members
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex space-x-4 mb-6">
          <Button
            variant={activeTab === 'discussions' ? 'primary' : 'outline'}
            onClick={() => setActiveTab('discussions')}
            className="flex items-center"
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Discussions
          </Button>
          <Button
            variant={activeTab === 'events' ? 'primary' : 'outline'}
            onClick={() => setActiveTab('events')}
            className="flex items-center"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Events
          </Button>
        </div>

        {activeTab === 'discussions' && (
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            <Button variant="outline" className="w-full mb-6">
              <MessageSquare className="h-4 w-4 mr-2" />
              Start New Discussion
            </Button>

            <div className="space-y-6">
              {MOCK_DISCUSSIONS.map((discussion) => (
                <div key={discussion.id} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={discussion.author.image}
                      alt={discussion.author.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900">{discussion.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        Posted by {discussion.author.name} • {discussion.timePosted}
                      </p>
                      <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm mb-3">
                        {discussion.category}
                      </span>
                      <p className="text-gray-700 mb-4">{discussion.content}</p>
                      
                      <div className="flex items-center space-x-4 text-gray-600">
                        <button className="flex items-center space-x-1 hover:text-blue-600">
                          <ThumbsUp className="h-4 w-4" />
                          <span>{discussion.likes}</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-blue-600">
                          <MessageSquare className="h-4 w-4" />
                          <span>{discussion.comments}</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-blue-600">
                          <Share2 className="h-4 w-4" />
                          <span>Share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div className="space-y-6">
            <Button variant="outline" className="w-full mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              Create New Event
            </Button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MOCK_EVENTS.map((event) => (
                <div key={event.id} className="bg-gray-50 rounded-lg overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">Organized by {event.organizer}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{event.participants}/{event.maxParticipants} participants</span>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <Button variant="primary" className="flex-1">
                        Join Event
                      </Button>
                      <Button variant="outline" className="flex items-center">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
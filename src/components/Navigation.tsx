import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Home, Users, Video, MessageSquare, Bell } from 'lucide-react';
import { Button } from './ui/button';

export function Navigation() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">ElderCare Connect</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/caregivers" className="text-gray-600 hover:text-blue-600">
              <Button variant="ghost" className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Caregivers</span>
              </Button>
            </Link>
            <Link to="/old-age-homes" className="text-gray-600 hover:text-blue-600">
              <Button variant="ghost" className="flex items-center space-x-2">
                <Home className="h-5 w-5" />
                <span>Old Age Homes</span>
              </Button>
            </Link>
            <Link to="/digital-grandparenting" className="text-gray-600 hover:text-blue-600">
              <Button variant="ghost" className="flex items-center space-x-2">
                <Video className="h-5 w-5" />
                <span>Digital Grandparenting</span>
              </Button>
            </Link>
            <Link to="/health-support" className="text-gray-600 hover:text-blue-600">
              <Button variant="ghost" className="flex items-center space-x-2">
                <Heart className="h-5 w-5" />
                <span>Health Support</span>
              </Button>
            </Link>
            <Link to="/community" className="text-gray-600 hover:text-blue-600">
              <Button variant="ghost" className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5" />
                <span>Community</span>
              </Button>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
                3
              </span>
            </Button>
            <Button variant="primary">Sign In</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
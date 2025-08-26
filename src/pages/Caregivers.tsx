import React, { useState } from 'react';
import { Search, MapPin, Star } from 'lucide-react';
import { Button } from '../components/ui/button';

const MOCK_CAREGIVERS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
    location: 'New York, NY',
    rating: 4.8,
    specialties: ['Elder Care', 'Medication Management', 'Physical Therapy'],
    experience: '8 years',
    availability: 'Full-time',
  },
  {
    id: 2,
    name: 'Michael Chen',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
    location: 'San Francisco, CA',
    rating: 4.9,
    specialties: ['Dementia Care', 'Nursing', 'Emergency Response'],
    experience: '12 years',
    availability: 'Part-time',
  },
  // Add more mock caregivers as needed
];

export function Caregivers() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-900">Find Qualified Caregivers</h1>
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search caregivers..."
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_CAREGIVERS.map((caregiver) => (
          <CaregiverCard key={caregiver.id} caregiver={caregiver} />
        ))}
      </div>
    </div>
  );
}

function CaregiverCard({ caregiver }: { caregiver: any }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <img
            src={caregiver.image}
            alt={caregiver.name}
            className="h-16 w-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{caregiver.name}</h3>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{caregiver.location}</span>
            </div>
            <div className="flex items-center text-yellow-500">
              <Star className="h-4 w-4 mr-1 fill-current" />
              <span>{caregiver.rating}</span>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {caregiver.specialties.map((specialty: string) => (
              <span
                key={specialty}
                className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <p className="text-gray-600">
            <strong>Experience:</strong> {caregiver.experience}
          </p>
          <p className="text-gray-600">
            <strong>Availability:</strong> {caregiver.availability}
          </p>
        </div>

        <div className="mt-6 flex space-x-3">
          <Button variant="primary" className="flex-1">
            Contact
          </Button>
          <Button variant="outline" className="flex-1">
            View Profile
          </Button>
        </div>
      </div>
    </div>
  );
}
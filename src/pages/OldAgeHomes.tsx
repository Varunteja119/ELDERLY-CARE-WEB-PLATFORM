import React, { useState } from 'react';
import { Search, MapPin, Phone, Clock, Users, Shield, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';

const MOCK_HOMES = [
  {
    id: 1,
    name: "Golden Years Haven",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    location: "123 Serenity Lane, Boston, MA",
    phone: "(617) 555-0123",
    capacity: 85,
    amenities: ["24/7 Medical Care", "Physical Therapy", "Garden", "Library"],
    rating: 4.8,
    price: "$3,500 - $5,000/month",
    availability: "Limited Spots"
  },
  {
    id: 2,
    name: "Sunset Valley Care",
    image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    location: "456 Comfort Drive, Seattle, WA",
    phone: "(206) 555-0456",
    capacity: 120,
    amenities: ["Memory Care", "Rehabilitation", "Restaurant", "Cinema"],
    rating: 4.9,
    price: "$4,000 - $6,000/month",
    availability: "Available"
  }
];

export function OldAgeHomes() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const amenityOptions = [
    "24/7 Medical Care",
    "Physical Therapy",
    "Memory Care",
    "Garden",
    "Library",
    "Restaurant",
    "Cinema",
    "Rehabilitation"
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Find the Perfect Old Age Home</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or location..."
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Filter by Amenities</label>
            <div className="flex flex-wrap gap-2">
              {amenityOptions.map((amenity) => (
                <button
                  key={amenity}
                  onClick={() => setSelectedAmenities(prev => 
                    prev.includes(amenity) 
                      ? prev.filter(a => a !== amenity)
                      : [...prev, amenity]
                  )}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedAmenities.includes(amenity)
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {amenity}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {MOCK_HOMES.map((home) => (
          <div key={home.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={home.image}
              alt={home.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">{home.name}</h2>
                  <div className="flex items-center text-gray-600 mt-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{home.location}</span>
                  </div>
                </div>
                <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
                  <Shield className="h-4 w-4 text-blue-600 mr-1" />
                  <span className="text-blue-600 font-medium">{home.rating}</span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="flex items-center text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>{home.phone}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-4 w-4 mr-2" />
                  <span>Capacity: {home.capacity}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{home.availability}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Heart className="h-4 w-4 mr-2" />
                  <span>{home.price}</span>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="font-medium text-gray-900 mb-2">Amenities</h3>
                <div className="flex flex-wrap gap-2">
                  {home.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex space-x-3">
                <Button variant="primary" className="flex-1">
                  Schedule Visit
                </Button>
                <Button variant="outline" className="flex-1">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
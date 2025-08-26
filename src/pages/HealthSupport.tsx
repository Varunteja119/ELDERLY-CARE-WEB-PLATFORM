import React, { useState } from 'react';
import { Calendar, Clock, Video, Phone, Heart, AlertCircle, Pill as Pills, Activity } from 'lucide-react';
import { Button } from '../components/ui/button';

const MOCK_DOCTORS = [
  {
    id: 1,
    name: "Dr. Sarah Williams",
    specialty: "Geriatric Medicine",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    experience: "15 years",
    rating: 4.9,
    nextAvailable: "Today, 3:00 PM",
    price: "$150/session"
  },
  {
    id: 2,
    name: "Dr. James Chen",
    specialty: "Cardiology",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    experience: "20 years",
    rating: 4.8,
    nextAvailable: "Tomorrow, 10:00 AM",
    price: "$180/session"
  }
];

const MOCK_MEDICATIONS = [
  {
    id: 1,
    name: "Lisinopril",
    dosage: "10mg",
    frequency: "Once daily",
    timeSlots: ["8:00 AM"],
    nextDue: "2 hours",
    status: "upcoming"
  },
  {
    id: 2,
    name: "Metformin",
    dosage: "500mg",
    frequency: "Twice daily",
    timeSlots: ["9:00 AM", "9:00 PM"],
    nextDue: "30 minutes",
    status: "urgent"
  }
];

export function HealthSupport() {
  const [activeTab, setActiveTab] = useState<'consultations' | 'medications' | 'vitals'>('consultations');

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Health Support</h1>
        
        <div className="flex space-x-4 mb-6">
          <Button
            variant={activeTab === 'consultations' ? 'primary' : 'outline'}
            onClick={() => setActiveTab('consultations')}
            className="flex items-center"
          >
            <Video className="h-4 w-4 mr-2" />
            Consultations
          </Button>
          <Button
            variant={activeTab === 'medications' ? 'primary' : 'outline'}
            onClick={() => setActiveTab('medications')}
            className="flex items-center"
          >
            <Pills className="h-4 w-4 mr-2" />
            Medications
          </Button>
          <Button
            variant={activeTab === 'vitals' ? 'primary' : 'outline'}
            onClick={() => setActiveTab('vitals')}
            className="flex items-center"
          >
            <Activity className="h-4 w-4 mr-2" />
            Vitals Tracking
          </Button>
        </div>

        {activeTab === 'consultations' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MOCK_DOCTORS.map((doctor) => (
              <div key={doctor.id} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
                    <p className="text-blue-600 font-medium">{doctor.specialty}</p>
                    
                    <div className="mt-2 grid grid-cols-2 gap-4">
                      <div className="flex items-center text-gray-600">
                        <Heart className="h-4 w-4 mr-2" />
                        <span>{doctor.experience}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{doctor.nextAvailable}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex space-x-3">
                  <Button variant="primary" className="flex-1">
                    <Video className="h-4 w-4 mr-2" />
                    Video Call
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'medications' && (
          <div className="space-y-6">
            {MOCK_MEDICATIONS.map((medication) => (
              <div
                key={medication.id}
                className={`bg-gray-50 rounded-lg p-6 border-l-4 ${
                  medication.status === 'urgent' ? 'border-red-500' : 'border-blue-500'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{medication.name}</h3>
                    <p className="text-gray-600">{medication.dosage} - {medication.frequency}</p>
                  </div>
                  {medication.status === 'urgent' && (
                    <div className="flex items-center text-red-600">
                      <AlertCircle className="h-5 w-5 mr-1" />
                      <span>Due Soon</span>
                    </div>
                  )}
                </div>

                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {medication.timeSlots.map((time) => (
                      <span
                        key={time}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {time}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Next dose in {medication.nextDue}</span>
                </div>
              </div>
            ))}

            <Button variant="outline" className="w-full mt-4">
              <Pills className="h-4 w-4 mr-2" />
              Add New Medication
            </Button>
          </div>
        )}

        {activeTab === 'vitals' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <VitalCard
                title="Blood Pressure"
                value="120/80"
                unit="mmHg"
                status="normal"
                time="1 hour ago"
              />
              <VitalCard
                title="Heart Rate"
                value="72"
                unit="bpm"
                status="normal"
                time="30 mins ago"
              />
              <VitalCard
                title="Blood Sugar"
                value="110"
                unit="mg/dL"
                status="attention"
                time="2 hours ago"
              />
            </div>

            <Button variant="outline" className="w-full">
              <Activity className="h-4 w-4 mr-2" />
              Record New Vital Signs
            </Button>
          </div>
        )}
      </div>

      <div className="bg-red-50 p-6 rounded-lg shadow-md border-2 border-red-200">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-red-700">Emergency Medical Support</h2>
            <p className="text-red-600">24/7 emergency medical assistance available</p>
          </div>
          <Button variant="danger" className="flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            Call Emergency
          </Button>
        </div>
      </div>
    </div>
  );
}

function VitalCard({ title, value, unit, status, time }: {
  title: string;
  value: string;
  unit: string;
  status: 'normal' | 'attention' | 'alert';
  time: string;
}) {
  const statusColors = {
    normal: 'text-green-600 bg-green-50',
    attention: 'text-yellow-600 bg-yellow-50',
    alert: 'text-red-600 bg-red-50'
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      <div className="flex items-baseline space-x-2">
        <span className="text-3xl font-bold text-gray-900">{value}</span>
        <span className="text-gray-600">{unit}</span>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className={`px-2 py-1 rounded-full text-sm ${statusColors[status]}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
        <span className="text-sm text-gray-500">{time}</span>
      </div>
    </div>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Home as HomeIcon, Video, Heart, MessageSquare } from 'lucide-react';
import { Button } from '../components/ui/button';

export function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Supporting Elderly Care with Technology
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Connecting elderly individuals with caregivers, communities, and comprehensive support services.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          icon={<Users className="h-8 w-8" />}
          title="Find Qualified Caregivers"
          description="Connect with experienced caregivers who understand elderly needs."
          link="/caregivers"
        />
        <FeatureCard
          icon={<HomeIcon className="h-8 w-8" />}
          title="Old Age Homes Directory"
          description="Explore and compare old age homes in your area."
          link="/old-age-homes"
        />
        <FeatureCard
          icon={<Video className="h-8 w-8" />}
          title="Digital Grandparenting"
          description="Bridge generations through virtual connections."
          link="/digital-grandparenting"
        />
        <FeatureCard
          icon={<Heart className="h-8 w-8" />}
          title="Health Support"
          description="Access medical consultations and health monitoring tools."
          link="/health-support"
        />
        <FeatureCard
          icon={<MessageSquare className="h-8 w-8" />}
          title="Community Forums"
          description="Join discussions and share experiences with others."
          link="/community"
        />
        <EmergencyCard />
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description, link }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={link}>
        <Button variant="outline" className="w-full">
          Learn More
        </Button>
      </Link>
    </div>
  );
}

function EmergencyCard() {
  return (
    <div className="bg-red-50 p-6 rounded-lg shadow-md border-2 border-red-200">
      <h3 className="text-xl font-semibold text-red-700 mb-2">Emergency Support</h3>
      <p className="text-red-600 mb-4">
        24/7 emergency assistance with direct connection to local services.
      </p>
      <Button variant="danger" className="w-full">
        SOS Emergency
      </Button>
    </div>
  );
}
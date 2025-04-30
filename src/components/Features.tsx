import React from 'react';
import { 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Camera, 
  MessageSquare, 
  FileText, 
  Smartphone
} from 'lucide-react';

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureProps) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
    <div className="bg-indigo-100 dark:bg-indigo-900/40 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <MapPin size={22} className="text-indigo-600 dark:text-indigo-400" />,
      title: "Real-Time Tracking",
      description: "Track your movers and belongings in real-time through our GPS-enabled platform, just like you would an Uber ride."
    },
    {
      icon: <ShieldCheck size={22} className="text-indigo-600 dark:text-indigo-400" />,
      title: "Secure Booking",
      description: "Our digital contracts and secure payment system ensure your moving arrangements are protected and legitimate."
    },
    {
      icon: <Clock size={22} className="text-indigo-600 dark:text-indigo-400" />,
      title: "Quick Scheduling",
      description: "Book your move in under 5 minutes with our streamlined scheduling system. No phone calls or lengthy forms required."
    },
    {
      icon: <Camera size={22} className="text-indigo-600 dark:text-indigo-400" />,
      title: "Photo Inventory",
      description: "Document your belongings with our photo inventory system to ensure everything arrives safely at your destination."
    },
    {
      icon: <MessageSquare size={22} className="text-indigo-600 dark:text-indigo-400" />,
      title: "In-App Communication",
      description: "Chat directly with your assigned moving team for real-time updates and special instructions."
    },
    {
      icon: <FileText size={22} className="text-indigo-600 dark:text-indigo-400" />,
      title: "Digital Paperwork",
      description: "Sign contracts and review documents digitally, eliminating the need for printed paperwork and saving time."
    },
    {
      icon: <Smartphone size={22} className="text-indigo-600 dark:text-indigo-400" />,
      title: "Mobile App",
      description: "Manage your entire move from our intuitive mobile app, available for both iOS and Android devices."
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Moving Reinvented
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Experience a modern approach to moving with features designed for today's mobile-first world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
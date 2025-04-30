import React from 'react';
import { Smartphone, Truck, Home, Check, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Smartphone size={28} className="text-indigo-600 dark:text-indigo-400" />,
      title: "Book Your Move",
      description: "Enter your moving details and inventory in our app or website to get an instant price estimate.",
      number: "01"
    },
    {
      icon: <Check size={28} className="text-indigo-600 dark:text-indigo-400" />,
      title: "Confirm Details",
      description: "Review your moving plan, sign digital contracts, and schedule your preferred date and time.",
      number: "02"
    },
    {
      icon: <Truck size={28} className="text-indigo-600 dark:text-indigo-400" />,
      title: "Track Your Move",
      description: "On moving day, track your movers in real-time and communicate directly through our platform.",
      number: "03"
    },
    {
      icon: <Home size={28} className="text-indigo-600 dark:text-indigo-400" />,
      title: "Settle In",
      description: "Rate your experience and provide feedback after your belongings are safely delivered to your new home.",
      number: "04"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How MoveEase Works
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Our streamlined process makes moving as simple as ordering a ride.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-bold text-gray-200 dark:text-gray-600">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 flex-grow">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <ArrowRight size={24} className="text-indigo-300 dark:text-indigo-800" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#book-now" 
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Start Your Move Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
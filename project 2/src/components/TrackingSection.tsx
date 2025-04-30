import React, { useState } from 'react';
import { Search, MapPin, Clock, Package, Truck, Check } from 'lucide-react';

const TrackingSection = () => {
  const [trackingId, setTrackingId] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  const [trackingResult, setTrackingResult] = useState<null | {
    status: 'in-progress' | 'completed';
    currentLocation: string;
    destination: string;
    estimatedArrival: string;
    progressSteps: {
      label: string;
      completed: boolean;
      time?: string;
    }[];
  }>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) return;
    
    setIsTracking(true);
    
    // Simulate tracking API call
    setTimeout(() => {
      setIsTracking(false);
      setTrackingResult({
        status: 'in-progress',
        currentLocation: '2700 Folsom St, San Francisco, CA',
        destination: '1234 Market St, San Francisco, CA',
        estimatedArrival: '2:45 PM Today',
        progressSteps: [
          { label: 'Order Confirmed', completed: true, time: '9:30 AM' },
          { label: 'Movers Assigned', completed: true, time: '10:15 AM' },
          { label: 'Loading Started', completed: true, time: '11:45 AM' },
          { label: 'In Transit', completed: true, time: '1:20 PM' },
          { label: 'Arriving at Destination', completed: false },
          { label: 'Unloading', completed: false },
          { label: 'Delivery Complete', completed: false }
        ]
      });
    }, 1500);
  };

  return (
    <section id="tracking" className="py-16 bg-indigo-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Track Your Move
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Know exactly where your belongings are with our real-time tracking system.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="flex gap-3">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={20} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white text-base rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-3"
                    placeholder="Enter your tracking ID (e.g., MOV-12345)"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isTracking || !trackingId.trim()}
                  className={`py-3 px-6 rounded-lg font-medium text-white ${
                    isTracking || !trackingId.trim()
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-indigo-600 hover:bg-indigo-700'
                  } transition-colors whitespace-nowrap`}
                >
                  {isTracking ? (
                    <>
                      <svg className="animate-spin inline-block -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Tracking...
                    </>
                  ) : (
                    'Track Now'
                  )}
                </button>
              </form>

              {trackingResult && (
                <div className="mt-8">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-indigo-100 dark:bg-indigo-900/50 p-2 rounded-full">
                          <MapPin size={18} className="text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Current Location</p>
                          <p className="text-gray-900 dark:text-white">{trackingResult.currentLocation}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-indigo-100 dark:bg-indigo-900/50 p-2 rounded-full">
                          <MapPin size={18} className="text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Destination</p>
                          <p className="text-gray-900 dark:text-white">{trackingResult.destination}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-indigo-100 dark:bg-indigo-900/50 p-2 rounded-full">
                          <Clock size={18} className="text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Estimated Arrival</p>
                          <p className="text-gray-900 dark:text-white">{trackingResult.estimatedArrival}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700"></div>
                    
                    <div className="space-y-8">
                      {trackingResult.progressSteps.map((step, index) => (
                        <div key={index} className="relative pl-16">
                          <div className={`absolute left-7 w-3 h-3 rounded-full transform -translate-x-1/2 border-4 ${
                            step.completed 
                              ? 'bg-indigo-600 dark:bg-indigo-400 border-indigo-100 dark:border-indigo-900/50' 
                              : 'bg-gray-200 dark:bg-gray-700 border-white dark:border-gray-900'
                          }`}></div>
                          
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              {step.completed && (
                                <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full">
                                  <Check size={14} className="text-green-600 dark:text-green-400" />
                                </div>
                              )}
                              <span className={`font-medium ${
                                step.completed 
                                  ? 'text-gray-900 dark:text-white' 
                                  : 'text-gray-500 dark:text-gray-400'
                              }`}>
                                {step.label}
                              </span>
                            </div>
                            {step.time && (
                              <span className="text-sm text-gray-500 dark:text-gray-400">{step.time}</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-8 bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg flex items-center gap-3">
                    <div className="bg-indigo-100 dark:bg-indigo-800/50 p-2 rounded-full">
                      <Truck size={18} className="text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Your movers are on the way!</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">John & Team (4.9★) - MoveEase Pro Team</p>
                    </div>
                    <button className="ml-auto bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                      Contact Movers
                    </button>
                  </div>
                </div>
              )}
              
              {/* For demonstration/mockup when no search is done */}
              {!trackingResult && !isTracking && (
                <div className="mt-8 text-center py-8">
                  <div className="inline-block p-4 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
                    <Package size={40} className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Real-Time Move Tracking
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                    Enter your tracking ID to see the real-time status of your move. You'll see the current location, estimated arrival time, and progress updates.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;
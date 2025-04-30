import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const BookingBanner = () => {
  return (
    <section id="book-now" className="py-16 bg-indigo-600 dark:bg-indigo-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Move with Ease?
            </h2>
            <p className="text-indigo-100 text-lg mb-8">
              Book your move today and experience the simplicity of our cutting-edge moving platform. From instant quotes to real-time tracking, we make moving stress-free.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#price-calculator" 
                className="bg-white hover:bg-indigo-50 text-indigo-600 font-medium py-3 px-6 rounded-lg transition-colors text-center flex-1 sm:flex-initial flex items-center justify-center gap-2"
              >
                Get a Quote First <ArrowRight size={18} />
              </a>
              <a 
                href="/dashboard" 
                className="bg-indigo-700 hover:bg-indigo-800 text-white font-medium py-3 px-6 rounded-lg transition-colors text-center flex-1 sm:flex-initial flex items-center justify-center gap-2"
              >
                Book Now <Calendar size={18} />
              </a>
            </div>
            
            <div className="mt-8 flex items-center gap-2">
              <div className="flex -space-x-3">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  className="w-10 h-10 rounded-full border-2 border-indigo-600 dark:border-indigo-900 object-cover" 
                  alt="Customer"
                />
                <img 
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  className="w-10 h-10 rounded-full border-2 border-indigo-600 dark:border-indigo-900 object-cover" 
                  alt="Customer"
                />
                <img 
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  className="w-10 h-10 rounded-full border-2 border-indigo-600 dark:border-indigo-900 object-cover" 
                  alt="Customer"
                />
              </div>
              <p className="text-indigo-100">
                <span className="font-semibold text-white">1,000+</span> successful moves this month
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Book Your Move in Minutes
            </h3>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="move-type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Move Type
                </label>
                <select
                  id="move-type"
                  className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-base rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3"
                >
                  <option value="">Select move type</option>
                  <option value="local">Local Move</option>
                  <option value="long-distance">Long Distance Move</option>
                  <option value="international">International Move</option>
                  <option value="commercial">Commercial Move</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="move-from" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Moving From
                  </label>
                  <input
                    type="text"
                    id="move-from"
                    className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-base rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3"
                    placeholder="Current address"
                  />
                </div>
                
                <div>
                  <label htmlFor="move-to" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Moving To
                  </label>
                  <input
                    type="text"
                    id="move-to"
                    className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-base rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3"
                    placeholder="Destination address"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="move-date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Moving Date
                  </label>
                  <input
                    type="date"
                    id="move-date"
                    className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-base rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3"
                  />
                </div>
                
                <div>
                  <label htmlFor="property-size" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Property Size
                  </label>
                  <select
                    id="property-size"
                    className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-base rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3"
                  >
                    <option value="">Select size</option>
                    <option value="studio">Studio</option>
                    <option value="1bed">1 Bedroom</option>
                    <option value="2bed">2 Bedrooms</option>
                    <option value="3bed">3 Bedrooms</option>
                    <option value="4bed">4+ Bedrooms</option>
                    <option value="office">Office</option>
                  </select>
                </div>
              </div>
            </div>
            
            <button
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors mt-6"
            >
              Continue to Book
            </button>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
              No credit card required to get a quote
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingBanner;
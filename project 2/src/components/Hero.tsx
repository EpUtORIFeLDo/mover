import React from 'react';
import { ArrowRight, MapPin, Package, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <div className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Moving Made <span className="text-indigo-600 dark:text-indigo-400">Simple</span> and Stress-Free
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
              Book your move in minutes, not hours. Track your belongings in real-time and enjoy a seamless moving experience with MoveEase.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href="#book-now" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors text-center flex-1 sm:flex-initial flex items-center justify-center gap-2"
              >
                Book Your Move <ArrowRight size={18} />
              </a>
              <a 
                href="#price-calculator" 
                className="border border-gray-300 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-400 text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 font-medium py-3 px-6 rounded-lg transition-colors text-center flex-1 sm:flex-initial"
              >
                Get a Quote
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-start gap-2">
                <div className="bg-indigo-100 dark:bg-indigo-900/50 p-2 rounded-full">
                  <MapPin size={18} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">Real-time tracking for peace of mind</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-indigo-100 dark:bg-indigo-900/50 p-2 rounded-full">
                  <Package size={18} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">Digital inventory management</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-indigo-100 dark:bg-indigo-900/50 p-2 rounded-full">
                  <Shield size={18} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">Insured and secure moving</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/4246196/pexels-photo-4246196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Family moving with MoveEase" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-full">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 13L10 16L17 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Your move is protected</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">All moves include basic insurance coverage</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-indigo-600 text-white p-6 rounded-full shadow-lg hidden md:block">
              <div className="text-center">
                <span className="block text-3xl font-bold">98%</span>
                <span className="text-xs">Customer<br />Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
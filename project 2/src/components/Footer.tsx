import React from 'react';
import { Truck, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Truck size={28} className="text-indigo-400" />
              <span className="font-bold text-2xl">MoveEase</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transforming the moving experience with technology and exceptional service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 hover:bg-indigo-600 transition-colors p-2 rounded-full">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-indigo-600 transition-colors p-2 rounded-full">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-indigo-600 transition-colors p-2 rounded-full">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-indigo-600 transition-colors p-2 rounded-full">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">San Francisco</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Los Angeles</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">New York</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Chicago</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Boston</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Help & Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} MoveEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
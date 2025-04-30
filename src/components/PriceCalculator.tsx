import React, { useState } from 'react';
import { MapPin, Calendar, Truck, Calculator, Plus, Minus } from 'lucide-react';

type InventoryItem = {
  id: number;
  name: string;
  count: number;
  basePrice: number;
};

const PriceCalculator = () => {
  const [step, setStep] = useState(1);
  const [fromAddress, setFromAddress] = useState('');
  const [toAddress, setToAddress] = useState('');
  const [moveDate, setMoveDate] = useState('');
  const [inventory, setInventory] = useState<InventoryItem[]>([
    { id: 1, name: 'Bedroom Set', count: 0, basePrice: 150 },
    { id: 2, name: 'Living Room Set', count: 0, basePrice: 200 },
    { id: 3, name: 'Dining Table', count: 0, basePrice: 100 },
    { id: 4, name: 'Refrigerator', count: 0, basePrice: 120 },
    { id: 5, name: 'Washing Machine', count: 0, basePrice: 80 },
    { id: 6, name: 'Wardrobe', count: 0, basePrice: 90 },
    { id: 7, name: 'Desk', count: 0, basePrice: 70 },
    { id: 8, name: 'Bookshelf', count: 0, basePrice: 60 },
  ]);

  const updateItemCount = (id: number, increment: boolean) => {
    setInventory(inventory.map(item => 
      item.id === id 
        ? { ...item, count: increment ? item.count + 1 : Math.max(0, item.count - 1) } 
        : item
    ));
  };

  const calculatePrice = () => {
    const basePrice = 299;
    const itemsTotal = inventory.reduce((sum, item) => sum + (item.count * item.basePrice), 0);
    return basePrice + itemsTotal;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  return (
    <section id="price-calculator" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get an Instant Price Estimate
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Our transparent pricing calculator gives you an accurate quote in seconds.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-4xl mx-auto overflow-hidden">
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            <button 
              className={`flex-1 py-4 text-center font-medium ${
                step === 1 
                  ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400' 
                  : 'text-gray-500 dark:text-gray-400'
              }`}
              onClick={() => setStep(1)}
            >
              1. Location
            </button>
            <button 
              className={`flex-1 py-4 text-center font-medium ${
                step === 2 
                  ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400' 
                  : 'text-gray-500 dark:text-gray-400'
              }`}
              onClick={() => fromAddress && toAddress ? setStep(2) : null}
            >
              2. Inventory
            </button>
            <button 
              className={`flex-1 py-4 text-center font-medium ${
                step === 3 
                  ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400' 
                  : 'text-gray-500 dark:text-gray-400'
              }`}
              onClick={() => inventory.some(item => item.count > 0) ? setStep(3) : null}
            >
              3. Summary
            </button>
          </div>

          <div className="p-6 md:p-8">
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Where are you moving?</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="from-address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Moving From
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="from-address"
                        placeholder="Enter your current address"
                        className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-base rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-3"
                        value={fromAddress}
                        onChange={(e) => setFromAddress(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="to-address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Moving To
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="to-address"
                        placeholder="Enter your destination address"
                        className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-base rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-3"
                        value={toAddress}
                        onChange={(e) => setToAddress(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="move-date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Moving Date
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="date"
                        id="move-date"
                        className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-base rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-3"
                        value={moveDate}
                        onChange={(e) => setMoveDate(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <button
                    onClick={() => fromAddress && toAddress ? setStep(2) : null}
                    disabled={!fromAddress || !toAddress}
                    className={`w-full py-3 px-4 rounded-lg font-medium text-white 
                      ${fromAddress && toAddress 
                        ? 'bg-indigo-600 hover:bg-indigo-700' 
                        : 'bg-gray-400 cursor-not-allowed'} 
                      transition-colors`}
                  >
                    Continue to Inventory
                  </button>
                </div>
              </div>
            )}
            
            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What are you moving?</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {inventory.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{item.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{formatCurrency(item.basePrice)} each</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateItemCount(item.id, false)}
                          className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                          disabled={item.count === 0}
                        >
                          <Minus size={18} className={item.count === 0 ? "text-gray-300 dark:text-gray-600" : "text-gray-600 dark:text-gray-300"} />
                        </button>
                        <span className="w-8 text-center font-medium">{item.count}</span>
                        <button
                          onClick={() => updateItemCount(item.id, true)}
                          className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <Plus size={18} className="text-gray-600 dark:text-gray-300" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => setStep(1)}
                    className="w-1/3 py-3 px-4 rounded-lg font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => inventory.some(item => item.count > 0) ? setStep(3) : null}
                    disabled={!inventory.some(item => item.count > 0)}
                    className={`w-2/3 py-3 px-4 rounded-lg font-medium text-white 
                      ${inventory.some(item => item.count > 0) 
                        ? 'bg-indigo-600 hover:bg-indigo-700' 
                        : 'bg-gray-400 cursor-not-allowed'} 
                      transition-colors`}
                  >
                    Continue to Summary
                  </button>
                </div>
              </div>
            )}
            
            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Your Move Summary</h3>
                
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="bg-indigo-100 dark:bg-indigo-900/50 p-2 rounded-full">
                      <MapPin size={18} className="text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Moving From</p>
                      <p className="text-gray-900 dark:text-white">{fromAddress}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="bg-indigo-100 dark:bg-indigo-900/50 p-2 rounded-full">
                      <MapPin size={18} className="text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Moving To</p>
                      <p className="text-gray-900 dark:text-white">{toAddress}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="bg-indigo-100 dark:bg-indigo-900/50 p-2 rounded-full">
                      <Calendar size={18} className="text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Moving Date</p>
                      <p className="text-gray-900 dark:text-white">{moveDate || 'Not specified'}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="bg-indigo-100 dark:bg-indigo-900/50 p-2 rounded-full">
                      <Truck size={18} className="text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Inventory Items</p>
                      <ul className="text-gray-900 dark:text-white space-y-1 mt-1">
                        {inventory
                          .filter(item => item.count > 0)
                          .map(item => (
                            <li key={item.id} className="flex justify-between">
                              <span>{item.name} x{item.count}</span>
                              <span>{formatCurrency(item.count * item.basePrice)}</span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <Calculator size={20} className="text-indigo-600 dark:text-indigo-400" />
                      <p className="font-semibold text-gray-900 dark:text-white">Total Estimated Price</p>
                    </div>
                    <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{formatCurrency(calculatePrice())}</p>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    This estimate includes base moving fee, labor, and equipment. Final price may vary based on actual inventory and moving conditions.
                  </p>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => setStep(2)}
                    className="w-1/3 py-3 px-4 rounded-lg font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    Back
                  </button>
                  <a
                    href="#book-now"
                    className="w-2/3 py-3 px-4 rounded-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 text-center transition-colors"
                  >
                    Book This Move
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;
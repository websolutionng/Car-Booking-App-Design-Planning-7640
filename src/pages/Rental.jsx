import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiClock, FiMapPin, FiDollarSign, FiCheck } = FiIcons;

const Rental = () => {
  const [rentalData, setRentalData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    pickupTime: '',
    dropoffDate: '',
    dropoffTime: '',
    carType: ''
  });

  const carTypes = [
    {
      id: 'economy',
      name: 'Economy',
      description: 'Perfect for city driving',
      price: 25,
      features: ['Manual transmission', 'AC', 'Bluetooth'],
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=300&h=200&fit=crop'
    },
    {
      id: 'compact',
      name: 'Compact',
      description: 'Great fuel efficiency',
      price: 35,
      features: ['Automatic transmission', 'AC', 'GPS', 'Bluetooth'],
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=300&h=200&fit=crop'
    },
    {
      id: 'suv',
      name: 'SUV',
      description: 'Spacious and comfortable',
      price: 65,
      features: ['Automatic transmission', 'AC', 'GPS', 'Premium sound', '7 seats'],
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=300&h=200&fit=crop'
    },
    {
      id: 'luxury',
      name: 'Luxury',
      description: 'Premium experience',
      price: 120,
      features: ['Automatic transmission', 'Premium AC', 'GPS', 'Premium sound', 'Leather seats', 'Sunroof'],
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=300&h=200&fit=crop'
    }
  ];

  const handleRental = () => {
    console.log('Rental booked:', rentalData);
    // Handle rental booking logic
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 py-8"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Rent a Car
          </h1>
          <p className="text-xl text-gray-600">
            Choose from our wide range of vehicles for your perfect journey
          </p>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Rental Details</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <SafeIcon icon={FiMapPin} className="inline mr-2" />
                Pickup Location
              </label>
              <input
                type="text"
                value={rentalData.pickupLocation}
                onChange={(e) => setRentalData(prev => ({ ...prev, pickupLocation: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter pickup location"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <SafeIcon icon={FiMapPin} className="inline mr-2" />
                Drop-off Location
              </label>
              <input
                type="text"
                value={rentalData.dropoffLocation}
                onChange={(e) => setRentalData(prev => ({ ...prev, dropoffLocation: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter drop-off location"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <SafeIcon icon={FiCalendar} className="inline mr-2" />
                Pickup Date
              </label>
              <input
                type="date"
                value={rentalData.pickupDate}
                onChange={(e) => setRentalData(prev => ({ ...prev, pickupDate: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <SafeIcon icon={FiClock} className="inline mr-2" />
                Pickup Time
              </label>
              <input
                type="time"
                value={rentalData.pickupTime}
                onChange={(e) => setRentalData(prev => ({ ...prev, pickupTime: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <SafeIcon icon={FiCalendar} className="inline mr-2" />
                Drop-off Date
              </label>
              <input
                type="date"
                value={rentalData.dropoffDate}
                onChange={(e) => setRentalData(prev => ({ ...prev, dropoffDate: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <SafeIcon icon={FiClock} className="inline mr-2" />
                Drop-off Time
              </label>
              <input
                type="time"
                value={rentalData.dropoffTime}
                onChange={(e) => setRentalData(prev => ({ ...prev, dropoffTime: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Car Selection */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Vehicle</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {carTypes.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${
                  rentalData.carType === car.id
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-200 hover:border-primary-300'
                }`}
                onClick={() => setRentalData(prev => ({ ...prev, carType: car.id }))}
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{car.name}</h3>
                  <p className="text-gray-600 mb-4">{car.description}</p>
                  
                  <div className="flex items-center justify-center mb-4">
                    <SafeIcon icon={FiDollarSign} className="text-primary-600" />
                    <span className="text-2xl font-bold text-gray-900">{car.price}</span>
                    <span className="text-gray-600 ml-1">/day</span>
                  </div>
                  
                  <ul className="text-sm text-gray-600 space-y-1">
                    {car.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <SafeIcon icon={FiCheck} className="text-green-500 mr-2 text-xs" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {rentalData.carType && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 text-center"
            >
              <button
                onClick={handleRental}
                className="px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold text-lg hover:bg-primary-700 transition-colors"
              >
                Book Rental
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Rental;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import LiveMap from '../components/LiveMap';
import DriverInfo from '../components/DriverInfo';
import { useBooking } from '../context/BookingContext';

const { FiMapPin, FiClock, FiPhone, FiMessageCircle, FiNavigation } = FiIcons;

const Tracking = () => {
  const { currentBooking } = useBooking();
  const [eta, setEta] = useState(8);
  const [driverLocation, setDriverLocation] = useState({ lat: 40.7128, lng: -74.0060 });

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setEta(prev => Math.max(0, prev - 0.1));
      setDriverLocation(prev => ({
        lat: prev.lat + (Math.random() - 0.5) * 0.001,
        lng: prev.lng + (Math.random() - 0.5) * 0.001
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!currentBooking) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No Active Booking</h2>
          <p className="text-gray-600 mb-6">You don't have any active rides to track.</p>
          <a
            href="#/booking"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <SafeIcon icon={FiMapPin} className="mr-2" />
            Book a Ride
          </a>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Status Bar */}
      <div className="bg-primary-600 text-white p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-semibold">Driver is on the way</span>
            </div>
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiClock} />
              <span className="font-bold">{Math.ceil(eta)} min</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 grid lg:grid-cols-3 gap-6">
        {/* Map Section */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-96 lg:h-[600px]">
            <LiveMap
              driverLocation={driverLocation}
              pickup={currentBooking.pickup}
              destination={currentBooking.destination}
            />
          </div>
        </div>

        {/* Info Panel */}
        <div className="space-y-6">
          {/* Trip Info */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Trip Details</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm text-gray-600">Pickup</p>
                  <p className="font-medium">{currentBooking.pickup}</p>
                </div>
              </div>
              <div className="border-l-2 border-gray-200 ml-1.5 h-8"></div>
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm text-gray-600">Destination</p>
                  <p className="font-medium">{currentBooking.destination}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Driver Info */}
          <DriverInfo />

          {/* Actions */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center space-x-2 p-4 bg-green-50 text-green-700 rounded-xl hover:bg-green-100 transition-colors">
                <SafeIcon icon={FiPhone} />
                <span className="font-medium">Call</span>
              </button>
              <button className="flex items-center justify-center space-x-2 p-4 bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-100 transition-colors">
                <SafeIcon icon={FiMessageCircle} />
                <span className="font-medium">Message</span>
              </button>
            </div>
          </div>

          {/* Share Location */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <button className="w-full flex items-center justify-center space-x-2 p-4 bg-primary-50 text-primary-700 rounded-xl hover:bg-primary-100 transition-colors">
              <SafeIcon icon={FiNavigation} />
              <span className="font-medium">Share Trip</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Tracking;
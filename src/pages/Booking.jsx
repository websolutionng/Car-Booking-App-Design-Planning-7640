import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import LocationInput from '../components/LocationInput';
import VehicleSelection from '../components/VehicleSelection';
import PriceEstimate from '../components/PriceEstimate';
import { useLocation } from '../context/LocationContext';
import { useBooking } from '../context/BookingContext';

const { FiMapPin, FiNavigation, FiClock, FiUser, FiCreditCard } = FiIcons;

const Booking = () => {
  const { currentLocation, setPickupLocation, setDestination } = useLocation();
  const { createBooking } = useBooking();
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    pickup: '',
    destination: '',
    vehicleType: '',
    scheduledTime: 'now',
    passengers: 1,
    paymentMethod: 'card'
  });

  useEffect(() => {
    if (currentLocation) {
      setBookingData(prev => ({
        ...prev,
        pickup: `${currentLocation.lat.toFixed(4)}, ${currentLocation.lng.toFixed(4)}`
      }));
    }
  }, [currentLocation]);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleBooking = () => {
    createBooking(bookingData);
    // Navigate to tracking page
    window.location.hash = '/tracking';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 py-8"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3].map((stepNum) => (
              <div
                key={stepNum}
                className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  step >= stepNum ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}
              >
                {stepNum}
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {step === 1 && (
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Where are you going?</h2>
              
              <LocationInput
                label="Pickup Location"
                icon={FiNavigation}
                value={bookingData.pickup}
                onChange={(value) => {
                  setBookingData(prev => ({ ...prev, pickup: value }));
                  setPickupLocation(value);
                }}
                placeholder="Enter pickup location"
              />

              <LocationInput
                label="Destination"
                icon={FiMapPin}
                value={bookingData.destination}
                onChange={(value) => {
                  setBookingData(prev => ({ ...prev, destination: value }));
                  setDestination(value);
                }}
                placeholder="Where to?"
              />

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <SafeIcon icon={FiClock} className="inline mr-2" />
                    When?
                  </label>
                  <select
                    value={bookingData.scheduledTime}
                    onChange={(e) => setBookingData(prev => ({ ...prev, scheduledTime: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="now">Now</option>
                    <option value="15min">In 15 minutes</option>
                    <option value="30min">In 30 minutes</option>
                    <option value="1hour">In 1 hour</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <SafeIcon icon={FiUser} className="inline mr-2" />
                    Passengers
                  </label>
                  <select
                    value={bookingData.passengers}
                    onChange={(e) => setBookingData(prev => ({ ...prev, passengers: parseInt(e.target.value) }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'passenger' : 'passengers'}</option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose your ride</h2>
              <VehicleSelection
                selected={bookingData.vehicleType}
                onSelect={(type) => setBookingData(prev => ({ ...prev, vehicleType: type }))}
              />
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Confirm your booking</h2>
              
              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">From:</span>
                  <span className="font-medium">{bookingData.pickup}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">To:</span>
                  <span className="font-medium">{bookingData.destination}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Vehicle:</span>
                  <span className="font-medium capitalize">{bookingData.vehicleType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Passengers:</span>
                  <span className="font-medium">{bookingData.passengers}</span>
                </div>
              </div>

              <PriceEstimate vehicleType={bookingData.vehicleType} />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <SafeIcon icon={FiCreditCard} className="inline mr-2" />
                  Payment Method
                </label>
                <select
                  value={bookingData.paymentMethod}
                  onChange={(e) => setBookingData(prev => ({ ...prev, paymentMethod: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="card">Credit Card</option>
                  <option value="cash">Cash</option>
                  <option value="wallet">Digital Wallet</option>
                </select>
              </div>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
            )}
            
            {step < 3 ? (
              <button
                onClick={handleNext}
                disabled={
                  (step === 1 && (!bookingData.pickup || !bookingData.destination)) ||
                  (step === 2 && !bookingData.vehicleType)
                }
                className="ml-auto px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleBooking}
                className="ml-auto px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
              >
                Book Ride
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Booking;
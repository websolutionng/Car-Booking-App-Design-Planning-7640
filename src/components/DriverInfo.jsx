import React from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiCar } = FiIcons;

const DriverInfo = () => {
  const driver = {
    name: 'Michael Johnson',
    rating: 4.9,
    vehicle: 'Toyota Camry',
    plate: 'ABC-123',
    color: 'Silver',
    trips: 2847
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Your Driver</h3>
      
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
          <span className="text-xl font-bold text-gray-600">MJ</span>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-900">{driver.name}</h4>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <SafeIcon icon={FiStar} className="text-yellow-400 text-sm" />
              <span className="text-sm font-medium">{driver.rating}</span>
            </div>
            <span className="text-gray-300">•</span>
            <span className="text-sm text-gray-600">{driver.trips} trips</span>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center space-x-3">
          <SafeIcon icon={FiCar} className="text-gray-600" />
          <div>
            <p className="font-medium text-gray-900">{driver.vehicle}</p>
            <p className="text-sm text-gray-600">{driver.color} • {driver.plate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverInfo;
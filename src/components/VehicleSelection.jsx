import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUsers, FiDollarSign, FiClock } = FiIcons;

const VehicleSelection = ({ selected, onSelect }) => {
  const vehicles = [
    {
      id: 'economy',
      name: 'Economy',
      description: 'Affordable rides',
      capacity: '1-2',
      price: 12,
      eta: '2-5 min',
      icon: '🚗'
    },
    {
      id: 'comfort',
      name: 'Comfort',
      description: 'More space & comfort',
      capacity: '1-4',
      price: 18,
      eta: '3-7 min',
      icon: '🚙'
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'High-end vehicles',
      capacity: '1-4',
      price: 35,
      eta: '5-10 min',
      icon: '🚘'
    },
    {
      id: 'xl',
      name: 'XL',
      description: 'Extra space for groups',
      capacity: '1-6',
      price: 28,
      eta: '4-8 min',
      icon: '🚐'
    }
  ];

  return (
    <div className="space-y-4">
      {vehicles.map((vehicle, index) => (
        <motion.div
          key={vehicle.id}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
            selected === vehicle.id
              ? 'border-primary-500 bg-primary-50'
              : 'border-gray-200 hover:border-primary-300'
          }`}
          onClick={() => onSelect(vehicle.id)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-3xl">{vehicle.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{vehicle.name}</h3>
                <p className="text-gray-600">{vehicle.description}</p>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiUsers} />
                    <span>{vehicle.capacity}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiClock} />
                    <span>{vehicle.eta}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center text-xl font-bold text-gray-900">
                <SafeIcon icon={FiDollarSign} />
                <span>{vehicle.price}</span>
              </div>
              <div className="text-sm text-gray-600">Estimated</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default VehicleSelection;
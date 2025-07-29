import React from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiDollarSign, FiInfo } = FiIcons;

const PriceEstimate = ({ vehicleType }) => {
  const priceData = {
    economy: { base: 12, distance: 8.5, total: 20.5 },
    comfort: { base: 18, distance: 8.5, total: 26.5 },
    premium: { base: 35, distance: 8.5, total: 43.5 },
    xl: { base: 28, distance: 8.5, total: 36.5 }
  };

  const price = priceData[vehicleType] || priceData.economy;

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <SafeIcon icon={FiDollarSign} className="mr-2" />
        Price Breakdown
      </h3>
      
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">Base fare</span>
          <span className="font-medium">${price.base.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Distance (5.2 mi)</span>
          <span className="font-medium">${price.distance.toFixed(2)}</span>
        </div>
        <div className="border-t pt-3 flex justify-between">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-lg font-bold text-primary-600">${price.total.toFixed(2)}</span>
        </div>
      </div>
      
      <div className="mt-4 flex items-start space-x-2 text-sm text-gray-500">
        <SafeIcon icon={FiInfo} className="mt-0.5 flex-shrink-0" />
        <p>Price may vary based on traffic and demand. Final amount will be calculated at trip completion.</p>
      </div>
    </div>
  );
};

export default PriceEstimate;
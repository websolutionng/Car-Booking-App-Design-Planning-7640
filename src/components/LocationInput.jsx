import React, { useState } from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin } = FiIcons;

const LocationInput = ({ label, icon, value, onChange, placeholder }) => {
  const [suggestions] = useState([
    'Current Location',
    'Home',
    'Work',
    'Airport',
    'Downtown',
    'Mall',
    'Hospital',
    'University'
  ]);

  const [showSuggestions, setShowSuggestions] = useState(false);

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        <SafeIcon icon={icon} className="inline mr-2" />
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder={placeholder}
        />
        <SafeIcon icon={FiMapPin} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      
      {showSuggestions && (
        <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => {
                onChange(suggestion);
                setShowSuggestions(false);
              }}
              className="w-full text-left p-3 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationInput;
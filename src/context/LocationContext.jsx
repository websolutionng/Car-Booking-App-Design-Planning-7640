import React, { createContext, useContext, useState, useEffect } from 'react';

const LocationContext = createContext();

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};

export const LocationProvider = ({ children }) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');

  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.log('Location access denied');
          // Fallback to default location (New York)
          setCurrentLocation({
            lat: 40.7128,
            lng: -74.0060
          });
        }
      );
    }
  }, []);

  const value = {
    currentLocation,
    setCurrentLocation,
    pickupLocation,
    setPickupLocation,
    destination,
    setDestination
  };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};
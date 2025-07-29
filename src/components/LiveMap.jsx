import React, { useEffect, useRef } from 'react';

const LiveMap = ({ driverLocation, pickup, destination }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Simulate a map component
    if (mapRef.current) {
      mapRef.current.innerHTML = `
        <div class="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50"></div>
          <div class="relative z-10 text-center">
            <div class="mb-4">
              <div class="w-4 h-4 bg-blue-500 rounded-full mx-auto mb-2 animate-pulse"></div>
              <p class="text-sm text-gray-600">Driver Location</p>
              <p class="text-xs text-gray-500">${driverLocation.lat.toFixed(4)}, ${driverLocation.lng.toFixed(4)}</p>
            </div>
            <div class="mb-4">
              <div class="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
              <p class="text-sm text-gray-600">Pickup: ${pickup}</p>
            </div>
            <div>
              <div class="w-3 h-3 bg-red-500 rounded-full mx-auto mb-2"></div>
              <p class="text-sm text-gray-600">Destination: ${destination}</p>
            </div>
          </div>
          <div class="absolute top-4 left-4 text-xs text-gray-500">Live Tracking</div>
        </div>
      `;
    }
  }, [driverLocation, pickup, destination]);

  return <div ref={mapRef} className="w-full h-full"></div>;
};

export default LiveMap;
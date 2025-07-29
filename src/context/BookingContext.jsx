import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};

export const BookingProvider = ({ children }) => {
  const [currentBooking, setCurrentBooking] = useState(null);
  const [bookingHistory, setBookingHistory] = useState([]);

  const createBooking = (bookingData) => {
    const newBooking = {
      id: Date.now(),
      ...bookingData,
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };
    
    setCurrentBooking(newBooking);
    setBookingHistory(prev => [newBooking, ...prev]);
  };

  const updateBookingStatus = (status) => {
    if (currentBooking) {
      setCurrentBooking(prev => ({ ...prev, status }));
    }
  };

  const completeBooking = () => {
    setCurrentBooking(null);
  };

  const value = {
    currentBooking,
    bookingHistory,
    createBooking,
    updateBookingStatus,
    completeBooking
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};
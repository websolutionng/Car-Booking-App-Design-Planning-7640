import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Rental from './pages/Rental';
import Tracking from './pages/Tracking';
import Profile from './pages/Profile';
import { LocationProvider } from './context/LocationContext';
import { BookingProvider } from './context/BookingContext';

function App() {
  return (
    <LocationProvider>
      <BookingProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/rental" element={<Rental />} />
                <Route path="/tracking" element={<Tracking />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </AnimatePresence>
          </div>
        </Router>
      </BookingProvider>
    </LocationProvider>
  );
}

export default App;
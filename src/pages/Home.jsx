import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiClock, FiShield, FiStar, FiArrowRight, FiCar, FiCalendar } = FiIcons;

const Home = () => {
  const features = [
    {
      icon: FiMapPin,
      title: 'Real-time Tracking',
      description: 'Track your ride in real-time with precise GPS location'
    },
    {
      icon: FiClock,
      title: 'Quick Booking',
      description: 'Book a ride in under 30 seconds with our streamlined process'
    },
    {
      icon: FiShield,
      title: 'Safe & Secure',
      description: 'All drivers are verified and vehicles are regularly inspected'
    },
    {
      icon: FiStar,
      title: 'Top Rated',
      description: '4.9/5 rating from over 100,000+ satisfied customers'
    }
  ];

  const services = [
    {
      title: 'Instant Rides',
      description: 'Get a ride within minutes',
      icon: FiCar,
      color: 'bg-blue-500',
      link: '/booking'
    },
    {
      title: 'Car Rental',
      description: 'Rent by hour, day, or week',
      icon: FiCalendar,
      color: 'bg-green-500',
      link: '/rental'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Your Ride, Your Way
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto"
            >
              Book instant rides or rent cars for longer journeys. Fast, reliable, and always available.
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/booking"
                className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiCar} />
                <span>Book a Ride</span>
              </Link>
              <Link
                to="/rental"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiCalendar} />
                <span>Rent a Car</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Service
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you need a quick ride or a car for the day, we've got you covered
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <Link
                  to={service.link}
                  className="block p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <SafeIcon icon={service.icon} className="text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform">
                    <span>Get Started</span>
                    <SafeIcon icon={FiArrowRight} className="ml-2" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose RideX?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of transportation with our premium features
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={feature.icon} className="text-2xl text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Moving?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of satisfied customers who trust RideX for their transportation needs
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            <span>Start Your Journey</span>
            <SafeIcon icon={FiArrowRight} />
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
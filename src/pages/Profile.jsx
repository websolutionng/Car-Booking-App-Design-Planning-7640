import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUser, FiCreditCard, FiMapPin, FiClock, FiStar, FiSettings, FiHelpCircle, FiLogOut } = FiIcons;

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const userStats = [
    { label: 'Total Rides', value: '127', icon: FiMapPin },
    { label: 'Rating', value: '4.9', icon: FiStar },
    { label: 'Member Since', value: '2023', icon: FiClock },
  ];

  const recentTrips = [
    {
      id: 1,
      from: 'Downtown',
      to: 'Airport',
      date: '2024-01-15',
      amount: '$45.50',
      rating: 5
    },
    {
      id: 2,
      from: 'Home',
      to: 'Office',
      date: '2024-01-14',
      amount: '$12.30',
      rating: 5
    },
    {
      id: 3,
      from: 'Mall',
      to: 'Restaurant',
      date: '2024-01-13',
      amount: '$18.75',
      rating: 4
    }
  ];

  const tabs = [
    { id: 'profile', label: 'Profile', icon: FiUser },
    { id: 'trips', label: 'Trip History', icon: FiMapPin },
    { id: 'payment', label: 'Payment', icon: FiCreditCard },
    { id: 'settings', label: 'Settings', icon: FiSettings },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 py-8"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              {/* User Info */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiUser} className="text-3xl text-primary-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">John Doe</h2>
                <p className="text-gray-600">john.doe@email.com</p>
              </div>

              {/* Stats */}
              <div className="space-y-4 mb-8">
                {userStats.map((stat, index) => (
                  <div key={stat.label} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <SafeIcon icon={stat.icon} className="text-primary-600" />
                      <span className="text-gray-700">{stat.label}</span>
                    </div>
                    <span className="font-bold text-gray-900">{stat.value}</span>
                  </div>
                ))}
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <SafeIcon icon={tab.icon} />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </nav>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <button className="w-full flex items-center space-x-3 p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                  <SafeIcon icon={FiHelpCircle} />
                  <span className="font-medium">Help & Support</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <SafeIcon icon={FiLogOut} />
                  <span className="font-medium">Sign Out</span>
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {activeTab === 'profile' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Profile Information</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        value="John"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        value="Doe"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        value="john.doe@email.com"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        value="+1 (555) 123-4567"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <button className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                    Update Profile
                  </button>
                </motion.div>
              )}

              {activeTab === 'trips' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Trip History</h3>
                  
                  <div className="space-y-4">
                    {recentTrips.map((trip) => (
                      <div key={trip.id} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              <span className="font-medium">{trip.from}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                              <span className="font-medium">{trip.to}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-gray-900">{trip.amount}</div>
                            <div className="text-sm text-gray-600">{trip.date}</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <SafeIcon
                                key={i}
                                icon={FiStar}
                                className={`text-sm ${
                                  i < trip.rating ? 'text-yellow-400' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <button className="text-primary-600 hover:text-primary-700 font-medium">
                            View Details
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'payment' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Payment Methods</h3>
                  
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                            <span className="text-white text-xs font-bold">VISA</span>
                          </div>
                          <div>
                            <div className="font-medium">•••• •••• •••• 1234</div>
                            <div className="text-sm text-gray-600">Expires 12/25</div>
                          </div>
                        </div>
                        <button className="text-red-600 hover:text-red-700">Remove</button>
                      </div>
                    </div>
                    
                    <button className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary-300 hover:text-primary-600 transition-colors">
                      + Add New Payment Method
                    </button>
                  </div>
                </motion.div>
              )}

              {activeTab === 'settings' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Settings</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">Push Notifications</h4>
                        <p className="text-sm text-gray-600">Get notified about ride updates</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">Location Services</h4>
                        <p className="text-sm text-gray-600">Allow location access for better service</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">Email Updates</h4>
                        <p className="text-sm text-gray-600">Receive promotional emails and updates</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
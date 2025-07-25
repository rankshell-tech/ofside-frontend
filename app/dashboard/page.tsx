'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import { Calendar, Clock, MapPin, Star, User, Settings, CreditCard, History, Plus } from 'lucide-react';

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState<'bookings' | 'history' | 'profile'>('bookings');

  const upcomingBookings = [
    {
      id: 1,
      venue: 'SportZone Arena',
      sport: 'Football',
      date: '2024-01-15',
      time: '18:00 - 19:00',
      price: 500,
      status: 'confirmed',
      image: 'https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 2,
      venue: 'Elite Sports Complex',
      sport: 'Basketball',
      date: '2024-01-18',
      time: '20:00 - 21:00',
      price: 750,
      status: 'confirmed',
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ];

  const bookingHistory = [
    {
      id: 3,
      venue: 'Champions Ground',
      sport: 'Football',
      date: '2024-01-10',
      time: '19:00 - 20:00',
      price: 400,
      status: 'completed',
      rating: 5,
      image: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 4,
      venue: 'Victory Courts',
      sport: 'Tennis',
      date: '2024-01-05',
      time: '16:00 - 17:00',
      price: 600,
      status: 'completed',
      rating: 4,
      image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ];

  const userProfile = {
    name: 'Rahul Sharma',
    email: 'rahul.sharma@example.com',
    phone: '+91 98765 43210',
    location: 'Mumbai, Maharashtra',
    memberSince: 'January 2023',
    totalBookings: 24,
    favoritesSports: ['Football', 'Basketball', 'Tennis']
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">My Dashboard</h1>
          <p className="text-gray-600">Manage your bookings and profile</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-[#ffe100] rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-black">{userProfile.name}</h3>
                  <p className="text-gray-600 text-sm">Player</p>
                </div>
              </div>
              
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('bookings')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center space-x-3 ${
                    activeTab === 'bookings' ? 'bg-[#ffe100] text-black' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Calendar className="w-5 h-5" />
                  <span>Upcoming Bookings</span>
                </button>
                <button
                  onClick={() => setActiveTab('history')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center space-x-3 ${
                    activeTab === 'history' ? 'bg-[#ffe100] text-black' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <History className="w-5 h-5" />
                  <span>Booking History</span>
                </button>
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center space-x-3 ${
                    activeTab === 'profile' ? 'bg-[#ffe100] text-black' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Settings className="w-5 h-5" />
                  <span>Profile Settings</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Upcoming Bookings */}
            {activeTab === 'bookings' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold text-black">Upcoming Bookings</h2>
                  <button className="btn-primary flex items-center space-x-2">
                    <Plus className="w-4 h-4" />
                    <span>New Booking</span>
                  </button>
                </div>
                
                {upcomingBookings.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingBookings.map((booking) => (
                      <div key={booking.id} className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex items-center space-x-4">
                          <img
                            src={booking.image}
                            alt={booking.venue}
                            className="w-20 h-20 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-black mb-1">{booking.venue}</h3>
                            <p className="text-gray-600 mb-2">{booking.sport}</p>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {booking.date}
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {booking.time}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-2xl font-bold text-[#ffe100]">₹{booking.price}</span>
                            <div className="mt-2">
                              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                {booking.status}
                              </span>
                            </div>
                            <button className="mt-3 text-sm text-red-600 hover:text-red-800">
                              Cancel Booking
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                    <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-black mb-2">No Upcoming Bookings</h3>
                    <p className="text-gray-600 mb-6">You don't have any upcoming bookings yet.</p>
                    <button className="btn-primary">Book a Venue</button>
                  </div>
                )}
              </div>
            )}

            {/* Booking History */}
            {activeTab === 'history' && (
              <div>
                <h2 className="text-2xl font-semibold text-black mb-6">Booking History</h2>
                
                <div className="space-y-4">
                  {bookingHistory.map((booking) => (
                    <div key={booking.id} className="bg-white rounded-xl shadow-sm p-6">
                      <div className="flex items-center space-x-4">
                        <img
                          src={booking.image}
                          alt={booking.venue}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-black mb-1">{booking.venue}</h3>
                          <p className="text-gray-600 mb-2">{booking.sport}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {booking.date}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {booking.time}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-gray-400">₹{booking.price}</span>
                          <div className="mt-2">
                            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                              {booking.status}
                            </span>
                          </div>
                          <div className="flex items-center mt-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < booking.rating ? 'text-[#ffe100] fill-current' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Profile Settings */}
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-2xl font-semibold text-black mb-6">Profile Settings</h2>
                
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          defaultValue={userProfile.name}
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          defaultValue={userProfile.email}
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          defaultValue={userProfile.phone}
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Location
                        </label>
                        <input
                          type="text"
                          defaultValue={userProfile.location}
                          className="input-field"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Favorite Sports
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {['Football', 'Basketball', 'Tennis', 'Cricket', 'Badminton', 'Swimming'].map((sport) => (
                          <label key={sport} className="flex items-center">
                            <input
                              type="checkbox"
                              defaultChecked={userProfile.favoritesSports.includes(sport)}
                              className="rounded border-gray-300 text-[#ffe100] focus:ring-[#ffe100] mr-2"
                            />
                            {sport}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-end space-x-4">
                      <button type="button" className="btn-secondary">
                        Cancel
                      </button>
                      <button type="submit" className="btn-primary">
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>

                {/* Account Stats */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                    <div className="text-3xl font-bold text-[#ffe100] mb-2">{userProfile.totalBookings}</div>
                    <div className="text-gray-600">Total Bookings</div>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                    <div className="text-3xl font-bold text-[#ffe100] mb-2">{userProfile.favoritesSports.length}</div>
                    <div className="text-gray-600">Favorite Sports</div>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                    <div className="text-lg font-bold text-[#ffe100] mb-2">{userProfile.memberSince}</div>
                    <div className="text-gray-600">Member Since</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
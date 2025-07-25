'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import { Plus, MapPin, Star, Calendar, DollarSign, Users, Settings, Edit, Trash2, Eye } from 'lucide-react';

export default function OwnerDashboard() {
  const [activeTab, setActiveTab] = useState<'venues' | 'bookings' | 'earnings' | 'calendar'>('venues');

  const venues = [
    {
      id: 1,
      name: 'SportZone Arena',
      location: 'Downtown Mumbai',
      rating: 4.8,
      reviews: 245,
      sports: ['Football', 'Cricket'],
      status: 'active',
      bookings: 12,
      revenue: 15600,
      image: 'https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 2,
      name: 'Elite Sports Complex',
      location: 'Bandra West',
      rating: 4.9,
      reviews: 189,
      sports: ['Basketball', 'Tennis'],
      status: 'active',
      bookings: 8,
      revenue: 9200,
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ];

  const recentBookings = [
    {
      id: 1,
      venue: 'SportZone Arena',
      customer: 'Rahul Sharma',
      sport: 'Football',
      date: '2024-01-15',
      time: '18:00 - 19:00',
      amount: 500,
      status: 'confirmed'
    },
    {
      id: 2,
      venue: 'Elite Sports Complex',
      customer: 'Priya Patel',
      sport: 'Basketball',
      date: '2024-01-16',
      time: '20:00 - 21:00',
      amount: 750,
      status: 'pending'
    },
    {
      id: 3,
      venue: 'SportZone Arena',
      customer: 'Arjun Kumar',
      sport: 'Cricket',
      date: '2024-01-17',
      time: '16:00 - 17:00',
      amount: 600,
      status: 'confirmed'
    }
  ];

  const earnings = {
    thisMonth: 24800,
    lastMonth: 18600,
    totalBookings: 45,
    averageBooking: 551
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">Owner Dashboard</h1>
          <p className="text-gray-600">Manage your venues and bookings</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Venues</p>
                <p className="text-3xl font-bold text-black">{venues.length}</p>
              </div>
              <div className="w-12 h-12 bg-[#ffe100] bg-opacity-20 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#ffe100]" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">This Month</p>
                <p className="text-3xl font-bold text-black">₹{earnings.thisMonth.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Bookings</p>
                <p className="text-3xl font-bold text-black">{earnings.totalBookings}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Avg. Booking</p>
                <p className="text-3xl font-bold text-black">₹{earnings.averageBooking}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6">              
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('venues')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center space-x-3 ${
                    activeTab === 'venues' ? 'bg-[#ffe100] text-black' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <MapPin className="w-5 h-5" />
                  <span>My Venues</span>
                </button>
                <button
                  onClick={() => setActiveTab('bookings')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center space-x-3 ${
                    activeTab === 'bookings' ? 'bg-[#ffe100] text-black' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Calendar className="w-5 h-5" />
                  <span>Bookings</span>
                </button>
                <button
                  onClick={() => setActiveTab('earnings')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center space-x-3 ${
                    activeTab === 'earnings' ? 'bg-[#ffe100] text-black' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <DollarSign className="w-5 h-5" />
                  <span>Earnings</span>
                </button>
                <button
                  onClick={() => setActiveTab('calendar')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center space-x-3 ${
                    activeTab === 'calendar' ? 'bg-[#ffe100] text-black' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Calendar className="w-5 h-5" />
                  <span>Calendar</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* My Venues */}
            {activeTab === 'venues' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold text-black">My Venues</h2>
                  <button className="btn-primary flex items-center space-x-2">
                    <Plus className="w-4 h-4" />
                    <span>Add Venue</span>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {venues.map((venue) => (
                    <div key={venue.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                      <div className="relative h-48">
                        <img
                          src={venue.image}
                          alt={venue.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                          <Star className="w-3 h-3 text-[#ffe100] fill-current mr-1" />
                          {venue.rating}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-black mb-2">{venue.name}</h3>
                        <p className="text-gray-600 mb-3 flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {venue.location}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {venue.sports.map((sport) => (
                            <span key={sport} className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-xs">
                              {sport}
                            </span>
                          ))}
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                          <div>
                            <span className="text-gray-600">This Month:</span>
                            <div className="font-semibold">{venue.bookings} bookings</div>
                          </div>
                          <div>
                            <span className="text-gray-600">Revenue:</span>
                            <div className="font-semibold text-[#ffe100]">₹{venue.revenue.toLocaleString()}</div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="flex-1 btn-secondary text-sm py-2 flex items-center justify-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>View</span>
                          </button>
                          <button className="flex-1 btn-outline text-sm py-2 flex items-center justify-center space-x-1">
                            <Edit className="w-4 h-4" />
                            <span>Edit</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bookings */}
            {activeTab === 'bookings' && (
              <div>
                <h2 className="text-2xl font-semibold text-black mb-6">Recent Bookings</h2>
                
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b">
                        <tr>
                          <th className="text-left py-4 px-6 font-medium text-gray-700">Customer</th>
                          <th className="text-left py-4 px-6 font-medium text-gray-700">Venue</th>
                          <th className="text-left py-4 px-6 font-medium text-gray-700">Sport</th>
                          <th className="text-left py-4 px-6 font-medium text-gray-700">Date & Time</th>
                          <th className="text-left py-4 px-6 font-medium text-gray-700">Amount</th>
                          <th className="text-left py-4 px-6 font-medium text-gray-700">Status</th>
                          <th className="text-left py-4 px-6 font-medium text-gray-700">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentBookings.map((booking) => (
                          <tr key={booking.id} className="border-b hover:bg-gray-50">
                            <td className="py-4 px-6">
                              <div className="font-medium text-black">{booking.customer}</div>
                            </td>
                            <td className="py-4 px-6 text-gray-600">{booking.venue}</td>
                            <td className="py-4 px-6">
                              <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-xs">
                                {booking.sport}
                              </span>
                            </td>
                            <td className="py-4 px-6 text-gray-600">
                              <div>{booking.date}</div>
                              <div className="text-sm">{booking.time}</div>
                            </td>
                            <td className="py-4 px-6 font-semibold text-[#ffe100]">₹{booking.amount}</td>
                            <td className="py-4 px-6">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                booking.status === 'confirmed' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {booking.status}
                              </span>
                            </td>
                            <td className="py-4 px-6">
                              <div className="flex space-x-2">
                                <button className="text-blue-600 hover:text-blue-800 text-sm">View</button>
                                <button className="text-green-600 hover:text-green-800 text-sm">Accept</button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Earnings */}
            {activeTab === 'earnings' && (
              <div>
                <h2 className="text-2xl font-semibold text-black mb-6">Earnings Overview</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-black mb-4">Monthly Comparison</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">This Month</span>
                        <span className="text-2xl font-bold text-[#ffe100]">₹{earnings.thisMonth.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Last Month</span>
                        <span className="text-xl font-semibold text-gray-400">₹{earnings.lastMonth.toLocaleString()}</span>
                      </div>
                      <div className="pt-4 border-t">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Growth</span>
                          <span className="text-lg font-semibold text-green-600">
                            +{Math.round(((earnings.thisMonth - earnings.lastMonth) / earnings.lastMonth) * 100)}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-black mb-4">Booking Stats</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Total Bookings</span>
                        <span className="text-2xl font-bold text-black">{earnings.totalBookings}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Average per Booking</span>
                        <span className="text-xl font-semibold text-[#ffe100]">₹{earnings.averageBooking}</span>
                      </div>
                      <div className="pt-4 border-t">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Completion Rate</span>
                          <span className="text-lg font-semibold text-green-600">96%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Earnings by Venue */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-black mb-4">Earnings by Venue</h3>
                  <div className="space-y-4">
                    {venues.map((venue) => (
                      <div key={venue.id} className="flex justify-between items-center py-3 border-b last:border-b-0">
                        <div className="flex items-center space-x-3">
                          <img
                            src={venue.image}
                            alt={venue.name}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <h4 className="font-medium text-black">{venue.name}</h4>
                            <p className="text-sm text-gray-600">{venue.bookings} bookings</p>
                          </div>
                        </div>
                        <span className="text-lg font-semibold text-[#ffe100]">₹{venue.revenue.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Calendar */}
            {activeTab === 'calendar' && (
              <div>
                <h2 className="text-2xl font-semibold text-black mb-6">Availability Calendar</h2>
                
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="text-center py-12">
                    <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-black mb-2">Calendar View</h3>
                    <p className="text-gray-600 mb-6">Manage your venues' availability and view bookings in calendar format.</p>
                    <button className="btn-primary">Open Calendar</button>
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
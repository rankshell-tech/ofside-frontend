'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import { Users, MapPin, DollarSign, TrendingUp, Eye, Edit, Trash2, CheckCircle, XCircle } from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'venues' | 'reports'>('overview');

  const stats = {
    totalUsers: 2847,
    totalVenues: 156,
    totalRevenue: 1250000,
    monthlyGrowth: 12.5
  };

  const users = [
    {
      id: 1,
      name: 'Rahul Sharma',
      email: 'rahul.sharma@example.com',
      type: 'Player',
      joinDate: '2023-01-15',
      totalBookings: 24,
      status: 'active'
    },
    {
      id: 2,
      name: 'Mumbai Sports Ltd.',
      email: 'info@mumbaisports.com',
      type: 'Venue Owner',
      joinDate: '2022-11-03',
      totalBookings: 156,
      status: 'active'
    },
    {
      id: 3,
      name: 'Priya Patel',
      email: 'priya.patel@example.com',
      type: 'Player',
      joinDate: '2023-03-22',
      totalBookings: 8,
      status: 'inactive'
    }
  ];

  const venues = [
    {
      id: 1,
      name: 'SportZone Arena',
      owner: 'Mumbai Sports Ltd.',
      location: 'Downtown Mumbai',
      status: 'approved',
      rating: 4.8,
      totalBookings: 245,
      monthlyRevenue: 32500
    },
    {
      id: 2,
      name: 'Elite Sports Complex',
      owner: 'Elite Sports Pvt Ltd.',
      location: 'Bandra West',
      status: 'pending',
      rating: 4.9,
      totalBookings: 189,
      monthlyRevenue: 28750
    },
    {
      id: 3,
      name: 'Champions Ground',
      owner: 'Sports Champions LLC',
      location: 'Andheri East',
      status: 'approved',
      rating: 4.7,
      totalBookings: 312,
      monthlyRevenue: 41200
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Monitor and manage the Ofside platform</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center space-x-3 ${
                    activeTab === 'overview' ? 'bg-[#ffe100] text-black' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <TrendingUp className="w-5 h-5" />
                  <span>Overview</span>
                </button>
                <button
                  onClick={() => setActiveTab('users')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center space-x-3 ${
                    activeTab === 'users' ? 'bg-[#ffe100] text-black' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Users className="w-5 h-5" />
                  <span>Manage Users</span>
                </button>
                <button
                  onClick={() => setActiveTab('venues')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center space-x-3 ${
                    activeTab === 'venues' ? 'bg-[#ffe100] text-black' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <MapPin className="w-5 h-5" />
                  <span>Manage Venues</span>
                </button>
                <button
                  onClick={() => setActiveTab('reports')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center space-x-3 ${
                    activeTab === 'reports' ? 'bg-[#ffe100] text-black' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <DollarSign className="w-5 h-5" />
                  <span>Reports</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Overview */}
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-2xl font-semibold text-black mb-6">Platform Overview</h2>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-600 text-sm">Total Users</p>
                        <p className="text-3xl font-bold text-black">{stats.totalUsers.toLocaleString()}</p>
                      </div>
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-600 text-sm">Total Venues</p>
                        <p className="text-3xl font-bold text-black">{stats.totalVenues}</p>
                      </div>
                      <div className="w-12 h-12 bg-[#ffe100] bg-opacity-20 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-[#ffe100]" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-600 text-sm">Total Revenue</p>
                        <p className="text-3xl font-bold text-black">₹{(stats.totalRevenue / 100000).toFixed(1)}L</p>
                      </div>
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <DollarSign className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-600 text-sm">Monthly Growth</p>
                        <p className="text-3xl font-bold text-black">+{stats.monthlyGrowth}%</p>
                      </div>
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-black mb-4">Recent Platform Activity</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-black font-medium">New venue registered</p>
                        <p className="text-gray-600 text-sm">Elite Sports Complex in Bandra West</p>
                      </div>
                      <span className="text-gray-500 text-sm">2 hours ago</span>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-black font-medium">User milestone reached</p>
                        <p className="text-gray-600 text-sm">Platform crossed 2,800 active users</p>
                      </div>
                      <span className="text-gray-500 text-sm">5 hours ago</span>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-black font-medium">High booking volume</p>
                        <p className="text-gray-600 text-sm">SportZone Arena received 12 bookings today</p>
                      </div>
                      <span className="text-gray-500 text-sm">1 day ago</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Manage Users */}
            {activeTab === 'users' && (
              <div>
                <h2 className="text-2xl font-semibold text-black mb-6">Manage Users</h2>
                
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b">
                        <tr>
                          <th className="text-left py-4 px-6 font-medium text-gray-700">Name</th>
                          <th className="text-left py-4 px-6 font-medium text-gray-700">Email</th>
                          <th className="text-left py-4 px-6 font-medium text-gray-700">Type</th>
                          <th className="text-left py-4 px-6 font-medium text-gray-700">Join Date</th>
                          <th className="text-left py-4 px-6 font-medium text-gray-700">Bookings</th>
                          <th className="text-left py-4 px-6 font-medium text-gray-700">Status</th>
                          <th className="text-left py-4 px-6 font-medium text-gray-700">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user) => (
                          <tr key={user.id} className="border-b hover:bg-gray-50">
                            <td className="py-4 px-6">
                              <div className="font-medium text-black">{user.name}</div>
                            </td>
                            <td className="py-4 px-6 text-gray-600">{user.email}</td>
                            <td className="py-4 px-6">
                              <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                                user.type === 'Player' 
                                  ? 'bg-blue-100 text-blue-800' 
                                  : 'bg-purple-100 text-purple-800'
                              }`}>
                                {user.type}
                              </span>
                            </td>
                            <td className="py-4 px-6 text-gray-600">{user.joinDate}</td>
                            <td className="py-4 px-6 font-medium">{user.totalBookings}</td>
                            <td className="py-4 px-6">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                user.status === 'active' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-red-100 text-red-800'
                              }`}>
                                {user.status}
                              </span>
                            </td>
                            <td className="py-4 px-6">
                              <div className="flex space-x-2">
                                <button className="text-blue-600 hover:text-blue-800">
                                  <Eye className="w-4 h-4" />
                                </button>
                                <button className="text-green-600 hover:text-green-800">
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button className="text-red-600 hover:text-red-800">
                                  <Trash2 className="w-4 h-4" />
                                </button>
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

            {/* Manage Venues */}
            {activeTab === 'venues' && (
              <div>
                <h2 className="text-2xl font-semibold text-black mb-6">Manage Venues</h2>
                
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b">
                        <tr>
                          <th className="text-left py-4 px-6 font-medium text-gray-700">Venue</th>
                          <th className="text-left py-4 px-6 font-medium text-gray-700">Owner</th>
                          <th className="text-left py-4 px-6 font-medium text-gray-700">Location</th>
                          <th className="text-left py-4 px-6 font-medium text-gray-700">Rating</th>
                          <th className="text-left py-4 px-6 font-medium text-gray-700">Bookings</th>
                          <th className="text-left py-4 px-6 font-medium text-gray-700">Revenue</th>
                          <th className="text-left py-4 px-6 font-medium text-gray-700">Status</th>
                          <th className="text-left py-4 px-6 font-medium text-gray-700">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {venues.map((venue) => (
                          <tr key={venue.id} className="border-b hover:bg-gray-50">
                            <td className="py-4 px-6">
                              <div className="font-medium text-black">{venue.name}</div>
                            </td>
                            <td className="py-4 px-6 text-gray-600">{venue.owner}</td>
                            <td className="py-4 px-6 text-gray-600">{venue.location}</td>
                            <td className="py-4 px-6">
                              <div className="flex items-center">
                                <span className="text-[#ffe100] mr-1">★</span>
                                <span className="font-medium">{venue.rating}</span>
                              </div>
                            </td>
                            <td className="py-4 px-6 font-medium">{venue.totalBookings}</td>
                            <td className="py-4 px-6 font-medium text-[#ffe100]">₹{venue.monthlyRevenue.toLocaleString()}</td>
                            <td className="py-4 px-6">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                venue.status === 'approved' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {venue.status}
                              </span>
                            </td>
                            <td className="py-4 px-6">
                              <div className="flex space-x-2">
                                <button className="text-blue-600 hover:text-blue-800">
                                  <Eye className="w-4 h-4" />
                                </button>
                                {venue.status === 'pending' && (
                                  <>
                                    <button className="text-green-600 hover:text-green-800">
                                      <CheckCircle className="w-4 h-4" />
                                    </button>
                                    <button className="text-red-600 hover:text-red-800">
                                      <XCircle className="w-4 h-4" />
                                    </button>
                                  </>
                                )}
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

            {/* Reports */}
            {activeTab === 'reports' && (
              <div>
                <h2 className="text-2xl font-semibold text-black mb-6">Platform Reports</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-black mb-4">Revenue Analytics</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">This Month</span>
                        <span className="text-xl font-bold text-[#ffe100]">₹1,24,800</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Last Month</span>
                        <span className="text-lg font-semibold text-gray-400">₹98,600</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Average per Day</span>
                        <span className="text-lg font-semibold text-black">₹4,160</span>
                      </div>
                      <div className="pt-4 border-t">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Platform Commission</span>
                          <span className="text-lg font-semibold text-green-600">₹12,480</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-black mb-4">User Analytics</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">New Users (This Month)</span>
                        <span className="text-xl font-bold text-blue-600">184</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Active Users</span>
                        <span className="text-lg font-semibold text-black">2,643</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">User Retention</span>
                        <span className="text-lg font-semibold text-green-600">84%</span>
                      </div>
                      <div className="pt-4 border-t">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Avg. Bookings/User</span>
                          <span className="text-lg font-semibold text-[#ffe100]">3.2</span>
                        </div>
                      </div>
                    </div>
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
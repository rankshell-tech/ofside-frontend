'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Search, MapPin, Users, Calendar, Star, ArrowRight, Play, Shield, Clock, Award } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const [location, setLocation] = useState('');
  const [sport, setSport] = useState('');

  const sports = [
    { name: 'Football', icon: '⚽', color: 'bg-green-100 text-green-800' },
    { name: 'Basketball', icon: '🏀', color: 'bg-orange-100 text-orange-800' },
    { name: 'Tennis', icon: '🎾', color: 'bg-blue-100 text-blue-800' },
    { name: 'Cricket', icon: '🏏', color: 'bg-red-100 text-red-800' },
    { name: 'Badminton', icon: '🏸', color: 'bg-purple-100 text-purple-800' },
    { name: 'Swimming', icon: '🏊', color: 'bg-cyan-100 text-cyan-800' },
  ];

  const venues = [
    {
      id: 1,
      name: 'SportZone Arena',
      location: 'Downtown Mumbai',
      rating: 4.8,
      price: '₹500/hour',
      image: 'https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&w=400',
      sports: ['Football', 'Cricket']
    },
    {
      id: 2,
      name: 'Elite Sports Complex',
      location: 'Bandra West',
      rating: 4.9,
      price: '₹750/hour',
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=400',
      sports: ['Basketball', 'Tennis']
    },
    {
      id: 3,
      name: 'Champions Ground',
      location: 'Andheri East',
      rating: 4.7,
      price: '₹400/hour',
      image: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=400',
      sports: ['Football', 'Basketball']
    },
  ];

  const testimonials = [
    {
      name: 'Rahul Sharma',
      text: 'Ofside made it so easy to find and book a football ground for our team. Great platform!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Priya Patel',
      text: 'Love the variety of venues available. Booked a tennis court in minutes!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Arjun Kumar',
      text: 'The booking process is super smooth and the venues are top quality.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onLoadStart={() => console.log('Video loading started')}
            onCanPlay={() => console.log('Video can play')}
            onError={(e) => console.error('Video error:', e)}
          >
            <source src="https://videos.pexels.com/video-files/8940710/8940710-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            <source src="https://videos.pexels.com/video-files/8940710/8940710-hd_1920_1080_25fps.mp4" type="video/mp4" />
            {/* Fallback image if video fails */}
            <img 
              src="https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=1920" 
              alt="Sports background"
              className="w-full h-full object-cover"
            />
          </video>
        </div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Book Sports Venues
              <span className="block text-[#ffe100]">Instantly</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12">
              Find and book the perfect sports venue near you in seconds. Play more, worry less.
            </p>
            
            {/* Search Bar */}
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-2xl max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Where do you want to play?"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 text-black rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ffe100] focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={sport}
                    onChange={(e) => setSport(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 text-black rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ffe100] focus:border-transparent appearance-none"
                  >
                    <option value="">Select Sport</option>
                    {sports.map((sport) => (
                      <option key={sport.name} value={sport.name}>{sport.name}</option>
                    ))}
                  </select>
                </div>
                <Link href="/venues" className="btn-primary py-4 text-center flex items-center justify-center space-x-2">
                  <Search className="w-5 h-5" />
                  <span>Search Venues</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Sports */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Browse by Sports</h2>
            <p className="text-xl text-gray-600">Find venues for your favorite sport</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {sports.map((sport) => (
              <Link
                key={sport.name}
                href={`/venues?sport=${sport.name}`}
                className="group card hover:shadow-lg transition-all duration-300 text-center cursor-pointer"
              >
                <div className="text-4xl mb-4">{sport.icon}</div>
                <h3 className="font-semibold text-black group-hover:text-[#ffe100] transition-colors">
                  {sport.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Venues */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-black mb-4">Popular Venues Near You</h2>
              <p className="text-xl text-gray-600">Top-rated venues in your area</p>
            </div>
            <Link href="/venues" className="btn-outline flex items-center space-x-2">
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {venues.map((venue) => (
              <Link key={venue.id} href={`/venues/${venue.id}`} className="group">
                <div className="card hover:shadow-xl transition-all duration-300 p-0 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={venue.image}
                      alt={venue.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                      ⭐ {venue.rating}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-[#ffe100] transition-colors">
                      {venue.name}
                    </h3>
                    <p className="text-gray-600 mb-3 flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {venue.location}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        {venue.sports.map((sport) => (
                          <span key={sport} className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-xs">
                            {sport}
                          </span>
                        ))}
                      </div>
                      <span className="text-lg font-bold text-[#ffe100]">{venue.price}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Book your perfect venue in 3 simple steps</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#ffe100] rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-semibold text-black mb-4">1. Search</h3>
              <p className="text-gray-600">Find venues by location, sport, and availability</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#ffe100] rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-semibold text-black mb-4">2. Book</h3>
              <p className="text-gray-600">Select your preferred time slot and make payment</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#ffe100] rounded-full flex items-center justify-center mx-auto mb-6">
                <Play className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-semibold text-black mb-4">3. Play</h3>
              <p className="text-gray-600">Show up and enjoy your game at the venue</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">What Our Players Say</h2>
            <p className="text-xl text-gray-600">Join thousands of happy players</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#ffe100] fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <span className="font-semibold text-black">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download CTA */}
      <section className="py-20 bg-[#ffe100]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-black mb-4">Get the Ofside App</h2>
            <p className="text-xl text-black mb-8">Book venues on the go with our mobile app</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-black text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors flex items-center space-x-2">
                <span>📱</span>
                <span>Download for iOS</span>
              </button>
              <button className="bg-black text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors flex items-center space-x-2">
                <span>🤖</span>
                <span>Download for Android</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
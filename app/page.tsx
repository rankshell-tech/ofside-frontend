'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Search, MapPin, Users, Calendar, Star, ArrowRight, Play, Shield, Clock, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

export default function HomePage() {
  const [location, setLocation] = useState('');
  const [sport, setSport] = useState('');

  const sports = [
    { name: 'Football', img: require('@/assets/images/football.jpg').default },
    { name: 'Box cricket', img: require('@/assets/images/box-cricket.png').default },
    { name: 'Squash', img: require('@/assets/images/squash.png').default },
    { name: 'Box football', img: require('@/assets/images/box-football.png').default },
    { name: 'Golf', img: require('@/assets/images/golf.png').default },
    { name: 'Volleyball', img: require('@/assets/images/volleyball.png').default },
    { name: 'Hockey', img: require('@/assets/images/hockey.png').default },
    { name: 'Swimming', img: require('@/assets/images/swimming.png').default },
    { name: 'Pickleball', img: require('@/assets/images/pickleball.png').default },
    { name: 'Badminton', img: require('@/assets/images/badminton.png').default },
  ];

  const venues = [
    { name: 'ABC Sport', img: require('@/assets/images/swimming.png').default },
    { name: 'XYZ Sport', img: require('@/assets/images/pickleball.png').default },
    { name: 'ABC Club', img: require('@/assets/images/badminton.png').default },
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

      <div className="p-4 space-y-6">
        {/* Choose your sport */}
        <section className="py-4 border-b border-gray-200">
          <div className="flex justify-between items-center underline underline-offset-4">
            <h2 className="text-lg font-bold">Choose your Sport</h2>
            <Link href="/somepage" className="flex items-center space-x-1 text-black font-semibold hover:underline">
              <span>more</span>
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-black">
                <ChevronRightIcon className="w-4 h-4 text-black" />
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-5 gap-3 mt-2">
            {sports.map((sport) => (
            <div key={sport.name} className="text-center">
              <div className="aspect-square rounded-xl overflow-hidden shadow-md">
                <Image src={sport.img} alt={sport.name} width={100} height={100} className="w-full h-full object-cover" />
              </div>
              <p className="text-xs mt-1 font-semibold">{sport.name}</p>
            </div>
              ))}
          </div>
        </section>

        {/* Trending Venues */}
        <section className="py-4 border-b border-gray-200">
          <div className="flex justify-between items-center underline underline-offset-4">
            <h2 className="text-lg font-bold">Trending in the city</h2>
            <Link href="/somepage" className="flex items-center space-x-1 text-black font-semibold hover:underline">
              <span>more</span>
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-black">
                <ChevronRightIcon className="w-4 h-4 text-black" />
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-2">
            {venues.map((venue) => (
              <div key={venue.name} className="text-center">
                <div className="rounded-xl overflow-hidden shadow-md">
                  <Image src={venue.img} alt={venue.name} width={300} height={200} className="w-full h-full object-cover" />
                </div>
                <p className="text-sm font-semibold p-2">{venue.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Top Rated Venues */}
        <section className="py-4 border-b border-gray-200">
          <div className="flex justify-between items-center underline underline-offset-4">
            <h2 className="text-lg font-bold">Top rated Venues</h2>
            <Link href="/somepage" className="flex items-center space-x-1 text-black font-semibold hover:underline">
              <span>more</span>
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-black">
                <ChevronRightIcon className="w-4 h-4 text-black" />
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-2">
            {venues.map((venue) => (
              <div key={venue.name} className="text-center">
                <div className="rounded-xl overflow-hidden shadow-md">
                  <Image src={venue.img} alt={venue.name} width={300} height={200} className="w-full h-full object-cover" />
                </div>
                <p className="text-sm font-semibold p-2">{venue.name}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

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
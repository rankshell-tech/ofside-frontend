'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Star, MapPin, Clock, Users, Wifi, Car, Utensils, Zap, ChevronLeft, ChevronRight, Calendar, Share, Heart } from 'lucide-react';

export default function VenueDetailsPage({ params }: { params: { id: string } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

  const venue = {
    id: 1,
    name: 'SportZone Arena',
    location: 'Shop No. 15, Ground Floor, Downtown Mumbai, Mumbai 400001',
    rating: 4.8,
    reviews: 245,
    description: 'A premium sports facility offering world-class amenities and top-notch playing surfaces. Perfect for both casual games and competitive matches.',
    images: [
      'https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    sports: [
      { name: 'Football', price: 500, duration: '60 mins' },
      { name: 'Cricket', price: 600, duration: '60 mins' }
    ],
    amenities: [
      { name: 'Parking', icon: Car },
      { name: 'WiFi', icon: Wifi },
      { name: 'Cafeteria', icon: Utensils },
      { name: 'Changing Rooms', icon: Users },
      { name: 'Floodlights', icon: Zap }
    ],
    timeSlots: [
      { time: '06:00 - 07:00', available: true, price: 400 },
      { time: '07:00 - 08:00', available: true, price: 400 },
      { time: '08:00 - 09:00', available: false, price: 500 },
      { time: '09:00 - 10:00', available: true, price: 500 },
      { time: '10:00 - 11:00', available: true, price: 500 },
      { time: '11:00 - 12:00', available: true, price: 500 },
      { time: '18:00 - 19:00', available: true, price: 600 },
      { time: '19:00 - 20:00', available: false, price: 600 },
      { time: '20:00 - 21:00', available: true, price: 600 },
      { time: '21:00 - 22:00', available: true, price: 600 }
    ],
    owner: {
      name: 'Mumbai Sports Ltd.',
      memberSince: '2019',
      responseRate: '95%',
      responseTime: 'Within 1 hour'
    }
  };

  const reviews = [
    {
      id: 1,
      user: 'Rahul Sharma',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
      date: '2 weeks ago',
      comment: 'Excellent facility with great amenities. The field quality is top-notch and the staff is very helpful.'
    },
    {
      id: 2,
      user: 'Priya Patel',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
      date: '1 month ago',
      comment: 'Amazing experience! Clean facilities and easy booking process. Will definitely come back.'
    },
    {
      id: 3,
      user: 'Arjun Kumar',
      avatar: 'https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4,
      date: '1 month ago',
      comment: 'Good venue with decent amenities. Parking can be a bit tight during peak hours.'
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % venue.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + venue.images.length) % venue.images.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Image Gallery */}
        <div className="relative mb-8">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
            <img
              src={venue.images[currentImageIndex]}
              alt={venue.name}
              className="w-full h-full object-cover"
            />
            
            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {venue.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentImageIndex === index ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>

            {/* Action Buttons */}
            <div className="absolute top-4 right-4 flex space-x-2">
              <button className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all">
                <Share className="w-5 h-5" />
              </button>
              <button className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all">
                <Heart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Venue Info */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-black mb-4">{venue.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-[#ffe100] fill-current mr-1" />
                  <span className="font-semibold">{venue.rating}</span>
                  <span className="text-gray-600 ml-1">({venue.reviews} reviews)</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{venue.location}</span>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">{venue.description}</p>
            </div>

            {/* Sports Available */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-6">Sports Available</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {venue.sports.map((sport) => (
                  <div key={sport.name} className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-black mb-2">{sport.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">{sport.duration}</span>
                      <span className="text-xl font-bold text-[#ffe100]">₹{sport.price}/hour</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-6">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {venue.amenities.map((amenity) => (
                  <div key={amenity.name} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                    <amenity.icon className="w-5 h-5 text-[#ffe100]" />
                    <span className="text-gray-700">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-black mb-6">Reviews</h2>
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                    <div className="flex items-start space-x-4">
                      <img
                        src={review.avatar}
                        alt={review.user}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-black">{review.user}</h4>
                            <div className="flex items-center mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating ? 'text-[#ffe100] fill-current' : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <span className="text-gray-500 text-sm">{review.date}</span>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-24">
              <h3 className="text-2xl font-semibold text-black mb-6">Book This Venue</h3>
              
              {/* Date Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Select Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full input-field"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              {/* Time Slots */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Available Time Slots</label>
                <div className="grid grid-cols-1 gap-2 max-h-64 overflow-y-auto">
                  {venue.timeSlots.map((slot) => (
                    <button
                      key={slot.time}
                      disabled={!slot.available}
                      onClick={() => setSelectedTimeSlot(slot.time)}
                      className={`p-3 rounded-lg text-sm transition-all ${
                        slot.available
                          ? selectedTimeSlot === slot.time
                            ? 'bg-[#ffe100] text-black border-2 border-[#ffe100]'
                            : 'bg-gray-50 hover:bg-gray-100 text-black border border-gray-200'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{slot.time}</span>
                        <span className="font-medium">₹{slot.price}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Booking Summary */}
              {selectedTimeSlot && (
                <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                  <h4 className="font-semibold text-black mb-2">Booking Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span>{selectedDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time:</span>
                      <span>{selectedTimeSlot}</span>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <span>Total:</span>
                      <span>₹{venue.timeSlots.find(slot => slot.time === selectedTimeSlot)?.price}</span>
                    </div>
                  </div>
                </div>
              )}

              <button
                disabled={!selectedDate || !selectedTimeSlot}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed mb-4"
              >
                Book Now
              </button>

              <div className="text-center text-sm text-gray-600">
                <p>Free cancellation up to 2 hours before the booking</p>
              </div>
            </div>

            {/* Owner Info */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mt-6">
              <h3 className="text-xl font-semibold text-black mb-4">Venue Owner</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Name:</span>
                  <span className="font-medium">{venue.owner.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Member since:</span>
                  <span className="font-medium">{venue.owner.memberSince}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Response rate:</span>
                  <span className="font-medium">{venue.owner.responseRate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Response time:</span>
                  <span className="font-medium">{venue.owner.responseTime}</span>
                </div>
              </div>
              <button className="w-full btn-secondary mt-4">
                Contact Owner
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
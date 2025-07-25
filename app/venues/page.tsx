'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Search, Filter, MapPin, Star, Grid, List, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function VenuesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    sport: '',
    priceRange: '',
    rating: '',
    location: '',
    amenities: [] as string[]
  });

  const venues = [
    {
      id: 1,
      name: 'SportZone Arena',
      location: 'Downtown Mumbai',
      rating: 4.8,
      reviews: 245,
      price: 500,
      image: 'https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&w=400',
      sports: ['Football', 'Cricket'],
      amenities: ['Parking', 'Changing Rooms', 'WiFi']
    },
    {
      id: 2,
      name: 'Elite Sports Complex',
      location: 'Bandra West',
      rating: 4.9,
      reviews: 189,
      price: 750,
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=400',
      sports: ['Basketball', 'Tennis'],
      amenities: ['Parking', 'Changing Rooms', 'Cafeteria', 'AC']
    },
    {
      id: 3,
      name: 'Champions Ground',
      location: 'Andheri East',
      rating: 4.7,
      reviews: 312,
      price: 400,
      image: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=400',
      sports: ['Football', 'Basketball'],
      amenities: ['Parking', 'Changing Rooms']
    },
    {
      id: 4,
      name: 'Victory Courts',
      location: 'Powai',
      rating: 4.6,
      reviews: 156,
      price: 600,
      image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=400',
      sports: ['Tennis', 'Badminton'],
      amenities: ['Parking', 'Changing Rooms', 'Equipment Rental']
    },
    {
      id: 5,
      name: 'Metro Sports Hub',
      location: 'Thane',
      rating: 4.5,
      reviews: 201,
      price: 450,
      image: 'https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&w=400',
      sports: ['Football', 'Cricket', 'Basketball'],
      amenities: ['Parking', 'Changing Rooms', 'WiFi', 'Cafeteria']
    },
    {
      id: 6,
      name: 'Prime Play Zone',
      location: 'Goregaon',
      rating: 4.8,
      reviews: 89,
      price: 550,
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=400',
      sports: ['Basketball', 'Volleyball'],
      amenities: ['Parking', 'Changing Rooms', 'AC', 'Equipment Rental']
    }
  ];

  const sports = ['Football', 'Basketball', 'Tennis', 'Cricket', 'Badminton', 'Swimming'];
  const amenitiesList = ['Parking', 'Changing Rooms', 'WiFi', 'Cafeteria', 'AC', 'Equipment Rental'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Search Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div>
              <h1 className="text-3xl font-bold text-black">Sports Venues</h1>
              <p className="text-gray-600 mt-1">156 venues available</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search venues..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffe100] focus:border-transparent"
                />
              </div>
              
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="btn-secondary flex items-center space-x-2"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>
              
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-black mb-6">Filters</h3>
              
              {/* Sport Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Sport</label>
                <select
                  value={filters.sport}
                  onChange={(e) => setFilters({...filters, sport: e.target.value})}
                  className="w-full input-field"
                >
                  <option value="">All Sports</option>
                  {sports.map((sport) => (
                    <option key={sport} value={sport}>{sport}</option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Price Range (per hour)</label>
                <select
                  value={filters.priceRange}
                  onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                  className="w-full input-field"
                >
                  <option value="">Any Price</option>
                  <option value="0-300">₹0 - ₹300</option>
                  <option value="300-500">₹300 - ₹500</option>
                  <option value="500-700">₹500 - ₹700</option>
                  <option value="700+">₹700+</option>
                </select>
              </div>

              {/* Rating */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Minimum Rating</label>
                <select
                  value={filters.rating}
                  onChange={(e) => setFilters({...filters, rating: e.target.value})}
                  className="w-full input-field"
                >
                  <option value="">Any Rating</option>
                  <option value="4.5">4.5+ Stars</option>
                  <option value="4.0">4.0+ Stars</option>
                  <option value="3.5">3.5+ Stars</option>
                </select>
              </div>

              {/* Amenities */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Amenities</label>
                <div className="space-y-2">
                  {amenitiesList.map((amenity) => (
                    <label key={amenity} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.amenities.includes(amenity)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFilters({...filters, amenities: [...filters.amenities, amenity]});
                          } else {
                            setFilters({...filters, amenities: filters.amenities.filter(a => a !== amenity)});
                          }
                        }}
                        className="rounded border-gray-300 text-[#ffe100] focus:ring-[#ffe100]"
                      />
                      <span className="ml-2 text-sm text-gray-700">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full btn-primary">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Venues Grid/List */}
          <div className="flex-1">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {venues.map((venue) => (
                  <Link key={venue.id} href={`/venues/${venue.id}`} className="group">
                    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <div className="relative h-48">
                        <img
                          src={venue.image}
                          alt={venue.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium flex items-center">
                          <Star className="w-3 h-3 text-[#ffe100] fill-current mr-1" />
                          {venue.rating}
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
                        <div className="flex flex-wrap gap-2 mb-4">
                          {venue.sports.map((sport) => (
                            <span key={sport} className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-xs">
                              {sport}
                            </span>
                          ))}
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 text-sm">{venue.reviews} reviews</span>
                          <span className="text-xl font-bold text-[#ffe100]">₹{venue.price}/hour</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {venues.map((venue) => (
                  <Link key={venue.id} href={`/venues/${venue.id}`} className="group">
                    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-80 h-48 md:h-auto">
                          <img
                            src={venue.image}
                            alt={venue.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="text-2xl font-semibold text-black mb-2 group-hover:text-[#ffe100] transition-colors">
                                {venue.name}
                              </h3>
                              <p className="text-gray-600 mb-2 flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {venue.location}
                              </p>
                              <div className="flex items-center mb-4">
                                <Star className="w-4 h-4 text-[#ffe100] fill-current mr-1" />
                                <span className="font-medium">{venue.rating}</span>
                                <span className="text-gray-600 ml-2">({venue.reviews} reviews)</span>
                              </div>
                            </div>
                            <span className="text-2xl font-bold text-[#ffe100]">₹{venue.price}/hour</span>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {venue.sports.map((sport) => (
                              <span key={sport} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm">
                                {sport}
                              </span>
                            ))}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {venue.amenities.map((amenity) => (
                              <span key={amenity} className="bg-[#ffe100] bg-opacity-20 text-black px-2 py-1 rounded-md text-xs">
                                {amenity}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Previous
                </button>
                <button className="px-4 py-2 bg-[#ffe100] text-black rounded-lg font-medium">
                  1
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  2
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  3
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
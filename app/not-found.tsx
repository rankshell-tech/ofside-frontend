'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import img from '../assets/images/logo.png'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto py-12">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-2 mb-12">
          <Image src={img} alt="Example image" width={120} height={20}/>
        </div>

        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-[#ffe100] mb-4">404</div>
          <div className="w-32 h-32 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
            <span className="text-6xl">⚽</span>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl font-bold text-black mb-4">
          Oops! Venue Not Found
        </h1>
        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
          Looks like you've kicked the ball out of bounds! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="btn-primary flex items-center justify-center space-x-2"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-secondary flex items-center justify-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Help Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 mb-4">Need help finding what you're looking for?</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/venues" className="text-[#ffe100] hover:text-[#e6cb00] font-medium">
              Browse Venues
            </Link>
            <Link href="/help" className="text-[#ffe100] hover:text-[#e6cb00] font-medium">
              Help Center
            </Link>
            <Link href="/contact" className="text-[#ffe100] hover:text-[#e6cb00] font-medium">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
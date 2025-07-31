'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, User, MapPin, Bell } from 'lucide-react';
import LoginModal from '../loginModal';
import SignupModal from "../SignupModal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const switchToSignup = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(true);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#ffe100] rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-xl">O</span>
            </div>
            <span className="text-2xl font-bold text-black">Ofside</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/venues" className="text-gray-700 hover:text-black transition-colors">
              Find Venues
            </Link>
            <Link href="/how-it-works" className="text-gray-700 hover:text-black transition-colors">
              How it Works
            </Link>
            <Link href="/become-host" className="text-gray-700 hover:text-black transition-colors">
              Become a Host
            </Link>
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-black transition-colors">
              <Bell className="w-5 h-5" />
            </button>

            <button className="btn btn-theme-primary" onClick={() => setIsLoginModalOpen(true)}>Sign Up/ Login</button>
            <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} onSwitchToSignup={switchToSignup}/>
            <SignupModal isOpen={isSignupModalOpen} onClose={() => setIsSignupModalOpen(false)}/>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link href="/venues" className="text-gray-700 hover:text-black transition-colors">
                Find Venues
              </Link>
              <Link href="/how-it-works" className="text-gray-700 hover:text-black transition-colors">
                How it Works
              </Link>
              <Link href="/become-host" className="text-gray-700 hover:text-black transition-colors">
                Become a Host
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Link href="/login" className="btn-secondary text-center">
                  Sign In
                </Link>
                <Link href="/signup" className="btn-primary text-center">
                  Sign Up
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
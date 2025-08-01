'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, User, MapPin, Bell } from 'lucide-react';
import LoginModal from '../loginModal';
import SignupModal from "../SignupModal";
import Image from 'next/image';
import img from '../../assets/images/logo.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const switchToSignup = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(true);
  };

  return (
    <header className="w-full shadow-sm sticky top-0 z-50" style={{ backgroundColor: 'var(--color-theme-primary)' }}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
          <div className=" px-2 py-1 rounded-md">
            <Image
              src={img} // Place logo in /public/images/logo.png
              alt="Offside Logo"
              width={150}
              height={40}
              className="object-contain"
              priority
            />
          </div>
        </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
            <Link href="/venues" className="hover:text-black transition">Find Venues</Link>
            <Link href="/how-it-works" className="hover:text-black transition">How it Works</Link>
            <Link href="/become-host" className="hover:text-black transition">Become a Host</Link>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-black transition">
              <Bell size={20} />
            </button>
            <button className="btn btn-primary px-4 py-2 rounded-md font-semibold hover:brightness-95 transition" onClick={() => setIsLoginModalOpen(true)}>
              Sign Up/ Login
            </button>
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
      </nav>
    </header>
  );
}
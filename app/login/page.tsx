'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<'user' | 'owner'>('user');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login:', formData, userType);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Side - Image */}
              <div className="hidden lg:block relative">
                <img
                  src="https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Sports venue"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center text-white px-8">
                    <h2 className="text-3xl font-bold mb-4">Welcome Back to Ofside</h2>
                    <p className="text-lg">Continue your sports journey with us</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="p-8 lg:p-12">
                <div className="max-w-md mx-auto">
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center space-x-2 mb-6">
                      <div className="w-12 h-12 bg-[#ffe100] rounded-lg flex items-center justify-center">
                        <span className="text-black font-bold text-2xl">O</span>
                      </div>
                      <span className="text-3xl font-bold text-black">Ofside</span>
                    </div>
                    <h1 className="text-3xl font-bold text-black mb-2">Sign In</h1>
                    <p className="text-gray-600">Welcome back! Please sign in to your account</p>
                  </div>

                  {/* User Type Selection */}
                  <div className="mb-6">
                    <div className="flex bg-gray-100 rounded-lg p-1">
                      <button
                        type="button"
                        onClick={() => setUserType('user')}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                          userType === 'user'
                            ? 'bg-white text-black shadow-sm'
                            : 'text-gray-600 hover:text-black'
                        }`}
                      >
                        Player
                      </button>
                      <button
                        type="button"
                        onClick={() => setUserType('owner')}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                          userType === 'owner'
                            ? 'bg-white text-black shadow-sm'
                            : 'text-gray-600 hover:text-black'
                        }`}
                      >
                        Venue Owner
                      </button>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffe100] focus:border-transparent"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          id="password"
                          type={showPassword ? 'text' : 'password'}
                          value={formData.password}
                          onChange={(e) => setFormData({...formData, password: e.target.value})}
                          className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffe100] focus:border-transparent"
                          placeholder="Enter your password"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-[#ffe100] focus:ring-[#ffe100] border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-700">Remember me</span>
                      </label>
                      <Link href="/forgot-password" className="text-sm text-[#ffe100] hover:text-[#e6cb00] font-medium">
                        Forgot password?
                      </Link>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="w-full btn-primary py-3">
                      Sign In
                    </button>
                  </form>

                  {/* Divider */}
                  <div className="my-6">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or continue with</span>
                      </div>
                    </div>
                  </div>

                  {/* Social Login */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <button className="w-full border border-gray-300 rounded-lg py-3 px-4 flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors">
                      <span>🔍</span>
                      <span className="text-sm font-medium">Google</span>
                    </button>
                    <button className="w-full border border-gray-300 rounded-lg py-3 px-4 flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors">
                      <span>📘</span>
                      <span className="text-sm font-medium">Facebook</span>
                    </button>
                  </div>

                  {/* Sign Up Link */}
                  <div className="text-center">
                    <p className="text-gray-600">
                      Don't have an account?{' '}
                      <Link href="/signup" className="text-[#ffe100] hover:text-[#e6cb00] font-medium">
                        Sign up
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
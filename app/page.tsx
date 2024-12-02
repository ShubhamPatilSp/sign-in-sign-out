'use client';

import { useAuth } from './context/auth';
import Link from 'next/link';

export default function Home() {
  const { user, logout } = useAuth();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Logo */}
          <div className="mx-auto w-24 h-24 bg-blue-500 rounded-2xl rotate-6 shadow-xl" />
          
          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Welcome to Grouple
          </h1>
          
          {/* Description */}
          <p className="max-w-2xl mx-auto text-xl text-gray-400">
            {!user 
              ? "Join our community to connect, collaborate, and create amazing things together."
              : `Welcome back, ${user.name}! Ready to continue your journey?`
            }
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            {!user ? (
              <>
                <Link
                  href="/sign-in"
                  className="group relative inline-flex items-center justify-center px-8 py-3 font-medium text-black bg-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity" />
                </Link>
                <Link
                  href="/sign-up"
                  className="group relative inline-flex items-center justify-center px-8 py-3 font-medium text-white border border-white/20 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:border-white/40"
                >
                  <span className="relative z-10">Create Account</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity" />
                </Link>
              </>
            ) : (
              <button
                onClick={logout}
                className="group relative inline-flex items-center justify-center px-8 py-3 font-medium text-white border border-white/20 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:border-white/40"
              >
                <span className="relative z-10">Sign Out</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity" />
              </button>
            )}
          </div>

          {/* Features */}
          {!user && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="feature-card">
                <div className="feature-icon bg-blue-500/10 text-blue-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Connect</h3>
                <p className="text-gray-400">Build meaningful relationships with people who share your interests.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon bg-purple-500/10 text-purple-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Collaborate</h3>
                <p className="text-gray-400">Work together on projects and achieve your goals as a team.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon bg-green-500/10 text-green-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Create</h3>
                <p className="text-gray-400">Bring your ideas to life with powerful tools and resources.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

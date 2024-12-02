'use client';

import Link from 'next/link';
import { useAuth } from '../context/auth';
import { motion } from 'framer-motion';

export default function Navigation() {
  const { user, logout, isLoading } = useAuth();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-xl border-b border-gray-700/50 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg rotate-6" />
            <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Grouple.
            </span>
          </Link>

          <div className="flex items-center gap-4">
            {isLoading ? (
              <div className="h-8 w-24 bg-gray-700 rounded-lg animate-pulse" />
            ) : !user ? (
              <>
                <Link
                  href="/sign-in"
                  className="nav-link"
                >
                  Sign in
                </Link>
                <Link
                  href="/sign-up"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Sign up
                </Link>
              </>
            ) : (
              <>
                <Link href="/profile" className="nav-link flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-medium">
                    {user.name.charAt(0)}
                  </div>
                  <span>{user.name}</span>
                </Link>
                <button
                  onClick={logout}
                  className="nav-link"
                >
                  Sign out
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

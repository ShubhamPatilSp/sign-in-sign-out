'use client';

import { useAuth } from '../context/auth';
import LoadingSpinner from '../components/LoadingSpinner';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';

export default function ProfilePage() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!user) {
    return null; // Middleware will handle redirect
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-2xl font-bold">
                {user.name.charAt(0)}
              </div>
              <div>
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <p className="text-gray-400">{user.email}</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="feature-card">
                <h3 className="text-lg font-semibold mb-2">Account Settings</h3>
                <p className="text-gray-400">
                  Manage your account settings and preferences
                </p>
              </div>
              <div className="feature-card">
                <h3 className="text-lg font-semibold mb-2">Security</h3>
                <p className="text-gray-400">
                  Update your password and security settings
                </p>
              </div>
              <div className="feature-card">
                <h3 className="text-lg font-semibold mb-2">Notifications</h3>
                <p className="text-gray-400">
                  Configure your notification preferences
                </p>
              </div>
              <div className="feature-card">
                <h3 className="text-lg font-semibold mb-2">Connected Apps</h3>
                <p className="text-gray-400">
                  Manage your connected applications
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}

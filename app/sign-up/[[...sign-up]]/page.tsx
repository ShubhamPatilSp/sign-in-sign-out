'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '../../context/auth';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signup } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      await signup(email, `${firstName} ${lastName}`, password);
      router.push('/');
    } catch (err) {
      setError('Error creating account');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-black to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      {/* Content */}
      <div className="relative z-10">
        <Link href="/" className="block text-center">
          <div className="mx-auto w-16 h-16 bg-blue-500 rounded-2xl rotate-6 shadow-xl mb-8" />
          <h1 className="text-3xl font-bold text-white mb-12">Grouple.</h1>
        </Link>
        
        <div className="auth-card">
          <h2 className="text-2xl font-semibold mb-2">Create Account</h2>
          <p className="text-gray-400 mb-8">
            Join our community and start your journey
          </p>

          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-500 rounded-lg p-3 mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="auth-input mb-0"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last name"
                className="auth-input mb-0"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="auth-input mt-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="auth-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            
            <button type="submit" className="auth-button">
              Create Account
            </button>

            <div className="my-6 flex items-center gap-4">
              <div className="flex-1 h-px bg-gray-800"></div>
              <span className="text-gray-400 text-sm">OR CONTINUE WITH</span>
              <div className="flex-1 h-px bg-gray-800"></div>
            </div>

            <button type="button" className="social-button">
              <Image src="/google.svg" alt="Google" width={20} height={20} />
              Google
            </button>

            <p className="mt-6 text-center text-gray-400">
              Already have an account?{' '}
              <Link href="/sign-in" className="text-white hover:underline">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

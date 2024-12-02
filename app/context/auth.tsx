'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

type User = {
  email: string;
  name: string;
} | null;

type AuthContextType = {
  user: User;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, name: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on mount
    const storedUser = Cookies.get('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing user data:', error);
        Cookies.remove('user');
        Cookies.remove('auth');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      // This is a mock login - replace with your actual login logic
      if (!email || !password) {
        throw new Error('Email and password are required');
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));

      const mockUser = { email, name: email.split('@')[0] };
      setUser(mockUser);
      Cookies.set('user', JSON.stringify(mockUser), { expires: 7 });
      Cookies.set('auth', 'true', { expires: 7 });
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (email: string, name: string, password: string) => {
    try {
      setIsLoading(true);
      // This is a mock signup - replace with your actual signup logic
      if (!email || !name || !password) {
        throw new Error('All fields are required');
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));

      const mockUser = { email, name };
      setUser(mockUser);
      Cookies.set('user', JSON.stringify(mockUser), { expires: 7 });
      Cookies.set('auth', 'true', { expires: 7 });
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    Cookies.remove('user');
    Cookies.remove('auth');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

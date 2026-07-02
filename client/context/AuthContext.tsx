import { createContext, useContext, useState, ReactNode } from 'react';

const PID = 19;
const BASE = '/api-proxy';
const LOGIN_API = `${BASE}/prod/CPLogin/ULKM`;
const UNSUB_API = `${BASE}/prod/ULKM/unsub`;

interface ActiveUser {
  msisdn: string;
  actDate: string;
  renewDate: string;
  pricePoint: string;
  validity: string;
  unsubUrl: string;
}

interface AuthContextType {
  user: ActiveUser | null;
  isActive: boolean;
  login: (msisdn: string) => Promise<{ success: boolean; redirectURL?: string }>;
  logout: () => void;
  unsubscribe: () => Promise<{ success: boolean; message: string }>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<ActiveUser | null>(() => {
    const stored = localStorage.getItem('kk_user');
    return stored ? JSON.parse(stored) : null;
  });

  const isActive = !!user;

  const login = async (msisdn: string): Promise<{ success: boolean; redirectURL?: string }> => {
    const res = await fetch(`${LOGIN_API}?pid=${PID}&msisdn=${msisdn}`);
    const data = await res.json();

    if (data.response === 'ACTIVE') {
      const activeUser: ActiveUser = {
        msisdn,
        actDate: data.actDate,
        renewDate: data.renewDate,
        pricePoint: data.pricePoint,
        validity: data.validity,
        unsubUrl: data.unsubUrl,
      };
      setUser(activeUser);
      localStorage.setItem('kk_user', JSON.stringify(activeUser));
      return { success: true };
    } else {
      let redirectURL = `/api-proxy/prod/LP/landing?creatid=179&hash=LKMKK`;
      return { success: false, redirectURL };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('kk_user');
  };

  const unsubscribe = async (): Promise<{ success: boolean; message: string }> => {
    if (!user) return { success: false, message: 'Not logged in' };
    const res = await fetch(`${UNSUB_API}?cp=1&pid=${PID}&msisdn=${user.msisdn}`);
    const data = await res.json();
    if (data.response === 'SUCCECSS' || data.response === 'SUCCESS') {
      logout();
      return { success: true, message: data.errorMessage };
    }
    return { success: false, message: data.errorMessage };
  };

  return (
    <AuthContext.Provider value={{ user, isActive, login, logout, unsubscribe }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}

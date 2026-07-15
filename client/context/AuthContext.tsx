import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

const PID = 19;
const BASE = '/api-proxy';
const LOGIN_API = `${BASE}/prod/CPLogin/ULKM`;
const UNSUB_API = `${BASE}/prod/ULKM/unsub`;
const PENDING_MSISDN_KEY = 'kk_pending_msisdn';

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

  useEffect(() => {
    if (user) return;

    // Check ?msisdn= in URL first
    const params = new URLSearchParams(window.location.search);
    const urlMsisdn = params.get('msisdn');
    if (urlMsisdn) {
      login(urlMsisdn).then((result) => {
        if (result.success) {
          // Clean msisdn from URL without reload
          const url = new URL(window.location.href);
          url.searchParams.delete('msisdn');
          window.history.replaceState({}, '', url.toString());
        }
      });
      return;
    }

    // Fallback: check pending msisdn in localStorage
    const pending = localStorage.getItem(PENDING_MSISDN_KEY);
    if (pending) {
      login(pending).then((result) => {
        if (result.success) localStorage.removeItem(PENDING_MSISDN_KEY);
      });
    }
  }, []);

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
      const redirectURL = data.redirectURL
        ? data.redirectURL.replace('http://143.198.213.74', '/api-proxy')
        : `/api-proxy/prod/LP/landing?creatid=179&hash=LKMKK&msisdn=${msisdn}`;
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

export function savePendingMsisdn(msisdn: string) {
  localStorage.setItem(PENDING_MSISDN_KEY, msisdn);
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}

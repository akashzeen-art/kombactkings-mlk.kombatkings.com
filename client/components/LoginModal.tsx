import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const COUNTRY_CODE = '+94';

interface LoginModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

export default function LoginModal({ onClose, onSuccess }: LoginModalProps) {
  const { login } = useAuth();
  const [number, setNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!number.trim()) return;
    setLoading(true);
    setError('');
    const msisdn = COUNTRY_CODE.replace('+', '') + number.trim();
    try {
      const result = await login(msisdn);
      if (result.success) {
        onSuccess();
      } else if (result.redirectURL) {
        window.location.href = result.redirectURL;
      } else {
        setError('Service not active. Please subscribe first.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center p-4"
      style={{ zIndex: 9999 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-zinc-900 border border-zinc-700 rounded-xl p-8 w-full max-w-sm"
      >
        <h2 className="text-white text-2xl font-bold mb-2">Access Content</h2>
        <p className="text-gray-400 text-sm mb-6">Enter your LK Mobitel number to continue watching.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex rounded-lg overflow-hidden border border-zinc-600 focus-within:border-red-500 transition">
            <span className="bg-zinc-700 text-white px-4 py-3 text-sm font-semibold select-none flex items-center">
              {COUNTRY_CODE}
            </span>
            <input
              type="tel"
              value={number}
              onChange={(e) => setNumber(e.target.value.replace(/\D/g, ''))}
              placeholder="7XXXXXXXX"
              className="flex-1 bg-zinc-800 text-white px-4 py-3 focus:outline-none placeholder-gray-500 text-sm"
              disabled={loading}
              maxLength={10}
              autoFocus
            />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading || !number.trim()}
            className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition"
          >
            {loading ? 'Checking...' : 'Continue'}
          </button>
          <button type="button" onClick={onClose} className="w-full text-gray-400 hover:text-white text-sm transition">
            Cancel
          </button>
        </form>
      </motion.div>
    </div>,
    document.body
  );
}

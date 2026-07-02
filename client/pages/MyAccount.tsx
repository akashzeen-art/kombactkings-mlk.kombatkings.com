import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '../context/AuthContext';

export default function MyAccount() {
  const { user, unsubscribe, logout } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  if (!user) {
    navigate('/');
    return null;
  }

  const handleUnsub = async () => {
    if (!confirm('Are you sure you want to unsubscribe from KombatKing?')) return;
    setLoading(true);
    const result = await unsubscribe();
    setMessage(result.message);
    setLoading(false);
    if (result.success) {
      setTimeout(() => navigate('/'), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="container mx-auto px-4 py-16 max-w-lg">
        <h1 className="text-3xl font-bold text-white mb-8">My Account</h1>

        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 space-y-4 mb-6">
          <div className="flex justify-between">
            <span className="text-gray-400">Mobile Number</span>
            <span className="text-white font-medium">{user.msisdn}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Status</span>
            <span className="text-green-400 font-semibold">ACTIVE</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Activation Date</span>
            <span className="text-white">{user.actDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Renewal Date</span>
            <span className="text-white">{user.renewDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Price</span>
            <span className="text-white">{user.pricePoint}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Validity</span>
            <span className="text-white">{user.validity} day(s)</span>
          </div>
        </div>

        {message && (
          <p className="text-center text-sm mb-4 text-yellow-400">{message}</p>
        )}

        <button
          onClick={handleUnsub}
          disabled={loading}
          className="w-full bg-red-700 hover:bg-red-800 disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition mb-3"
        >
          {loading ? 'Processing...' : 'Unsubscribe from KombatKing'}
        </button>

        <button
          onClick={logout}
          className="w-full border border-zinc-600 hover:border-zinc-400 text-gray-300 hover:text-white py-3 rounded-lg transition text-sm"
        >
          Logout
        </button>
      </div>
      <Footer />
    </div>
  );
}

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '../context/AuthContext';
import LoginModal from '@/components/LoginModal';

export default function MyAccount() {
  const { user, unsubscribe } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [showLogin, setShowLogin] = useState(false);

  if (!user) {
    navigate('/');
    return null;
  }

  const handleUnsub = async () => {
    if (!confirm('Are you sure you want to unsubscribe from KombatKing?')) return;
    setLoading(true);
    const result = await unsubscribe();
    setLoading(false);
    if (result.success) {
      setShowLogin(true);
    } else {
      setMessage(result.message);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {showLogin && (
        <LoginModal
          onClose={() => { setShowLogin(false); navigate('/'); }}
          onSuccess={() => { setShowLogin(false); navigate('/'); }}
        />
      )}

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
      </div>
      <Footer />
    </div>
  );
}

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { savePendingMsisdn } from '../context/AuthContext';

export default function Callback() {
  const { login, isActive } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isActive) { navigate('/'); return; }

    const params = new URLSearchParams(window.location.search);
    const msisdn = params.get('msisdn') || localStorage.getItem('kk_pending_msisdn');

    if (!msisdn) { navigate('/'); return; }

    savePendingMsisdn(msisdn);
    login(msisdn).then((result) => {
      if (result.success) localStorage.removeItem('kk_pending_msisdn');
      navigate('/');
    });
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <p className="text-white text-lg animate-pulse">Activating your access...</p>
    </div>
  );
}

import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export function useVideoAccess() {
  const { isActive } = useAuth();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [showLogin, setShowLogin] = useState(false);
  const [pendingVideo, setPendingVideo] = useState<string | null>(null);

  const handleVideoClick = (videoUrl: string) => {
    if (isActive) {
      setSelectedVideo(videoUrl);
    } else {
      setPendingVideo(videoUrl);
      setShowLogin(true);
    }
  };

  const handleLoginSuccess = () => {
    setShowLogin(false);
    if (pendingVideo) {
      setSelectedVideo(pendingVideo);
      setPendingVideo(null);
    }
  };

  const handleLoginClose = () => {
    setShowLogin(false);
    setPendingVideo(null);
  };

  const handleCloseVideo = () => setSelectedVideo(null);

  return { selectedVideo, showLogin, handleVideoClick, handleLoginSuccess, handleLoginClose, handleCloseVideo };
}

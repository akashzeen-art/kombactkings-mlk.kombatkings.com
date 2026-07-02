import { motion } from "framer-motion";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import { useVideoAccess } from "../hooks/useVideoAccess";
import LoginModal from "./LoginModal";

export default function CategoryVideos() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const { selectedVideo, showLogin, handleVideoClick, handleLoginSuccess, handleLoginClose, handleCloseVideo } = useVideoAccess();

  const videos = [
    { id: 1, categoryKey: 'cat.armWrestling', titleKey: 'vid.home.armDominators', thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmDominators/ArmDominatorsThumbnails.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/a8d14831-2458-47de-8edf-a08daf2bd167/play_720p.mp4' },
    { id: 2, categoryKey: 'cat.armWrestling', titleKey: 'vid.home.armFuryLeague', thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmFuryLeague/ArmFuryLeagueThumbnails.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/55c7f309-6549-4e29-85d3-a7d7f77853ab/play_720p.mp4' },
    { id: 3, categoryKey: 'cat.slapFight', titleKey: 'vid.home.slapChamp1', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap1.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/cad630b4-2546-48c5-aa0d-353d01a1ce08/play_720p.mp4' },
    { id: 4, categoryKey: 'cat.slapFight', titleKey: 'vid.home.slapChamp2', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap2.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/3ce41f12-ac74-4bb0-9669-42bea5da56cd/play_720p.mp4' },
    { id: 5, categoryKey: 'cat.mmaFight', titleKey: 'vid.home.paulDaleyRory', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/PaulDaleyvsRoryMacDonald.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/0506d21e-0595-42ad-b75e-0ffb7f177d4f/play_720p.mp4' },
    { id: 6, categoryKey: 'cat.mmaFight', titleKey: 'vid.home.paulDaleyRomario', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/PaulDaleyvsRomarioManoeldaSilva.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/89883c94-0135-4030-ac72-960174d92372/play_720p.mp4' },
    { id: 7, categoryKey: 'cat.taekwondo', titleKey: 'vid.home.aleksandraJackie', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/AleksandraKOWALCZUKVSJackieGAL.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/a8d14831-2458-47de-8edf-a08daf2bd167/play_720p.mp4' },
    { id: 8, categoryKey: 'cat.taekwondo', titleKey: 'vid.home.aaronCookZhen', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/AaronCOOKVSZhenWANG.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/55c7f309-6549-4e29-85d3-a7d7f77853ab/play_720p.mp4' },
    { id: 9, categoryKey: 'cat.kickboxing', titleKey: 'vid.home.pongpatChoMoi', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/PongpatvsChoMoi.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/cad630b4-2546-48c5-aa0d-353d01a1ce08/play_720p.mp4' },
    { id: 10, categoryKey: 'cat.kickboxing', titleKey: 'vid.home.pachitSorinRoth', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/PachitChaiyasornvsSorinRoth.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/3ce41f12-ac74-4bb0-9669-42bea5da56cd/play_720p.mp4' }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === 'left' ? -400 : 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader titleKey="index.featuredCategories" />

        <div className="relative">
          <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full">
            <ChevronLeft size={32} />
          </button>

          <div ref={scrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide pb-4" style={{ scrollbarWidth: 'none' }}>
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleVideoClick(video.videoUrl)}
                className="flex-shrink-0 w-80 group cursor-pointer"
              >
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <img src={video.thumbnail} alt={t(video.titleKey)} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex items-center justify-center">
                    <Play size={64} className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition" fill="white" />
                  </div>
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded text-xs font-bold">{t(video.categoryKey)}</div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h4 className="text-white font-semibold line-clamp-2">{t(video.titleKey)}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full">
            <ChevronRight size={32} />
          </button>
        </div>
      </div>

      {showLogin && <LoginModal onClose={handleLoginClose} onSuccess={handleLoginSuccess} />}

      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={handleCloseVideo}>
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={handleCloseVideo} className="absolute -top-12 right-0 text-white text-4xl hover:text-red-500 transition">&times;</button>
            <video src={selectedVideo} controls autoPlay className="w-full rounded-lg" />
          </div>
        </div>
      )}
    </section>
  );
}

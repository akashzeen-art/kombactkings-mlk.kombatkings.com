import { motion } from "framer-motion";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import { useVideoAccess } from "../hooks/useVideoAccess";
import LoginModal from "./LoginModal";

export default function HybridSliderSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const { selectedVideo, showLogin, handleVideoClick, handleLoginSuccess, handleLoginClose, handleCloseVideo } = useVideoAccess();

  const videos = [
    { id: 1, categoryKey: "cat.taekwondo", titleKey: "vid.home.male58kgQ", thumbnail: "https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/Male58KgQUARTERFINALLeventTUNCATGERvLuca.png", videoUrl: "https://vz-52f523cb-d38.b-cdn.net/3ce41f12-ac74-4bb0-9669-42bea5da56cd/play_720p.mp4" },
    { id: 2, categoryKey: "cat.taekwondo", titleKey: "vid.home.m80kgMiladShort", thumbnail: "https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/M80kgMiladBEIGIVSMaksimKHRAMTCOV.png", videoUrl: "https://vz-52f523cb-d38.b-cdn.net/bf18fc3f-d965-47b8-9790-b3f3bd1fd4e5/play_720p.mp4" },
    { id: 3, categoryKey: "cat.mmaFight", titleKey: "vid.home.rogerHuerta", thumbnail: "https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/RogerHuertavsChadHinton.png", videoUrl: "https://vz-52f523cb-d38.b-cdn.net/0506d21e-0595-42ad-b75e-0ffb7f177d4f/play_720p.mp4" },
    { id: 4, categoryKey: "cat.mmaFight", titleKey: "vid.home.rampageJackson", thumbnail: "https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/RampageJacksonvsJoeyBeltran.png", videoUrl: "https://vz-52f523cb-d38.b-cdn.net/89883c94-0135-4030-ac72-960174d92372/play_720p.mp4" },
    { id: 5, categoryKey: "cat.kickboxing", titleKey: "vid.home.saenSaeJitka", thumbnail: "https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/SaenSaeJitkavsMikeyDating.png", videoUrl: "https://vz-52f523cb-d38.b-cdn.net/d92082aa-43ac-4c1b-90c1-e42306b7d438/play_720p.mp4" },
    { id: 6, categoryKey: "cat.kickboxing", titleKey: "vid.home.pongpatChoMoi", thumbnail: "https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/PongpatvsChoMoi.png", videoUrl: "https://vz-52f523cb-d38.b-cdn.net/a6936466-05a7-4666-b389-feacb25889f3/play_720p.mp4" },
    { id: 7, categoryKey: "cat.slapFight", titleKey: "vid.home.slapChamp1", thumbnail: "https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap1.jpg", videoUrl: "https://vz-52f523cb-d38.b-cdn.net/7b457eda-e09b-4433-b754-469c32b166c3/play_360p.mp4" },
    { id: 8, categoryKey: "cat.slapFight", titleKey: "vid.home.slapChamp2", thumbnail: "https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap2.jpg", videoUrl: "https://vz-52f523cb-d38.b-cdn.net/0c44792b-9f49-43ba-8fd3-7ef2786ec7b1/play_360p.mp4" },
    { id: 9, categoryKey: "cat.armWrestling", titleKey: "vid.home.armGritArena", thumbnail: "https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmGritArena/ArmGritArenaThumbnails.jpg", videoUrl: "https://vz-52f523cb-d38.b-cdn.net/c57bb0bc-f159-4b2e-9f9e-3fcf4b17b72f/play_360p.mp4" },
    { id: 10, categoryKey: "cat.armWrestling", titleKey: "vid.home.armLockLegends", thumbnail: "https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmLockLegends/ArmLockLegendsThumbnails.jpg", videoUrl: "https://vz-52f523cb-d38.b-cdn.net/c1b5c70f-52cd-4cd5-ad12-4ec5c73377b2/play_360p.mp4" }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === 'left' ? -400 : 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <SectionHeader titleKey="index.featuredMatches" />
        <div className="relative">
          <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full">
            <ChevronLeft size={32} />
          </button>

          <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide pb-4" style={{ scrollbarWidth: 'none' }}>
            {videos.map((video, i) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleVideoClick(video.videoUrl)}
                className="flex-shrink-0 w-80 group cursor-pointer"
              >
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <img src={video.thumbnail} alt={t(video.titleKey)} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex items-center justify-center">
                    <Play size={48} className="text-white opacity-80 group-hover:opacity-100 transition" fill="white" />
                  </div>
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">{t(video.categoryKey)}</div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white font-semibold line-clamp-2">{t(video.titleKey)}</h3>
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

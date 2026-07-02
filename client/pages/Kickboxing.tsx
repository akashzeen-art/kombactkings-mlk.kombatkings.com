import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useVideoAccess } from '@/hooks/useVideoAccess';
import LoginModal from '@/components/LoginModal';

export default function Kickboxing() {
  const { t } = useLanguage();
  const trendingRef = useRef<HTMLDivElement>(null);
  const legendaryRef = useRef<HTMLDivElement>(null);
  const { selectedVideo, showLogin, handleVideoClick, handleLoginSuccess, handleLoginClose, handleCloseVideo } = useVideoAccess();

  const trendingVideos = [
    { id: 1, titleKey: 'vid.kick.sasipradpaGym', duration: '12:45', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/SasipradpaGymvsTungLinKun.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/909baf12-777d-44b6-aaa7-d08a3369f6e1/play_720p.mp4', views: '2.5M' },
    { id: 2, titleKey: 'vid.kick.saenSaeJitka', duration: '08:30', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/SaenSaeJitkavsMikeyDating.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/d92082aa-43ac-4c1b-90c1-e42306b7d438/play_720p.mp4', views: '1.8M' },
    { id: 3, titleKey: 'vid.kick.pongpatChoMoi', duration: '15:20', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/PongpatvsChoMoi.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/a6936466-05a7-4666-b389-feacb25889f3/play_720p.mp4', views: '3.2M' },
    { id: 4, titleKey: 'vid.kick.pachitSorinRoth', duration: '10:15', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/PachitChaiyasornvsSorinRoth.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/cbe8f4f2-528e-4e54-a152-1a2d5ba420d9/play_720p.mp4', views: '1.5M' },
    { id: 5, titleKey: 'vid.kick.newDiamond', duration: '18:40', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/NewDiamondvsMcNaskus.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/c74db6ad-ff47-4709-a519-d25781bd5ed4/play_720p.mp4', views: '2.1M' },
    { id: 6, titleKey: 'vid.kick.mightyWarriors', duration: '09:55', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/MightyWarriorsvsNorris.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/7b9be665-b968-4c0a-ae17-21d0eda84826/play_720p.mp4', views: '1.9M' },
    { id: 7, titleKey: 'vid.kick.kichaiSacho', duration: '14:30', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/KichaiVSSacho.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/39b0d5f6-ecab-4de0-9a10-200550cda509/play_720p.mp4', views: '2.7M' }
  ];

  const allVideos = [
    { id: 1, titleKey: 'vid.kick.pachitSorinRoth', views: '2.5M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/PachitChaiyasornvsSorinRoth.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/7b9be665-b968-4c0a-ae17-21d0eda84826/play_720p.mp4' },
    { id: 2, titleKey: 'vid.kick.newDiamond', views: '1.8M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/NewDiamondvsMcNaskus.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/39b0d5f6-ecab-4de0-9a10-200550cda509/play_720p.mp4' },
    { id: 3, titleKey: 'vid.kick.mightyWarriors', views: '3.2M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/MightyWarriorsvsNorris.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/626c2c55-b761-4b49-b3e2-bd9e8b3c6ef3/play_720p.mp4' },
    { id: 4, titleKey: 'vid.kick.kichaiSacho', views: '1.5M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/KichaiVSSacho.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/a815ea9e-4eb3-42ec-85e4-08d05154f437/play_720p.mp4' },
    { id: 5, titleKey: 'vid.kick.ironPilot', views: '2.1M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/IronPilotAutoPartsvsSmurfs.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/50608e42-15a9-42b1-b085-874f89435ceb/play_720p.mp4' },
    { id: 6, titleKey: 'vid.kick.gucci', views: '1.9M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/GuccivsAlexandruKornazitsky.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/3153a3e8-062c-418a-a016-1a0d5f1964f1/play_720p.mp4' },
    { id: 7, titleKey: 'vid.kick.danielle', views: '2.7M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/DaniellevsDanielle.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/39429adb-ee10-43fd-9285-f4fe9583ad02/play_720p.mp4' },
    { id: 8, titleKey: 'vid.kick.canDiamonds', views: '2.3M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/CanDiamondsTiggerArunGymnasiumJoanHenrique.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/ff6210eb-a940-4733-b7fa-7c23e02d7211/play_720p.mp4' },
    { id: 9, titleKey: 'vid.kick.blueSuwan', views: '1.6M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/BlueSuwanPhetchPoolevsNelinO.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/a2757cb7-bd63-4e02-9596-54e5f8d88c4b/play_720p.mp4' },
    { id: 10, titleKey: 'vid.kick.blitzkrieg', views: '2.9M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/BlitzkriegTeachersvsBauDeJonoKochikov.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/f852c8c3-1511-471a-9521-876cf72f49a7/play_720p.mp4' },
    { id: 11, titleKey: 'vid.kick.bigSword', views: '1.4M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/BigSwordRanatKhamvsIsaietMinami.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/909baf12-777d-44b6-aaa7-d08a3369f6e1/play_720p.mp4' },
    { id: 12, titleKey: 'vid.kick.strangeExotic', views: '2.2M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/AStrangeExoticGymvsBryanDenis.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/d92082aa-43ac-4c1b-90c1-e42306b7d438/play_720p.mp4' },
    { id: 13, titleKey: 'vid.kick.sasipradpaGym', views: '1.7M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/SasipradpaGymvsTungLinKun.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/a6936466-05a7-4666-b389-feacb25889f3/play_720p.mp4' },
    { id: 14, titleKey: 'vid.kick.saenSaeJitka', views: '2.6M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/SaenSaeJitkavsMikeyDating.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/cbe8f4f2-528e-4e54-a152-1a2d5ba420d9/play_720p.mp4' },
    { id: 15, titleKey: 'vid.kick.pongpatChoMoi', views: '1.3M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/PongpatvsChoMoi.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/c74db6ad-ff47-4709-a519-d25781bd5ed4/play_720p.mp4' },
    { id: 16, titleKey: 'vid.kick.pachitSorinRoth2', views: '2.8M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/PachitChaiyasornvsSorinRoth.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/7b9be665-b968-4c0a-ae17-21d0eda84826/play_720p.mp4' }
  ];

  const legendaryVideos = [
    { id: 1, titleKey: 'vid.kick.pachitSorinRoth', duration: '20:15', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/PachitChaiyasornvsSorinRoth.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/c74db6ad-ff47-4709-a519-d25781bd5ed4/play_720p.mp4' },
    { id: 2, titleKey: 'vid.kick.newDiamond', duration: '16:45', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/NewDiamondvsMcNaskus.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/7b9be665-b968-4c0a-ae17-21d0eda84826/play_720p.mp4' },
    { id: 3, titleKey: 'vid.kick.mightyWarriors', duration: '22:30', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/MightyWarriorsvsNorris.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/39b0d5f6-ecab-4de0-9a10-200550cda509/play_720p.mp4' },
    { id: 4, titleKey: 'vid.kick.kichaiSacho', duration: '13:20', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/KichaiVSSacho.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/626c2c55-b761-4b49-b3e2-bd9e8b3c6ef3/play_720p.mp4' },
    { id: 5, titleKey: 'vid.kick.ironPilot', duration: '19:10', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/IronPilotAutoPartsvsSmurfs.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/a815ea9e-4eb3-42ec-85e4-08d05154f437/play_720p.mp4' },
    { id: 6, titleKey: 'vid.kick.gucci', duration: '17:55', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/GuccivsAlexandruKornazitsky.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/50608e42-15a9-42b1-b085-874f89435ceb/play_720p.mp4' },
    { id: 7, titleKey: 'vid.kick.danielle', duration: '15:40', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/KickBoxing/Thumbnails/DaniellevsDanielle.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/3153a3e8-062c-418a-a016-1a0d5f1964f1/play_720p.mp4' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img src="/KICKBOXINGFeaturedBattles.png" alt="Kickboxing" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold text-white mb-4">{t('kick.pageTitle')}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-gray-200 mb-6">{t("kick.hero")}</motion.p>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <SectionHeader titleKey="kick.trending" />
        <div className="relative">
          <button onClick={() => trendingRef.current?.scrollBy({ left: -400, behavior: 'smooth' })} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full">
            <ChevronLeft size={32} />
          </button>
          <div ref={trendingRef} className="flex gap-4 overflow-x-auto scrollbar-hide pb-4" style={{ scrollbarWidth: 'none' }}>
            {trendingVideos.map((video, i) => (
              <motion.div 
                key={video.id} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -10 }}
                onClick={() => handleVideoClick(video.videoUrl)} 
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 group cursor-pointer"
              >
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <img src={video.thumbnail} alt={t(video.titleKey)} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-center justify-center">
                    <Play size={48} className="text-white" fill="white" />
                  </div>
                  <span className="absolute top-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">{video.duration}</span>
                </div>
                <h3 className="text-white font-semibold mt-2 line-clamp-2">{t(video.titleKey)}</h3>
                <p className="text-gray-400 text-sm">{video.views} {t("views")}</p>
              </motion.div>
            ))}
          </div>
          <button onClick={() => trendingRef.current?.scrollBy({ left: 400, behavior: 'smooth' })} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full">
            <ChevronRight size={32} />
          </button>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <SectionHeader titleKey="kick.allVideos" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {allVideos.map((video, i) => (
            <motion.div 
              key={video.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => handleVideoClick(video.videoUrl)} 
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <img src={video.thumbnail} alt={t(video.titleKey)} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-center justify-center">
                  <Play size={40} className="text-white" fill="white" />
                </div>
              </div>
              <h3 className="text-white font-semibold mt-2 line-clamp-2">{t(video.titleKey)}</h3>
              <p className="text-gray-400 text-sm">{video.views} {t("views")}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <SectionHeader titleKey="kick.legendary" />
        <div className="relative">
          <button onClick={() => legendaryRef.current?.scrollBy({ left: -400, behavior: 'smooth' })} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full">
            <ChevronLeft size={32} />
          </button>
          <div ref={legendaryRef} className="flex gap-4 overflow-x-auto scrollbar-hide pb-4" style={{ scrollbarWidth: 'none' }}>
            {legendaryVideos.map((video, i) => (
              <motion.div 
                key={video.id} 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -10 }}
                onClick={() => handleVideoClick(video.videoUrl)} 
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 group cursor-pointer"
              >
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <img src={video.thumbnail} alt={t(video.titleKey)} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-center justify-center">
                    <Play size={48} className="text-white" fill="white" />
                  </div>
                  <span className="absolute top-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">{video.duration}</span>
                </div>
                <h3 className="text-white font-semibold mt-2 line-clamp-2">{t(video.titleKey)}</h3>
              </motion.div>
            ))}
          </div>
          <button onClick={() => legendaryRef.current?.scrollBy({ left: 400, behavior: 'smooth' })} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full">
            <ChevronRight size={32} />
          </button>
        </div>
      </section>

      <Footer />

      {showLogin && <LoginModal onClose={handleLoginClose} onSuccess={handleLoginSuccess} />}

      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={handleCloseVideo}>
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={handleCloseVideo} className="absolute -top-12 right-0 text-white text-4xl hover:text-red-500 transition">&times;</button>
            <video src={selectedVideo} controls autoPlay className="w-full rounded-lg" controlsList="nodownload" />
          </div>
        </div>
      )}
    </div>
  );
}

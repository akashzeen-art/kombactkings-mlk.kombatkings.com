import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useVideoAccess } from '../hooks/useVideoAccess';
import LoginModal from '@/components/LoginModal';

export default function ArmWrestling() {
  const trendingRef = useRef<HTMLDivElement>(null);
  const legendaryRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const { selectedVideo, showLogin, handleVideoClick, handleLoginSuccess, handleLoginClose, handleCloseVideo } = useVideoAccess();

  const trendingVideos = [
    { id: 1, titleKey: 'vid.armBenderBattles', duration: '12:45', thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmBenderBattles/ArmBenderBattlesThumbnails.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/98ecdb0f-6e36-4f95-b3fc-478009537404/play_360p.mp4', views: '2.5M' },
    { id: 2, titleKey: 'vid.armClashChronicles', duration: '08:30', thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmClashChronicles/ArmClashChroniclesThumbnails.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/6ca5c577-79cd-499b-82ce-77349391b0b8/play_360p.mp4', views: '1.8M' },
    { id: 3, titleKey: 'vid.armClashDynasty', duration: '15:20', thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmClashDynasty/ArmClashDynastyThumbnails.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/c17fff03-c6e0-4cdd-ab5d-3659f2b13e3a/play_360p.mp4', views: '3.2M' },
    { id: 4, titleKey: 'vid.armClashUniverse', duration: '10:15', thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmClashUniverse/ArmClashUniversThumbnails.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/406795bb-9093-4998-87ae-51dd48a0a58b/play_360p.mp4', views: '1.5M' },
    { id: 5, titleKey: 'vid.armDominators', duration: '18:40', thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmDominators/ArmDominatorsThumbnails.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/6ef1f044-0286-470a-981c-dd15e299bf06/play_360p.mp4', views: '2.1M' },
    { id: 6, titleKey: 'vid.armFuryLeague', duration: '09:55', thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmFuryLeague/ArmFuryLeagueThumbnails.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/52ec98d0-ef79-4dec-9fbd-3ca16a45bfd5/play_480p.mp4', views: '1.9M' },
    { id: 7, titleKey: 'vid.armGritArena', duration: '14:30', thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmGritArena/ArmGritArenaThumbnails.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/2226d83c-0e2e-4660-90c7-71fa91b5f8f2/play_360p.mp4', views: '2.7M' }
  ];

  const allVideos = [
    { id: 1, titleKey: 'vid.armLockLegends', views: '2.5M', thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmLockLegends/ArmLockLegendsThumbnails.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/c57bb0bc-f159-4b2e-9f9e-3fcf4b17b72f/play_360p.mp4' },
    { id: 2, titleKey: 'vid.armPowerSyndicate', views: '1.8M', thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmPowerSyndicate/ArmPowerSyndicateThumbnails.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/c1b5c70f-52cd-4cd5-ad12-4ec5c73377b2/play_360p.mp4' },
    { id: 3, titleKey: 'vid.armRageArena', views: '3.2M', thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmRageArena/ArmRageArenaThumbnails.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/b78597cb-31cb-4516-9fe6-2dde945110be/play_480p.mp4' },
    { id: 4, titleKey: 'vid.armSparksLeague', views: '1.5M', thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmSparksLeague/ArmSparksLeagueThumbnails.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/0767d106-b3ae-4737-b01e-9711d29ea301/play_480p.mp4' },
    { id: 5, titleKey: 'vid.armTitanEmpire', views: '2.1M', thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmTitanEmpire/ArmTitanEmpireThumbnails.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/820b3a7b-a262-465f-acd3-6c3e568c74e5/play_360p.mp4' },
    { id: 6, titleKey: 'vid.armTitanShowdown', views: '1.9M', thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmTitanShowdown/ArmTitanShowdownThumbnails.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/ca51225e-a763-4de2-a0e2-a3b4413c0663/play_360p.mp4' },
    { id: 7, titleKey: 'vid.armTitanTrials', views: '2.7M', thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmTitanTrials/ArmTitanTrialsThumbnails.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/70ec6640-a185-442e-b2a5-96cc7965a0d5/play_360p.mp4' },
    { id: 8, titleKey: 'vid.armVoltageLeague', views: '2.3M', thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmVoltageLeague/ArmVoltageLeagueThumbnails.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/a9895bff-356e-4415-932a-1ec4f0803a5a/play_360p.mp4' },
    { id: 9, titleKey: 'vid.armstormElite', views: '1.6M', thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ArmstormElite/ArmstormEliteThumbnails.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/56f056c4-8333-4b5f-bba4-88b18c2ed680/play_360p.mp4' },
    { id: 10, titleKey: 'vid.battleOfTheGrip', views: '2.9M', thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/BattleoftheGrip/BattleoftheGripThumbnails.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/1ac4c026-8ba1-45b5-9bf5-348bf545addb/play_360p.mp4' },
    { id: 11, titleKey: 'vid.boneLockBattles', views: '1.4M', thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/Bone-LockBattles/Bone-LockBattlesThumbnails.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/d893cefb-2d9a-400a-836a-50cb2dc147e0/play_360p.mp4' },
    { id: 12, titleKey: 'vid.clashOfForearms', views: '2.2M', thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ClashofForearms/ClashofForearmsThumbnails.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/98ecdb0f-6e36-4f95-b3fc-478009537404/play_360p.mp4' },
    { id: 13, titleKey: 'vid.forearmFrenzy', views: '1.7M', thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/ForearmFrenzy/ForearmFrenzyThumbnails.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/6ca5c577-79cd-499b-82ce-77349391b0b8/play_360p.mp4' },
    { id: 14, titleKey: 'vid.gripCommanderCup', views: '2.6M', thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/GripCommanderCup/GripCommanderCupThumbnails.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/c17fff03-c6e0-4cdd-ab5d-3659f2b13e3a/play_360p.mp4' },
    { id: 15, titleKey: 'vid.gripForceEmpire', views: '1.3M', thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/GripForceEmpire/GripForceEmpireThumbnails.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/406795bb-9093-4998-87ae-51dd48a0a58b/play_360p.mp4' },
    { id: 16, titleKey: 'vid.gripGladiators', views: '2.8M', thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/GripGladiators/GripGladiatorsThumbnails.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/6ef1f044-0286-470a-981c-dd15e299bf06/play_360p.mp4' }
  ];

  const legendaryVideos = [
    { id: 1, titleKey: 'vid.gripKingChampionship', duration: '20:15', thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/GripKingChampionship/GripKingChampionshipThumbnails.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/52ec98d0-ef79-4dec-9fbd-3ca16a45bfd5/play_480p.mp4' },
    { id: 2, titleKey: 'vid.gripMastersLeague', duration: '16:45', thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/GripMastersLeague/GripMastersLeagueThumbnails.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/2226d83c-0e2e-4660-90c7-71fa91b5f8f2/play_360p.mp4' },
    { id: 3, titleKey: 'vid.gripRageCircuit', duration: '22:30', thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/GripRageCircuit/GripRageCircuitThumbnails.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/c57bb0bc-f159-4b2e-9f9e-3fcf4b17b72f/play_360p.mp4' },
    { id: 4, titleKey: 'vid.gripTitanShow', duration: '13:20', thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/GripTitanShow/GripTitanShowThumbnails.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/c1b5c70f-52cd-4cd5-ad12-4ec5c73377b2/play_360p.mp4' },
    { id: 5, titleKey: 'vid.gripVanguard', duration: '19:10', thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/GripVanguard/GripVanguardThumbnails.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/b78597cb-31cb-4516-9fe6-2dde945110be/play_480p.mp4' },
    { id: 6, titleKey: 'vid.gripquakeBattles', duration: '17:55', thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/GripquakeBattles/GripquakeBattlesThumbnails.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/0767d106-b3ae-4737-b01e-9711d29ea301/play_480p.mp4' },
    { id: 7, titleKey: 'vid.gripshockLeague', duration: '15:40', thumbnail: 'https://api.ameora.fun/content/armwrestling/ArmWrestling/GripshockLeague/GripshockLeagueThumbnails.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/820b3a7b-a262-465f-acd3-6c3e568c74e5/play_360p.mp4' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img src="/ARMWRESTLING–FeaturedBattles.png" alt="Arm Wrestling" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold text-white mb-4">{t('arm.pageTitle')}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-gray-200 mb-6">{t('arm.hero')}</motion.p>
        </div>
      </section>

      {/* Trending Slider */}
      <section className="py-12 container mx-auto px-4">
        <SectionHeader title={t('arm.trending')} />
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
                  <p className="text-gray-400 text-sm">{video.views} {t('views')}</p>
                </motion.div>
              ))}
            </div>
          <button onClick={() => trendingRef.current?.scrollBy({ left: 400, behavior: 'smooth' })} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full">
            <ChevronRight size={32} />
          </button>
        </div>
      </section>

      {/* 4x4 Grid */}
      <section className="py-12 container mx-auto px-4">
        <SectionHeader title={t('arm.allVideos')} />
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
              <p className="text-gray-400 text-sm">{video.views} {t('views')}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Legendary Slider */}
      <section className="py-12 container mx-auto px-4">
        <SectionHeader title={t('arm.legendary')} />
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
            <video src={selectedVideo} controls autoPlay className="w-full rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
}

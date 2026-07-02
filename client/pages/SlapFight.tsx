import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useVideoAccess } from '../hooks/useVideoAccess';
import LoginModal from '@/components/LoginModal';

export default function SlapFight() {
  const trendingRef = useRef<HTMLDivElement>(null);
  const legendaryRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const { selectedVideo, showLogin, handleVideoClick, handleLoginSuccess, handleLoginClose, handleCloseVideo } = useVideoAccess();

  const trendingVideos = [
    { id: 1, titleKey: 'vid.slapChampFinal', duration: '12:45', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap1.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/7b457eda-e09b-4433-b754-469c32b166c3/play_360p.mp4', views: '2.5M' },
    { id: 2, titleKey: 'vid.slapHeavyweight', duration: '08:30', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap2.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/0c44792b-9f49-43ba-8fd3-7ef2786ec7b1/play_360p.mp4', views: '1.8M' },
    { id: 3, titleKey: 'vid.slapWorldRecord', duration: '15:20', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap3.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/ad034e46-881e-4d5e-aa4d-dcde0927156f/play_240p.mp4', views: '3.2M' },
    { id: 4, titleKey: 'vid.slapUnderdog', duration: '10:15', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap4.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/faa02d51-0100-49a8-8626-63318d3f24c6/play_360p.mp4', views: '1.5M' },
    { id: 5, titleKey: 'vid.slapProLeague', duration: '18:40', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap5.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/f8030163-7c81-4f2a-a960-617f36638303/play_360p.mp4', views: '2.1M' },
    { id: 6, titleKey: 'vid.slapSpeedStrength', duration: '09:55', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap6.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/86a2ff3c-242c-4c8c-ba38-372920726272/play_360p.mp4', views: '1.9M' },
    { id: 7, titleKey: 'vid.slapInternational', duration: '14:30', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap7.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/dc34f7ab-a480-4ce5-b494-cbd0c2681acd/play_360p.mp4', views: '2.7M' }
  ];

  const allVideos = [
    { id: 1, titleKey: 'vid.slapMatch1', views: '2.5M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap5.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/7b457eda-e09b-4433-b754-469c32b166c3/play_360p.mp4' },
    { id: 2, titleKey: 'vid.slapMatch2', views: '1.8M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap6.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/0c44792b-9f49-43ba-8fd3-7ef2786ec7b1/play_360p.mp4' },
    { id: 3, titleKey: 'vid.slapMatch3', views: '3.2M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap7.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/ad034e46-881e-4d5e-aa4d-dcde0927156f/play_240p.mp4' },
    { id: 4, titleKey: 'vid.slapMatch4', views: '1.5M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap8.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/faa02d51-0100-49a8-8626-63318d3f24c6/play_360p.mp4' },
    { id: 5, titleKey: 'vid.slapMatch5', views: '2.1M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap9.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/f8030163-7c81-4f2a-a960-617f36638303/play_360p.mp4' },
    { id: 6, titleKey: 'vid.slapMatch6', views: '1.9M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap10.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/86a2ff3c-242c-4c8c-ba38-372920726272/play_360p.mp4' },
    { id: 7, titleKey: 'vid.slapMatch7', views: '2.7M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap11.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/dc34f7ab-a480-4ce5-b494-cbd0c2681acd/play_360p.mp4' },
    { id: 8, titleKey: 'vid.slapMatch8', views: '2.3M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap12.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/67378f39-1fa7-4696-a08c-2d104b6cf273/play_360p.mp4' },
    { id: 9, titleKey: 'vid.slapMatch9', views: '1.6M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap13.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/3b177351-641c-4221-b757-43f4aa7eb8bb/play_360p.mp4' },
    { id: 10, titleKey: 'vid.slapMatch10', views: '2.9M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap14.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/f695e071-d5e0-467c-8578-5216f13ca4e2/play_360p.mp4' },
    { id: 11, titleKey: 'vid.slapMatch11', views: '1.4M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap15.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/abe6220a-08df-4e5e-ac6b-122243821856/play_360p.mp4' },
    { id: 12, titleKey: 'vid.slapMatch12', views: '2.2M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap16.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/703dd30d-559a-4474-9f00-e73aa0689814/play_360p.mp4' },
    { id: 13, titleKey: 'vid.slapMatch13', views: '1.7M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap17.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/d43d49ec-3494-46b4-b4b4-de5ad4f93f0d/play_360p.mp4' },
    { id: 14, titleKey: 'vid.slapMatch14', views: '2.6M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap18.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/d124b923-23b7-4e5d-88fb-6a95cf54cf2a/play_360p.mp4' },
    { id: 15, titleKey: 'vid.slapMatch15', views: '1.3M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap3.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/465b8c1c-711e-4f8d-b96c-871affcb187e/play_360p.mp4' },
    { id: 16, titleKey: 'vid.slapMatch16', views: '2.8M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap4.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/d02a11d1-2fb1-46fb-93f1-0d2c142b1840/play_360p.mp4' }
  ];

  const legendaryVideos = [
    { id: 1, titleKey: 'vid.slapComeback', duration: '20:15', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap11.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/703dd30d-559a-4474-9f00-e73aa0689814/play_360p.mp4' },
    { id: 2, titleKey: 'vid.slapLegendary', duration: '16:45', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap12.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/d43d49ec-3494-46b4-b4b4-de5ad4f93f0d/play_360p.mp4' },
    { id: 3, titleKey: 'vid.slapHistoric', duration: '22:30', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap13.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/d124b923-23b7-4e5d-88fb-6a95cf54cf2a/play_360p.mp4' },
    { id: 4, titleKey: 'vid.slapUndefeated', duration: '13:20', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap14.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/465b8c1c-711e-4f8d-b96c-871affcb187e/play_360p.mp4' },
    { id: 5, titleKey: 'vid.slapTitans', duration: '19:10', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap15.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/d02a11d1-2fb1-46fb-93f1-0d2c142b1840/play_360p.mp4' },
    { id: 6, titleKey: 'vid.slapIntense', duration: '17:55', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap16.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/25fcc3f5-3e94-4d79-a3e3-552f926395e8/play_360p.mp4' },
    { id: 7, titleKey: 'vid.slapGlory', duration: '15:40', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/slapThumbnails/Slap17.jpg', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/04a31990-6f35-461e-a001-fe299cb74df7/play_360p.mp4' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img src="/SLAPFIGHTFeaturedBattles.png" alt="Slap Fight" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold text-white mb-4">{t('slap.pageTitle')}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-gray-200 mb-6">{t(`slap.hero`)}</motion.p>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <SectionHeader title={t(`slap.trending`)} />
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
                <p className="text-gray-400 text-sm">{video.views} {t(`views`)}</p>
              </motion.div>
            ))}
          </div>
          <button onClick={() => trendingRef.current?.scrollBy({ left: 400, behavior: 'smooth' })} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full">
            <ChevronRight size={32} />
          </button>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <SectionHeader title={t(`slap.allVideos`)} />
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
              <p className="text-gray-400 text-sm">{video.views} {t(`views`)}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <SectionHeader title={t(`slap.legendary`)} />
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

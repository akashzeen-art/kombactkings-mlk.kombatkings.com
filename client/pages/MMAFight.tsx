import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useVideoAccess } from '@/hooks/useVideoAccess';
import LoginModal from '@/components/LoginModal';

export default function MMAFight() {
  const { t } = useLanguage();
  const trendingRef = useRef<HTMLDivElement>(null);
  const legendaryRef = useRef<HTMLDivElement>(null);
  const { selectedVideo, showLogin, handleVideoClick, handleLoginSuccess, handleLoginClose, handleCloseVideo } = useVideoAccess();

  const trendingVideos = [
    { id: 1, titleKey: 'vid.mma.rogerHuerta', duration: '12:45', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/RogerHuertavsChadHinton.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/0506d21e-0595-42ad-b75e-0ffb7f177d4f/play_720p.mp4', views: '2.5M' },
    { id: 2, titleKey: 'vid.mma.rampageJackson', duration: '08:30', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/RampageJacksonvsJoeyBeltran.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/89883c94-0135-4030-ac72-960174d92372/play_720p.mp4', views: '1.8M' },
    { id: 3, titleKey: 'vid.mma.philDavis', duration: '15:20', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/PhilDavisvsFrancisCarmont.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/9a138d03-c6c0-4ee9-986f-893444a0cf70/play_720p.mp4', views: '3.2M' },
    { id: 4, titleKey: 'vid.mma.paulDaleyRory', duration: '10:15', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/PaulDaleyvsRoryMacDonald.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/8b8ac3ed-221d-44b8-83d4-6faaecc0857d/play_720p.mp4', views: '1.5M' },
    { id: 5, titleKey: 'vid.mma.paulDaleyRomario', duration: '18:40', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/PaulDaleyvsRomarioManoeldaSilva.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/8b2cb0c8-8f1c-447c-9d90-aec351f4c67c/play_720p.mp4', views: '2.1M' },
    { id: 6, titleKey: 'vid.mma.paulDaleyBrennan', duration: '09:55', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/PaulDaleyvsBrennanWard.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/e0bb630e-6a38-4b1c-a830-08f619746c35/play_720p.mp4', views: '1.9M' },
    { id: 7, titleKey: 'vid.mma.patrickyRyan', duration: '14:30', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/PatrickyPitbullvsRyanCouture.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/ca0126aa-94c1-4926-b37d-9f33aab2a805/play_720p.mp4', views: '2.7M' }
  ];

  const allVideos = [
    { id: 1, titleKey: 'vid.mma.noadLahat', views: '2.5M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/NoadLahatvsScottCleve.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/a0951b01-2c78-4047-90ef-f6a7508c60b7/play_720p.mp4' },
    { id: 2, titleKey: 'vid.mma.mattMitrione', views: '1.8M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/MattMitrionevsCarlSeumanutafa.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/b4182ba5-39fc-4bc5-8dc7-54df9d1a1bd8/play_720p.mp4' },
    { id: 3, titleKey: 'vid.mma.leiMacFarlane', views: '3.2M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/LeiMacFarlanevsEmilyDucote.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/41468e3e-a80e-4e45-be67-71dfd3114d84/play_720p.mp4' },
    { id: 4, titleKey: 'vid.mma.juliaBudd', views: '1.5M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/JuliaBuddvsArleneBlencowe.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/c879b40e-2ef9-4947-80e6-870a741aa29c/play_720p.mp4' },
    { id: 5, titleKey: 'vid.mma.johnSalter', views: '2.1M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/JohnSaltervsBrandonHalsey.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/50b54767-c992-4858-a8a8-5e4cc0c3e579/play_720p.mp4' },
    { id: 6, titleKey: 'vid.mma.joeWarren', views: '1.9M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/JoeWarrenvsJoeSoto.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/8149ea95-b891-44be-9ee7-1bd8bc41a0b7/play_720p.mp4' },
    { id: 7, titleKey: 'vid.mma.javyAyala', views: '2.7M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/JavyAyalavsRaphaelButler.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/c2ef7a20-42f4-4a26-b4a6-19cb9a7fefcd/play_720p.mp4' },
    { id: 8, titleKey: 'vid.mma.jamesGallagher', views: '2.3M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/JamesGallaghervsAnthonyTaylor.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/ec14be76-3315-4492-80ff-00196c9b7554/play_720p.mp4' },
    { id: 9, titleKey: 'vid.mma.georgiKarakhanyan', views: '1.6M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/GeorgiKarakhanyanvsBubbaJenkins.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/066551b6-aa7f-4413-8e77-e4373250d545/play_720p.mp4' },
    { id: 10, titleKey: 'vid.mma.douglasLima', views: '2.9M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/DouglasLimavsBenSaunders.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/e0aea8d8-7357-43e6-a7af-6c26e22e49f7/play_720p.mp4' },
    { id: 11, titleKey: 'vid.mma.derekCampos', views: '1.4M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/DerekCamposvsBrandonGirtz3.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/201c3be3-4473-46bf-bf15-3aec44883d0b/play_720p.mp4' },
    { id: 12, titleKey: 'vid.mma.deniseKielholtz', views: '2.2M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/DeniseKielholtzvsJessicaMiddleton.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/b9764815-1ec9-4a7f-9579-31660a95b0b5/play_720p.mp4' },
    { id: 13, titleKey: 'vid.mma.chinzoMachida', views: '1.7M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/ChinzoMachidavsMarioNavarro.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/d3cf506b-f378-40c2-982a-4aa6e1b95781/play_720p.mp4' },
    { id: 14, titleKey: 'vid.mma.brennanWard', views: '2.6M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/BrennanWardvsDennisOlson.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/8a0961e0-d365-4b0f-be9b-1abb88fda42e/play_720p.mp4' },
    { id: 15, titleKey: 'vid.mma.alexanderShlemenko', views: '1.3M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/AlexanderShlemenkovsKendallGrove.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/e2d9064c-bd94-4b4e-b82b-582ad7e2618b/play_720p.mp4' },
    { id: 16, titleKey: 'vid.mma.alejandraLara', views: '2.8M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/AlejandraLaravsLenaOvchynnikova.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/50232254-5402-4a15-8f07-74d53605ecee/play_720p.mp4' }
  ];

  const legendaryVideos = [
    { id: 1, titleKey: 'vid.mma.paulDaleyRomario', duration: '20:15', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/PaulDaleyvsRomarioManoeldaSilva.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/8b8ac3ed-221d-44b8-83d4-6faaecc0857d/play_720p.mp4' },
    { id: 2, titleKey: 'vid.mma.paulDaleyBrennan', duration: '16:45', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/PaulDaleyvsBrennanWard.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/8b2cb0c8-8f1c-447c-9d90-aec351f4c67c/play_720p.mp4' },
    { id: 3, titleKey: 'vid.mma.patrickyRyan', duration: '22:30', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/PatrickyPitbullvsRyanCouture.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/e0bb630e-6a38-4b1c-a830-08f619746c35/play_720p.mp4' },
    { id: 4, titleKey: 'vid.mma.patrickyJosh', duration: '13:20', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/PatrickyPitbullvsJoshThomson.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/ca0126aa-94c1-4926-b37d-9f33aab2a805/play_720p.mp4' },
    { id: 5, titleKey: 'vid.mma.noadLahat', duration: '19:10', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/NoadLahatvsScottCleve.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/a0951b01-2c78-4047-90ef-f6a7508c60b7/play_720p.mp4' },
    { id: 6, titleKey: 'vid.mma.mattMitrione', duration: '17:55', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/MattMitrionevsCarlSeumanutafa.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/b4182ba5-39fc-4bc5-8dc7-54df9d1a1bd8/play_720p.mp4' },
    { id: 7, titleKey: 'vid.mma.leiMacFarlane', duration: '15:40', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/MMA/Thumbnails/LeiMacFarlanevsEmilyDucote.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/41468e3e-a80e-4e45-be67-71dfd3114d84/play_720p.mp4' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img src="/MMAFIGHTFeaturedBattles.png" alt="MMA Fight" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold text-white mb-4">{t('mma.pageTitle')}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-gray-200 mb-6">{t("mma.hero")}</motion.p>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <SectionHeader titleKey="mma.trending" />
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
        <SectionHeader titleKey="mma.allVideos" />
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
        <SectionHeader titleKey="mma.legendary" />
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

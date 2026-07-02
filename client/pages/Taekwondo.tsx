import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useVideoAccess } from '@/hooks/useVideoAccess';
import LoginModal from '@/components/LoginModal';

export default function Taekwondo() {
  const { t } = useLanguage();
  const trendingRef = useRef<HTMLDivElement>(null);
  const legendaryRef = useRef<HTMLDivElement>(null);
  const { selectedVideo, showLogin, handleVideoClick, handleLoginSuccess, handleLoginClose, handleCloseVideo } = useVideoAccess();

  const trendingVideos = [
    { id: 1, titleKey: 'vid.tkd.seokbaeKim', duration: '12:45', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/SeokbaeKimVSAbolfazlYaghoubijou.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/a8d14831-2458-47de-8edf-a08daf2bd167/play_720p.mp4', views: '2.5M' },
    { id: 2, titleKey: 'vid.tkd.moscow2017', duration: '08:30', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/Moscow2017WorldTaekwondoGrandPrixSemifinal.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/55c7f309-6549-4e29-85d3-a7d7f77853ab/play_720p.mp4', views: '1.8M' },
    { id: 3, titleKey: 'vid.tkd.mikhailArtamonov', duration: '15:20', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/MikhailArtamonovVSJesusTortosa.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/cad630b4-2546-48c5-aa0d-353d01a1ce08/play_720p.mp4', views: '3.2M' },
    { id: 4, titleKey: 'vid.tkd.male58kg', duration: '10:15', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/Male58KgQUARTERFINALLeventTUNCATGERvLuca.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/3ce41f12-ac74-4bb0-9669-42bea5da56cd/play_720p.mp4', views: '1.5M' },
    { id: 5, titleKey: 'vid.tkd.m80kgMilad', duration: '18:40', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/M80kgMiladBEIGIVSMaksimKHRAMTCOV.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/bf18fc3f-d965-47b8-9790-b3f3bd1fd4e5/play_720p.mp4', views: '2.1M' },
    { id: 6, titleKey: 'vid.tkd.m80kgMaksimSeif', duration: '09:55', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/M80kgMaksimKhramtcovVSSeifEISSA.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/934c99f1-b6a0-4633-b25f-b2976a696e33/play_720p.mp4', views: '1.9M' },
    { id: 7, titleKey: 'vid.tkd.m80kgMaksimHwan', duration: '14:30', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/M80kgMaksimKHRAMTCOVVSHwanNAMGOONG.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/9d9cfd28-5d52-43ca-b5bb-5f4087484bb4/play_720p.mp4', views: '2.7M' }
  ];

  const allVideos = [
    { id: 1, titleKey: 'vid.tkd.male58kgQ', views: '2.5M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/Male58KgQUARTERFINALLeventTUNCATGERvLuca.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/a8d14831-2458-47de-8edf-a08daf2bd167/play_720p.mp4' },
    { id: 2, titleKey: 'vid.tkd.m80kgMiladShort', views: '1.8M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/M80kgMiladBEIGIVSMaksimKHRAMTCOV.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/55c7f309-6549-4e29-85d3-a7d7f77853ab/play_720p.mp4' },
    { id: 3, titleKey: 'vid.tkd.m80kgMaksimSeifShort', views: '3.2M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/M80kgMaksimKhramtcovVSSeifEISSA.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/cad630b4-2546-48c5-aa0d-353d01a1ce08/play_720p.mp4' },
    { id: 4, titleKey: 'vid.tkd.m80kgMaksimHwanShort', views: '1.5M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/M80kgMaksimKHRAMTCOVVSHwanNAMGOONG.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/3ce41f12-ac74-4bb0-9669-42bea5da56cd/play_720p.mp4' },
    { id: 5, titleKey: 'vid.tkd.m80kgHwanKe', views: '2.1M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/M80kgHwanNAMGOONGVSKeREN.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/bf18fc3f-d965-47b8-9790-b3f3bd1fd4e5/play_720p.mp4' },
    { id: 6, titleKey: 'vid.tkd.m80kgHwanAnton', views: '1.9M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/M80kgHwanNAMGOONGVSAntonKOTKOV.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/934c99f1-b6a0-4633-b25f-b2976a696e33/play_720p.mp4' },
    { id: 7, titleKey: 'vid.tkd.m80kgCheickShort', views: '2.7M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/M80kgCheickSallahCisseVSHwanNamgoong.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/9d9cfd28-5d52-43ca-b5bb-5f4087484bb4/play_720p.mp4' },
    { id: 8, titleKey: 'vid.tkd.m80kgAaronCook', views: '2.3M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/M80kgAaronCOOKVSAntonKOTKOV.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/39691b2e-fae9-463b-b262-c3c38b5040c1/play_720p.mp4' },
    { id: 9, titleKey: 'vid.tkd.m68kgDaehoon', views: '1.6M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/M68kgDaehoonLeeVSBorisKrasnov.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/179622e3-b123-49c1-9e1d-feb36e8623b0/play_720p.mp4' },
    { id: 10, titleKey: 'vid.tkd.aleksandraWiam', views: '2.9M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/AleksandraKOWALCZUKVSWiamDISLAM.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/f7373e80-f6e0-4e4e-addb-9426c5f25d14/play_720p.mp4' },
    { id: 11, titleKey: 'vid.tkd.aleksandraJackie', views: '1.4M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/AleksandraKOWALCZUKVSJackieGAL.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/2ae4ad95-c9db-4e7b-81bf-ef94c3662c4a/play_720p.mp4' },
    { id: 12, titleKey: 'vid.tkd.aaronCookZhen', views: '2.2M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/AaronCOOKVSZhenWANG.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/cc9bc6b8-f438-4659-830a-a088aae01d8a/play_720p.mp4' },
    { id: 13, titleKey: 'vid.tkd.68kgSFDaehoon', views: '1.7M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/68kgSFDaehoonLEEvsAlexeyDENISENKO.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/d3d72fdb-6aab-4fa4-8677-5ffcfb7b9250/play_720p.mp4' },
    { id: 14, titleKey: 'vid.tkd.68kgSeokbae', views: '2.6M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/68kgSeokbaeKIMvsAbolfazlYAGHOUBJOUYBARI.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/9a41b25d-0dc7-497d-a226-72a1d3040e4a/play_720p.mp4' },
    { id: 15, titleKey: 'vid.tkd.68kgQFDaehoon', views: '1.3M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/68kgQFDaehoonLEEvsBorisKRASNOV.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/54fd40e9-7bfc-4e5a-8732-243b0a478c7b/play_720p.mp4' },
    { id: 16, titleKey: 'vid.tkd.68kgBoris', views: '2.8M', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/68kgBorisKRASNOVvsTemuujinPUREVJAV.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/8b0bf594-e990-499a-ade7-043bd2e52e8a/play_720p.mp4' }
  ];

  const legendaryVideos = [
    { id: 1, titleKey: 'vid.tkd.m80kgCheick', duration: '20:15', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/M80kgCheickSallahCisseVSHwanNamgoong.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/2ae4ad95-c9db-4e7b-81bf-ef94c3662c4a/play_720p.mp4' },
    { id: 2, titleKey: 'vid.tkd.m80kgAaronCook', duration: '16:45', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/M80kgAaronCOOKVSAntonKOTKOV.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/cc9bc6b8-f438-4659-830a-a088aae01d8a/play_720p.mp4' },
    { id: 3, titleKey: 'vid.tkd.m68kgDaehoon', duration: '22:30', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/M68kgDaehoonLeeVSBorisKrasnov.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/d3d72fdb-6aab-4fa4-8677-5ffcfb7b9250/play_720p.mp4' },
    { id: 4, titleKey: 'vid.tkd.aleksandraWiam', duration: '13:20', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/AleksandraKOWALCZUKVSWiamDISLAM.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/9a41b25d-0dc7-497d-a226-72a1d3040e4a/play_720p.mp4' },
    { id: 5, titleKey: 'vid.tkd.aleksandraJackie', duration: '19:10', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/AleksandraKOWALCZUKVSJackieGAL.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/54fd40e9-7bfc-4e5a-8732-243b0a478c7b/play_720p.mp4' },
    { id: 6, titleKey: 'vid.tkd.aaronCookZhen', duration: '17:55', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/AaronCOOKVSZhenWANG.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/8b0bf594-e990-499a-ade7-043bd2e52e8a/play_720p.mp4' },
    { id: 7, titleKey: 'vid.tkd.68kgSFDaehoon', duration: '15:40', thumbnail: 'https://api.ameora.fun/content/FightingPortalContent/Taekwondo/Thumbnails/68kgSFDaehoonLEEvsAlexeyDENISENKO.png', videoUrl: 'https://vz-52f523cb-d38.b-cdn.net/f568fb2e-b714-4f38-8413-d2ac6ff10aac/play_720p.mp4' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img src="/TAEKWONDOFeaturedBattles.png" alt="Taekwondo" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold text-white mb-4">{t('tkd.pageTitle')}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-gray-200 mb-6">{t("tkd.hero")}</motion.p>
        </div>
      </section>
      <section className="py-12 container mx-auto px-4">
        <SectionHeader titleKey="tkd.trending" />
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
        <SectionHeader titleKey="tkd.allVideos" />
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
        <SectionHeader titleKey="tkd.legendary" />
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

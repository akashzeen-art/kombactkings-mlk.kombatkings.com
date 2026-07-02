import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function FeaturedSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useLanguage();

  const slides = [
    { id: 1, titleKey: 'slider.taekwondoTitle', subtitleKey: 'slider.taekwondoSubtitle', path: '/taekwondo', video: 'https://vz-52f523cb-d38.b-cdn.net/a8d14831-2458-47de-8edf-a08daf2bd167/play_720p.mp4' },
    { id: 2, titleKey: 'slider.mmaTitle', subtitleKey: 'slider.mmaSubtitle', path: '/mma-fight', video: 'https://vz-52f523cb-d38.b-cdn.net/0506d21e-0595-42ad-b75e-0ffb7f177d4f/play_720p.mp4' },
    { id: 3, titleKey: 'slider.kickboxingTitle', subtitleKey: 'slider.kickboxingSubtitle', path: '/kickboxing', video: 'https://vz-52f523cb-d38.b-cdn.net/89883c94-0135-4030-ac72-960174d92372/play_720p.mp4' },
    { id: 4, titleKey: 'slider.slapTitle', subtitleKey: 'slider.slapSubtitle', path: '/slap-fight', video: 'https://vz-52f523cb-d38.b-cdn.net/55c7f309-6549-4e29-85d3-a7d7f77853ab/play_720p.mp4' },
    { id: 5, titleKey: 'slider.armTitle', subtitleKey: 'slider.armSubtitle', path: '/arm-wrestling', video: 'https://vz-52f523cb-d38.b-cdn.net/cad630b4-2546-48c5-aa0d-353d01a1ce08/play_720p.mp4' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [currentIndex]);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const goToPrevious = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden bg-black">
      <video
        ref={videoRef}
        key={currentIndex}
        src={slides[currentIndex].video}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 z-10">
        <motion.h2
          key={`title-${currentIndex}`}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          {t(slides[currentIndex].titleKey)}
        </motion.h2>
        <motion.p
          key={`subtitle-${currentIndex}`}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-200 mb-8"
        >
          {t(slides[currentIndex].subtitleKey)}
        </motion.p>
        <Link to={slides[currentIndex].path}>
          <motion.button
            key={`button-${currentIndex}`}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold w-fit"
          >
            {t('index.watchNow')}
          </motion.button>
        </Link>
      </div>

      <button onClick={goToPrevious} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20">
        <ChevronLeft size={32} />
      </button>
      <button onClick={goToNext} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20">
        <ChevronRight size={32} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  );
}

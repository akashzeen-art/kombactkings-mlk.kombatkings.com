'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const { t } = useLanguage();

  const slides = [
    { id: 1, image: '/1.png', titleKey: 'hero.armTitle', subtitleKey: 'hero.armSubtitle', categoryKey: 'hero.armCategory', resultKey: 'hero.armResult' },
    { id: 2, image: '/2.png', titleKey: 'hero.slapTitle', subtitleKey: 'hero.slapSubtitle', categoryKey: 'hero.slapCategory', resultKey: 'hero.slapResult' },
    { id: 3, image: '/4.png', titleKey: 'hero.kickTitle', subtitleKey: 'hero.kickSubtitle', categoryKey: 'hero.kickCategory', resultKey: 'hero.kickResult' },
    { id: 4, image: '/5.png', titleKey: 'hero.mmaTitle', subtitleKey: 'hero.mmaSubtitle', categoryKey: 'hero.mmaCategory', resultKey: 'hero.mmaResult' },
    { id: 5, image: '/3.png', titleKey: 'hero.tkdTitle', subtitleKey: 'hero.tkdSubtitle', categoryKey: 'hero.tkdCategory', resultKey: 'hero.tkdResult' },
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[50vh] md:h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <img src={slides[current].image} alt={t(slides[current].titleKey)} className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 md:from-black/80 md:via-black/40 md:to-transparent" />
      </div>

      <div className="relative z-10 h-full flex items-end">
        <div className="container mx-auto px-4 pb-6 md:pb-12">
          <div className="max-w-full md:max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-3 md:mb-4">
              <p className="text-white/90 text-xs md:text-base font-medium mb-1 line-clamp-2">{t(slides[current].categoryKey)}</p>
              <p className="text-white/80 text-xs md:text-sm">{t('championship')}</p>
            </motion.div>
            <div className="mb-4">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="flex items-center gap-2 md:gap-3 mb-2">
                <h1 className="text-white text-lg md:text-2xl font-bold line-clamp-1">{t(slides[current].titleKey)}</h1>
              </motion.div>
              <motion.h2 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="text-white text-base md:text-xl font-semibold mb-2 md:mb-3 line-clamp-1">{t(slides[current].subtitleKey)}</motion.h2>
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-white/90 text-xs md:text-base mb-3 md:mb-4 line-clamp-1">{t(slides[current].resultKey)}</motion.p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 z-20 flex flex-col md:flex-row items-end gap-2 md:gap-4">
        <button onClick={() => setCurrent((current + 1) % slides.length)} className="p-2 md:p-3 bg-white/20 hover:bg-white/30 text-white rounded-full transition backdrop-blur-sm order-2 md:order-1">
          <ChevronRight className="md:w-5 md:h-5" />
        </button>
        <div className="flex gap-1 md:gap-2 order-1 md:order-2 overflow-x-auto max-w-[200px] md:max-w-none">
          {slides.map((slide, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`relative rounded overflow-hidden transition-all duration-300 flex-shrink-0 ${i === current ? 'w-12 h-8 md:w-20 md:h-12 ring-1 md:ring-2 ring-white' : 'w-10 h-6 md:w-16 md:h-10 opacity-70 hover:opacity-100'}`}>
              <img src={slide.image} alt={t(slide.titleKey)} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-black/20" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

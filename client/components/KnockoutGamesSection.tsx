import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "../context/LanguageContext";

export default function KnockoutGamesSection() {
  const { t } = useLanguage();
  const games = [
    { id: 1, titleKey: 'knockout.arm', path: '/arm-wrestling', image: '/ARMWRESTLING–FeaturedBattles.png' },
    { id: 2, titleKey: 'knockout.slap', path: '/slap-fight', image: '/SLAPFIGHTFeaturedBattles.png' }
  ];

  return (
    <section className="py-12 bg-card/50">
      <div className="container mx-auto px-4">
        <SectionHeader titleKey="index.knockoutGames" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {games.map((game, i) => (
            <Link key={game.id} to={game.path}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.03 }}
                className="relative h-64 rounded-lg overflow-hidden"
              >
                <img src={game.image} alt={t(game.titleKey)} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{t(game.titleKey)}</h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";

export default function LiveNowSection() {
  const liveEvents = [
    { id: 1, title: "Arm Wrestling Championship", category: "Arm Wrestling", path: "/arm-wrestling", image: "/ARMWRESTLING–FeaturedBattles.png" },
    { id: 2, title: "Slap Fight Tournament", category: "Slap Fight", path: "/slap-fight", image: "/SLAPFIGHTFeaturedBattles.png" },
    { id: 3, title: "MMA Fight Night", category: "MMA", path: "/mma-fight", image: "/MMAFIGHTFeaturedBattles.png" }
  ];

  return (
    <section className="py-12 bg-card/50">
      <div className="container mx-auto px-4">
        <SectionHeader title="Live Now" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {liveEvents.map((event, i) => (
            <Link key={event.id} to={event.path}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative h-48 rounded-lg overflow-hidden"
              >
                <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">LIVE</div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold">{event.title}</h3>
                  <p className="text-gray-300 text-sm">{event.category}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { t } = useLanguage();

  return (
    <motion.footer 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.6 }}
      className="bg-card border-t border-border mt-16"
    >
      <div className="container mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }} transition={{ delay: 0.1 }} className="mb-8">
          <Link to="/" className="inline-block mb-4">
            <img src="/54.png" alt="KombackKings Logo" className="h-12 md:h-16" />
          </Link>
          <p className="text-muted-foreground text-sm">{t('footer.tagline')}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: isVisible ? 1 : 0 }} transition={{ delay: 0.2 }} className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>{t('footer.copyright')}</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

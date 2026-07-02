import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

interface SectionHeaderProps {
  title?: string;
  titleKey?: string;
}

export default function SectionHeader({ title, titleKey }: SectionHeaderProps) {
  const { t } = useLanguage();
  const text = titleKey ? t(titleKey) : (title ?? '');
  return (
    <div className="mb-8">
      <div className="flex items-center">
        <svg width="29" height="48" viewBox="0 0 29 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label={text} className="mr-4">
          <path opacity="0.4" d="M0 0H29L17.4 48H0V0Z" fill="#F55505"></path>
          <path opacity="0.77" d="M0 0H22L10.4211 48H0V0Z" fill="#F55505"></path>
        </svg>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between flex-1"
        >
          <div>
            <p className="text-2xl md:text-3xl font-bold text-white">{text}</p>
            <div className="flex items-center">
              <div style={{color:"#ffffffd9"}} className="flex items-center">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M9.39953 17.6538L8.3457 16.6L12.9457 12L8.3457 7.40002L9.39953 6.34619L15.0534 12L9.39953 17.6538Z" fill="currentColor"></path>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

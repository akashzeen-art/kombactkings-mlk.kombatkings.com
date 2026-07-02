import { Menu, Globe, User } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useAuth } from "../context/AuthContext";
import LoginModal from "./LoginModal";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { isActive } = useAuth();

  const navItems = [
    { key: 'nav.home', path: '/' },
    { key: 'nav.armWrestling', path: '/arm-wrestling' },
    { key: 'nav.slapFight', path: '/slap-fight' },
    { key: 'nav.mmaFight', path: '/mma-fight' },
    { key: 'nav.taekwondo', path: '/taekwondo' },
    { key: 'nav.kickboxing', path: '/kickboxing' },
  ];

  return (
    <>
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link to="/" className="flex items-center gap-2">
              <img src="/54.png" alt="KombackKings Logo" className="h-10 md:h-12" />
            </Link>
          </motion.div>

          <nav className="hidden lg:flex gap-6">
            {navItems.map((item, i) => (
              <motion.div key={item.key} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <Link to={item.path} className="text-foreground hover:text-secondary transition font-medium text-sm">
                  <motion.span whileHover={{ scale: 1.1 }} className="inline-block">{t(item.key)}</motion.span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Language Switcher + Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            {isActive ? (
              <Link to="/my-account" className="flex items-center gap-1 text-foreground hover:text-secondary transition text-sm font-medium px-2 py-1 rounded border border-border">
                <User size={15} />
                <span>My Account</span>
              </Link>
            ) : (
              <button onClick={() => setShowLogin(true)} className="flex items-center gap-1 text-foreground hover:text-secondary transition text-sm font-medium px-2 py-1 rounded border border-border">
                <User size={15} />
                <span>Login</span>
              </button>
            )}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1 text-foreground hover:text-secondary transition text-sm font-medium px-2 py-1 rounded border border-border"
              >
                <Globe size={15} />
                <span>{language === 'en' ? 'EN' : 'SW'}</span>
              </button>
              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="absolute right-0 mt-1 bg-background border border-border rounded shadow-lg z-50 min-w-[130px]"
                  >
                    {[{ code: 'en', label: 'English' }, { code: 'sw', label: 'Kiswahili' }].map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { setLanguage(lang.code as 'en' | 'sw'); setLangDropdownOpen(false); }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-muted transition ${
                          language === lang.code ? 'text-secondary font-semibold' : 'text-foreground'
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              className="lg:hidden text-foreground"
            >
              <Menu size={24} />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-border overflow-hidden"
            >
              <div className="py-4 space-y-3">
                {navItems.map((item, i) => (
                  <Link key={item.key} to={item.path} onClick={() => setMobileMenuOpen(false)}>
                    <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.05 }} whileHover={{ x: 10 }} className="block text-foreground hover:text-secondary transition py-2">
                      {t(item.key)}
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
    {showLogin && <LoginModal onClose={() => setShowLogin(false)} onSuccess={() => setShowLogin(false)} />}
    </>
  );
}

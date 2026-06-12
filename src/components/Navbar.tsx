
import { useState, useEffect } from "react";
import { Heart, User, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["AANBOD", "DIENSTEN", "OVER ONS", "CONTACT"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (section: string) => {
    const el = document.getElementById(section.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1F2937] shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* @section: nav-logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-primary rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg font-heading">D</span>
          </div>
          <span className="text-white font-bold text-xl tracking-wider font-heading">Deen</span>
        </div>

        {/* @section: nav-links-desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-white text-sm font-semibold tracking-widest hover:text-primary transition-colors duration-200 font-heading"
            >
              {link}
            </button>
          ))}
        </div>

        {/* @section: nav-actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-white hover:text-primary transition-colors duration-200">
            <Heart size={20} />
          </button>
          <button className="text-white hover:text-primary transition-colors duration-200">
            <User size={20} />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* @section: nav-mobile-menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden bg-[#1F2937] px-6 pb-6"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="block w-full text-left text-white text-sm font-semibold tracking-widest py-3 border-b border-white/10 hover:text-primary transition-colors"
              >
                {link}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

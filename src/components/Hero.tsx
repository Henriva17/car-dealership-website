
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="vehicles"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url('/Hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
     {/*<div className="absolute inset-0 bg-[#1F2937]/75" />*}

      {/* Gradient bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F3F4F6] to-transparent" />

      {/* @section: hero-content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4 font-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Premium Autobedrijf
        </motion.p>

        <motion.h1
          className="text-white text-5xl md:text-7xl font-bold leading-tight mb-6 font-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Uw volgende auto,{" "}
          <span className="text-primary">onze passie.</span>
        </motion.h1>

        <motion.p
          className="text-white/80 text-lg md:text-xl mb-10 font-sans"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Ontdek ons aanbod van zorgvuldig geselecteerde nieuwe auto's en occasions. Kwaliteit, betrouwbaarheid en persoonlijke service staan bij ons centraal.
        </motion.p>

        {/* @section: hero-cta-buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={() => scrollTo("inventory")}
            className="group bg-primary hover:bg-primary/90 text-white font-bold tracking-widest text-sm px-8 py-4 rounded-lg transition-all duration-200 flex items-center gap-2 font-heading"
            style={{ boxShadow: "0 4px 20px rgba(255,106,0,0.35)" }}
          >
            BEKIJK ONS AANBOD
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo("services")}
            className="border-2 border-white text-white hover:bg-white hover:text-[#1F2937] font-bold tracking-widest text-sm px-8 py-4 rounded-lg transition-all duration-200 font-heading"
          >
            ONZE DIENSTEN
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { value: "128+", label: "Beschikbare Wagens" }, // Car in stock
            { value: "20+", label: "Jaar Expertise" }, // Yearexperience
            { value: "4.5★", label: "Klantenscore" }, // Rating
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-white text-3xl font-bold font-heading">{stat.value}</p>
              <p className="text-white/60 text-sm mt-1 font-sans">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

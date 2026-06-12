
import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const carTypes = [
  { label: "Stadsauto", icon: "🏙️" },
  { label: "Sedan", icon: "🚗" },
  { label: "Stationwagon", icon: "🚙" },
  { label: "Coupé", icon: "🏎️" },
  { label: "Cabriolet", icon: "🌞" },
  { label: "SUV/4x4", icon: "🚐" },
  { label: "Bestelwagen", icon: "🚌" },
];

export default function SearchFilter() {
  const [activeType, setActiveType] = useState<string | null>(null);
  const [brand, setBrand] = useState("");
  const [fuel, setFuel] = useState("");
  const [price, setPrice] = useState("");

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      className="bg-white shadow-xl relative z-20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* @section: car-type-filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 pb-6 border-b border-gray-100">
          {carTypes.map((type) => (
            <button
              key={type.label}
              onClick={() => setActiveType(activeType === type.label ? null : type.label)}
              className={`flex flex-col items-center gap-1.5 group transition-all duration-200 ${
                activeType === type.label ? "opacity-100" : "opacity-70 hover:opacity-100"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all duration-200 ${
                  activeType === type.label
                    ? "bg-primary text-white shadow-md"
                    : "bg-gray-100 group-hover:bg-gray-200"
                }`}
              >
                {type.icon}
              </div>
              <span
                className={`text-xs font-medium font-sans transition-colors ${
                  activeType === type.label ? "text-primary" : "text-gray-600"
                }`}
              >
                {type.label}
              </span>
            </button>
          ))}
        </div>

        {/* @section: search-dropdowns */}
        <div className="flex flex-wrap items-end gap-4 pt-5">
          {[
            { label: "Merk", value: brand, setter: setBrand, options: ["Alle Merken", "BMW", "Mercedes", "Volkswagen", "Peugeot", "Opel", "Toyota", "Renault"] },
            { label: "Brandstof", value: fuel, setter: setFuel, options: ["Alle Brandstoftypes", "Benzine", "Diesel", "Hybride", "Mild Hybride", "Electric"] },
            { label: "Maximale Prijs", value: price, setter: setPrice, options: ["Geen Maximum", "€2,000", "€3,000", "€5,000", "€7,000", "€10,000", "€20,000+"] },
          ].map((filter) => (
            <div key={filter.label} className="flex-1 min-w-[160px]">
              <label className="block text-xs font-semibold text-gray-500 mb-1.5 font-heading tracking-wider uppercase">
                {filter.label}
              </label>
              <div className="relative">
                <select
                  value={filter.value}
                  onChange={(e) => filter.setter(e.target.value)}
                  className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 font-sans focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary cursor-pointer"
                >
                  {filter.options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
          ))}

          {/* Search button */}
          <div className="flex flex-col gap-1">
            <button
              onClick={() => scrollTo("inventory")}
              className="bg-primary hover:bg-primary/90 text-white font-bold tracking-widest text-sm px-8 py-3 rounded-lg transition-all duration-200 flex items-center gap-2 font-heading"
              style={{ boxShadow: "0 4px 16px rgba(255,106,0,0.3)" }}
            >
              <Search size={16} />
              BEKIJK AANBOD (3)
            </button>
            <span className="text-xs text-gray-400 text-center font-sans">Geavanceerd Zoeken</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}


import { useState } from "react";
import { Heart, Calendar, Gauge, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { vehicles, type Vehicle } from "@/data/index";

const badgeColors: Record<Vehicle["badge"], string> = {
  NIEUW: "bg-blue-500 text-white",
  PENDING: "bg-primary text-white",
  OCCASIONS: "bg-gray-500 text-white",
  SOLD: "bg-red-500 text-white",
};

function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const [fav, setFav] = useState(vehicle.isFavorite);

  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden flex-shrink-0 w-72 md:w-80"
      style={{ boxShadow: "0 4px 24px rgba(31,41,55,0.10)" }}
      whileHover={{ y: -4, boxShadow: "0 12px 36px rgba(31,41,55,0.16)" }}
      transition={{ duration: 0.2 }}
    >
      {/* @section: vehicle-card-image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={vehicle.image}
          alt={vehicle.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-md font-heading ${badgeColors[vehicle.badge]}`}>
          {vehicle.badge}
        </span>
      </div>

      {/* @section: vehicle-card-body */}
      <div className="p-5">
        <h3 className="text-[#1F2937] text-xl font-bold mb-1 font-heading">{vehicle.title}</h3>
        <p className="text-gray-500 text-xs font-sans line-clamp-1 mb-3">{vehicle.specs}</p>

        <div className="flex items-center gap-4 text-xs text-gray-500 font-sans mb-4">
          <span className="flex items-center gap-1.5">
            <Calendar size={12} className="text-gray-400" />
            {vehicle.year}
          </span>
          <span className="flex items-center gap-1.5">
            <Gauge size={12} className="text-gray-400" />
            {vehicle.mileage.toLocaleString()} km
          </span>
          <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider">
            {vehicle.fuel}
          </span>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span className="text-primary text-xl font-bold font-heading">
            € {vehicle.price.toLocaleString()}
          </span>
          <button
            onClick={() => setFav(!fav)}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
              fav ? "bg-primary/10 text-primary" : "bg-gray-100 text-gray-400 hover:bg-primary/10 hover:text-primary"
            }`}
          >
            <Heart size={16} fill={fav ? "currentColor" : "none"} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Inventory() {
  const [startIdx, setStartIdx] = useState(0);
  const visible = 3;

  const prev = () => setStartIdx((i) => Math.max(0, i - 1));
  const next = () => setStartIdx((i) => Math.min(vehicles.length - visible, i + 1));

  return (
    <section id="inventory" className="bg-[#F3F4F6] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* @section: inventory-header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase font-heading mb-2">
              Ons Aanbod
            </p>
            <h2 className="text-[#1F2937] text-4xl font-bold font-heading">Nieuw Binnen</h2>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-500 hover:text-primary text-sm font-medium font-sans flex items-center gap-1.5 transition-colors">
              Bekijk Alle Auto's <ArrowRight size={14} />
            </button>
            <div className="flex gap-2">
              <button
                onClick={prev}
                disabled={startIdx === 0}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary disabled:opacity-30 transition-all duration-200"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                disabled={startIdx >= vehicles.length - visible}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary disabled:opacity-30 transition-all duration-200"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* @section: vehicle-cards-grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {vehicles.slice(startIdx, startIdx + visible).map((v) => (
            <VehicleCard key={v.id} vehicle={v} />
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="lg:hidden flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
          {vehicles.map((v) => (
            <VehicleCard key={v.id} vehicle={v} />
          ))}
        </div>

        {/* @section: view-all-cta */}
        <div className="text-center mt-10">
          <button
            className="bg-[#1F2937] hover:bg-[#1F2937]/90 text-white font-bold tracking-widest text-sm px-10 py-4 rounded-lg transition-all duration-200 font-heading"
          >
            Bekijk Alle 3 Auto's
          </button>
        </div>
      </div>
    </section>
  );
}

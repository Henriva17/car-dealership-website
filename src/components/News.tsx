
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { newsItems } from "@/data/index";

export default function News() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* @section: news-header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase font-heading mb-2">
              Laatste Nieuws
            </p>
            <h2 className="text-[#1F2937] text-4xl font-bold font-heading">Nieuws & Actualiteiten</h2>
          </div>
          <button className="hidden md:flex items-center gap-1.5 text-gray-500 hover:text-primary text-sm font-medium font-sans transition-colors">
            Bekijk Al Het Nieuws <ArrowRight size={14} />
          </button>
        </div>

        {/* @section: news-grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item, i) => (
            <motion.article
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden group cursor-pointer"
              style={{ boxShadow: "0 4px 24px rgba(31,41,55,0.09)" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="overflow-hidden h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-primary/10 text-primary text-xs font-bold px-2.5 py-1 rounded-md font-heading">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1 text-gray-400 text-xs font-sans">
                    <Calendar size={11} />
                    {item.date}
                  </span>
                </div>
                <h3 className="text-[#1F2937] text-base font-bold mb-2 font-heading leading-snug group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm font-sans leading-relaxed line-clamp-2">
                  {item.excerpt}
                </p>
                <button className="mt-4 text-primary text-xs font-bold tracking-wider flex items-center gap-1.5 hover:gap-2.5 transition-all font-heading">
                  Lees Meer <ArrowRight size={12} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

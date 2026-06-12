
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { reviews } from "@/data/index";

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={14}
          className={s <= rating ? "text-primary fill-primary" : "text-gray-300 fill-gray-300"}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  return (
    <section className="bg-[#F3F4F6] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* @section: reviews-header */}
        <div className="text-center mb-14">
          <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase font-heading mb-3">
            Ervaringen van Onze Klanten
          </p>
          <h2 className="text-[#1F2937] text-4xl font-bold font-heading">
            Vertrouwd door Honderden Tevreden Klanten
          </h2>
        </div>

        {/* @section: aggregate-ratings */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
          {[
            { platform: "Autowereld.nl", score: "4.5 / 5", count: "59 beoordelingen", color: "#E8750A" },
            { platform: "Google", score: "4.2 / 5", count: "512 beoordelingen", color: "#4285F4" },
          ].map((r) => (
            <div
              key={r.platform}
              className="bg-white rounded-2xl px-8 py-5 flex items-center gap-5"
              style={{ boxShadow: "0 4px 20px rgba(31,41,55,0.08)" }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm font-heading"
                style={{ background: r.color }}
              >
                {r.platform[0]}
              </div>
              <div>
                <p className="text-gray-500 text-xs font-sans mb-0.5">{r.platform}</p>
                <p className="text-[#1F2937] text-2xl font-bold font-heading leading-none mb-1">{r.score}</p>
                <div className="flex items-center gap-2">
                  <StarRow rating={5} />
                  <span className="text-gray-400 text-xs font-sans">{r.count}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* @section: review-carousel */}
        <div className="relative flex items-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary flex-shrink-0 transition-all duration-200"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="overflow-hidden flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
              >
                {[reviews[current], reviews[(current + 1) % reviews.length]].map((review) => (
                  <div
                    key={review.id}
                    className="bg-white rounded-2xl p-6"
                    style={{ boxShadow: "0 4px 20px rgba(31,41,55,0.08)" }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 font-heading"
                        style={{ background: review.color }}
                      >
                        {review.initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[#1F2937] font-bold text-sm font-heading truncate">{review.name}</p>
                        <p className="text-gray-400 text-xs font-sans">{review.date}</p>
                      </div>
                      <StarRow rating={review.rating} />
                    </div>
                    <p className="text-gray-600 text-sm font-sans leading-relaxed">{review.text}</p>
                    <button className="text-primary text-xs font-semibold mt-3 hover:underline font-heading">
                      Lees Meer
                    </button>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary flex-shrink-0 transition-all duration-200"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-200 ${
                i === current ? "w-6 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

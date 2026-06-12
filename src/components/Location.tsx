
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Location() {
  return (
    <section id="about" className="bg-[#F3F4F6] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* @section: location-header */}
        <div className="text-center mb-14">
          <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase font-heading mb-3">
            Bezoek Ons
          </p>
          <h2 className="text-[#1F2937] text-4xl font-bold font-heading">Onze Locatie</h2>
        </div>

        {/* @section: location-two-col */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Left: Dealership image */}
          <motion.div
            className="rounded-2xl overflow-hidden min-h-[400px]"
            style={{ boxShadow: "0 8px 40px rgba(31,41,55,0.14)" }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/locatie.png"
              alt="Garage Deen"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right: Info */}
          <motion.div
            className="bg-white rounded-2xl p-8 flex flex-col justify-between"
            style={{ boxShadow: "0 8px 40px rgba(31,41,55,0.10)" }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm font-heading">D</span>
                </div>
                <span className="text-[#1F2937] font-bold text-lg tracking-wider font-heading">Deen</span>
              </div>
              <h3 className="text-[#1F2937] text-2xl font-bold font-heading mb-3">
                Garage Deen
              </h3>
              <p className="text-gray-500 text-sm font-sans leading-relaxed mb-6">
                Wij zijn gespecialiseerd in kwaliteitsvolle nieuwe auto's en occasions. Met een persoonlijke aanpak, deskundig advies en transparante dienstverlening helpen wij u bij het vinden van de auto die perfect aansluit bij uw wensen en budget.

Onze klanten kunnen rekenen op professionele begeleiding, eerlijke prijzen en uitstekende service, zowel tijdens als na de aankoop.
              </p>

              {/* Contact details */}
              <div className="space-y-4 mb-8">
                {[
                  { icon: MapPin, text: "Vrijheid 100, 2320 Hoogstraten, Belgium" },
                  { icon: Phone, text: "0642405744" },
                  { icon: Mail, text: "info@deenautomotivevalkenswaard.nl" },
                  { icon: Clock, text: "Man–Vri: 09:00–18:00 | Sat: 09:00–16:00" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={15} className="text-primary" />
                    </div>
                    <span className="text-gray-600 text-sm font-sans leading-relaxed">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="bg-primary hover:bg-primary/90 text-white font-bold tracking-widest text-sm px-8 py-4 rounded-lg transition-all duration-200 font-heading w-full"
              style={{ boxShadow: "0 4px 16px rgba(255,106,0,0.3)" }}
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contacteer Ons
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


import { motion } from "framer-motion";
import { BadgeCheck, Wrench, PiggyBank, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Kwaliteit Gegarandeerd",
    desc: "Elke auto ondergaat een uitgebreide technische controle voordat deze wordt opgenomen in ons aanbod.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: Wrench,
    title: "Eigen Werkplaats",
    desc: "Elke auto ondergaat een uitgebreide technische controle voordat deze wordt opgenomen in ons aanbod.",
    color: "text-primary",
    bg: "bg-orange-50",
  },
  {
    icon: PiggyBank,
    title: "Flexibele Financiering",
    desc: "Financieringsoplossingen op maat van uw situatie. Zo rijdt u sneller weg in uw ideale auto.",
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    icon: ShieldCheck,
    title: "Betrouwbare Partner",
    desc: "Meer dan 20 jaar ervaring en duizenden tevreden klanten maken ons een betrouwbare naam in de Nederlandse automarkt.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* @section: why-header */}
        <div className="text-center mb-14">
          <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase font-heading mb-3">
            Waarom Kiezen Voor Ons
          </p>
          <h2 className="text-[#1F2937] text-4xl font-bold font-heading">
            Het Verschil van Garage Deen
          </h2>
          <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto font-sans">
            Wij combineren vakmanschap, transparantie en persoonlijke service om u een zorgeloze aankoopervaring te bieden.
          </p>
        </div>

        {/* @section: features-grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={`w-16 h-16 rounded-2xl ${f.bg} flex items-center justify-center mb-5`}>
                <f.icon size={28} className={f.color} />
              </div>
              <h3 className="text-[#1F2937] text-lg font-bold mb-2 font-heading">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-sans">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


import { SiFacebook, SiInstagram } from "react-icons/si";

const footerLinks = {
  "Snelle Links": ["Aanbod", "Recent Toegevoegd", "Occasies", "Financiering"],
  "Diensten": ["Onderhoud", "Reparaties", "APK Keuring", "Bandenservice"],
  "Informatie": ["FAQ", "Algemene Voorwaarden", "Privacybeleid", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1F2937] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* @section: footer-brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg font-heading">D</span>
              </div>
              <span className="text-white font-bold text-xl tracking-wider font-heading">Deen</span>
            </div>
            <p className="text-white/60 text-sm font-sans leading-relaxed mb-6 max-w-xs">
              Al meer dan 20 jaar helpen wij klanten door heel Nederland bij het vinden van de perfecte auto, met kwaliteit, vertrouwen en persoonlijke service als basis.
            </p>
            <div className="flex items-center gap-3">
              {[SiFacebook, SiInstagram].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-primary hover:text-primary transition-all duration-200"
                >
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>

          {/* @section: footer-links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-5 font-heading">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <button className="text-white/60 hover:text-primary text-sm font-sans transition-colors duration-200">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* @section: footer-contact-row */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/40 text-xs font-sans">
            ©2025 Garage Deen. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6 text-white/40 text-xs font-sans">
            <span>📍 De Haak 8A 5555XK Valkenswaard</span>
            <span>📞 0642405744</span>
            <span>✉️ info@deenautomotievevalkenswaard.nl</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

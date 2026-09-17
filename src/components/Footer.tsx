import { Heart, Sparkles, MapPin, Phone, Mail, ChevronUp } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FooterProps {
  currentLang: Language;
  onOpenBookingModal: () => void;
  onOpenUploadModal: () => void;
}

export function Footer({ currentLang, onOpenBookingModal, onOpenUploadModal }: FooterProps) {
  const t = translations[currentLang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A0407] text-amber-100/90 border-t-2 border-[#D4AF37]/40 relative overflow-hidden">
      {/* Decorative Kolam Background */}
      <div className="absolute inset-0 opacity-5 bg-kolam-pattern pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-amber-900/60">
          
          {/* Temple Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#6B111A] p-0.5 shadow-md flex items-center justify-center shrink-0">
                <div className="w-full h-full rounded-full bg-[#36080D] flex items-center justify-center text-amber-300 font-bold text-xl font-cinzel">
                  🕉️
                </div>
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#D4AF37] font-cinzel">
                  {currentLang === 'ta' ? 'ஸ்ரீ மகா மாரியம்மன் & ஸ்ரீ பெருமாள்' : 'Sri Maha Mariamman & Sri Perumal'}
                </span>
                <h3 className="text-lg font-bold text-white font-cinzel">
                  Puchong Perdana Temple
                </h3>
              </div>
            </div>

            <p className="text-xs text-amber-200/80 leading-relaxed max-w-sm">
              Persatuan Penganut Sri Maha Mariamman & Sri Perumal Puchong Perdana, Selangor. Registered Society with the Registrar of Societies Malaysia (ROS No: PPM/SEL/1998/0421).
            </p>

            <div className="pt-2 text-xs text-amber-300/70 space-y-1">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Puchong Perdana, 47100 Puchong, Selangor, Malaysia</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>+60 3-8062 8901 / +60 12-345 6789</span>
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#D4AF37] font-cinzel">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs text-amber-200/80">
              <li>
                <a href="#about" className="hover:text-amber-100 hover:underline transition">
                  Temple Heritage & Mission
                </a>
              </li>
              <li>
                <a href="#deities" className="hover:text-amber-100 hover:underline transition">
                  Presiding Deities & Mantras
                </a>
              </li>
              <li>
                <a href="#pooja-schedule" className="hover:text-amber-100 hover:underline transition">
                  Daily Pooja Schedule & Festivals
                </a>
              </li>
              <li>
                <a href="#posters-gallery" className="hover:text-amber-100 hover:underline transition">
                  Festival Posters & Media Gallery
                </a>
              </li>
              <li>
                <a href="#hall" className="hover:text-amber-100 hover:underline transition">
                  Cultural Wedding Hall
                </a>
              </li>
              <li>
                <a href="#donations" className="hover:text-amber-100 hover:underline transition">
                  e-Annadhanam & DuitNow Donations
                </a>
              </li>
            </ul>
          </div>

          {/* Devotee Services & Upload Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#D4AF37] font-cinzel">
              Devotee Portals
            </h4>
            <p className="text-xs text-amber-200/80">
              Book special archanas with family sankalpam, or upload photographs and festival posters directly to our community archive.
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
              <button
                onClick={onOpenBookingModal}
                className="bg-gradient-to-r from-[#D4AF37] to-[#C5832B] hover:from-[#e5bd3b] hover:to-[#d68f30] text-[#3D0A0F] font-bold px-4 py-2 rounded-xl text-xs shadow-md transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.bookPoojaBtn}</span>
              </button>

              <button
                onClick={onOpenUploadModal}
                className="bg-white/10 hover:bg-white/20 text-amber-200 border border-amber-400/30 font-semibold px-4 py-2 rounded-xl text-xs transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Upload Photos/Posters</span>
              </button>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-amber-200 hover:text-white transition text-xs font-bold"
                title="Facebook"
              >
                FB
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-amber-200 hover:text-white transition text-xs font-bold"
                title="YouTube Live Stream"
              >
                YT
              </a>
              <a
                href="https://wa.me/60123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-emerald-700/80 hover:bg-emerald-600 flex items-center justify-center text-white transition text-xs font-bold"
                title="WhatsApp Direct"
              >
                WA
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-300/60">
          <p>© {new Date().getFullYear()} {t.allRights}</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-amber-300 hover:text-amber-100 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-amber-400/20 transition cursor-pointer"
          >
            <span>Back to top</span>
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

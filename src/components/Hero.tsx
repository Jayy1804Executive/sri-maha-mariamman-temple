import { Calendar, HeartHandshake, Sparkles, Clock, MapPin, Upload, ChevronDown } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HeroProps {
  currentLang: Language;
  onOpenBookingModal: () => void;
  onOpenUploadModal: () => void;
}

export function Hero({ currentLang, onOpenBookingModal, onOpenUploadModal }: HeroProps) {
  const t = translations[currentLang];

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#24060A]">
      {/* Background Hero Image with Deep Atmosphere Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/temple_hero_banner_1787557485490.jpg"
          alt="Sri Maha Mariamman & Sri Perumal Temple Gopuram"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Layered Gradient Overlays for optimal text contrast and sacred mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F0407] via-[#2A060C]/75 to-[#1F0407]/60" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#2A060C]/40 to-[#1F0407]/90" />
        {/* Subtle Kolam overlay */}
        <div className="absolute inset-0 opacity-10 bg-kolam-pattern pointer-events-none" />
      </div>

      {/* Floating Diya Light Particles & Decorative Header Elements */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        
        {/* Sacred Badge with Om & Deepam */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6B111A]/80 border border-[#D4AF37]/50 text-amber-200 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md shadow-lg mb-6 animate-fade-in">
          <span className="text-[#D4AF37] text-base animate-diya">🪔</span>
          <span>
            {currentLang === 'ta'
              ? 'ஓம் நமோ நாராயணாய | ஓம் சக்தி'
              : currentLang === 'ms'
              ? 'Kuil Suci Hindu Puchong Perdana'
              : 'Divine Dravidian Sanctuary in Puchong Perdana'}
          </span>
          <span className="text-[#D4AF37] text-base animate-diya">🪔</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-amber-100 font-cinzel leading-tight tracking-tight max-w-4xl drop-shadow-md">
          {t.tagline}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-xl text-amber-200/90 font-light max-w-3xl leading-relaxed">
          {currentLang === 'ta'
            ? 'அன்னை ஸ்ரீ மகா மாரியம்மன் மற்றும் ஸ்ரீ சீனிவாசப் பெருமாளின் அருளாளும் சாந்தியும் நிறைந்த திவ்ய திருத்தலம்.'
            : currentLang === 'ms'
            ? 'Selamat Datang ke Persatuan Penganut Sri Maha Mariamman & Sri Perumal, Puchong Perdana, Selangor.'
            : 'Welcome to Sri Maha Mariamman & Sri Perumal Temple, Puchong Perdana, Selangor, Malaysia.'}
        </p>

        {/* Quick Darshan Hours Card Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full max-w-3xl">
          <div className="bg-[#420B11]/85 backdrop-blur-md border border-[#D4AF37]/40 rounded-xl p-3.5 text-center shadow-lg hover:border-[#D4AF37] transition">
            <div className="flex items-center justify-center gap-1.5 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{currentLang === 'ta' ? 'காலை தரிசனம்' : currentLang === 'ms' ? 'Darshan Pagi' : 'Morning Darshan'}</span>
            </div>
            <p className="text-white font-semibold text-sm sm:text-base">6:30 AM – 10:00 AM</p>
            <p className="text-amber-300/70 text-[11px] mt-0.5">{currentLang === 'ta' ? 'அபிஷேகம் & காலசந்தி' : 'Abhishegam & Kalasandhi'}</p>
          </div>

          <div className="bg-[#420B11]/85 backdrop-blur-md border border-[#D4AF37]/40 rounded-xl p-3.5 text-center shadow-lg hover:border-[#D4AF37] transition">
            <div className="flex items-center justify-center gap-1.5 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{currentLang === 'ta' ? 'மாலை தரிசனம்' : currentLang === 'ms' ? 'Darshan Petang' : 'Evening Darshan'}</span>
            </div>
            <p className="text-white font-semibold text-sm sm:text-base">6:30 PM – 9:00 PM</p>
            <p className="text-amber-300/70 text-[11px] mt-0.5">{currentLang === 'ta' ? 'சாயரட்சை & அர்த்தஜாமம்' : 'Sayaratchai & Arthajama'}</p>
          </div>

          <div className="bg-[#420B11]/85 backdrop-blur-md border border-[#D4AF37]/40 rounded-xl p-3.5 text-center shadow-lg hover:border-[#D4AF37] transition">
            <div className="flex items-center justify-center gap-1.5 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-1">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>{currentLang === 'ta' ? 'அன்னதானம்' : currentLang === 'ms' ? 'Annadhanam' : 'Free Meals'}</span>
            </div>
            <p className="text-white font-semibold text-sm sm:text-base">12:30 PM & 7:30 PM</p>
            <p className="text-amber-300/70 text-[11px] mt-0.5">{currentLang === 'ta' ? 'அனைவருக்கும் பிரசாதம்' : 'Daily Blessed Vegetarian Meals'}</p>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="#pooja-schedule"
            className="bg-gradient-to-r from-[#D4AF37] to-[#C5832B] hover:from-[#e5bd3b] hover:to-[#d68f30] text-[#3D0A0F] font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 text-sm sm:text-base cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>{t.ctaTimings}</span>
          </a>

          <button
            onClick={onOpenBookingModal}
            className="bg-[#6B111A] hover:bg-[#831620] text-amber-100 font-semibold px-6 py-3 rounded-xl border border-[#D4AF37]/60 shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 text-sm sm:text-base cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>{t.bookPoojaBtn}</span>
          </button>

          <a
            href="#donations"
            className="bg-black/40 hover:bg-black/60 text-amber-200 hover:text-white font-medium px-5 py-3 rounded-xl border border-amber-300/30 backdrop-blur-md transition flex items-center gap-2 text-sm sm:text-base cursor-pointer"
          >
            <HeartHandshake className="w-4 h-4 text-[#D4AF37]" />
            <span>{t.ctaDonate}</span>
          </a>

          <button
            onClick={onOpenUploadModal}
            className="bg-amber-950/70 hover:bg-amber-900/80 text-amber-200 hover:text-white font-medium px-5 py-3 rounded-xl border border-[#D4AF37]/40 backdrop-blur-md transition flex items-center gap-2 text-sm sm:text-base cursor-pointer"
          >
            <Upload className="w-4 h-4 text-[#D4AF37]" />
            <span>{t.ctaUploadPoster}</span>
          </button>
        </div>

        {/* Scroll down indicator */}
        <div className="mt-12 text-amber-300/60 animate-bounce flex flex-col items-center">
          <a href="#about" aria-label="Scroll to About Section">
            <ChevronDown className="w-6 h-6 hover:text-amber-200 transition" />
          </a>
        </div>
      </div>
    </section>
  );
}

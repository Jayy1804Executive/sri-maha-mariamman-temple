import { useState, useEffect } from 'react';
import { Menu, X, Calendar, HeartHandshake, MapPin, Sparkles, Image as ImageIcon } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenBookingModal: (serviceId?: string) => void;
  onOpenUploadModal: () => void;
}

export function Navbar({ currentLang, onLanguageChange, onOpenBookingModal, onOpenUploadModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTempleOpen, setIsTempleOpen] = useState(true);
  const [nextDarshanText, setNextDarshanText] = useState('Morning: 6:30 AM – 10:00 AM | Evening: 6:30 PM – 9:00 PM');

  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute live temple open/closed status based on Malaysian time (UTC+8)
  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentMinutes = hours * 60 + minutes;

      // Morning slot: 6:30 AM (390 mins) to 10:00 AM (600 mins)
      // Evening slot: 6:30 PM (1110 mins) to 9:00 PM (1260 mins)
      const morningOpen = 6 * 60 + 30;
      const morningClose = 10 * 60;
      const eveningOpen = 18 * 60 + 30;
      const eveningClose = 21 * 60;

      if ((currentMinutes >= morningOpen && currentMinutes <= morningClose) ||
          (currentMinutes >= eveningOpen && currentMinutes <= eveningClose)) {
        setIsTempleOpen(true);
        setNextDarshanText(currentMinutes <= morningClose ? 'Open until 10:00 AM' : 'Open until 9:00 PM');
      } else {
        setIsTempleOpen(false);
        if (currentMinutes < morningOpen) {
          setNextDarshanText('Opens at 6:30 AM today');
        } else if (currentMinutes < eveningOpen) {
          setNextDarshanText('Opens at 6:30 PM today');
        } else {
          setNextDarshanText('Opens at 6:30 AM tomorrow');
        }
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { href: '#home', label: t.navHome },
    { href: '#about', label: t.navAbout },
    { href: '#deities', label: t.navDeities },
    { href: '#services', label: t.navServices },
    { href: '#posters-gallery', label: t.navPosters, highlight: true },
    { href: '#hall', label: t.navHall },
    { href: '#donations', label: t.navDonations },
    { href: '#visit', label: t.navVisit },
  ];

  return (
    <>
      {/* Top Banner with live Darshan ticker and Language selector */}
      <div className="bg-[#6B111A] text-amber-100 text-xs py-2 px-4 border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Live Darshan Status */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isTempleOpen ? 'bg-emerald-400' : 'bg-amber-400'} opacity-75`}></span>
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isTempleOpen ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
            </span>
            <span className="font-semibold text-amber-200">
              {isTempleOpen ? t.openNow : t.closedNow}
            </span>
            <span className="hidden sm:inline text-amber-300/80">({nextDarshanText})</span>
            <span className="hidden md:inline-block text-amber-400/40">|</span>
            <span className="hidden md:flex items-center gap-1 text-amber-200/90">
              <MapPin className="w-3 h-3 text-[#D4AF37]" />
              Puchong Perdana, Selangor
            </span>
          </div>

          {/* Quick Language Switcher & Upload Quick link */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenUploadModal}
              className="hidden sm:flex items-center gap-1 bg-[#D4AF37]/20 hover:bg-[#D4AF37]/30 text-amber-200 border border-[#D4AF37]/40 px-2.5 py-1 rounded text-xs transition cursor-pointer"
            >
              <ImageIcon className="w-3 h-3 text-[#D4AF37]" />
              <span>{t.uploadPosterBtn}</span>
            </button>

            <div className="flex items-center bg-black/30 rounded border border-[#D4AF37]/30 p-0.5">
              {(['en', 'ms', 'ta'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => onLanguageChange(lang)}
                  className={`px-2 py-0.5 text-xs rounded transition-all cursor-pointer font-medium ${
                    currentLang === lang
                      ? 'bg-[#D4AF37] text-[#4A0B12] font-bold shadow-xs'
                      : 'text-amber-200/80 hover:text-amber-100'
                  }`}
                >
                  {lang === 'en' ? 'EN' : lang === 'ms' ? 'BM' : 'தமிழ்'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FBF9F5]/95 backdrop-blur-md shadow-md border-b border-[#D4AF37]/30 py-2.5'
            : 'bg-[#FBF9F5] border-b border-[#D4AF37]/20 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Temple Brand & Emblem */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#C5832B] to-[#6B111A] p-0.5 shadow-md flex items-center justify-center shrink-0">
              <div className="w-full h-full rounded-full bg-[#6B111A] flex items-center justify-center text-amber-300 font-bold text-lg font-cinzel">
                🕉️
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold tracking-wider text-[#6B111A] uppercase font-cinzel">
                {currentLang === 'ta' ? 'ஸ்ரீ மகா மாரியம்மன் & ஸ்ரீ பெருமாள்' : 'Sri Maha Mariamman & Sri Perumal'}
              </span>
              <span className="text-sm sm:text-base font-bold text-[#1F1F1F] font-cinzel leading-tight group-hover:text-[#6B111A] transition">
                Puchong Perdana Temple
              </span>
              <span className="text-[10px] text-zinc-500 font-medium hidden sm:inline">
                Persatuan Penganut Sri Maha Mariamman & Sri Perumal (Reg. ROS)
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2 text-sm font-medium text-zinc-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-2.5 py-1.5 rounded-md transition-colors relative ${
                  link.highlight
                    ? 'text-[#6B111A] font-semibold bg-[#D4AF37]/15 hover:bg-[#D4AF37]/25'
                    : 'hover:text-[#6B111A] hover:bg-amber-100/50'
                }`}
              >
                {link.label}
                {link.highlight && (
                  <span className="absolute -top-1 -right-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={() => onOpenBookingModal()}
              className="bg-gradient-to-r from-[#D4AF37] to-[#C5832B] hover:from-[#e5bd3b] hover:to-[#d68f30] text-[#3D0A0F] font-bold text-xs sm:text-sm px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer border border-[#b89528]"
            >
              <Sparkles className="w-4 h-4 text-[#4A0B12]" />
              <span>{t.bookPoojaBtn}</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-zinc-700 hover:text-[#6B111A] hover:bg-amber-100/60 transition cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-[#D4AF37]/20 bg-[#FBF9F5] px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-3">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-zinc-800 hover:bg-amber-100 hover:text-[#6B111A] font-medium flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  {link.highlight && (
                    <span className="text-[10px] bg-[#6B111A] text-amber-200 px-2 py-0.5 rounded-full font-bold">
                      Posters & Photos
                    </span>
                  )}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-amber-200/60 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#C5832B] text-[#3D0A0F] font-bold text-sm py-2.5 rounded-lg text-center shadow-xs flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                {t.bookPoojaBtn}
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenUploadModal();
                }}
                className="w-full bg-[#6B111A] text-amber-100 hover:bg-[#520d14] font-semibold text-sm py-2.5 rounded-lg text-center shadow-xs flex items-center justify-center gap-2"
              >
                <ImageIcon className="w-4 h-4 text-[#D4AF37]" />
                {t.uploadPosterBtn}
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

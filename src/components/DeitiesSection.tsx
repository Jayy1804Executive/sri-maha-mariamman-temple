import { useState } from 'react';
import { Sparkles, Heart, Check, Copy, Volume2, Info } from 'lucide-react';
import { deitiesList, Deity } from '../data/templeData';
import { Language } from '../types';
import { translations } from '../data/translations';

interface DeitiesSectionProps {
  currentLang: Language;
  onSelectDeityForBooking: (deityName: string) => void;
}

export function DeitiesSection({ currentLang, onSelectDeityForBooking }: DeitiesSectionProps) {
  const t = translations[currentLang];
  const [selectedDeity, setSelectedDeity] = useState<Deity>(deitiesList[0]);
  const [copiedMantraId, setCopiedMantraId] = useState<string | null>(null);

  const handleCopyMantra = (mantra: string, id: string) => {
    navigator.clipboard.writeText(mantra);
    setCopiedMantraId(id);
    setTimeout(() => setCopiedMantraId(null), 2500);
  };

  return (
    <section id="deities" className="py-20 bg-gradient-to-b from-[#FBF9F5] via-amber-50/40 to-[#FBF9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#6B111A] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5832B]" />
            <span>Moolavar & Parivara Devatas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F1F1F] font-cinzel">
            {t.deitiesHeading}
          </h2>
          <p className="mt-3 text-base text-zinc-600 font-normal leading-relaxed">
            {t.deitiesSubheading}
          </p>
        </div>

        {/* Deity Selector Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {deitiesList.map((deity) => (
            <button
              key={deity.id}
              onClick={() => setSelectedDeity(deity)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 border ${
                selectedDeity.id === deity.id
                  ? 'bg-[#6B111A] text-amber-100 border-[#D4AF37] shadow-md scale-105'
                  : 'bg-white text-zinc-700 hover:bg-amber-100/60 border-amber-200/70'
              }`}
            >
              <span>{deity.id === 'mariamman' ? '🌺' : deity.id === 'perumal' ? '🦚' : deity.id === 'ganesha' ? '🐘' : deity.id === 'murugan' ? '🪖' : '🪐'}</span>
              <span>
                {currentLang === 'ta' ? deity.tamilName : currentLang === 'ms' ? deity.malayName : deity.name}
              </span>
            </button>
          ))}
        </div>

        {/* Selected Deity Featured Showcase Card */}
        <div className="bg-white rounded-3xl overflow-hidden border border-[#D4AF37]/35 shadow-xl grid grid-cols-1 lg:grid-cols-12 mb-16">
          {/* Deity Image Column */}
          <div className="lg:col-span-5 relative min-h-[360px] lg:min-h-[480px] overflow-hidden group">
            <img
              src={selectedDeity.imageUrl}
              alt={selectedDeity.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-xs uppercase font-bold text-amber-300 tracking-wider px-2.5 py-0.5 rounded bg-black/40 backdrop-blur-xs border border-amber-400/30 inline-block mb-1">
                {currentLang === 'ta' ? 'மூலவர் தரிசனம்' : 'Sanctum Sanctorum'}
              </span>
              <h3 className="text-2xl font-bold font-cinzel text-amber-100">
                {currentLang === 'ta' ? selectedDeity.tamilName : selectedDeity.name}
              </h3>
              <p className="text-xs text-amber-200/90 font-light mt-0.5">{selectedDeity.title}</p>
            </div>
          </div>

          {/* Deity Details Column */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs font-bold text-[#6B111A] tracking-wider uppercase">
                  {selectedDeity.title}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                  {selectedDeity.specialDay}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#1F1F1F] font-cinzel">
                {currentLang === 'ta' ? selectedDeity.tamilName : selectedDeity.name}
              </h3>

              <p className="mt-3 text-zinc-700 leading-relaxed text-sm sm:text-base">
                {selectedDeity.description}
              </p>

              {/* Sacred Mantra Box with Copy button */}
              <div className="mt-5 p-4 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-300/60 shadow-xs relative">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-xs font-bold text-[#6B111A] uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{currentLang === 'ta' ? 'மூல மந்திரம்' : 'Sacred Moola Mantram'}</span>
                  </span>
                  <button
                    onClick={() => handleCopyMantra(selectedDeity.mantra, selectedDeity.id)}
                    className="text-xs text-zinc-600 hover:text-[#6B111A] flex items-center gap-1 bg-white px-2 py-0.5 rounded border border-amber-200 cursor-pointer transition"
                  >
                    {copiedMantraId === selectedDeity.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-zinc-500" />
                        <span>Copy Mantra</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-sm font-semibold text-[#4A0B12] font-mono tracking-wide">
                  {selectedDeity.mantra}
                </p>
              </div>

              {/* Preferred Offerings (Kainkaryam) */}
              <div className="mt-5">
                <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">
                  {currentLang === 'ta' ? 'உகந்த நைவேத்தியம் & பிரசாதம்' : 'Auspicious Offerings & Naivedyam'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedDeity.offerings.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-amber-50 text-amber-950 px-3 py-1 rounded-full border border-amber-200/80 font-medium"
                    >
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Pooja Booking CTA */}
            <div className="pt-4 border-t border-amber-100 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-zinc-500">
                <span>Special Archana & Abhishegam available daily</span>
              </div>
              <button
                onClick={() => onSelectDeityForBooking(selectedDeity.name)}
                className="bg-gradient-to-r from-[#6B111A] to-[#831620] hover:from-[#831620] hover:to-[#9B1A26] text-amber-100 font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition flex items-center gap-2 cursor-pointer border border-[#D4AF37]/50"
              >
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>
                  {currentLang === 'ta' ? 'அர்ச்சனை முன்பதிவு செய்க' : 'Book Archana for this Deity'}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Small Deity Cards Grid (All Deities Quick Overview) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {deitiesList.map((deity) => (
            <div
              key={deity.id}
              onClick={() => setSelectedDeity(deity)}
              className={`bg-white rounded-2xl p-5 border transition-all duration-200 cursor-pointer shadow-xs hover:shadow-lg flex flex-col justify-between ${
                selectedDeity.id === deity.id
                  ? 'border-[#6B111A] ring-2 ring-[#D4AF37]/40'
                  : 'border-amber-200/60 hover:border-amber-400'
              }`}
            >
              <div className="flex items-start gap-3.5 mb-3">
                <img
                  src={deity.imageUrl}
                  alt={deity.name}
                  className="w-16 h-16 rounded-xl object-cover shrink-0 border border-amber-200"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-base text-[#1F1F1F] font-cinzel leading-snug">
                    {currentLang === 'ta' ? deity.tamilName : deity.name}
                  </h4>
                  <p className="text-xs text-zinc-500 line-clamp-1 mt-0.5">{deity.title}</p>
                  <span className="text-[11px] text-[#6B111A] font-semibold block mt-1">
                    {deity.specialDay.split('|')[0]}
                  </span>
                </div>
              </div>
              <p className="text-xs text-zinc-600 line-clamp-2 mb-3">
                {deity.description}
              </p>
              <div className="flex items-center justify-between text-xs pt-2.5 border-t border-amber-100">
                <span className="text-amber-800 font-medium">Click to view offerings</span>
                <span className="text-[#6B111A] font-bold">Details →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

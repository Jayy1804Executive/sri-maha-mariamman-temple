import { useState } from 'react';
import { Sparkles, Calendar, Clock, Check, ChevronRight, MessageSquare, ShieldCheck, Heart } from 'lucide-react';
import { templeServices, TempleServiceItem } from '../data/templeData';
import { Language } from '../types';
import { translations } from '../data/translations';

interface ServicesBookingSectionProps {
  currentLang: Language;
  onOpenBookingModal: (serviceId?: string) => void;
}

export function ServicesBookingSection({ currentLang, onOpenBookingModal }: ServicesBookingSectionProps) {
  const t = translations[currentLang];
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredServices = templeServices.filter((s) => {
    if (activeCategory === 'all') return true;
    return s.category === activeCategory;
  });

  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#6B111A] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5832B]" />
            <span>Kainkaryam & Vedic Rituals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F1F1F] font-cinzel">
            {t.servicesHeading}
          </h2>
          <p className="mt-3 text-base text-zinc-600 font-normal leading-relaxed">
            {t.servicesSubheading}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {[
            { id: 'all', label: 'All Services' },
            { id: 'archana', label: '🌺 Archanai' },
            { id: 'abhishegam', label: '🥛 Abhishegam' },
            { id: 'vahana', label: '🚗 Vahana Pooja' },
            { id: 'homam', label: '🔥 Sacred Homam' },
            { id: 'samskara', label: '💍 Traditional Samskaras' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#6B111A] text-amber-100 shadow-md border border-[#D4AF37]'
                  : 'bg-[#FBF9F5] text-zinc-700 hover:bg-amber-100 border border-amber-200/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#FBF9F5] rounded-3xl p-6 border border-[#D4AF37]/35 shadow-xs hover:shadow-xl hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-amber-100 text-[#6B111A] border border-amber-300">
                    {service.category}
                  </span>
                  <div className="text-right">
                    <span className="text-xs text-zinc-500 font-medium">Dakshina</span>
                    <p className="text-lg font-extrabold text-[#6B111A] font-cinzel">
                      RM {service.feeMYR}
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#1F1F1F] font-cinzel group-hover:text-[#6B111A] transition leading-snug">
                  {currentLang === 'ta' ? service.tamilName : service.name}
                </h3>
                <p className="text-xs text-amber-800 font-semibold mt-0.5">
                  {service.name !== service.tamilName ? service.tamilName : ''}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-zinc-500 mt-2 mb-3">
                  <Clock className="w-3.5 h-3.5 text-amber-600" />
                  <span>Duration: ~{service.duration}</span>
                </div>

                <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Items included */}
                <div className="bg-white p-3.5 rounded-xl border border-amber-200/60 mb-4">
                  <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-2">
                    Included in ritual:
                  </p>
                  <ul className="space-y-1">
                    {service.itemsIncluded.map((item, idx) => (
                      <li key={idx} className="text-xs text-zinc-700 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-amber-200/60">
                <button
                  onClick={() => onOpenBookingModal(service.id)}
                  className="w-full bg-gradient-to-r from-[#D4AF37] to-[#C5832B] hover:from-[#e5bd3b] hover:to-[#d68f30] text-[#3D0A0F] font-bold py-2.5 rounded-xl shadow-xs transition flex items-center justify-center gap-1.5 text-xs sm:text-sm cursor-pointer border border-[#b89528]"
                >
                  <Sparkles className="w-4 h-4 text-[#3D0A0F]" />
                  <span>Book This Service / Sankalpam</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Direct Help Box */}
        <div className="bg-gradient-to-r from-[#075E54] to-[#128C7E] rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-base sm:text-lg font-cinzel">
                Need Help with Auspicious Dates or Custom Ubhayam?
              </h4>
              <p className="text-xs sm:text-sm text-emerald-100/90 mt-0.5">
                Chat directly with the Temple Head Priest or Administration on WhatsApp for personalized Muhurtham consultation.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/60123456789?text=Vanakkam%2C%20I%20would%20like%20to%20inquire%20about%20Pooja%20services%20at%20Sri%20Maha%20Mariamman%20%26%20Sri%20Perumal%20Temple%20Puchong%20Perdana."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-emerald-50 text-[#075E54] font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition shrink-0 flex items-center gap-1.5"
          >
            <span>Chat on WhatsApp</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}

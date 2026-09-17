import { useState } from 'react';
import { Clock, Calendar, Bell, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';
import { poojaTimings, PoojaScheduleItem } from '../data/templeData';
import { Language } from '../types';
import { translations } from '../data/translations';

interface PoojaScheduleSectionProps {
  currentLang: Language;
  onOpenBookingModal: (serviceId?: string) => void;
}

export function PoojaScheduleSection({ currentLang, onOpenBookingModal }: PoojaScheduleSectionProps) {
  const t = translations[currentLang];
  const [filterSlot, setFilterSlot] = useState<'all' | 'morning' | 'evening'>('all');
  const [reminderAdded, setReminderAdded] = useState(false);

  const filteredTimings = poojaTimings.filter((item) => {
    if (filterSlot === 'all') return true;
    return item.slot === filterSlot;
  });

  const festivals = [
    {
      name: 'Chitra Pournami & Mariamman Maha Thiruvizha',
      tamilName: 'சித்ரா பௌர்ணமி & மாரியம்மன் திருவிழா',
      month: 'April / May (Chithirai)',
      desc: 'Annual 10-day grand temple festival with flower chariot (Poopallakku) procession, Paal Kudam, and fire-walking.',
      badge: 'Flagship Festival',
    },
    {
      name: 'Navarathri & Vijayadasami Mahotsavam',
      tamilName: 'நவராத்திரி & விஜயதசமி மஹோத்ஸவம்',
      month: 'September / October (Purattasi)',
      desc: '10 divine nights honoring Goddess Durga, Lakshmi, and Saraswati with Golu display, Lalitha Sahasranamam, and Chandika Homam.',
      badge: 'Grand 10 Days',
    },
    {
      name: 'Vaikunta Ekadasi (Swarga Vaasal Opening)',
      tamilName: 'வைகுண்ட ஏகாதசி (சொர்க்க வாசல்)',
      month: 'December / January (Margazhi)',
      desc: 'Celestial dawn opening of the Northern Gateway of Heaven for Lord Sri Srinivasa Perumal with thousands of devotees.',
      badge: 'Moksha Darshan',
    },
    {
      name: 'Thaipusam & Panguni Uthiram',
      tamilName: 'தைப்பூசம் & பங்குனி உத்திரம்',
      month: 'January / March',
      desc: 'Devotees offer Paal Kudam (Milk pots) and Kavadi to Lord Murugan with holy theertham and community feast.',
      badge: 'Murugan Thiruvizha',
    },
    {
      name: 'Purattasi Saturdays (Govinda Sannidhi)',
      tamilName: 'புரட்டாசி சனிக்கிழமை விரதம்',
      month: 'September / October',
      desc: 'All 4 or 5 Saturdays of Purattasi feature special Venkatachalapathi Abhishegam, Govinda Namavalis, and Sweet Pongal Thaligai.',
      badge: 'Special Perumal Seva',
    },
    {
      name: 'Aadi Velli & Aadi Pooram',
      tamilName: 'ஆடி வெள்ளி & ஆடிப் பூரம்',
      month: 'July / August',
      desc: 'Cooling herbal neem bath, special lemon garlands, and traditional Koozh (porridge) distribution for Goddess Mariamman.',
      badge: 'Shakti Festival',
    }
  ];

  return (
    <section id="pooja-schedule" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6B111A]/10 border border-[#6B111A]/20 text-[#6B111A] text-xs font-bold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Nithya Pooja & Agamic Timetable</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F1F1F] font-cinzel">
            {t.poojaHeading}
          </h2>
          <p className="mt-3 text-base text-zinc-600 font-normal leading-relaxed">
            {t.poojaSubheading}
          </p>
        </div>

        {/* Filter Toggle Controls */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8 bg-[#FBF9F5] p-3 rounded-2xl border border-amber-200/60">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1">Filter Slots:</span>
            <button
              onClick={() => setFilterSlot('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                filterSlot === 'all'
                  ? 'bg-[#6B111A] text-amber-100 shadow-xs'
                  : 'bg-white text-zinc-700 hover:bg-amber-100'
              }`}
            >
              All Timings (6)
            </button>
            <button
              onClick={() => setFilterSlot('morning')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                filterSlot === 'morning'
                  ? 'bg-[#6B111A] text-amber-100 shadow-xs'
                  : 'bg-white text-zinc-700 hover:bg-amber-100'
              }`}
            >
              🌅 Morning (6:30 AM - 1:30 PM)
            </button>
            <button
              onClick={() => setFilterSlot('evening')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                filterSlot === 'evening'
                  ? 'bg-[#6B111A] text-amber-100 shadow-xs'
                  : 'bg-white text-zinc-700 hover:bg-amber-100'
              }`}
            >
              🌙 Evening (6:30 PM - 9:00 PM)
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setReminderAdded(true);
                setTimeout(() => setReminderAdded(false), 3000);
              }}
              className="text-xs flex items-center gap-1.5 bg-amber-100 text-[#6B111A] font-semibold px-3 py-1.5 rounded-lg border border-amber-300 hover:bg-amber-200 transition cursor-pointer"
            >
              {reminderAdded ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Timings Saved!</span>
                </>
              ) : (
                <>
                  <Bell className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Save Timetable</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Timings Schedule Table / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {filteredTimings.map((pooja) => (
            <div
              key={pooja.id}
              className="bg-[#FBF9F5] rounded-2xl p-5 border border-[#D4AF37]/30 shadow-xs hover:shadow-md hover:border-[#D4AF37] transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-black text-[#6B111A] px-2.5 py-0.5 rounded bg-amber-100 border border-amber-300/80 font-mono">
                    {pooja.time}
                  </span>
                  <span className="text-[11px] font-semibold uppercase text-zinc-500">
                    {pooja.slot === 'morning' ? 'Morning Session' : 'Evening Session'}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#1F1F1F] font-cinzel leading-snug">
                  {currentLang === 'ta' ? pooja.tamilName : pooja.name}
                </h3>
                <p className="text-xs text-[#6B111A] font-semibold mt-0.5">
                  {pooja.name !== pooja.tamilName ? pooja.tamilName : ''}
                </p>

                <p className="mt-2.5 text-xs text-zinc-600 leading-relaxed">
                  {pooja.description}
                </p>

                {/* Key Rituals */}
                <div className="mt-3.5 pt-3 border-t border-amber-200/60">
                  <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-1.5">
                    Highlights & Rituals:
                  </p>
                  <ul className="space-y-1">
                    {pooja.rituals.map((r, idx) => (
                      <li key={idx} className="text-xs text-zinc-700 flex items-start gap-1.5">
                        <span className="text-[#D4AF37] font-bold">▪</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-amber-200/60 flex items-center justify-between">
                <span className="text-[11px] text-zinc-500">Open to all devotees</span>
                <button
                  onClick={() => onOpenBookingModal('abhishegam-nithya')}
                  className="text-xs text-[#6B111A] hover:text-[#831620] font-bold flex items-center gap-1 cursor-pointer"
                >
                  <span>Sponsor Pooja</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Major Annual Festivals & Thiruvizha Highlight */}
        <div className="bg-gradient-to-br from-[#4A0B12] via-[#6B111A] to-[#36080D] rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-radial-at-tr from-[#D4AF37]/20 to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              <span>Temple Festive Calendar</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-cinzel text-amber-100">
              Major Annual Festivals & Thiruvizhas
            </h3>
            <p className="mt-2 text-amber-200/80 text-sm max-w-2xl">
              Throughout the Hindu calendar year, thousands of devotees gather in Puchong Perdana to celebrate divine celestial thiruvizhas with joy and devotion.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {festivals.map((fest, idx) => (
                <div
                  key={idx}
                  className="bg-black/30 backdrop-blur-md rounded-xl p-5 border border-amber-400/30 hover:border-amber-400 transition"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#D4AF37] text-[#3D0A0F]">
                      {fest.badge}
                    </span>
                    <span className="text-xs text-amber-300 font-medium">
                      {fest.month}
                    </span>
                  </div>
                  <h4 className="font-bold text-base font-cinzel text-white leading-snug">
                    {fest.name}
                  </h4>
                  <p className="text-xs text-amber-200/90 font-medium mt-0.5">
                    {fest.tamilName}
                  </p>
                  <p className="text-xs text-amber-100/75 mt-2 leading-relaxed">
                    {fest.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

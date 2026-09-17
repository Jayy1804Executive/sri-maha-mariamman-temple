import { useState, FormEvent } from 'react';
import { Building2, Users, Utensils, Volume2, Wind, Sparkles, Check, Send, Calendar } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HallSectionProps {
  currentLang: Language;
}

export function HallSection({ currentLang }: HallSectionProps) {
  const t = translations[currentLang];
  const [organizerName, setOrganizerName] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState('Traditional Hindu Wedding (Vivaha)');
  const [eventDate, setEventDate] = useState('');
  const [guestCount, setGuestCount] = useState('300 - 500 Guests');
  const [specialNotes, setSpecialNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const amenities = [
    {
      icon: Wind,
      title: 'Fully Air-Conditioned',
      desc: 'High-powered centralized climate control for total devotee and guest comfort.',
    },
    {
      icon: Users,
      title: '500+ Banquet Capacity',
      desc: 'Spacious main hall seating 500 banquet-style or 800+ theatre-style with wide aisles.',
    },
    {
      icon: Utensils,
      title: 'Dedicated Dining Hall',
      desc: 'Hygienic vegetarian kitchen & dining wing with traditional banana leaf serving setup.',
    },
    {
      icon: Volume2,
      title: 'Acoustic & PA System',
      desc: 'Professional sound system with cordless microphones, Nadaswaram inputs, and stage lighting.',
    },
    {
      icon: Sparkles,
      title: 'Traditional Mandapam',
      desc: 'Elevated cultural stage designed for authentic South Indian Dravidian wedding setups.',
    },
    {
      icon: Building2,
      title: 'Bridal Dressing Suites',
      desc: 'Private air-conditioned rooms with mirrors and en-suite restrooms for bride and groom.',
    }
  ];

  const handleInquiry = (e: FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `🏛️ *SRI MARIAMMAN HALL AVAILABILITY INQUIRY*\n` +
      `*Temple:* Sri Maha Mariamman & Sri Perumal, Puchong Perdana\n` +
      `---------------------------------\n` +
      `*Organizer:* ${organizerName}\n` +
      `*Contact:* ${phone}\n` +
      `*Event Type:* ${eventType}\n` +
      `*Target Date:* ${eventDate}\n` +
      `*Estimated Guests:* ${guestCount}\n` +
      `*Notes:* ${specialNotes || 'Please check hall availability and send package brochure.'}\n`
    );
    window.open(`https://wa.me/60123456789?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="hall" className="py-20 bg-gradient-to-b from-white to-[#FBF9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6B111A]/10 border border-[#6B111A]/20 text-[#6B111A] text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Community Venue & Vivaha Mandapam</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F1F1F] font-cinzel">
            {t.hallHeading}
          </h2>
          <p className="mt-3 text-base text-zinc-600 font-normal leading-relaxed">
            {t.hallSubheading}
          </p>
        </div>

        {/* Hall Presentation Grid: Visual Showcase & Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Photos & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-[#D4AF37]/40 group">
              <img
                src="/src/assets/images/cultural_hall_1787560004524.jpg"
                alt="Sri Mariamman Cultural Wedding Hall"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase font-bold text-amber-300 tracking-wider px-2.5 py-0.5 rounded bg-black/50 border border-amber-400/30 inline-block mb-2">
                  Air-Conditioned Auditorium & Dining Wing
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-cinzel text-white">
                  Sacred Mandapam for Auspicious Unions
                </h3>
                <p className="text-xs sm:text-sm text-amber-200/90 mt-1">
                  Ideal for traditional weddings, Upanayanams, Seemantham, milestone birthdays, and community discourses.
                </p>
              </div>
            </div>

            {/* 6 Amenities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {amenities.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white p-4 rounded-2xl border border-amber-200/60 shadow-xs flex items-start gap-3.5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#6B111A]/10 text-[#6B111A] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#1F1F1F] font-cinzel">
                        {item.title}
                      </h4>
                      <p className="text-xs text-zinc-600 mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/40 shadow-xl relative">
              <div className="flex items-center gap-2 text-xs font-bold text-[#6B111A] uppercase tracking-wider mb-1">
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
                <span>Check Date Availability</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1F1F1F] font-cinzel">
                Hall Booking Inquiry
              </h3>
              <p className="text-xs text-zinc-500 mt-1 mb-6">
                Receive our complete rental package, stage dimensions, and vegetarian catering guidelines.
              </p>

              {submitted ? (
                <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-base text-zinc-900 font-cinzel">Inquiry Sent via WhatsApp!</h4>
                  <p className="text-xs text-zinc-600">
                    Our Hall Management committee will review your date <strong className="text-zinc-800">({eventDate})</strong> and respond promptly with package details.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#6B111A] font-bold underline mt-2 cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInquiry} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                      Organizer / Family Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={organizerName}
                      onChange={(e) => setOrganizerName(e.target.value)}
                      placeholder="e.g. Shanmugam & Family"
                      className="w-full px-3.5 py-2.5 bg-[#FBF9F5] border border-amber-200 rounded-xl text-xs text-zinc-900 focus:outline-hidden focus:border-[#6B111A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                      WhatsApp Contact Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +60 12-345 6789"
                      className="w-full px-3.5 py-2.5 bg-[#FBF9F5] border border-amber-200 rounded-xl text-xs text-zinc-900 focus:outline-hidden focus:border-[#6B111A]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                        Event Type *
                      </label>
                      <select
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        className="w-full px-3 py-2 bg-[#FBF9F5] border border-amber-200 rounded-xl text-xs text-zinc-900 focus:outline-hidden focus:border-[#6B111A]"
                      >
                        <option value="Traditional Hindu Wedding (Vivaha)">Traditional Wedding</option>
                        <option value="Betrothal / Engagement (Nitchayam)">Engagement Ceremony</option>
                        <option value="Puberty Ceremony (Manjal Neerattu)">Manjal Neerattu</option>
                        <option value="60th Birthday (Sashtiapthapoorthi)">60th Birthday Milestone</option>
                        <option value="Cultural / Religious Discourse">Religious Discourse / Satsang</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={eventDate}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="w-full px-3 py-2 bg-[#FBF9F5] border border-amber-200 rounded-xl text-xs text-zinc-900 focus:outline-hidden focus:border-[#6B111A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                      Estimated Guests Count
                    </label>
                    <select
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      className="w-full px-3.5 py-2 bg-[#FBF9F5] border border-amber-200 rounded-xl text-xs text-zinc-900 focus:outline-hidden focus:border-[#6B111A]"
                    >
                      <option value="100 - 250 Guests">100 - 250 Guests</option>
                      <option value="250 - 500 Guests">250 - 500 Guests (Standard)</option>
                      <option value="500 - 800 Guests">500 - 800 Guests (Full Hall Capacity)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                      Special Requirements / Notes
                    </label>
                    <textarea
                      rows={2}
                      value={specialNotes}
                      onChange={(e) => setSpecialNotes(e.target.value)}
                      placeholder="e.g. Vegetarian catering inquiries, priest officiating requests..."
                      className="w-full px-3.5 py-2 bg-[#FBF9F5] border border-amber-200 rounded-xl text-xs text-zinc-900 focus:outline-hidden focus:border-[#6B111A]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#6B111A] to-[#8A1622] hover:from-[#8A1622] hover:to-[#A31B29] text-amber-100 font-bold py-3 rounded-xl shadow-md transition flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer border border-[#D4AF37]/50"
                  >
                    <Send className="w-4 h-4 text-[#D4AF37]" />
                    <span>Inquire via WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

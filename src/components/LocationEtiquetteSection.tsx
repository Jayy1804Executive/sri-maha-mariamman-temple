import { useState } from 'react';
import { MapPin, Navigation, Compass, AlertCircle, Shirt, Footprints, Camera, Sparkles, Phone, Clock, Mail } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface LocationEtiquetteSectionProps {
  currentLang: Language;
}

export function LocationEtiquetteSection({ currentLang }: LocationEtiquetteSectionProps) {
  const t = translations[currentLang];

  const etiquetteRules = [
    {
      icon: Shirt,
      title: 'Modest Traditional Attire',
      desc: 'Devotees are requested to wear clean, modest traditional clothing (Dhoti, Kurta, Saree, Salwar Kameez). Sleeveless and shorts are discouraged inside the sanctum.',
    },
    {
      icon: Footprints,
      title: 'Footwear Depot',
      desc: 'Please remove all footwear and wash feet at the designated cleansing area outside before stepping onto the temple praharam floor.',
    },
    {
      icon: Camera,
      title: 'Sanctum Photography',
      desc: 'Photography and videography inside the inner sanctum sanctorum (Moolasthanam) are strictly prohibited to preserve spiritual sanctity.',
    },
    {
      icon: Sparkles,
      title: 'Prasadam & Archana Items',
      desc: 'Fresh flowers, lemons, coconuts, and betel leaves are welcome for daily archanas. Plastic bags must be disposed of in designated recycling bins.',
    }
  ];

  return (
    <section id="visit" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#6B111A] text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-[#C5832B]" />
            <span>Visiting Guide & Etiquette</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F1F1F] font-cinzel">
            {t.visitHeading}
          </h2>
          <p className="mt-3 text-base text-zinc-600 font-normal leading-relaxed">
            {t.visitSubheading}
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Interactive Map & Direction Links */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-[#FBF9F5] p-2 rounded-3xl border border-[#D4AF37]/40 shadow-xl overflow-hidden relative">
              <iframe
                title="Puchong Perdana Temple Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15936.758364716766!2d101.5975!3d2.9985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb5a0349646b9%3A0xb3e6488d1d8ef3f9!2sPuchong%20Perdana%2C%2047100%20Puchong%2C%20Selangor!5e0!3m2!1sen!2smy!4v1710000000000!5m2!1sen!2smy"
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              />
            </div>

            {/* Navigation buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://maps.google.com/?q=Puchong+Perdana+Selangor+Malaysia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#6B111A] hover:bg-[#831620] text-amber-100 font-bold py-3 px-4 rounded-xl shadow-xs transition flex items-center justify-center gap-2 text-xs sm:text-sm border border-[#D4AF37]/40"
              >
                <Navigation className="w-4 h-4 text-[#D4AF37]" />
                <span>Open in Google Maps</span>
              </a>
              <a
                href="https://waze.com/ul?q=Puchong+Perdana+Selangor"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#33CCFF] hover:bg-[#2bb8e6] text-[#003B52] font-bold py-3 px-4 rounded-xl shadow-xs transition flex items-center justify-center gap-2 text-xs sm:text-sm"
              >
                <Compass className="w-4 h-4" />
                <span>Navigate via Waze</span>
              </a>
            </div>
          </div>

          {/* Right Column: Address & Contact Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#FBF9F5] rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/35 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold text-[#6B111A] uppercase tracking-wider">
                  Temple Sanctuary Address
                </span>
                <h3 className="text-xl font-bold font-cinzel text-zinc-900 mt-1">
                  Persatuan Penganut Sri Maha Mariamman & Sri Perumal
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 mt-2 leading-relaxed flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#6B111A] shrink-0 mt-0.5" />
                  <span>
                    Jalan Perdana 2, Taman Puchong Perdana / Puchong Utama,<br />
                    47100 Puchong, Selangor Darul Ehsan, Malaysia.
                  </span>
                </p>
              </div>

              <div className="pt-4 border-t border-amber-200/80 space-y-3 text-xs sm:text-sm text-zinc-700">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-amber-700" />
                  <div>
                    <span className="font-semibold text-zinc-900">+60 3-8062 8901 / +60 12-345 6789</span>
                    <p className="text-[11px] text-zinc-500">Temple Office & Priest WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-amber-700" />
                  <div>
                    <span className="font-semibold text-zinc-900">Darshan: 6:30 AM - 10:00 AM & 6:30 PM - 9:00 PM</span>
                    <p className="text-[11px] text-zinc-500">Daily Agamic Temple Hours</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-amber-700" />
                  <div>
                    <span className="font-semibold text-zinc-900">contact@srimariammanperumal-puchong.org</span>
                    <p className="text-[11px] text-zinc-500">Administrative Inquiries</p>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-amber-100/70 rounded-xl border border-amber-300/80 text-xs text-amber-900">
                <span className="font-bold">Public Transit:</span> 5-minute walk from <strong>LRT Puchong Perdana Station (Sri Petaling Line)</strong>. Free parking available at temple compound.
              </div>
            </div>
          </div>

        </div>

        {/* 4 Etiquette Cards */}
        <div>
          <h3 className="text-xl font-bold font-cinzel text-[#1F1F1F] mb-6 text-center">
            Sacred Temple Etiquette & Guidelines
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {etiquetteRules.map((rule, idx) => {
              const Icon = rule.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FBF9F5] p-5 rounded-2xl border border-amber-200/70 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6B111A] to-[#420B11] text-[#D4AF37] flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-sm text-[#1F1F1F] font-cinzel mb-1.5">
                      {rule.title}
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {rule.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

import { useState, FormEvent } from 'react';
import { X, Sparkles, Check, Calendar, Clock, User, Phone, Mail, FileText, Send, Share2 } from 'lucide-react';
import { templeServices, deitiesList } from '../data/templeData';
import { Language } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialDeityName?: string;
  currentLang: Language;
}

const nakshatras = [
  'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashirsha', 'Ardra', 'Punarvasu',
  'Pushya', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni', 'Hasta',
  'Chitra', 'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha', 'Mula', 'Purva Ashadha',
  'Uttara Ashadha', 'Shravana', 'Dhanishta', 'Shatabhisha', 'Purva Bhadrapada',
  'Uttara Bhadrapada', 'Revati'
];

const rasis = [
  'Mesham (Aries)', 'Rishabham (Taurus)', 'Mithunam (Gemini)', 'Karkadagam (Cancer)',
  'Simham (Leo)', 'Kanni (Virgo)', 'Thulaam (Libra)', 'Vrischikam (Scorpio)',
  'Dhanusu (Sagittarius)', 'Makaram (Capricorn)', 'Kumbham (Aquarius)', 'Meenam (Pisces)'
];

export function BookingModal({
  isOpen,
  onClose,
  initialServiceId,
  initialDeityName,
  currentLang,
}: BookingModalProps) {
  const [selectedServiceId, setSelectedServiceId] = useState(
    initialServiceId || templeServices[0].id
  );
  const [selectedDeity, setSelectedDeity] = useState(
    initialDeityName || deitiesList[0].name
  );
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredSlot, setPreferredSlot] = useState<'Morning (7:30 AM)' | 'Evening (7:00 PM)'>('Morning (7:30 AM)');
  const [nakshatram, setNakshatram] = useState('');
  const [rasi, setRasi] = useState('');
  const [gothram, setGothram] = useState('');
  const [familyMembers, setFamilyMembers] = useState('');
  const [specialIntention, setSpecialIntention] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const currentService = templeServices.find((s) => s.id === selectedServiceId) || templeServices[0];

  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    const ref = `PP-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setIsSuccess(true);
  };

  const handleSendToWhatsApp = () => {
    const text = encodeURIComponent(
      `🕉️ *TEMPLE POOJA BOOKING SANKALPAM*\n` +
      `*Ref:* ${bookingRef}\n` +
      `*Temple:* Sri Maha Mariamman & Sri Perumal, Puchong Perdana\n` +
      `---------------------------------\n` +
      `*Service:* ${currentService.name} (RM ${currentService.feeMYR})\n` +
      `*Deity:* ${selectedDeity}\n` +
      `*Date:* ${preferredDate} (${preferredSlot})\n` +
      `*Devotee Name:* ${name}\n` +
      `*Contact:* ${phone}\n` +
      `*Nakshatram:* ${nakshatram || 'N/A'}\n` +
      `*Rasi:* ${rasi || 'N/A'}\n` +
      `*Gothram:* ${gothram || 'Shiva / Vishnu'}\n` +
      `*Family Names:* ${familyMembers || 'N/A'}\n` +
      `*Intention/Prayer:* ${specialIntention || 'Ayush & Arogya Kshemam'}\n` +
      `---------------------------------\n` +
      `Please confirm priest availability and instructions.`
    );
    window.open(`https://wa.me/60123456789?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in">
      <div className="bg-[#FBF9F5] rounded-3xl border border-[#D4AF37]/50 shadow-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto relative my-auto">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#6B111A] to-[#8A1622] text-white p-6 sm:p-7 relative rounded-t-3xl border-b border-[#D4AF37]/40">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-amber-200 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Sacred Sankalpam Portal</span>
          </div>
          <h3 className="text-2xl font-bold font-cinzel text-amber-100">
            Book Temple Pooja & Archanai
          </h3>
          <p className="text-xs sm:text-sm text-amber-200/80 mt-1">
            Persatuan Penganut Sri Maha Mariamman & Sri Perumal, Puchong Perdana
          </p>
        </div>

        {isSuccess ? (
          /* Booking Confirmation Slip */
          <div className="p-6 sm:p-8 text-center space-y-5 animate-in zoom-in-95">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-500 shadow-md">
              <Check className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#6B111A]">
                Sankalpam Request Registered
              </span>
              <h4 className="text-2xl font-bold font-cinzel text-zinc-900 mt-1">
                Booking Reference: {bookingRef}
              </h4>
              <p className="text-xs text-zinc-600 mt-2 max-w-md mx-auto">
                Thank you, <strong className="text-zinc-900">{name}</strong>. Your pooja request has been received. Please send your details to our priest via WhatsApp to confirm the final timing.
              </p>
            </div>

            {/* Summary details card */}
            <div className="bg-white p-5 rounded-2xl border border-amber-200 text-left space-y-2.5 text-xs text-zinc-700">
              <div className="flex justify-between border-b border-amber-100 pb-2 font-bold text-sm text-[#6B111A]">
                <span>{currentService.name}</span>
                <span>RM {currentService.feeMYR}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div><span className="text-zinc-400">Deity:</span> <strong className="text-zinc-800">{selectedDeity}</strong></div>
                <div><span className="text-zinc-400">Date & Slot:</span> <strong className="text-zinc-800">{preferredDate || 'Upcoming'} ({preferredSlot.split(' ')[0]})</strong></div>
                <div><span className="text-zinc-400">Nakshatram:</span> <strong className="text-zinc-800">{nakshatram || '-'}</strong></div>
                <div><span className="text-zinc-400">Rasi:</span> <strong className="text-zinc-800">{rasi || '-'}</strong></div>
                <div><span className="text-zinc-400">Gothram:</span> <strong className="text-zinc-800">{gothram || '-'}</strong></div>
                <div><span className="text-zinc-400">Contact:</span> <strong className="text-zinc-800">{phone}</strong></div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleSendToWhatsApp}
                className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold py-3 rounded-xl shadow-md transition flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Confirm on WhatsApp with Priest</span>
              </button>
              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="px-6 py-3 rounded-xl text-sm font-semibold bg-zinc-200 text-zinc-800 hover:bg-zinc-300 transition cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Form Content */
          <form onSubmit={handleBookingSubmit} className="p-6 sm:p-8 space-y-5">
            
            {/* Service & Deity Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                  Select Service *
                </label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-amber-200 rounded-xl text-sm text-zinc-900 focus:outline-hidden focus:border-[#6B111A]"
                >
                  {templeServices.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      {srv.name} (RM {srv.feeMYR})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                  Sanctum / Deity *
                </label>
                <select
                  value={selectedDeity}
                  onChange={(e) => setSelectedDeity(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-amber-200 rounded-xl text-sm text-zinc-900 focus:outline-hidden focus:border-[#6B111A]"
                >
                  {deitiesList.map((d) => (
                    <option key={d.id} value={d.name}>
                      {d.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Date and Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  required
                  value={preferredDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-amber-200 rounded-xl text-sm text-zinc-900 focus:outline-hidden focus:border-[#6B111A]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                  Pooja Slot *
                </label>
                <select
                  value={preferredSlot}
                  onChange={(e) => setPreferredSlot(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 bg-white border border-amber-200 rounded-xl text-sm text-zinc-900 focus:outline-hidden focus:border-[#6B111A]"
                >
                  <option value="Morning (7:30 AM)">Morning Session (7:30 AM – 9:00 AM)</option>
                  <option value="Evening (7:00 PM)">Evening Session (7:00 PM – 8:30 PM)</option>
                </select>
              </div>
            </div>

            {/* Devotee Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                  Devotee Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full px-3.5 py-2.5 bg-white border border-amber-200 rounded-xl text-sm text-zinc-900 focus:outline-hidden focus:border-[#6B111A]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                  WhatsApp / Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +60 12-345 6789"
                  className="w-full px-3.5 py-2.5 bg-white border border-amber-200 rounded-xl text-sm text-zinc-900 focus:outline-hidden focus:border-[#6B111A]"
                />
              </div>
            </div>

            {/* Sankalpam Details (Vedic Astrological info) */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
              <span className="text-xs font-bold text-[#6B111A] uppercase tracking-wider block">
                Astrological Sankalpam Details (Optional but Auspicious)
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-zinc-600 mb-1">
                    Nakshatram (Star)
                  </label>
                  <select
                    value={nakshatram}
                    onChange={(e) => setNakshatram(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-white border border-amber-200 rounded-lg text-xs text-zinc-800"
                  >
                    <option value="">Select Star</option>
                    {nakshatras.map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-zinc-600 mb-1">
                    Rasi (Zodiac)
                  </label>
                  <select
                    value={rasi}
                    onChange={(e) => setRasi(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-white border border-amber-200 rounded-lg text-xs text-zinc-800"
                  >
                    <option value="">Select Rasi</option>
                    {rasis.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-zinc-600 mb-1">
                    Gothram
                  </label>
                  <input
                    type="text"
                    value={gothram}
                    onChange={(e) => setGothram(e.target.value)}
                    placeholder="e.g. Shiva / Kasyapa"
                    className="w-full px-2.5 py-1.5 bg-white border border-amber-200 rounded-lg text-xs text-zinc-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-zinc-600 mb-1">
                  Family Members' Names & Stars for Archanai
                </label>
                <input
                  type="text"
                  value={familyMembers}
                  onChange={(e) => setFamilyMembers(e.target.value)}
                  placeholder="e.g. Priya (Rohini), Sanjay (Krittika)"
                  className="w-full px-2.5 py-1.5 bg-white border border-amber-200 rounded-lg text-xs text-zinc-800"
                />
              </div>
            </div>

            {/* Special Prayer Intention */}
            <div>
              <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                Specific Prayer Intention / Sankalpam Request
              </label>
              <textarea
                rows={2}
                value={specialIntention}
                onChange={(e) => setSpecialIntention(e.target.value)}
                placeholder="e.g. Health & recovery for parents, birthday blessing, wedding anniversary, new house entry..."
                className="w-full px-3.5 py-2 bg-white border border-amber-200 rounded-xl text-xs text-zinc-900 focus:outline-hidden focus:border-[#6B111A]"
              />
            </div>

            {/* Form Footer */}
            <div className="pt-3 border-t border-amber-200 flex items-center justify-between">
              <div>
                <span className="text-xs text-zinc-500">Suggested Dakshina:</span>
                <p className="text-lg font-bold text-[#6B111A] font-cinzel">
                  RM {currentService.feeMYR}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-600 hover:bg-zinc-100 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#D4AF37] to-[#C5832B] hover:from-[#e5bd3b] hover:to-[#d68f30] text-[#3D0A0F] font-bold px-6 py-2.5 rounded-xl shadow-md transition flex items-center gap-1.5 text-xs sm:text-sm cursor-pointer border border-[#b89528]"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Submit Sankalpam</span>
                </button>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}

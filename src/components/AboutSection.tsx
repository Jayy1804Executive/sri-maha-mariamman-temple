import { Shield, Users, BookOpen, Utensils, Award, Flame } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface AboutSectionProps {
  currentLang: Language;
}

export function AboutSection({ currentLang }: AboutSectionProps) {
  const t = translations[currentLang];

  const pillars = [
    {
      icon: Flame,
      title: currentLang === 'ta' ? 'வேத & ஆகம வழிபாடு' : currentLang === 'ms' ? 'Ibadah Veda & Agamik' : 'Authentic Agamic Rituals',
      desc: currentLang === 'ta'
        ? 'தினசரி நான்கு கால பூஜைகள், விசேஷ அபிஷேகங்கள் மற்றும் சாஸ்திர முறைப்படி ஹோமங்கள்.'
        : currentLang === 'ms'
        ? 'Upacara sembahyang empat kali sehari mengikut kitab Veda kuno oleh para sami berpengalaman.'
        : 'Daily 4-tier agamic poojas, nithya abhishegams, and authentic homams conducted with Vedic precision.',
    },
    {
      icon: Utensils,
      title: currentLang === 'ta' ? 'அன்னதான பெருந்தொண்டு' : currentLang === 'ms' ? 'Kebajikan Annadhanam' : 'Daily Annadhanam Seva',
      desc: currentLang === 'ta'
        ? 'சாதி மத பேதமின்றி அனைத்து பக்தர்களுக்கும் தூய சைவ உணவு வழங்கப்படுகிறது.'
        : currentLang === 'ms'
        ? 'Pemberian makanan vegetarian percuma yang bersih dan berkhasiat kepada semua pelawat setiap hari.'
        : 'Serving wholesome, hygienic vegetarian meals daily to all devotees and community members without distinction.',
    },
    {
      icon: BookOpen,
      title: currentLang === 'ta' ? 'ஆன்மீக & கலாச்சார கல்வி' : currentLang === 'ms' ? 'Pendidikan Budaya & Rohani' : 'Spiritual & Cultural Education',
      desc: currentLang === 'ta'
        ? 'சிறுவர்களுக்கு தேவாரம், திருவாசகம், தமிழ் வகுப்புகள் மற்றும் ஆன்மீக சொற்பொழிவுகள்.'
        : currentLang === 'ms'
        ? 'Kelas nyanyian Thevaram, bahasa Tamil, dan pengajian nilai murni untuk kanak-kanak dan belia.'
        : 'Conducting Thevaram chanting, Tamil language classes, yoga, and Vedic philosophy for youth & families.',
    },
    {
      icon: Users,
      title: currentLang === 'ta' ? 'சமூக ஒற்றுமை' : currentLang === 'ms' ? 'Perpaduan Komuniti' : 'Harmonious Community Unity',
      desc: currentLang === 'ta'
        ? 'மலேசிய பல்கலாச்சார சமூகத்தில் ஒற்றுமையையும் ஆன்மீக அமைதியையும் வளர்த்தல்.'
        : currentLang === 'ms'
        ? 'Memupuk perpaduan erat, gotong-royong, dan keharmonian dalam masyarakat majmuk Malaysia.'
        : 'Fostering peaceful coexistence, mutual respect, and community welfare across Puchong and Selangor.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#FBF9F5] relative overflow-hidden">
      {/* Kolam Corner Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-radial-at-tr from-[#D4AF37]/15 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-radial-at-bl from-[#6B111A]/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6B111A]/10 border border-[#6B111A]/20 text-[#6B111A] text-xs font-bold uppercase tracking-wider mb-3">
            <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Persatuan Penganut Sri Maha Mariamman & Sri Perumal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1F1F1F] font-cinzel leading-tight">
            {t.aboutHeading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            {t.aboutSubheading}
          </p>
        </div>

        {/* Story Grid with Temple Image & Heritage Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left Column: Visual Story */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#D4AF37]/40">
              <img
                src="/src/assets/images/temple_hero_banner_1787557485490.jpg"
                alt="Puchong Perdana Temple Sanctuary"
                className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A0B12]/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs uppercase font-bold text-amber-300 tracking-wider">
                  Selangor, Malaysia
                </p>
                <p className="text-lg font-bold font-cinzel">
                  Sri Maha Mariamman & Sri Perumal Temple
                </p>
                <p className="text-xs text-amber-200/80 mt-1">
                  Registered Society (ROS) Reg No: PPM/SEL/1998/0421
                </p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-5 -right-3 bg-gradient-to-br from-[#D4AF37] to-[#C5832B] text-[#3D0A0F] p-4 rounded-xl shadow-xl border-2 border-white flex items-center gap-3">
              <Award className="w-8 h-8 text-[#4A0B12]" />
              <div>
                <p className="text-2xl font-black font-cinzel leading-none">30+ Years</p>
                <p className="text-xs font-semibold uppercase tracking-wider">Of Sacred Seva</p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Mission */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/30 shadow-sm relative">
              <h3 className="text-xl sm:text-2xl font-bold text-[#6B111A] font-cinzel flex items-center gap-2">
                <span>{t.missionTitle}</span>
              </h3>
              <p className="mt-3 text-zinc-700 leading-relaxed text-sm sm:text-base">
                {currentLang === 'ta'
                  ? 'பூச்சோங் பெர்டானா ஸ்ரீ மகா மாரியம்மன் & ஸ்ரீ பெருமாள் ஆலயம் பல ஆண்டுகளாக ஆன்மீக கலங்கரை விளக்கமாகத் திகழ்கிறது. மனித குலத்தின் நல்வாழ்வுக்காகவும், ஆரோக்கியத்திற்காகவும், உலக அமைதிக்காகவும் அன்னை மாரியம்மன் மற்றும் ஸ்ரீ நாராயணப் பெருமாளுக்குத் தினசரி ஆகம முறைப்படி பூஜைகள் செவ்வனே நடைபெறுகின்றன.'
                  : currentLang === 'ms'
                  ? 'Persatuan Penganut Sri Maha Mariamman & Sri Perumal berakar umbi sebagai pusat kerohanian utama di Puchong Perdana. Kuil ini menggabungkan penyembahan kepada Dewi Ibu Sri Maha Mariamman dan Dewa Sri Srinivasa Perumal, memupuk kedamaian, kesejahteraan keluarga, dan bantuan kebajikan kepada semua insan.'
                  : 'Founded by dedicated pioneers of the Puchong Perdana community, the temple is uniquely consecrated with dual sanctums honoring both the Divine Mother Goddess Sri Maha Mariamman (manifestation of Shakti and universal health) and Lord Sri Srinivasa Perumal (manifestation of Lord Vishnu, dispenser of peace and prosperity).'}
              </p>

              <div className="mt-6 pt-6 border-t border-amber-100 grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                <div className="bg-[#FBF9F5] p-3 rounded-lg border border-amber-200/60">
                  <p className="text-xl sm:text-2xl font-bold text-[#6B111A] font-cinzel">5,000+</p>
                  <p className="text-xs text-zinc-600 mt-0.5">Devotees Monthly</p>
                </div>
                <div className="bg-[#FBF9F5] p-3 rounded-lg border border-amber-200/60">
                  <p className="text-xl sm:text-2xl font-bold text-[#6B111A] font-cinzel">365 Days</p>
                  <p className="text-xs text-zinc-600 mt-0.5">Free Annadhanam</p>
                </div>
                <div className="bg-[#FBF9F5] p-3 rounded-lg border border-amber-200/60 col-span-2 sm:col-span-1">
                  <p className="text-xl sm:text-2xl font-bold text-[#6B111A] font-cinzel">100%</p>
                  <p className="text-xs text-zinc-600 mt-0.5">Vedic Authenticity</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-[#D4AF37]/25 shadow-xs hover:shadow-md hover:border-[#D4AF37] transition duration-200 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6B111A] to-[#420B11] text-[#D4AF37] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#1F1F1F] font-cinzel mb-2">
                  {pillar.title}
                </h4>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

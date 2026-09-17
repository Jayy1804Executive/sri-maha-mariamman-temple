export interface PhotoItem {
  id: string;
  title: string;
  category: 'posters' | 'deities' | 'festivals' | 'hall' | 'annadhanam';
  imageUrl: string;
  date: string;
  uploadedBy: string;
  description: string;
  tags?: string[];
  isPoster?: boolean;
}

export const initialGallery: PhotoItem[] = [
  {
    id: 'poster-1',
    title: 'Navarathri Mahotsavam & Chitra Pournami 2026 Special Pooja Poster',
    category: 'posters',
    imageUrl: '/src/assets/images/festival_poster_navarathri_1787557547248.jpg',
    date: '2026-08-20',
    uploadedBy: 'Temple Management Committee',
    description: 'Official schedule and invitation poster for the 10-day Navarathri Thiruvizha and Chitra Pournami special abishegam celebrations.',
    tags: ['Navarathri', 'Festival Poster', 'Chitra Pournami', 'Ubhayam'],
    isPoster: true,
  },
  {
    id: 'deity-mariamman',
    title: 'Goddess Sri Maha Mariamman - Raja Alankaram with Crimson Silk & Lime Garland',
    category: 'deities',
    imageUrl: '/src/assets/images/goddess_mariamman_1787557510141.jpg',
    date: '2026-08-15',
    uploadedBy: 'Chief Priest Gurukkal',
    description: 'Divine darshan of Sri Maha Mariamman in Sanctum Sanctorum adorned with royal golden kireedam, fresh jasmine and lime garlands.',
    tags: ['Sri Maha Mariamman', 'Shakti', 'Maha Alankaram', 'Moolavar'],
  },
  {
    id: 'deity-perumal',
    title: 'Lord Sri Srinivasa Perumal - Garuda Seva Special Alankaram',
    category: 'deities',
    imageUrl: '/src/assets/images/lord_perumal_1787557531332.jpg',
    date: '2026-08-10',
    uploadedBy: 'Bhattachariar Swamigal',
    description: 'Glorious darshan of Lord Sri Perumal with Thiruman Namam, Shankha, Chakra, and sacred Tulsi mala in celestial radiance.',
    tags: ['Sri Srinivasa Perumal', 'Vishnu', 'Tulsi Mala', 'Namam'],
  },
  {
    id: 'deity-ganesha',
    title: 'Lord Sri Bala Vinayagar - Modhaka Alankaram with Red Hibiscus & Arugampul',
    category: 'deities',
    imageUrl: '/src/assets/images/lord_ganesha_idol_1787559921744.jpg',
    date: '2026-08-05',
    uploadedBy: 'Temple Gurukkal',
    description: 'First deity invoked for removal of all obstacles, seated in divine golden radiance with modhakam and fresh flower garlands.',
    tags: ['Sri Bala Vinayagar', 'Ganesha', 'Modhakam', 'Moolavar'],
  },
  {
    id: 'deity-murugan',
    title: 'Lord Sri Subramanyar (Murugan) with Golden Vel & Peacock',
    category: 'deities',
    imageUrl: '/src/assets/images/lord_murugan_idol_1787559937665.jpg',
    date: '2026-08-03',
    uploadedBy: 'Temple Committee',
    description: 'Lord Murugan holding the sacred Vel of wisdom adorned with fragrant jasmine garlands and rich emerald-gold silks.',
    tags: ['Lord Murugan', 'Subramanyar', 'Vel', 'Alankaram'],
  },
  {
    id: 'deity-navagrahas',
    title: 'Navagraha Sannidhi - Nine Planetary Deities in Sacred Silks',
    category: 'deities',
    imageUrl: '/src/assets/images/navagraha_sannidhi_1787559955617.jpg',
    date: '2026-08-02',
    uploadedBy: 'Temple Pariharam Seva',
    description: 'Traditional Navagraha platform with nine celestial planetary deities draped in consecrated colored silks with sesame deepams.',
    tags: ['Navagraha', 'Pariharam', 'Nine Planets', 'Deepam'],
  },
  {
    id: 'temple-gopuram',
    title: 'Temple Raja Gopuram & Sanctum Tower at Golden Sunrise',
    category: 'festivals',
    imageUrl: '/src/assets/images/temple_hero_banner_1787557485490.jpg',
    date: '2026-08-01',
    uploadedBy: 'Temple Media Team',
    description: 'Majestic South Indian Dravidian architecture of our Puchong Perdana temple with golden deepam illumination.',
    tags: ['Gopuram', 'Architecture', 'Puchong Perdana', 'Deepam'],
  },
  {
    id: 'poster-purattasi',
    title: 'Purattasi Sani Mahotsavam & Govinda Bhajan Schedule Poster',
    category: 'posters',
    imageUrl: '/src/assets/images/poster_purattasi_1787559973153.jpg',
    date: '2026-07-28',
    uploadedBy: 'Temple Youth Group',
    description: 'Announcement poster for every Saturday in the holy month of Purattasi with special Perumal Abhishegam and Thaligai Annadhanam.',
    tags: ['Purattasi Sani', 'Perumal', 'Govinda', 'Poster'],
    isPoster: true,
  },
  {
    id: 'annadhanam-1',
    title: 'Daily Annadhanam Seva - Feeding 250+ Devotees with Fresh Banana Leaf Meals',
    category: 'annadhanam',
    imageUrl: '/src/assets/images/temple_annadhanam_1787559988635.jpg',
    date: '2026-07-15',
    uploadedBy: 'Annadhanam Committee',
    description: 'Devotees and community members receiving warm, sacred vegetarian prasadam served on traditional banana leaves.',
    tags: ['Annadhanam', 'Seva', 'Prasadam', 'Community Meal'],
  },
  {
    id: 'hall-1',
    title: 'Sri Mariamman Cultural Wedding Hall - Traditional Mandapam Setup',
    category: 'hall',
    imageUrl: '/src/assets/images/cultural_hall_1787560004524.jpg',
    date: '2026-06-20',
    uploadedBy: 'Hall Management',
    description: 'Air-conditioned auditorium prepared for a sacred Hindu wedding ceremony with floral floral backdrop and mandapam.',
    tags: ['Wedding Hall', 'Mandapam', 'Cultural Centre', 'Stage'],
  },
  {
    id: 'festival-thaipusam',
    title: 'Thaipusam Paal Kudam & Kavadi Procession',
    category: 'festivals',
    imageUrl: '/src/assets/images/thaipusam_procession_1787560032200.jpg',
    date: '2026-05-18',
    uploadedBy: 'Devotees Association',
    description: 'Vibrant milk pot (Paal Kudam) carrying and spiritual Kavadi procession by thousands of devotees in Puchong.',
    tags: ['Thaipusam', 'Murugan', 'Paal Kudam', 'Procession'],
  }
];

export interface Deity {
  id: string;
  name: string;
  tamilName: string;
  malayName: string;
  title: string;
  description: string;
  mantra: string;
  specialDay: string;
  offerings: string[];
  imageUrl: string;
  colorTheme: string;
}

export const deitiesList: Deity[] = [
  {
    id: 'mariamman',
    name: 'Goddess Sri Maha Mariamman',
    tamilName: 'ஸ்ரீ மகா மாரியம்மன்',
    malayName: 'Dewi Sri Maha Mariamman',
    title: 'Divine Mother of Health, Healing & Protection (Shakti)',
    description: 'The supreme manifestation of Parashakti, Goddess Sri Maha Mariamman is revered as the motherly guardian who dispels illness, blesses homes with fertility, protection, cooling showers of rain, and removes fear from the hearts of her devotees.',
    mantra: 'Om Hrim Shrim Sri Maha Mariammanayai Namaha || ஓம் ஹ்ரீம் ஸ்ரீம் ஸ்ரீ மகா மாரியம்மனே போற்றி',
    specialDay: 'Tuesdays, Fridays & Sunday evenings | Tamil month of Aadi & Panguni',
    offerings: ['Fresh Lime Garland (Elumichai Maalai)', 'Red Saree (Pattu Pudavai)', 'Neem Leaves (Veppilai)', 'Sweet Pongal & Koozh', 'Turmeric & Kumkum'],
    imageUrl: '/src/assets/images/goddess_mariamman_1787557510141.jpg',
    colorTheme: 'from-amber-600/30 to-red-950/80',
  },
  {
    id: 'perumal',
    name: 'Lord Sri Srinivasa Perumal (Vishnu)',
    tamilName: 'ஸ்ரீ ஸ்ரீனிவாச பெருமாள் (விஷ்ணு)',
    malayName: 'Dewa Sri Srinivasa Perumal (Vishnu)',
    title: 'The Supreme Preserver of Cosmos, Dispenser of Peace & Moksha',
    description: 'Lord Sri Srinivasa Perumal (Lord Venkateswara / Narayana) stands in all his majestic glory in Puchong Perdana. He showers endless blessings of prosperity (Lakshmi Kataksham), righteous living (Dharma), domestic peace, and spiritual liberation.',
    mantra: 'Om Namo Bhagavate Vasudevaya || Om Namo Narayanaya || ஓம் நமோ நாராயணாய',
    specialDay: 'Saturdays & Ekadasi Tithis | Month of Purattasi & Vaikunta Ekadasi',
    offerings: ['Sacred Tulsi Mala', 'Panchamirtham & Thirukannamudhu (Payasam)', 'Butter & Curd Rice', 'Pure Ghee Deepam', 'Yellow Silk Angavastram'],
    imageUrl: '/src/assets/images/lord_perumal_1787557531332.jpg',
    colorTheme: 'from-amber-500/30 to-blue-950/80',
  },
  {
    id: 'ganesha',
    name: 'Lord Sri Bala Vinayagar (Ganesha)',
    tamilName: 'ஸ்ரீ பால விநாயகர்',
    malayName: 'Dewa Sri Bala Vinayagar (Ganesha)',
    title: 'Remover of All Obstacles & Bestower of Wisdom',
    description: 'First to be invoked before every pooja, Lord Ganesha ensures that all ventures, education, new businesses, weddings, and journeys begin with divine clarity, auspiciousness, and effortless success.',
    mantra: 'Om Gam Ganapataye Namaha || ஓம் கம் கணபதயே நமஹ',
    specialDay: 'Sankatahara Chaturthi & Vinayagar Chaturthi',
    offerings: ['Arugampul (Bermuda Grass)', 'Modhakam & Kozhukattai', 'Coconut Cracking (Sithu Thengai)', 'Red Hibiscus Flowers'],
    imageUrl: '/src/assets/images/lord_ganesha_idol_1787559921744.jpg',
    colorTheme: 'from-orange-500/30 to-red-950/80',
  },
  {
    id: 'murugan',
    name: 'Lord Sri Subramanyar (Murugan)',
    tamilName: 'ஸ்ரீ சுப்பிரமணியர் (முருகன்)',
    malayName: 'Dewa Sri Subramanyar (Murugan)',
    title: 'Commander of Divine Armies & Embodiment of Courage (Jnana Panditha)',
    description: 'Adorned with the Vel (Spear of Wisdom) alongside Goddesses Valli and Devasena, Lord Murugan bestows supreme courage, destroys negative karmas, and grants triumph in legal and health struggles.',
    mantra: 'Om Saravanabhavaya Namaha || வெற்றி வேல் முருகனுக்கு அரோகரா',
    specialDay: 'Sashti, Krithigai & Thaipusam | Panguni Uthiram',
    offerings: ['Panchamirtham', 'Rose Water (Panneer)', 'Vibhuti (Holy Ash)', 'Jasmine Garland', 'Sweet Pongal'],
    imageUrl: '/src/assets/images/lord_murugan_idol_1787559937665.jpg',
    colorTheme: 'from-amber-600/30 to-amber-950/80',
  },
  {
    id: 'navagrahas',
    name: 'Navagraha Sannidhi (Nine Planetary Deities)',
    tamilName: 'நவகிரக சந்நிதி',
    malayName: 'Sembilan Dewa Planet (Navagraha)',
    title: 'Planetary Deities for Planetary Harmony & Dosha Nivarana',
    description: 'The nine celestial planetary deities (Surya, Chandra, Angaraka, Budha, Guru, Shukra, Shani, Rahu, and Ketu) are housed in a dedicated sanctum for planetary appeasement, Rahu-Ketu pariharam, and Shani dosha mitigation.',
    mantra: 'Om Navagrahaya Namaha || நவகிரக தோஷ நிவாரண காயத்ரி',
    specialDay: 'Saturdays (Shani Preethi), Tuesdays (Sevvai Dosha), Guru Peyarchi',
    offerings: ['Navadhanyam (9 Grains)', 'Sesame Oil (Nalla Ennai) Lamps in Black Cloth', '9 Colored Clothes', 'Yellow and Red Garlands'],
    imageUrl: '/src/assets/images/navagraha_sannidhi_1787559955617.jpg',
    colorTheme: 'from-yellow-600/30 to-zinc-900/80',
  }
];

export interface PoojaScheduleItem {
  id: string;
  name: string;
  tamilName: string;
  time: string;
  slot: 'morning' | 'evening';
  description: string;
  rituals: string[];
}

export const poojaTimings: PoojaScheduleItem[] = [
  {
    id: 'morning-opening',
    name: 'Temple Opening & Suprabatham',
    tamilName: 'ஆலய நடை திறப்பு & திருப்பள்ளியெழுச்சி',
    time: '6:30 AM',
    slot: 'morning',
    description: 'Sanctum doors open with the auspicious chanting of Sri Venkateswara Suprabatham and Mariamman Thiruppalliyezhuchi.',
    rituals: ['Nadaswaram & Thavil mangala isai', 'Deeparadhanai', 'Morning Theertham & Prasadam'],
  },
  {
    id: 'ushakkala',
    name: 'Ushakkala Pooja & Nithya Abhishegam',
    tamilName: 'உஷக்கால பூஜை & நித்திய அபிஷேகம்',
    time: '7:00 AM - 7:45 AM',
    slot: 'morning',
    description: 'Holy bath ritual with Milk, Curd, Honey, Tender Coconut, and Sandalwood for Goddess Mariamman, Lord Perumal, and Ganesha.',
    rituals: ['Panchamirtham Abhishegam', 'Veda Parayanam', 'Alankaram with fresh garlands', 'Mahadeeparadhanai'],
  },
  {
    id: 'kalasanthi',
    name: 'Kalasandhi Pooja & Archana Services',
    tamilName: 'காலசந்தி பூஜை & அர்ச்சனை',
    time: '8:30 AM - 9:30 AM',
    slot: 'morning',
    description: 'Morning main ritual offering cooked rice naivedyam and archanai for all visiting devotees and their families.',
    rituals: ['Saharasranama & Ashtothra Archana', 'Gho Pooja (Cow blessings)', 'Prasadam distribution'],
  },
  {
    id: 'uchikkala',
    name: 'Uchikkala Pooja & Morning Closure',
    tamilName: 'உச்சிகால பூஜை & நடை அடைப்பு',
    time: '10:00 AM',
    slot: 'morning',
    description: 'Midday final pooja before the sanctum closes for the afternoon resting period.',
    rituals: ['Maha Mangala Harathi', 'Raksha (Sacred ash & Kumkum) distribution'],
  },
  {
    id: 'annadhanam-midday',
    name: 'Daily Free Annadhanam (Blessed Community Meal)',
    tamilName: 'தினசரி அன்னதான சேவை',
    time: '12:30 PM - 1:30 PM',
    slot: 'morning',
    description: 'Free, hygienic, pure vegetarian meals served to all visitors, devotees, and the local community in the temple dining hall.',
    rituals: ['Naivedyam offering to Mother Mariamman', 'Community Seva service'],
  },
  {
    id: 'evening-opening',
    name: 'Evening Temple Opening',
    tamilName: 'மாலை நடை திறப்பு',
    time: '6:30 PM',
    slot: 'evening',
    description: 'Lighting of 108 oil lamps (Deepams) across the temple praharam and sanctum towers.',
    rituals: ['Praharam oil lamp lighting', 'Sahasranama Parayanam'],
  },
  {
    id: 'sayaratchai',
    name: 'Sayaratchai Pooja & Sandhya Harathi',
    tamilName: 'சாயரட்சை பூஜை & சந்தியா தீபாராதனை',
    time: '7:00 PM - 7:45 PM',
    slot: 'evening',
    description: 'The glorious twilight pooja accompanied by bells, conch blowing, and rhythmic Tamil Thevaram & Vishnu Stotrams.',
    rituals: ['Evening Abhishegam for Utsavar', 'Grand Alankaram with fragrant flowers', 'Dhoopa & Deepa Harathi'],
  },
  {
    id: 'special-bhajan',
    name: 'Thevaram & Bhajan Chanting Session',
    tamilName: 'தேவாரம் & பஜனை பாராயணம்',
    time: '8:00 PM - 8:30 PM',
    slot: 'evening',
    description: 'Devotional group singing led by the temple Thevaram group and youth choir.',
    rituals: ['Lalitha Sahasranamam', 'Vishnu Sahasranamam', 'Thirupugazh singing'],
  },
  {
    id: 'arthajama',
    name: 'Arthajama Pooja & Palliyarai Seva',
    tamilName: 'அர்த்தஜாம பூஜை & பள்ளியறை சேவை',
    time: '8:45 PM - 9:00 PM',
    slot: 'evening',
    description: 'Night closure ritual putting the deities to sacred rest with milk naivedyam and soothing lullabies.',
    rituals: ['Milk & dry fruit naivedyam', 'Palliyarai Deeparadhanai', 'Final Raksha blessing & Temple Gate closure'],
  },
];

export interface TempleServiceItem {
  id: string;
  name: string;
  tamilName: string;
  category: 'archana' | 'abhishegam' | 'vahana' | 'homam' | 'samskara';
  feeMYR: number;
  duration: string;
  description: string;
  itemsIncluded: string[];
}

export const templeServices: TempleServiceItem[] = [
  {
    id: 'archana-special',
    name: 'Special Sahasranama Archanai',
    tamilName: 'சகஸ்ரநாம அர்ச்சனை',
    category: 'archana',
    feeMYR: 21,
    duration: '20 mins',
    description: 'Chanting of 1008 divine sacred names with coconut, betel leaf, bananas, kumkum, and blessed vibhuti prasadam packet.',
    itemsIncluded: ['Coconut breaking', 'Garland offering', 'Archana plate', 'Blessed Prasadam & Kumkum'],
  },
  {
    id: 'abhishegam-nithya',
    name: 'Nithya Ubhaya Abhishegam (Full 11 Dravyas)',
    tamilName: 'நித்திய உபய அபிஷேகம் (11 திரவியங்கள்)',
    category: 'abhishegam',
    feeMYR: 151,
    duration: '1 hour',
    description: 'Grand sacred bath for Sri Maha Mariamman or Lord Perumal with Milk, Curd, Honey, Ghee, Sugar, Tender Coconut, Fruit Juice, Sandalwood paste, and Turmeric.',
    itemsIncluded: ['All 11 Abhishega Dravyas', 'Pattu Vastram / Garland', 'Special Sweet Pongal naivedyam', 'Sankalpam for family'],
  },
  {
    id: 'vahana-pooja',
    name: 'Vahana Pooja (New Vehicle Blessing)',
    tamilName: 'வாகன பூஜை (புதிய வாகன ஆசீர்வாதம்)',
    category: 'vahana',
    feeMYR: 51,
    duration: '25 mins',
    description: 'Complete Vedic consecration and safety blessing for cars, motorcycles, commercial vans, or lorries at the temple portico.',
    itemsIncluded: ['Lemon tyre rolling', 'Camphor aarti around vehicle', 'Kumkum Swastik blessing', 'Garland for bonnet', 'Safety Raksha thread'],
  },
  {
    id: 'ganapathi-navagraha-homam',
    name: 'Ganapathi & Navagraha Shanthi Homam',
    tamilName: 'மகா கணபதி & நவகிரக சாந்தி ஹோமம்',
    category: 'homam',
    feeMYR: 351,
    duration: '2 hours',
    description: 'Potent Vedic fire oblation performed by temple priests to dispel obstacles, planetary doshas, evil eye (Dhrishti), and bless new endeavors.',
    itemsIncluded: ['Sacred Fire Altar (Homa Kundam)', 'Modhaka naivedyam', 'Navadhanyam ahutis', 'Raksha thread & Homa bhasmam'],
  },
  {
    id: 'vivaha-samskara',
    name: 'Traditional Hindu Wedding Ritual (Vivaha)',
    tamilName: 'பாரம்பரிய இந்து திருமண சடங்கு',
    category: 'samskara',
    feeMYR: 751,
    duration: '3 hours',
    description: 'Authentic Vedic Hindu marriage ceremony performed by experienced Gurukkals with Mangala Sutra Dharanam, Saptapadi, and Laja Homam.',
    itemsIncluded: ['Chief Priest & Assistant officiating', 'Homa samagri', 'Gauri pooja setup', 'Official Temple Marriage Certificate'],
  },
  {
    id: 'ayush-homam',
    name: 'Ayush Homam / Sashtiapthapoorthi (60th Birthday)',
    tamilName: 'ஆயுஷ் ஹோமம் / மணிவிழா',
    category: 'homam',
    feeMYR: 451,
    duration: '2.5 hours',
    description: 'Long life, sound health, and vitality prayer for children (1st birthday) or elders (60th / 70th / 80th milestones).',
    itemsIncluded: ['Ayur Devata invocation', 'Abhishegam with consecrated Kalasa theertham', 'Family blessings'],
  }
];

export interface DonationFundItem {
  id: string;
  title: string;
  tamilTitle: string;
  badge: string;
  description: string;
  presetAmounts: number[];
  currentRaisedMYR: number;
  goalMYR: number;
  donorCount: number;
  iconName: string;
}

export const donationFunds: DonationFundItem[] = [
  {
    id: 'annadhanam-fund',
    title: 'Daily Annadhanam (Free Meals) Fund',
    tamilTitle: 'தினசரி அன்னதான நிதி',
    badge: 'High Priority',
    description: 'Sponsor wholesome, delicious vegetarian lunches and dinners served daily to hundreds of devotees and needy neighbors in Puchong.',
    presetAmounts: [51, 101, 251, 501, 1001],
    currentRaisedMYR: 38450,
    goalMYR: 50000,
    donorCount: 412,
    iconName: 'Utensils',
  },
  {
    id: 'maintenance-fund',
    title: 'Temple Maintenance & Gopuram Care',
    tamilTitle: 'ஆலய பராமரிப்பு & கோபுர திருப்பணி',
    badge: 'Preservation',
    description: 'Supporting daily electrical, floral decoration, water sanitation, security, and structural preservation of our beloved temple.',
    presetAmounts: [30, 50, 100, 300, 500],
    currentRaisedMYR: 62100,
    goalMYR: 80000,
    donorCount: 298,
    iconName: 'ShieldCheck',
  },
  {
    id: 'festival-ubhayam',
    title: 'Navarathri & Chitra Pournami Festival Ubhayam',
    tamilTitle: 'திருவிழா உபய நிதி',
    badge: 'Festive',
    description: 'Sponsor the grand music, floral rathams (chariot), special prasadams, and fireworks for our annual Maha Thiruvizha.',
    presetAmounts: [100, 250, 500, 1000, 2500],
    currentRaisedMYR: 45300,
    goalMYR: 60000,
    donorCount: 184,
    iconName: 'Sparkles',
  },
  {
    id: 'flower-garlands',
    title: 'Nithya Pushpa Kainkaryam (Fresh Garlands)',
    tamilTitle: 'புஷ்ப கைங்கர்யம் (தினசரி மாலைகள்)',
    badge: 'Daily Devotion',
    description: 'Provide daily fresh fragrant jasmine, lotus, roses, and tulsi garlands for Goddess Mariamman and Lord Perumal.',
    presetAmounts: [21, 51, 101, 201],
    currentRaisedMYR: 14200,
    goalMYR: 20000,
    donorCount: 215,
    iconName: 'HeartHandshake',
  }
];

export const bankDetails = {
  bankName: 'Malayan Banking Berhad (Maybank)',
  accountHolder: 'Persatuan Penganut Sri Maha Mariamman & Sri Perumal Puchong Perdana',
  accountNumber: '5123 4567 8901',
  duitNowId: 'PPM-019-10-23091998',
  registrationNo: 'PPM/SEL/1998/0421',
  branch: 'Puchong Perdana Branch, Selangor',
  swiftCode: 'MBBEMYKL',
  taxExempt: 'Eligible for official tax-deductible receipt upon request',
};

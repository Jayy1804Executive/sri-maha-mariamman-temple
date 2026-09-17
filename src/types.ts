export type Language = 'en' | 'ms' | 'ta';

export interface DeityInfo {
  id: string;
  name: string;
  tamilName: string;
  malayName: string;
  title: string;
  description: string;
  mantra: string;
  specialDay: string;
  offerings: string[];
  image: string;
}

export interface PoojaTiming {
  id: string;
  name: string;
  tamilName: string;
  time: string;
  period: 'Morning' | 'Noon' | 'Evening' | 'Night';
  description: string;
  rituals: string[];
}

export interface FestivalInfo {
  id: string;
  name: string;
  tamilName: string;
  month: string;
  dateStr: string;
  significance: string;
  highlights: string[];
}

export interface TempleService {
  id: string;
  name: string;
  tamilName: string;
  category: 'archana' | 'abhishegam' | 'vahana' | 'homam' | 'samskara';
  suggestedDakshina: number; // in MYR
  description: string;
  includes: string[];
  duration: string;
}

export interface DonationCause {
  id: string;
  title: string;
  tamilTitle: string;
  description: string;
  targetOrSuggested: number[];
  icon: string;
  badge: string;
}

export interface HallAmenity {
  icon: string;
  title: string;
  description: string;
}

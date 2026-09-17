import { useState, useEffect } from 'react';
import { Language } from './types';
import { initialGallery, PhotoItem } from './data/templeData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { DeitiesSection } from './components/DeitiesSection';
import { PoojaScheduleSection } from './components/PoojaScheduleSection';
import { GalleryPostersSection } from './components/GalleryPostersSection';
import { UploadPosterModal } from './components/UploadPosterModal';
import { ServicesBookingSection } from './components/ServicesBookingSection';
import { BookingModal } from './components/BookingModal';
import { HallSection } from './components/HallSection';
import { DonationSection } from './components/DonationSection';
import { LocationEtiquetteSection } from './components/LocationEtiquetteSection';
import { Footer } from './components/Footer';
import { AudioMantraPlayer } from './components/AudioMantraPlayer';
import { FloatingActions } from './components/FloatingActions';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [galleryItems, setGalleryItems] = useState<PhotoItem[]>(() => {
    try {
      const saved = localStorage.getItem('temple_gallery_items');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load gallery from storage', e);
    }
    return initialGallery;
  });

  // Modal states
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingServiceId, setBookingServiceId] = useState<string | undefined>(undefined);
  const [bookingDeityName, setBookingDeityName] = useState<string | undefined>(undefined);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync gallery to localStorage
  const handleUploadSuccess = (newPhoto: PhotoItem) => {
    const updated = [newPhoto, ...galleryItems];
    setGalleryItems(updated);
    try {
      localStorage.setItem('temple_gallery_items', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save to local storage', e);
    }
    setToastMessage(`"${newPhoto.title}" has been published to the gallery!`);
    setTimeout(() => setToastMessage(null), 4000);

    // Smooth scroll to gallery section to see the new item
    const el = document.getElementById('posters-gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBookingModal = (serviceId?: string) => {
    setBookingServiceId(serviceId);
    setBookingDeityName(undefined);
    setIsBookingModalOpen(true);
  };

  const handleSelectDeityForBooking = (deityName: string) => {
    setBookingServiceId('archana-special');
    setBookingDeityName(deityName);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1F1F1F] font-sans antialiased selection:bg-[#D4AF37]/30 selection:text-[#6B111A] relative">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-[#6B111A] text-amber-100 px-5 py-3 rounded-2xl shadow-2xl border border-[#D4AF37] flex items-center gap-2 text-xs sm:text-sm animate-in slide-in-from-top-5">
          <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation Header */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenBookingModal={handleOpenBookingModal}
        onOpenUploadModal={() => setIsUploadModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          currentLang={currentLang}
          onOpenBookingModal={() => handleOpenBookingModal()}
          onOpenUploadModal={() => setIsUploadModalOpen(true)}
        />

        {/* 2. Heritage & About Section */}
        <AboutSection currentLang={currentLang} />

        {/* 3. Presiding Deities & Mantrams */}
        <DeitiesSection
          currentLang={currentLang}
          onSelectDeityForBooking={handleSelectDeityForBooking}
        />

        {/* 4. Daily Pooja Timetable & Festive Calendar */}
        <PoojaScheduleSection
          currentLang={currentLang}
          onOpenBookingModal={handleOpenBookingModal}
        />

        {/* 5. Pictures, Posters & Media Archive (Upload & View) */}
        <GalleryPostersSection
          currentLang={currentLang}
          galleryItems={galleryItems}
          onOpenUploadModal={() => setIsUploadModalOpen(true)}
        />

        {/* 6. Temple Ritual Services & Booking Portal */}
        <ServicesBookingSection
          currentLang={currentLang}
          onOpenBookingModal={handleOpenBookingModal}
        />

        {/* 7. Sri Mariamman Wedding & Cultural Hall */}
        <HallSection currentLang={currentLang} />

        {/* 8. e-Donations & Annadhanam Seva Portal */}
        <DonationSection currentLang={currentLang} />

        {/* 9. Location, Etiquette & Directions */}
        <LocationEtiquetteSection currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onOpenBookingModal={() => handleOpenBookingModal()}
        onOpenUploadModal={() => setIsUploadModalOpen(true)}
      />

      {/* Devotee & Admin Photo / Poster Upload Modal */}
      <UploadPosterModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onUploadSuccess={handleUploadSuccess}
      />

      {/* Pooja & Sankalpam Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialServiceId={bookingServiceId}
        initialDeityName={bookingDeityName}
        currentLang={currentLang}
      />

      {/* Sacred Temple Audio synthesizer */}
      <AudioMantraPlayer />

      {/* Floating Action Buttons */}
      <FloatingActions onOpenBookingModal={() => handleOpenBookingModal()} />

    </div>
  );
}

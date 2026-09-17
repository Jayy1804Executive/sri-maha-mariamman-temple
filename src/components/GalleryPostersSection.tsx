import { useState, useRef } from 'react';
import { 
  Image as ImageIcon, 
  Upload, 
  Download, 
  Share2, 
  Search, 
  X, 
  Maximize2, 
  Tag, 
  Sparkles, 
  Calendar, 
  User, 
  Check, 
  ChevronLeft, 
  ChevronRight,
  Filter
} from 'lucide-react';
import { PhotoItem, initialGallery } from '../data/templeData';
import { Language } from '../types';
import { translations } from '../data/translations';

interface GalleryPostersSectionProps {
  currentLang: Language;
  galleryItems: PhotoItem[];
  onOpenUploadModal: () => void;
}

export function GalleryPostersSection({ 
  currentLang, 
  galleryItems, 
  onOpenUploadModal 
}: GalleryPostersSectionProps) {
  const t = translations[currentLang];
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const categories = [
    { id: 'all', label: 'All Photos & Posters' },
    { id: 'posters', label: '📜 Festival Posters', isPosterOnly: true },
    { id: 'deities', label: '🪔 Deities & Alankarams' },
    { id: 'festivals', label: '🎉 Festivals & Processions' },
    { id: 'annadhanam', label: '🍲 Annadhanam Seva' },
    { id: 'hall', label: '🏛️ Cultural Hall & Weddings' },
  ];

  // Filter items
  const filteredPhotos = galleryItems.filter((item) => {
    const matchesCategory =
      activeCategory === 'all' ||
      (activeCategory === 'posters' ? item.isPoster || item.category === 'posters' : item.category === activeCategory);

    const matchesSearch =
      searchQuery.trim() === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.uploadedBy.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.tags && item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));

    return matchesCategory && matchesSearch;
  });

  const handleShareWhatsApp = (item: PhotoItem) => {
    const text = encodeURIComponent(
      `🕉️ Sri Maha Mariamman & Sri Perumal Temple, Puchong Perdana:\n\n*${item.title}*\n${item.description}\n\nDate: ${item.date}\nView at: ${window.location.href}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleCopyLink = (item: PhotoItem) => {
    navigator.clipboard.writeText(window.location.origin + '#' + item.id);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleDownload = (item: PhotoItem) => {
    const link = document.createElement('a');
    link.href = item.imageUrl;
    link.download = `${item.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navigatePhoto = (direction: 'next' | 'prev') => {
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
    if (currentIndex === -1) return;
    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % filteredPhotos.length;
      setSelectedPhoto(filteredPhotos[nextIndex]);
    } else {
      const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
      setSelectedPhoto(filteredPhotos[prevIndex]);
    }
  };

  return (
    <section id="posters-gallery" className="py-20 bg-[#FBF9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Upload Trigger */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6B111A]/10 border border-[#6B111A]/20 text-[#6B111A] text-xs font-bold uppercase tracking-wider mb-3">
              <ImageIcon className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Temple Media & Festival Archive</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F1F1F] font-cinzel">
              {t.galleryHeading}
            </h2>
            <p className="mt-2 text-base text-zinc-600 max-w-2xl">
              {t.gallerySubheading}
            </p>
          </div>

          {/* Prominent Upload Action Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenUploadModal}
              className="bg-gradient-to-r from-[#6B111A] to-[#8A1622] hover:from-[#8A1622] hover:to-[#A31B29] text-amber-100 font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm cursor-pointer border border-[#D4AF37]/50"
            >
              <Upload className="w-4 h-4 text-[#D4AF37]" />
              <span>{t.uploadPosterBtn}</span>
            </button>
          </div>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-amber-200/70 shadow-xs mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-[#6B111A] text-amber-100 shadow-xs'
                      : 'bg-amber-50 text-zinc-700 hover:bg-amber-100 border border-amber-200/60'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search posters, deities, events..."
                className="w-full pl-9 pr-8 py-1.5 text-xs bg-[#FBF9F5] border border-amber-200 rounded-lg focus:outline-hidden focus:border-[#6B111A] text-zinc-800"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Posters & Photos Grid */}
        {filteredPhotos.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-amber-300">
            <ImageIcon className="w-12 h-12 text-amber-400/80 mx-auto mb-3" />
            <p className="text-base font-bold text-zinc-700 font-cinzel">No media found matching criteria</p>
            <p className="text-xs text-zinc-500 mt-1">Try resetting your search query or upload a new photo.</p>
            <button
              onClick={onOpenUploadModal}
              className="mt-4 inline-flex items-center gap-1.5 text-xs bg-[#6B111A] text-amber-100 font-bold px-4 py-2 rounded-lg cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Upload Picture or Poster</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPhotos.map((item) => (
              <div
                key={item.id}
                id={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image & Overlay */}
                <div 
                  className={`relative overflow-hidden cursor-pointer bg-zinc-900 ${
                    item.isPoster ? 'aspect-3/4' : 'aspect-4/3'
                  }`}
                  onClick={() => setSelectedPhoto(item)}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span className="text-xs text-amber-200 font-semibold flex items-center gap-1">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Click to view & download</span>
                    </span>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1">
                    {item.isPoster ? (
                      <span className="px-2 py-0.5 rounded-md bg-[#6B111A] text-amber-200 text-[10px] font-bold tracking-wider uppercase border border-amber-400/40 shadow-xs">
                        📜 Official Poster
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-md bg-black/60 text-amber-200 text-[10px] font-bold tracking-wider uppercase backdrop-blur-xs border border-white/20">
                        {item.category}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 flex flex-col justify-between flex-1 space-y-3">
                  <div>
                    <h3 className="font-bold text-sm text-[#1F1F1F] font-cinzel line-clamp-2 leading-snug group-hover:text-[#6B111A] transition">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-600 line-clamp-2 mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-amber-100 space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-zinc-500">
                      <span className="flex items-center gap-1 truncate">
                        <User className="w-3 h-3 text-amber-600" />
                        <span className="truncate">{item.uploadedBy}</span>
                      </span>
                      <span className="flex items-center gap-1 shrink-0">
                        <Calendar className="w-3 h-3 text-amber-600" />
                        <span>{item.date}</span>
                      </span>
                    </div>

                    {/* Quick action buttons */}
                    <div className="flex items-center justify-between gap-2 pt-1">
                      <button
                        onClick={() => setSelectedPhoto(item)}
                        className="text-xs text-[#6B111A] hover:text-[#8A1622] font-bold flex items-center gap-1 cursor-pointer"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>View Details</span>
                      </button>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleShareWhatsApp(item)}
                          title="Share on WhatsApp"
                          className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition cursor-pointer"
                        >
                          <Share2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDownload(item)}
                          title="Download Image"
                          className="p-1.5 rounded-lg bg-amber-50 text-amber-800 hover:bg-amber-100 transition cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Fullscreen Lightbox & Poster Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
          {/* Close button */}
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-4 right-4 text-white hover:text-amber-300 p-2 rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer z-20"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={() => navigatePhoto('prev')}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-300 p-3 rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer z-20 hidden sm:block"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => navigatePhoto('next')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-300 p-3 rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer z-20 hidden sm:block"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div className="max-w-5xl w-full max-h-[90vh] bg-[#1F0407] border border-[#D4AF37]/50 rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            {/* Image display */}
            <div className="lg:w-3/5 bg-black flex items-center justify-center p-2 relative min-h-[300px] max-h-[60vh] lg:max-h-[85vh]">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="max-w-full max-h-full object-contain rounded"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Metadata & Actions */}
            <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[40vh] lg:max-h-[85vh] text-white">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2.5 py-0.5 rounded bg-[#6B111A] text-amber-200 border border-amber-400/40 font-bold uppercase">
                    {selectedPhoto.isPoster ? 'Official Festival Poster' : selectedPhoto.category}
                  </span>
                  <span className="text-xs text-amber-300/80">
                    {selectedPhoto.date}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-amber-100 leading-snug">
                  {selectedPhoto.title}
                </h3>

                <p className="text-sm text-amber-200/90 leading-relaxed">
                  {selectedPhoto.description}
                </p>

                <div className="pt-3 border-t border-amber-900/60 text-xs text-amber-300/70 space-y-1">
                  <p><span className="font-semibold text-white">Uploaded by:</span> {selectedPhoto.uploadedBy}</p>
                  {selectedPhoto.tags && selectedPhoto.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {selectedPhoto.tags.map((tag, idx) => (
                        <span key={idx} className="bg-amber-950/80 text-amber-200 px-2 py-0.5 rounded text-[11px] border border-amber-700/40">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-amber-900/60 space-y-3 mt-6">
                <button
                  onClick={() => handleDownload(selectedPhoto)}
                  className="w-full bg-gradient-to-r from-[#D4AF37] to-[#C5832B] hover:from-[#e5bd3b] hover:to-[#d68f30] text-[#3D0A0F] font-bold py-2.5 rounded-xl shadow-md transition flex items-center justify-center gap-2 text-sm cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download High-Resolution Image</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleShareWhatsApp(selectedPhoto)}
                    className="bg-emerald-700 hover:bg-emerald-600 text-white font-medium py-2 rounded-xl transition flex items-center justify-center gap-1.5 text-xs cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>

                  <button
                    onClick={() => handleCopyLink(selectedPhoto)}
                    className="bg-zinc-800 hover:bg-zinc-700 text-amber-200 font-medium py-2 rounded-xl transition flex items-center justify-center gap-1.5 text-xs cursor-pointer border border-amber-400/20"
                  >
                    {copiedLink ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied Link</span>
                      </>
                    ) : (
                      <>
                        <Tag className="w-3.5 h-3.5" />
                        <span>Copy Link</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}

import { useState, useRef, ChangeEvent, DragEvent, FormEvent } from 'react';
import { X, Upload, Image as ImageIcon, Sparkles, Check, AlertCircle, FileText } from 'lucide-react';
import { PhotoItem } from '../data/templeData';

interface UploadPosterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUploadSuccess: (newPhoto: PhotoItem) => void;
}

export function UploadPosterModal({ isOpen, onClose, onUploadSuccess }: UploadPosterModalProps) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<'posters' | 'deities' | 'festivals' | 'hall' | 'annadhanam'>('posters');
  const [uploadedBy, setUploadedBy] = useState('');
  const [description, setDescription] = useState('');
  const [isPoster, setIsPoster] = useState(true);
  const [tagInput, setTagInput] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setErrorMsg('Please select a valid image file (JPG, PNG, WebP).');
      return;
    }
    if (file.size > 15 * 1024 * 1024) {
      setErrorMsg('Image size must be under 15MB.');
      return;
    }

    setErrorMsg('');
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setImagePreview(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const onDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => {
    setIsDragging(false);
  };

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!imagePreview) {
      setErrorMsg('Please upload or select an image or poster first.');
      return;
    }
    if (!title.trim()) {
      setErrorMsg('Please provide a title for the photo or festival poster.');
      return;
    }

    setIsSubmitting(true);

    const tags = tagInput
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    const newPhoto: PhotoItem = {
      id: `user-upload-${Date.now()}`,
      title: title.trim(),
      category,
      imageUrl: imagePreview,
      date: new Date().toISOString().split('T')[0],
      uploadedBy: uploadedBy.trim() || 'Temple Devotee',
      description: description.trim() || 'Sacred photograph uploaded to the temple gallery.',
      tags: tags.length > 0 ? tags : [category, 'Temple Photo'],
      isPoster,
    };

    onUploadSuccess(newPhoto);
    setIsSubmitting(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in">
      <div className="bg-[#FBF9F5] rounded-3xl border border-[#D4AF37]/50 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative my-auto">
        
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
            <span>Devotee & Admin Portal</span>
          </div>
          <h3 className="text-2xl font-bold font-cinzel text-amber-100">
            Upload Picture or Festival Poster
          </h3>
          <p className="text-xs sm:text-sm text-amber-200/80 mt-1">
            Share high-quality photographs, deity alankarams, or festival announcement posters with the Puchong Perdana temple community.
          </p>
        </div>

        {/* Upload Form */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Drag and drop image container */}
          <div>
            <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">
              Image / Poster File *
            </label>
            <div
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition flex flex-col items-center justify-center min-h-[160px] ${
                isDragging
                  ? 'border-[#6B111A] bg-amber-100/50'
                  : imagePreview
                  ? 'border-emerald-500 bg-emerald-50/30'
                  : 'border-amber-300 hover:border-amber-500 bg-white'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={(e) => e.target.files?.[0] && handleFileChange(e.target.files[0])}
                className="hidden"
              />

              {imagePreview ? (
                <div className="relative group w-full flex flex-col items-center">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="max-h-48 rounded-xl object-contain shadow-md border border-amber-200"
                  />
                  <p className="text-xs text-emerald-700 font-bold mt-2 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>Image Selected! Click or drop another to replace.</span>
                  </p>
                </div>
              ) : (
                <>
                  <div className="w-12 h-12 rounded-full bg-amber-100 text-[#6B111A] flex items-center justify-center mb-2">
                    <Upload className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <p className="text-sm font-bold text-zinc-800">
                    Click to browse or drag & drop poster / photo here
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">
                    Supports high-resolution JPG, PNG, WebP up to 15MB
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Title input */}
          <div>
            <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
              Title / Event Name *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Navarathri Day 5 Saraswati Alankaram / Chitra Pournami Notice"
              className="w-full px-3.5 py-2.5 bg-white border border-amber-200 rounded-xl text-sm text-zinc-900 focus:outline-hidden focus:border-[#6B111A]"
            />
          </div>

          {/* Category selection & Is Poster checkbox */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                Category *
              </label>
              <select
                value={category}
                onChange={(e) => {
                  const val = e.target.value as any;
                  setCategory(val);
                  if (val === 'posters') setIsPoster(true);
                }}
                className="w-full px-3.5 py-2.5 bg-white border border-amber-200 rounded-xl text-sm text-zinc-900 focus:outline-hidden focus:border-[#6B111A]"
              >
                <option value="posters">📜 Official Festival Poster</option>
                <option value="deities">🪔 Deity Alankaram</option>
                <option value="festivals">🎉 Festival / Procession</option>
                <option value="annadhanam">🍲 Annadhanam Seva</option>
                <option value="hall">🏛️ Cultural Hall & Wedding</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
                Your Name / Organization
              </label>
              <input
                type="text"
                value={uploadedBy}
                onChange={(e) => setUploadedBy(e.target.value)}
                placeholder="e.g. Temple Media / Devotee Kumar"
                className="w-full px-3.5 py-2.5 bg-white border border-amber-200 rounded-xl text-sm text-zinc-900 focus:outline-hidden focus:border-[#6B111A]"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
              Description / Schedule Details
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Provide context, special timings, or pooja significance..."
              className="w-full px-3.5 py-2.5 bg-white border border-amber-200 rounded-xl text-sm text-zinc-900 focus:outline-hidden focus:border-[#6B111A]"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1">
              Tags (comma-separated)
            </label>
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              placeholder="e.g. Navarathri, Mariamman, Puchong, Abhishegam"
              className="w-full px-3.5 py-2.5 bg-white border border-amber-200 rounded-xl text-sm text-zinc-900 focus:outline-hidden focus:border-[#6B111A]"
            />
          </div>

          {/* Mark as Poster Checkbox */}
          <div className="flex items-center gap-2 p-3 bg-amber-50 rounded-xl border border-amber-200">
            <input
              type="checkbox"
              id="isPosterCheck"
              checked={isPoster}
              onChange={(e) => setIsPoster(e.target.checked)}
              className="w-4 h-4 text-[#6B111A] rounded border-amber-300 focus:ring-[#6B111A]"
            />
            <label htmlFor="isPosterCheck" className="text-xs font-semibold text-zinc-800 cursor-pointer">
              Tag as Official Announcement Poster (Highlights in the posters filter with high-res download)
            </label>
          </div>

          {/* Form CTAs */}
          <div className="pt-4 border-t border-amber-200 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-zinc-600 hover:bg-zinc-100 transition cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-[#6B111A] to-[#8A1622] hover:from-[#8A1622] hover:to-[#A31B29] text-amber-100 font-bold px-6 py-2.5 rounded-xl shadow-md transition flex items-center gap-2 text-sm cursor-pointer border border-[#D4AF37]/50"
            >
              <Upload className="w-4 h-4 text-[#D4AF37]" />
              <span>{isSubmitting ? 'Publishing...' : 'Publish to Gallery'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

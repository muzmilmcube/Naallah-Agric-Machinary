import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from '../../types';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: GalleryItem[];
  currentIndex: number;
  onSelectIndex: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  items,
  currentIndex,
  onSelectIndex,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, items]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  const handlePrev = () => {
    onSelectIndex((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    onSelectIndex((currentIndex + 1) % items.length);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn"
      onClick={onClose}
    >
      {/* Close Button Top Right */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
        title="Close (Esc)"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="absolute left-4 sm:left-8 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors border border-white/20 hidden sm:flex items-center justify-center"
        title="Previous Image (Left Arrow)"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-4 sm:right-8 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors border border-white/20 hidden sm:flex items-center justify-center"
        title="Next Image (Right Arrow)"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div 
        className="max-w-5xl w-full flex flex-col items-center animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-h-[75vh] w-full flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl bg-black/40">
          <img
            src={currentItem.imageUrl}
            alt={currentItem.title}
            className="max-h-[75vh] max-w-full object-contain rounded-xl"
          />
        </div>

        {/* Caption & Metadata Bar */}
        <div className="w-full mt-4 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-0.5 rounded bg-emerald-700 text-amber-300 text-[10px] font-bold uppercase tracking-wider">
                {currentItem.categoryLabel}
              </span>
              <span className="text-xs text-slate-300">
                Photo {currentIndex + 1} of {items.length}
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-bold font-display mt-1">
              {currentItem.title}
            </h4>
            <p className="text-xs sm:text-sm text-emerald-100/80 mt-0.5">
              {currentItem.caption}
            </p>
          </div>

          {/* Mobile Prev / Next Buttons */}
          <div className="flex sm:hidden items-center space-x-2 w-full justify-between pt-2 border-t border-white/10">
            <button
              onClick={handlePrev}
              className="px-3 py-1.5 rounded-lg bg-white/15 text-xs font-semibold"
            >
              Previous
            </button>
            <span className="text-xs text-slate-300">{currentIndex + 1} / {items.length}</span>
            <button
              onClick={handleNext}
              className="px-3 py-1.5 rounded-lg bg-white/15 text-xs font-semibold"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

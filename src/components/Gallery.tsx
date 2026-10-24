import React, { useState, useMemo } from 'react';
import { 
  Maximize2, 
  Camera 
} from 'lucide-react';
import type { GalleryItem, GalleryCategory } from '../types';

interface GalleryProps {
  galleryItems: GalleryItem[];
  onOpenLightbox: (item: GalleryItem, index: number) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ galleryItems, onOpenLightbox }) => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');

  const categories: { key: GalleryCategory; label: string }[] = [
    { key: 'all', label: 'All Photos' },
    { key: 'machinery', label: 'Machinery & Equipment' },
    { key: 'generators', label: 'Generators' },
    { key: 'tractors', label: 'Tractor Operations' },
    { key: 'poultry', label: 'Poultry Farming' },
    { key: 'fish', label: 'Fish Farming' },
    { key: 'irrigation', label: 'Irrigation Systems' },
  ];

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [galleryItems, activeCategory]);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#f7f5ed] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-[#0f3d24] text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5 text-emerald-700" />
            <span>Visual Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a2919] tracking-tight font-display">
            Our Operations &amp; Equipment Gallery
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Take a visual tour of our machinery, tractors in action, poultry housing, and aquaculture fish ponds.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-600 to-amber-500 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.key
                  ? 'bg-[#0f3d24] text-white shadow-md'
                  : 'bg-white hover:bg-emerald-50 text-slate-700 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item, index)}
              className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 bg-slate-900 border border-slate-200/60"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Top Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-amber-300 text-[11px] font-semibold uppercase tracking-wider border border-white/20">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-lg bg-emerald-600/90 text-white flex items-center justify-center shadow-md">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Caption Info */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h3 className="text-sm font-bold leading-tight font-display line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-[11px] text-emerald-200/90 mt-1 line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

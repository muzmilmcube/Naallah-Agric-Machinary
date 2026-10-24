import React, { useState, useMemo } from 'react';
import { 
  Search, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles, 
  HelpCircle,
  Eye
} from 'lucide-react';
import type { MachineryItem, MachineryCategory } from '../types';

interface MachineryShowcaseProps {
  machineryList: MachineryItem[];
  onEnquireItem: (item: MachineryItem) => void;
  onViewSpecs: (item: MachineryItem) => void;
}

export const MachineryShowcase: React.FC<MachineryShowcaseProps> = ({
  machineryList,
  onEnquireItem,
  onViewSpecs,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<MachineryCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { key: MachineryCategory; label: string }[] = [
    { key: 'all', label: 'All Machinery' },
    { key: 'tractors', label: 'Tractors & Field' },
    { key: 'generators', label: 'Generators & Power' },
    { key: 'irrigation', label: 'Pumps & Irrigation' },
    { key: 'poultry', label: 'Poultry Equipment' },
    { key: 'fish', label: 'Fish Farming Equipment' },
    { key: 'processing', label: 'Agro-Processing' },
  ];

  const filteredItems = useMemo(() => {
    return machineryList.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.application.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [machineryList, selectedCategory, searchQuery]);

  return (
    <section id="machinery" className="py-20 lg:py-28 bg-[#f7f5ed] relative overflow-hidden">
      {/* Background Equipment Silhouettes */}
      <div className="absolute top-10 right-4 opacity-[0.035] pointer-events-none select-none text-emerald-950">
        <svg className="w-[360px] h-[280px]" viewBox="0 0 500 360" fill="none" stroke="currentColor" strokeWidth="3">
          <rect x="70" y="80" width="340" height="180" rx="10" />
          <rect x="90" y="100" width="130" height="145" />
          <line x1="110" y1="130" x2="200" y2="130" />
          <line x1="110" y1="145" x2="200" y2="145" />
          <line x1="110" y1="160" x2="200" y2="160" />
          <rect x="50" y="260" width="380" height="40" rx="6" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-[#0f3d24] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              <span>Equipment Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a2919] tracking-tight font-display">
              Agricultural Machinery Showcase
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl">
              Browse our selection of durable tractors, heavy generators, irrigation water pumps, poultry systems, and agro-processing machinery.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-xs text-slate-500 bg-white/80 p-3 rounded-xl border border-slate-200">
            <span className="font-semibold text-emerald-900 block">Pricing &amp; Availability Note:</span>
            Prices and delivery timelines provided upon enquiry to reflect current market rates and customization.
          </div>
        </div>

        {/* Filter Controls: Search & Category Pills */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-slate-200/80 mb-10 space-y-4">
          <div className="flex flex-col lg:flex-row items-center gap-4">
            
            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search machinery, specs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700 bg-slate-50/50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center space-x-2 overflow-x-auto w-full pb-2 lg:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    selectedCategory === cat.key
                      ? 'bg-[#0f3d24] text-white shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
            <HelpCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No machinery matching your search</h3>
            <p className="text-sm text-slate-500 mt-1">Try resetting the category filter or searching with different terms.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-emerald-100 text-emerald-800 text-sm font-semibold hover:bg-emerald-200"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-emerald-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Badges */}
                  <div className="relative h-56 overflow-hidden bg-slate-900">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Category Label */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-[#0a2919]/90 text-amber-300 border border-emerald-500/30 text-[11px] font-bold uppercase tracking-wide backdrop-blur-sm">
                        {item.categoryLabel}
                      </span>
                    </div>

                    {/* Optional Badge */}
                    {item.badge && (
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-1 rounded-md bg-amber-500 text-slate-950 font-extrabold text-[11px] uppercase tracking-wider shadow">
                          {item.badge}
                        </span>
                      </div>
                    )}

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                      <span className="font-semibold text-emerald-200">Price on Enquiry</span>
                      <span className="text-slate-300 text-[11px]">Gombe, Nigeria</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg font-bold text-[#0a2919] group-hover:text-emerald-700 transition-colors font-display leading-snug">
                      {item.name}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Key Specs Preview */}
                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                        Specifications:
                      </span>
                      {item.keySpecs.slice(0, 2).map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-start space-x-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-5 pt-0 sm:p-6 sm:pt-0">
                  <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                    <button
                      onClick={() => onEnquireItem(item)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-[#0f3d24] hover:bg-[#14532d] text-white font-semibold text-xs sm:text-sm transition-colors text-center flex items-center justify-center space-x-1.5 shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                      <span>Request Quote</span>
                    </button>

                    <button
                      onClick={() => onViewSpecs(item)}
                      className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center"
                      title="View Details & Specs"
                    >
                      <Eye className="w-3.5 h-3.5 mr-1" />
                      <span>Specs</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

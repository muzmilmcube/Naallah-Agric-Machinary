import React from 'react';
import { 
  X, 
  CheckCircle2, 
  MessageSquare, 
  Wrench, 
  ShieldCheck 
} from 'lucide-react';
import type { MachineryItem } from '../../types';

interface MachineryDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: MachineryItem | null;
  onEnquire: (item: MachineryItem) => void;
}

export const MachineryDetailModal: React.FC<MachineryDetailModalProps> = ({
  isOpen,
  onClose,
  item,
  onEnquire,
}) => {
  if (!isOpen || !item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-scaleUp max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-60 bg-slate-900 shrink-0">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-[#0a2919]/90 text-amber-300 text-xs font-bold uppercase tracking-wider border border-white/20">
              {item.categoryLabel}
            </span>
          </div>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <h3 className="text-xl sm:text-2xl font-bold font-display leading-tight">
              {item.name}
            </h3>
            <div className="flex items-center space-x-3 mt-1 text-xs text-emerald-200">
              <span>Price on Enquiry</span>
              <span>•</span>
              <span>Available via NAALLAH Gombe</span>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-5 flex-1">
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Equipment Overview
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Key Specs */}
          <div className="p-4 rounded-2xl bg-[#fcfbf7] border border-slate-200/80">
            <h4 className="text-xs font-bold text-[#0a2919] uppercase tracking-wider mb-3 flex items-center">
              <Wrench className="w-4 h-4 text-emerald-600 mr-1.5" />
              <span>Technical Specifications &amp; Features</span>
            </h4>
            <div className="space-y-2">
              {item.keySpecs.map((spec, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Applications */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Recommended Agricultural Applications
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 bg-emerald-50/60 p-3 rounded-xl border border-emerald-100">
              {item.application}
            </p>
          </div>

          {/* Notice */}
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <p>
              Equipment availability, custom capacities, implements, and shipping schedules are handled directly through NAALLAH GENERATORS AND AGRIC MACHINERIES.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500 hidden sm:block">
            <span>CAC Reg: 7805170 • Gombe State</span>
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200 transition-colors"
            >
              Back
            </button>
            <button
              onClick={() => {
                onClose();
                onEnquire(item);
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-[#0f3d24] hover:bg-[#14532d] text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center space-x-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-amber-300" />
              <span>Request Quote for this Machine</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

import React from 'react';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import type { BusinessInfo } from '../types';
import { formatWhatsAppNumber } from '../data/businessInfo';

interface QuickActionBarProps {
  businessInfo: BusinessInfo;
  onRequestQuote: () => void;
}

export const QuickActionBar: React.FC<QuickActionBarProps> = ({
  businessInfo,
  onRequestQuote,
}) => {
  const cleanWhatsAppNumber = formatWhatsAppNumber(businessInfo.whatsappNumber);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] py-2.5 px-4 md:hidden">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        
        {/* Call Now */}
        <a
          href={`tel:${businessInfo.phone}`}
          className="flex-1 py-2 px-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex flex-col items-center justify-center transition-colors"
        >
          <Phone className="w-4 h-4 text-emerald-700 mb-0.5" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Chat */}
        {cleanWhatsAppNumber && cleanWhatsAppNumber.length > 5 && (
          <a
            href={`https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(
              'Hello NAALLAH GENERATORS AND AGRIC MACHINERIES, I am inquiring from your website.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex flex-col items-center justify-center transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-amber-300 mb-0.5" />
            <span>WhatsApp</span>
          </a>
        )}

        {/* Request Quote */}
        <button
          onClick={onRequestQuote}
          className="flex-1 py-2 px-2 rounded-xl bg-[#0f3d24] hover:bg-[#14532d] text-white text-xs font-bold flex flex-col items-center justify-center transition-colors shadow-sm"
        >
          <FileText className="w-4 h-4 text-amber-400 mb-0.5" />
          <span>Get Quote</span>
        </button>

      </div>
    </div>
  );
};

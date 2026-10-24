import React from 'react';
import { 
  Wrench, 
  Layers, 
  TrendingUp, 
  Users, 
  Sprout, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';
import type { BusinessInfo } from '../types';

interface WhyChooseUsProps {
  businessInfo: BusinessInfo;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ businessInfo }) => {
  const pillars = [
    {
      icon: <Wrench className="w-6 h-6 text-emerald-600" />,
      title: 'Agricultural Machinery Solutions',
      description: 'Supplying heavy tractors, reliable generators, water pumps, and food processing machines tailored to the practical demands of Nigerian agriculture.'
    },
    {
      icon: <Layers className="w-6 h-6 text-emerald-600" />,
      title: 'Multiple Agricultural Business Activities',
      description: 'Unique synergy offering machinery sales alongside active commercial poultry and fish farming, giving us hands-on operational insight into farming challenges.'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
      title: 'Commitment to Farming Productivity',
      description: 'Dedicated to helping farmers improve operational efficiency, lower labor costs, minimize crop losses, and boost seasonal harvest volumes.'
    },
    {
      icon: <Users className="w-6 h-6 text-emerald-600" />,
      title: 'Customer-Focused Service',
      description: 'Attentive customer consultation, clear equipment guidance, and honest recommendations to help you select the exact machinery your farm requires.'
    },
    {
      icon: <Sprout className="w-6 h-6 text-emerald-600" />,
      title: 'Support for Agricultural Development',
      description: 'Active contribution to regional food security, supporting young agricultural entrepreneurs, farming cooperatives, and commercial farming initiatives in Nigeria.'
    },
    {
      icon: <MapPin className="w-6 h-6 text-emerald-600" />,
      title: 'Convenient Location in Gombe State',
      description: `Centrally positioned at No. 7 Khairat Plaza, Along Sabonline Street, Gombe, providing accessible consultation and streamlined regional distribution.`
    }
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Equipment Silhouette */}
      <div className="absolute -left-12 bottom-6 opacity-[0.035] pointer-events-none select-none text-emerald-950">
        <svg className="w-[380px] h-[300px]" viewBox="0 0 450 380" fill="none" stroke="currentColor" strokeWidth="4">
          <rect x="60" y="140" width="180" height="120" rx="8" />
          <line x1="90" y1="140" x2="90" y2="260" />
          <line x1="120" y1="140" x2="120" y2="260" />
          <line x1="150" y1="140" x2="150" y2="260" />
          <circle cx="300" cy="200" r="70" />
          <rect x="280" y="60" width="40" height="75" />
          <line x1="270" y1="60" x2="330" y2="60" strokeWidth="6" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0f3d24] text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Value &amp; Credibility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a2919] tracking-tight font-display">
            Why Choose Our Business
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A registered Nigerian enterprise grounded in dependable machinery, practical farming experience, and customer-first service.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-600 to-amber-500 rounded-full mx-auto mt-4"></div>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#fcfbf7] border border-slate-200/90 hover:border-emerald-500/60 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-emerald-200 flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:bg-[#0f3d24] group-hover:text-white transition-all">
                  {pillar.icon}
                </div>
                
                <h3 className="mt-5 text-xl font-bold text-[#0a2919] group-hover:text-emerald-700 transition-colors font-display">
                  {pillar.title}
                </h3>
                
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center text-xs font-semibold text-emerald-800">
                <CheckCircle2 className="w-4 h-4 mr-1.5 text-emerald-600" />
                <span>Verified Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with CAC Reference */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0a2919] to-[#0f3d24] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-emerald-700/40">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Official Registered Business</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold font-display text-white">
              NAALLAH GENERATORS AND AGRIC MACHINERIES
            </h4>
            <p className="text-xs sm:text-sm text-emerald-100/80">
              Registration Number: {businessInfo.regNumber} • Registered 7 August 2024 • Gombe State, Nigeria
            </p>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-colors"
            >
              Visit Our Office
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

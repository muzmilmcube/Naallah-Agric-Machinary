import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  MapPin, 
  Wrench, 
  Egg, 
  Fish, 
  ChevronDown 
} from 'lucide-react';
import type { BusinessInfo } from '../types';

interface HeroProps {
  businessInfo: BusinessInfo;
  onExploreServices: () => void;
  onContactBusiness: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  businessInfo,
  onExploreServices,
  onContactBusiness,
}) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Image with Dark Forest Green Tint and Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=2000&q=85"
          alt="Modern agricultural tractor operating on farm field"
          className="w-full h-full object-cover object-center transform scale-105 animate-subtleZoom"
        />
        {/* Layered deep forest green gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#051a10]/95 via-[#0a2919]/85 to-[#051a10]/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#051a10] via-transparent to-[#051a10]/60"></div>
        {/* Subtle patterned grid overlay for technical/machinery texture */}
        <div 
          className="absolute inset-0 opacity-10 bg-[radial-gradient(#15803d_1px,transparent_1px)] [background-size:24px_24px]"
        ></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col items-center text-center">
        
        {/* CAC Registration & Credibility Pill */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-900/70 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md shadow-lg">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>Officially Registered with CAC Nigeria</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
          <span className="text-white font-bold">BN: {businessInfo.regNumber}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.1] font-display">
          POWERING AGRICULTURE. <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-300 to-emerald-200">
            EQUIPPING THE FUTURE.
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-emerald-100/90 max-w-3xl leading-relaxed font-normal">
          Your trusted partner in agricultural machinery, poultry farming, and fish farming solutions in Nigeria. We are committed to supporting agricultural productivity through modern equipment and farming activities.
        </p>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onExploreServices}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-[#15803d] hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-base shadow-lg shadow-emerald-950/40 hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2 group border border-emerald-400/30"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-5 h-5 text-amber-300 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onContactBusiness}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base backdrop-blur-md border border-white/25 hover:border-white/40 transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>Contact Our Business</span>
          </button>
        </div>

        {/* Three Core Registered Pillars Grid */}
        <div className="mt-14 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl text-left">
          {/* Pillar 1: Machinery */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-emerald-500/20 hover:border-emerald-500/50 transition-colors group">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-9 h-9 rounded-lg bg-emerald-800/60 border border-emerald-500/30 flex items-center justify-center text-amber-300">
                <Wrench className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block">Activity 01</span>
                <h2 className="text-base font-bold text-white leading-tight">Sale of Agric Machineries</h2>
              </div>
            </div>
            <p className="text-xs text-emerald-100/75 leading-relaxed">
              Tractors, silent generators, water pumps, irrigation kits, and food processing machines.
            </p>
          </div>

          {/* Pillar 2: Poultry */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-emerald-500/20 hover:border-emerald-500/50 transition-colors group">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-9 h-9 rounded-lg bg-emerald-800/60 border border-emerald-500/30 flex items-center justify-center text-amber-300">
                <Egg className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block">Activity 02</span>
                <h2 className="text-base font-bold text-white leading-tight">Poultry Farming</h2>
              </div>
            </div>
            <p className="text-xs text-emerald-100/75 leading-relaxed">
              Modern poultry housing, healthy broilers and layers, fresh table eggs, and biosecure operations.
            </p>
          </div>

          {/* Pillar 3: Fish Farming */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-emerald-500/20 hover:border-emerald-500/50 transition-colors group">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-9 h-9 rounded-lg bg-emerald-800/60 border border-emerald-500/30 flex items-center justify-center text-amber-300">
                <Fish className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block">Activity 03</span>
                <h2 className="text-base font-bold text-white leading-tight">Fish Farming</h2>
              </div>
            </div>
            <p className="text-xs text-emerald-100/75 leading-relaxed">
              Catfish production, modern aquaculture ponds, fingerlings, aeration systems, and quality fish harvest.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 text-emerald-300/60 flex flex-col items-center animate-bounce">
          <span className="text-[11px] font-medium tracking-widest uppercase mb-1">Explore</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { 
  Calendar, 
  MapPin, 
  FileCheck, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';
import type { BusinessInfo } from '../types';

interface AboutProps {
  businessInfo: BusinessInfo;
  onExploreMachinery: () => void;
}

export const About: React.FC<AboutProps> = ({ businessInfo, onExploreMachinery }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#fbf9f4] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-100/40 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-amber-100/30 blur-3xl pointer-events-none"></div>

      {/* Subtle Agricultural Equipment Background Silhouette */}
      <div className="absolute -right-10 bottom-0 opacity-[0.04] pointer-events-none select-none text-emerald-950">
        <svg className="w-[450px] h-[340px]" viewBox="0 0 600 450" fill="none" stroke="currentColor" strokeWidth="4">
          <circle cx="160" cy="300" r="100" />
          <circle cx="160" cy="300" r="65" strokeDasharray="10 8" />
          <circle cx="430" cy="340" r="60" />
          <path d="M 120 200 L 220 200 L 260 120 L 160 120 Z" />
          <path d="M 260 200 L 460 200 L 470 270 L 470 320 L 260 320" />
          <path d="M 300 200 L 300 100 L 310 90 L 315 100 L 315 200" />
          <rect x="70" y="270" width="60" height="30" rx="4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag */}
        <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-[#0f3d24] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>About Our Business</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a2919] tracking-tight font-display max-w-3xl">
            Growing Agriculture Through Innovation
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-600 to-amber-500 rounded-full mt-4"></div>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story & Commitment */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed font-normal">
              <strong className="text-[#0a2919] font-bold">NAALLAH GENERATORS AND AGRIC MACHINERIES</strong> is a registered Nigerian enterprise established to foster sustainable agricultural development, farm mechanization, and food security.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              Operating across three primary business activities—<span className="font-semibold text-[#0f3d24]">Sale of Agricultural Machineries</span>, <span className="font-semibold text-[#0f3d24]">Poultry Farming</span>, and <span className="font-semibold text-[#0f3d24]">Fish Farming</span>—our core focus is providing reliable tools and modern farming methods that allow agricultural enterprises to flourish.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              We are passionately committed to supporting farmers, agricultural entrepreneurs, cooperative societies, and individuals interested in modern farming. From smallholder farmers striving to mechanize land preparation to commercial investors developing integrated fish ponds and poultry houses, we provide the practical machinery, robust equipment, and farming activities essential for peak productivity.
            </p>

            {/* Core Commitments List */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-white border border-emerald-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">
                  Reliable Agricultural Machinery &amp; Spares
                </span>
              </div>
              <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-white border border-emerald-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">
                  Modern Commercial Poultry Practices
                </span>
              </div>
              <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-white border border-emerald-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">
                  Sustainable Fish &amp; Aquaculture Operations
                </span>
              </div>
              <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-white border border-emerald-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">
                  Dedicated Customer Support in Gombe State
                </span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={onExploreMachinery}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-[#0f3d24] hover:bg-[#14532d] text-white font-semibold text-sm shadow-md transition-colors group"
              >
                <span>View Machinery Catalog</span>
                <ArrowUpRight className="w-4 h-4 text-amber-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: High Quality Image & Official CAC Verification Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Image Container with Styled Frame */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
              <img
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=900&q=80"
                alt="Agricultural landscape with modern farming activities"
                className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2919]/90 via-[#0a2919]/30 to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                  Agricultural Development
                </span>
                <p className="text-sm font-semibold mt-0.5">
                  Empowering Nigerian agriculture through innovation, quality machinery, and modern livestock farming.
                </p>
              </div>
            </div>

            {/* Official CAC Information Card */}
            <div className="bg-white rounded-2xl p-6 border border-emerald-200/80 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full pointer-events-none"></div>

              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#0f3d24]">
                  <FileCheck className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-[#0a2919] uppercase tracking-wider">
                    Official CAC Registration
                  </h3>
                  <span className="text-xs text-emerald-700 font-semibold">Corporate Affairs Commission, Nigeria</span>
                </div>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm divide-y divide-slate-100">
                <div className="pt-2 flex justify-between items-start">
                  <span className="text-slate-500 font-medium">Business Name</span>
                  <span className="font-bold text-slate-800 text-right max-w-[60%]">
                    {businessInfo.name}
                  </span>
                </div>

                <div className="pt-2 flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Registration Number</span>
                  <span className="font-bold text-[#0f3d24] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-mono">
                    BN: {businessInfo.regNumber}
                  </span>
                </div>

                <div className="pt-2 flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Registration Date</span>
                  <span className="font-semibold text-slate-800 flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1 text-slate-400" />
                    {businessInfo.regDate}
                  </span>
                </div>

                <div className="pt-2 flex justify-between items-start">
                  <span className="text-slate-500 font-medium">Registered Address</span>
                  <span className="font-semibold text-slate-800 text-right max-w-[65%] flex items-start justify-end">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-emerald-600 shrink-0 mt-0.5" />
                    {businessInfo.address}
                  </span>
                </div>

                <div className="pt-2">
                  <span className="text-slate-500 font-medium block mb-1.5">Registered Activities</span>
                  <ol className="list-decimal list-inside space-y-1 text-slate-700 font-semibold text-xs pl-1">
                    {businessInfo.activities.map((act, index) => (
                      <li key={index} className="text-emerald-900">{act}</li>
                    ))}
                  </ol>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

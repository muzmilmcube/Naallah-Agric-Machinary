import React from 'react';
import { 
  Fish, 
  Waves, 
  Droplets, 
  Activity, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';

interface FishFarmingSectionProps {
  onEnquireFish: () => void;
}

export const FishFarmingSection: React.FC<FishFarmingSectionProps> = ({ onEnquireFish }) => {
  const aquacultureFeatures = [
    {
      title: 'Earthen & Concrete Pond Systems',
      desc: 'Engineered fish ponds constructed for continuous water exchange, easy harvesting, and high stocking densities.',
      icon: <Waves className="w-5 h-5 text-emerald-600" />
    },
    {
      title: 'African Catfish (Clarias) Specialization',
      desc: 'Selective rearing of vigorous, disease-resistant African catfish with proven feed-to-meat conversion rates.',
      icon: <Fish className="w-5 h-5 text-emerald-600" />
    },
    {
      title: 'Active Water Aeration & Management',
      desc: 'Use of mechanical paddlewheel aerators and water circulation pumps to maintain high dissolved oxygen levels.',
      icon: <Droplets className="w-5 h-5 text-emerald-600" />
    },
    {
      title: 'Fingerling to Table-Size Supply',
      desc: 'Carefully graded fingerlings, post-fingerlings, and market-ready table fish available for commercial and household buyers.',
      icon: <Activity className="w-5 h-5 text-emerald-600" />
    }
  ];

  return (
    <section id="fish-farming" className="py-20 lg:py-28 bg-[#fbf9f4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0f3d24] text-xs font-bold uppercase tracking-wider mb-3">
            <Fish className="w-3.5 h-3.5 text-emerald-600" />
            <span>Division 03 • Aquaculture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a2919] tracking-tight font-display">
            Sustainable Fish Farming &amp; Aquaculture
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Harnessing modern aquaculture systems, water quality management, and premium catfish production to contribute to food security in Gombe State and beyond.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-600 to-amber-500 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Content Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative & Feature Highlights */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a2919] font-display">
              Commercial Aquaculture Built for High Yields &amp; Quality
            </h3>
            
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Fish farming at <strong className="text-[#0f3d24]">NAALLAH GENERATORS AND AGRIC MACHINERIES</strong> combines modern aquaculture technology with disciplined pond hydrology. Our operations emphasize maintaining optimal water chemistry, bio-filtration, and consistent protein nourishment to nurture healthy, market-grade catfish.
            </p>

            <div className="space-y-4 pt-2">
              {aquacultureFeatures.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-white border border-slate-200/80 hover:border-emerald-300 transition-colors shadow-sm"
                >
                  <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">{item.title}</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onEnquireFish}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0f3d24] hover:bg-[#14532d] text-white font-semibold text-sm shadow-md transition-colors flex items-center justify-center space-x-2"
              >
                <span>Enquire on Fish &amp; Fingerlings</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </button>
              
              <div className="text-xs text-slate-500 flex items-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-1.5 shrink-0" />
                <span>Live table catfish and fingerling bookings</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase Bento */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-md group relative h-56 sm:h-64">
                <img
                  src="https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=700&q=80"
                  alt="Aquaculture fish pond facilities"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute bottom-3 left-3 text-white text-xs font-bold">
                  Commercial Fish Ponds
                </span>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-md group relative h-40 sm:h-44">
                <img
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=700&q=80"
                  alt="Catfish nursery and tanks"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute bottom-3 left-3 text-white text-xs font-bold">
                  Aquaculture Tanks
                </span>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="rounded-2xl overflow-hidden shadow-md group relative h-40 sm:h-44">
                <img
                  src="https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=700&q=80"
                  alt="Fish in pristine water tank"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute bottom-3 left-3 text-white text-xs font-bold">
                  Healthy Fish Stocks
                </span>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-md group relative h-56 sm:h-64">
                <img
                  src="https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=700&q=80"
                  alt="Water pumping and pond circulation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute bottom-3 left-3 text-white text-xs font-bold">
                  Water Aeration Systems
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

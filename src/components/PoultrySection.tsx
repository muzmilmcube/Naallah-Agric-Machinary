import React from 'react';
import { 
  Egg, 
  ShieldCheck, 
  Layers, 
  ThermometerSun, 
  ArrowRight, 
  HeartHandshake 
} from 'lucide-react';

interface PoultrySectionProps {
  onEnquirePoultry: () => void;
}

export const PoultrySection: React.FC<PoultrySectionProps> = ({ onEnquirePoultry }) => {
  const poultryHighlights = [
    {
      title: 'Modern Climate-Controlled Housing',
      desc: 'Ventilated poultry sheds designed to mitigate heat stress, protect flocks from predators, and optimize bird welfare.',
      icon: <Layers className="w-5 h-5 text-emerald-600" />
    },
    {
      title: 'Stringent Farm Biosecurity',
      desc: 'Sanitation footbaths, controlled visitor access, and planned veterinary immunizations that safeguard flock health.',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />
    },
    {
      title: 'Automated Watering & Feeding',
      desc: 'Nipple drinker lines with zero-drip pressure regulators ensuring fresh, clean water is accessible 24/7.',
      icon: <ThermometerSun className="w-5 h-5 text-emerald-600" />
    },
    {
      title: 'Daily Fresh Table Egg Production',
      desc: 'Systematic egg harvesting, inspection, grading, and packaging ensuring premium freshness for domestic supply.',
      icon: <Egg className="w-5 h-5 text-emerald-600" />
    }
  ];

  return (
    <section id="poultry" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0f3d24] text-xs font-bold uppercase tracking-wider mb-3">
            <Egg className="w-3.5 h-3.5 text-amber-500" />
            <span>Division 02 • Agribusiness</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a2919] tracking-tight font-display">
            Modern Poultry Farming &amp; Production
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Committed to modern poultry farming practices, productivity, and biosecurity to supply healthy birds and farm-fresh table eggs in Nigeria.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-600 to-amber-500 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Content Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Showcase Bento */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-md group relative h-56 sm:h-64">
                <img
                  src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=700&q=80"
                  alt="Healthy poultry chickens on modern farm"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute bottom-3 left-3 text-white text-xs font-bold">
                  Healthy Flocks
                </span>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-md group relative h-40 sm:h-44">
                <img
                  src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=700&q=80"
                  alt="Modern poultry housing and feeding lines"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute bottom-3 left-3 text-white text-xs font-bold">
                  Modern Housing
                </span>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="rounded-2xl overflow-hidden shadow-md group relative h-40 sm:h-44">
                <img
                  src="https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=700&q=80"
                  alt="Fresh farm eggs production"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute bottom-3 left-3 text-white text-xs font-bold">
                  Daily Egg Harvest
                </span>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-md group relative h-56 sm:h-64">
                <img
                  src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=700&q=80"
                  alt="Poultry feed preparation and nutrition"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute bottom-3 left-3 text-white text-xs font-bold">
                  Feed &amp; Nutrition
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Descriptions & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a2919] font-display">
              Elevating Poultry Standards Through Technology &amp; Care
            </h3>
            
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              At <strong className="text-[#0f3d24]">NAALLAH GENERATORS AND AGRIC MACHINERIES</strong>, our poultry operations reflect modern livestock management. We recognize that sustainable poultry production requires synergy between robust farm infrastructure, strict hygiene, and disciplined animal nutrition.
            </p>

            <div className="space-y-4 pt-2">
              {poultryHighlights.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-[#fcfbf7] border border-slate-200/80 hover:border-emerald-300 transition-colors"
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
                onClick={onEnquirePoultry}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0f3d24] hover:bg-[#14532d] text-white font-semibold text-sm shadow-md transition-colors flex items-center justify-center space-x-2"
              >
                <span>Enquire on Poultry Operations</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </button>
              
              <div className="text-xs text-slate-500 flex items-center">
                <HeartHandshake className="w-4 h-4 text-emerald-600 mr-1.5 shrink-0" />
                <span>Bulk egg orders and healthy bird supply available</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { 
  Tractor, 
  Egg, 
  Fish, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Sparkles 
} from 'lucide-react';
import type { ActivityDivision } from '../types';

interface BusinessActivitiesProps {
  activities: ActivityDivision[];
  onSelectActivity: (activity: ActivityDivision) => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const BusinessActivities: React.FC<BusinessActivitiesProps> = ({
  activities,
  onSelectActivity,
  onNavigateToSection,
}) => {
  const getIconForActivity = (id: string) => {
    switch (id) {
      case 'machinery-sales':
        return <Tractor className="w-6 h-6 text-amber-400" />;
      case 'poultry-farming':
        return <Egg className="w-6 h-6 text-amber-400" />;
      case 'fish-farming':
        return <Fish className="w-6 h-6 text-amber-400" />;
      default:
        return <Layers className="w-6 h-6 text-amber-400" />;
    }
  };

  const getTargetSection = (id: string) => {
    switch (id) {
      case 'machinery-sales':
        return '#machinery';
      case 'poultry-farming':
        return '#poultry';
      case 'fish-farming':
        return '#fish-farming';
      default:
        return '#contact';
    }
  };

  return (
    <section id="activities" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0f3d24] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Our Registered Operations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a2919] tracking-tight font-display">
            Core Business Activities
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Delivering excellence through three registered agricultural pillars in Nigeria—combining robust machinery sales with sustainable poultry and fish farming.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-600 to-amber-500 rounded-full mx-auto mt-4"></div>
        </div>

        {/* 3 Large Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {activities.map((activity, idx) => (
            <div
              key={activity.id}
              className="group bg-[#fcfbf7] rounded-3xl overflow-hidden border border-slate-200/90 hover:border-emerald-500/60 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Tag */}
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    src={activity.imageUrl}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a2919]/90 via-[#0a2919]/30 to-transparent"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 border border-white/20 text-xs font-bold">
                      Division 0{idx + 1}
                    </span>
                    {activity.id === 'machinery-sales' && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-700/90 backdrop-blur-md text-emerald-100 border border-emerald-400/40 text-[10px] font-bold uppercase tracking-wider">
                        Machinery &amp; Equipment
                      </span>
                    )}
                  </div>

                  {/* Icon badge floating bottom-left */}
                  <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0f3d24] to-[#15803d] border-2 border-amber-400/80 flex items-center justify-center shadow-lg">
                      {getIconForActivity(activity.id)}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0a2919] group-hover:text-emerald-700 transition-colors font-display">
                    {activity.title}
                  </h3>
                  
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {activity.shortDesc}
                  </p>

                  {/* Key Highlights */}
                  <div className="mt-5 space-y-2 border-t border-slate-200/80 pt-4">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                      Key Highlights &amp; Scope
                    </span>
                    {activity.keyHighlights.slice(0, 4).map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-tight">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 sm:p-7 sm:pt-0">
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onSelectActivity(activity)}
                    className="flex-1 py-3 px-4 rounded-xl bg-emerald-50 hover:bg-[#0f3d24] text-[#0f3d24] hover:text-white font-semibold text-sm transition-all duration-200 text-center flex items-center justify-center space-x-1.5 border border-emerald-200 hover:border-[#0f3d24]"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onNavigateToSection(getTargetSection(activity.id))}
                    className="py-3 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-semibold text-sm transition-colors border border-slate-200"
                    title="View Showcase"
                  >
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

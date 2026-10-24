import React from 'react';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Tractor, 
  Zap, 
  Droplets, 
  Cpu, 
  Egg, 
  ShieldCheck, 
  Home, 
  Activity, 
  Fish, 
  Waves, 
  Sparkles, 
  Compass 
} from 'lucide-react';
import type { ActivityDivision } from '../../types';

interface ActivityDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  activity: ActivityDivision | null;
  onInquire: (activityTitle: string) => void;
}

export const ActivityDetailModal: React.FC<ActivityDetailModalProps> = ({
  isOpen,
  onClose,
  activity,
  onInquire,
}) => {
  if (!isOpen || !activity) return null;

  const renderFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Tractor': return <Tractor className="w-5 h-5 text-emerald-600" />;
      case 'Zap': return <Zap className="w-5 h-5 text-emerald-600" />;
      case 'Droplets': return <Droplets className="w-5 h-5 text-emerald-600" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-emerald-600" />;
      case 'Egg': return <Egg className="w-5 h-5 text-emerald-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'Home': return <Home className="w-5 h-5 text-emerald-600" />;
      case 'Activity': return <Activity className="w-5 h-5 text-emerald-600" />;
      case 'Fish': return <Fish className="w-5 h-5 text-emerald-600" />;
      case 'Waves': return <Waves className="w-5 h-5 text-emerald-600" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-emerald-600" />;
      case 'Compass': return <Compass className="w-5 h-5 text-emerald-600" />;
      default: return <Sparkles className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-scaleUp max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image with Gradient */}
        <div className="relative h-56 bg-slate-900 shrink-0">
          <img
            src={activity.imageUrl}
            alt={activity.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a2919] via-[#0a2919]/60 to-transparent"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
              Registered Agribusiness Division
            </span>
            <h3 className="text-2xl font-extrabold font-display leading-tight mt-0.5">
              {activity.title}
            </h3>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-6 flex-1">
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Overview &amp; Commitment
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {activity.fullDesc}
            </p>
          </div>

          {/* Key Capabilities / Highlights */}
          <div className="p-4 rounded-2xl bg-[#fcfbf7] border border-slate-200/80">
            <h4 className="text-xs font-bold text-[#0a2919] uppercase tracking-wider mb-3">
              Operational Scope &amp; Offerings
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {activity.keyHighlights.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Breakdown */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
              Core Capabilities &amp; Standards
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activity.features.map((feat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="p-1 rounded bg-white border border-slate-200">
                      {renderFeatureIcon(feat.iconName)}
                    </div>
                    <h5 className="text-xs font-bold text-slate-800">{feat.title}</h5>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed pl-1">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            <span className="font-semibold text-emerald-900 block">NAALLAH Business Hub</span>
            Khairat Plaza, Along Sabonline St., Gombe
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onInquire(activity.title);
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-[#0f3d24] hover:bg-[#14532d] text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center space-x-1.5"
            >
              <span>Enquire on this Division</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

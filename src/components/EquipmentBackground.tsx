import React from 'react';

export const EquipmentBackground: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
      aria-hidden="true"
    >
      {/* Equipment 1: Large Agricultural Tractor Outline (Top-Right / Hero Background) */}
      <svg
        className="absolute -top-12 -right-20 w-[550px] h-[450px] opacity-[0.045] text-emerald-950 transition-transform duration-1000"
        viewBox="0 0 600 450"
        fill="currentColor"
      >
        {/* Tractor Silhouette */}
        <g stroke="currentColor" strokeWidth="3" fill="none">
          {/* Big Rear Wheel */}
          <circle cx="160" cy="300" r="100" />
          <circle cx="160" cy="300" r="65" strokeDasharray="10 8" />
          <circle cx="160" cy="300" r="25" />
          {/* Front Wheel */}
          <circle cx="430" cy="340" r="60" />
          <circle cx="430" cy="340" r="35" strokeDasharray="8 6" />
          <circle cx="430" cy="340" r="15" />
          {/* Tractor Cabin & Body */}
          <path d="M 120 200 L 220 200 L 260 120 L 160 120 Z" strokeWidth="4" />
          <path d="M 170 120 L 170 200 M 210 120 L 210 200" />
          {/* Roof */}
          <path d="M 140 115 L 280 115" strokeWidth="6" />
          {/* Engine Hood */}
          <path d="M 260 200 L 460 200 L 470 270 L 470 320 L 260 320" strokeWidth="4" />
          {/* Exhaust Pipe */}
          <path d="M 300 200 L 300 100 L 310 90 L 315 100 L 315 200" strokeWidth="3" />
          {/* Front Grille & Headlight */}
          <line x1="470" y1="220" x2="470" y2="280" strokeWidth="5" />
          <circle cx="465" cy="230" r="8" fill="currentColor" />
          {/* Implement Hitch Bar */}
          <path d="M 90 320 L 120 320 M 70 330 L 100 310" strokeWidth="4" />
        </g>
      </svg>

      {/* Equipment 2: Heavy Industrial Diesel Generator (Mid-Left / Behind About & Activities) */}
      <svg
        className="absolute top-[28%] -left-20 w-[480px] h-[360px] opacity-[0.04] text-emerald-900"
        viewBox="0 0 500 360"
        fill="none"
        stroke="currentColor"
      >
        <g strokeWidth="3">
          {/* Generator Base Frame & Skid */}
          <rect x="50" y="260" width="380" height="40" rx="6" strokeWidth="4" />
          <circle cx="80" cy="300" r="6" />
          <circle cx="400" cy="300" r="6" />
          {/* Main Acoustic Canopy */}
          <rect x="70" y="80" width="340" height="180" rx="10" strokeWidth="4" />
          {/* Access Doors */}
          <rect x="90" y="100" width="130" height="145" rx="4" />
          <rect x="240" y="100" width="150" height="145" rx="4" />
          {/* Air Intake Louvers */}
          <line x1="110" y1="130" x2="200" y2="130" strokeWidth="2" />
          <line x1="110" y1="145" x2="200" y2="145" strokeWidth="2" />
          <line x1="110" y1="160" x2="200" y2="160" strokeWidth="2" />
          <line x1="110" y1="175" x2="200" y2="175" strokeWidth="2" />
          {/* Control Digital Panel */}
          <rect x="260" y="120" width="60" height="40" rx="3" strokeWidth="2" />
          <circle cx="340" cy="130" r="8" strokeWidth="2" />
          <circle cx="360" cy="130" r="8" strokeWidth="2" />
          <rect x="260" y="180" width="110" height="50" rx="3" strokeWidth="2" />
          {/* Top Exhaust Muffler & Rain Cap */}
          <rect x="180" y="55" width="70" height="25" rx="4" strokeWidth="3" />
          <path d="M 215 55 L 215 30 L 225 30 L 225 55" strokeWidth="3" />
          <path d="M 210 30 L 230 25" strokeWidth="3" />
        </g>
      </svg>

      {/* Equipment 3: Centrifugal Agricultural Water Pump (Mid-Right / Behind Machinery Showcase) */}
      <svg
        className="absolute top-[52%] -right-16 w-[440px] h-[380px] opacity-[0.045] text-emerald-950"
        viewBox="0 0 450 380"
        fill="none"
        stroke="currentColor"
      >
        <g strokeWidth="3">
          {/* Pump Motor Cylinder */}
          <rect x="60" y="140" width="180" height="120" rx="8" strokeWidth="4" />
          {/* Motor Cooling Fins */}
          <line x1="90" y1="140" x2="90" y2="260" strokeWidth="2" />
          <line x1="120" y1="140" x2="120" y2="260" strokeWidth="2" />
          <line x1="150" y1="140" x2="150" y2="260" strokeWidth="2" />
          <line x1="180" y1="140" x2="180" y2="260" strokeWidth="2" />
          <line x1="210" y1="140" x2="210" y2="260" strokeWidth="2" />
          {/* Volute / Impeller Casing */}
          <circle cx="300" cy="200" r="70" strokeWidth="4" />
          <circle cx="300" cy="200" r="40" strokeDasharray="6 6" />
          {/* Suction Inlet Flange (Front) */}
          <circle cx="300" cy="200" r="22" strokeWidth="3" />
          {/* Discharge Outlet Flange (Vertical) */}
          <rect x="280" y="60" width="40" height="75" strokeWidth="3" />
          <line x1="270" y1="60" x2="330" y2="60" strokeWidth="6" />
          {/* Base Mount Plate */}
          <rect x="40" y="270" width="340" height="25" rx="4" strokeWidth="4" />
          <line x1="80" y1="295" x2="80" y2="315" strokeWidth="5" />
          <line x1="330" y1="295" x2="330" y2="315" strokeWidth="5" />
        </g>
      </svg>

      {/* Equipment 4: Combine Harvester & Implement Outline (Lower-Left / Behind Why Choose Us) */}
      <svg
        className="absolute top-[72%] -left-16 w-[520px] h-[400px] opacity-[0.04] text-emerald-950"
        viewBox="0 0 550 400"
        fill="none"
        stroke="currentColor"
      >
        <g strokeWidth="3">
          {/* Big Drive Wheels */}
          <circle cx="280" cy="300" r="75" strokeWidth="4" />
          <circle cx="280" cy="300" r="45" strokeDasharray="8 6" />
          <circle cx="440" cy="315" r="45" strokeWidth="3" />
          {/* Harvester Body */}
          <path d="M 220 280 L 160 220 L 220 140 L 450 140 L 480 240 L 460 300 Z" strokeWidth="4" />
          {/* High Operator Cabin */}
          <path d="M 220 140 L 190 90 L 270 90 L 280 140 Z" strokeWidth="3" />
          {/* Grain Tank & Unloading Auger */}
          <path d="M 300 140 L 330 60 L 350 60 L 320 140" strokeWidth="4" />
          {/* Front Cutting Header & Rotating Reel */}
          <path d="M 160 220 L 80 300 L 140 320 Z" strokeWidth="4" />
          <circle cx="80" cy="270" r="45" strokeWidth="3" strokeDasharray="10 8" />
          <line x1="80" y1="225" x2="80" y2="315" strokeWidth="2" />
          <line x1="35" y1="270" x2="125" y2="270" strokeWidth="2" />
        </g>
      </svg>

      {/* Equipment 5: Transmission Gears & Sprockets (Lower-Right / Behind Gallery & Contact) */}
      <svg
        className="absolute top-[88%] -right-12 w-[420px] h-[420px] opacity-[0.045] text-amber-900"
        viewBox="0 0 400 400"
        fill="none"
        stroke="currentColor"
      >
        <g strokeWidth="3">
          {/* Gear 1 */}
          <circle cx="160" cy="160" r="90" strokeDasharray="12 10" strokeWidth="6" />
          <circle cx="160" cy="160" r="65" strokeWidth="3" />
          <circle cx="160" cy="160" r="30" strokeWidth="3" />
          <line x1="70" y1="160" x2="250" y2="160" strokeWidth="3" />
          <line x1="160" y1="70" x2="160" y2="250" strokeWidth="3" />

          {/* Interlocking Gear 2 */}
          <circle cx="280" cy="280" r="70" strokeDasharray="10 8" strokeWidth="5" />
          <circle cx="280" cy="280" r="48" strokeWidth="3" />
          <circle cx="280" cy="280" r="22" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
};


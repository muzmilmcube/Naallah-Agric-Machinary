import type { MachineryItem } from '../types';

export const INITIAL_MACHINERY_DATA: MachineryItem[] = [
  // 1. Tractors & Field Machinery
  {
    id: 'mach-tractor-4wd',
    name: 'Heavy-Duty 4WD Agricultural Tractor',
    category: 'tractors',
    categoryLabel: 'Tractors & Implements',
    description: 'High-torque four-wheel drive tractor designed for tough arable farmland, heavy plowing, harrowing, and hauling across Nigerian soils.',
    keySpecs: [
      'High-torque diesel engine (75–90 HP range)',
      'Dual-stage clutch with multi-speed gearbox',
      'Hydraulic power steering & heavy 3-point linkage',
      'Reinforced planetary rear axle for heavy hauling'
    ],
    application: 'Primary land preparation, deep tilling, ridge making, trailer haulage',
    imageUrl: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80',
    badge: 'Heavy Duty'
  },
  {
    id: 'mach-tractor-compact',
    name: 'Multi-Purpose Utility Farm Tractor',
    category: 'tractors',
    categoryLabel: 'Tractors & Implements',
    description: 'Versatile, fuel-efficient utility tractor optimized for medium-scale farms, row cropping, spraying, and inter-cultivation work.',
    keySpecs: [
      'Economical 45–55 HP 4-cylinder diesel',
      'Dual PTO (540 / 1000 RPM) for farm attachments',
      'Compact turning radius for tight farm rows',
      'Ergonomic operator station with safety canopy'
    ],
    application: 'Harrowing, seeding, weeding, chemical spraying, farm utility',
    imageUrl: 'https://images.unsplash.com/photo-1530267981375-f0de937f5f13?auto=format&fit=crop&w=800&q=80',
    badge: 'Versatile'
  },
  {
    id: 'mach-combine-harvester',
    name: 'Multi-Crop Grain Combine Harvester',
    category: 'tractors',
    categoryLabel: 'Tractors & Implements',
    description: 'Automated harvesting machinery built for grain crops including rice, wheat, maize, and sorghum with minimal grain loss.',
    keySpecs: [
      'Wide cutting header with floating reel mechanism',
      'Axial-flow threshing and separation drum',
      'High-capacity grain tank with fast unloading auger',
      'High-clearance rubber tracks / wide mud tires'
    ],
    application: 'Harvesting, threshing, winnowing, and bulk bagging in single pass',
    imageUrl: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80',
    badge: 'High Productivity'
  },

  // 2. Generators & Power Units
  {
    id: 'mach-gen-diesel-silent',
    name: 'Industrial Farm Silent Diesel Generator (30–50 kVA)',
    category: 'generators',
    categoryLabel: 'Power Generators',
    description: 'Continuous-duty silent diesel generator designed to power poultry automated systems, fish pond aerators, boreholes, and processing equipment.',
    keySpecs: [
      'Heavy-duty industrial water-cooled diesel engine',
      'Soundproof weather-resistant acoustic canopy',
      'Automatic Mains Failure (AMF/ATS) compatible panel',
      'Large base fuel tank for 12–24h continuous operation'
    ],
    application: 'Uninterrupted power for poultry hatcheries, cold stores, pumps, mills',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    badge: 'Heavy Commercial'
  },
  {
    id: 'mach-gen-farm-portable',
    name: 'Commercial Agricultural Diesel Generator (10–15 kVA)',
    category: 'generators',
    categoryLabel: 'Power Generators',
    description: 'Rugged, economical power unit engineered for medium agricultural installations, remote farm camps, and irrigation pump duty.',
    keySpecs: [
      'Single/Three phase selectable output (220V/400V)',
      'Direct injection low fuel consumption design',
      'Electric key-start with digital voltmeter & hour meter',
      'Heavy-duty transport trolley chassis with solid wheels'
    ],
    application: 'Water pump energizing, farm lighting, feed milling, workshop tools',
    imageUrl: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
    badge: 'Reliable Power'
  },

  // 3. Water Pumps & Irrigation
  {
    id: 'mach-pump-diesel-highvolume',
    name: 'High-Volume Agricultural Diesel Water Pump (3" - 4")',
    category: 'irrigation',
    categoryLabel: 'Water Pumps & Irrigation',
    description: 'Heavy centrifugal self-priming water pump engineered for flood irrigation, river lifting, fish pond rapid drainage, and filling.',
    keySpecs: [
      'High-discharge rate: Up to 60,000 – 90,000 Litres/Hour',
      'Air-cooled 4-stroke commercial diesel power unit',
      'Cast iron impeller with durable mechanical silicon seal',
      'Tubular protective roll-cage with shock absorbers'
    ],
    application: 'Pond filling & draining, canal irrigation, field flooding, borehole transfer',
    imageUrl: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=800&q=80',
    badge: 'High Discharge'
  },
  {
    id: 'mach-pump-irrigation-drip',
    name: 'Pressurized Drip & Sprinkler Irrigation System',
    category: 'irrigation',
    categoryLabel: 'Water Pumps & Irrigation',
    description: 'Precision water management equipment including booster pump, sand & screen filtration, venturi fertilizer injectors, and distribution lines.',
    keySpecs: [
      'High-head pressure output for uniform emission',
      'Integrated disc/screen filtration assembly',
      'Venturi chemical & liquid fertilizer fertigation injector',
      'Compatible with solar DC or engine drive systems'
    ],
    application: 'Vegetable orchards, horticulture farms, dry-season grain production',
    imageUrl: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80',
    badge: 'Water Efficient'
  },

  // 4. Poultry Farming Equipment
  {
    id: 'mach-poultry-battery-cages',
    name: 'Automated Tiered Poultry Battery Cage System',
    category: 'poultry',
    categoryLabel: 'Poultry Farming Equipment',
    description: 'Hot-dip galvanized commercial poultry layer cages featuring automated nipple drinking lines, egg roll-out cradles, and feed trough troughs.',
    keySpecs: [
      'Corrosion-resistant hot-dip galvanized steel wire (Q235)',
      '3-Tier & 4-Tier A-frame / H-frame modular configurations',
      'Stainless steel 360-degree ball nipple watering valves',
      'PVC feed troughs with anti-waste lip design'
    ],
    application: 'Commercial layer egg farming, pullet rearing, maximized barn space',
    imageUrl: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80',
    badge: 'Layer Farming'
  },
  {
    id: 'mach-poultry-incubator',
    name: 'Digital Egg Incubator & Automatic Hatcher',
    category: 'poultry',
    categoryLabel: 'Poultry Farming Equipment',
    description: 'Microcomputer-controlled egg setter and hatcher with precision digital temperature, humidity control, and automatic tray turning.',
    keySpecs: [
      'Capacity: 1,056 to 5,280 chicken eggs (expandable)',
      'Dual power circuit: AC mains with 12V inverter backup',
      'Multi-angle automated egg turning mechanism (every 2h)',
      'Ultrasonic humidity system with high/low alarms'
    ],
    application: 'Day-old chick production (broilers, layers, cockerels, local breeds)',
    imageUrl: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=800&q=80',
    badge: 'Automated'
  },

  // 5. Fish Farming & Aquaculture Equipment
  {
    id: 'mach-fish-aerator',
    name: 'Commercial Aquaculture Paddlewheel Aerator',
    category: 'fish',
    categoryLabel: 'Fish Farming Equipment',
    description: 'High-efficiency surface water aerator providing dissolved oxygen enrichment and circular water movement for high-density catfish ponds.',
    keySpecs: [
      'High dissolved oxygen transfer efficiency (DO > 2.5 kg O2/h)',
      'Stainless steel shaft and anti-corrosive nylon paddles',
      'Integrated gear reducer with synthetic lubricant bath',
      'UV-resistant pontoon floats for all pond types'
    ],
    application: 'Catfish ponds, fingerling rearing tanks, high-density recirculating systems',
    imageUrl: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80',
    badge: 'High Oxygen'
  },
  {
    id: 'mach-fish-tarpaulin-tank',
    name: 'Heavy-Duty Reinforced Mobile Fish Tank System',
    category: 'fish',
    categoryLabel: 'Fish Farming Equipment',
    description: 'Reinforced PVC tarpaulin collapsible fish rearing tanks with galvanized anti-rust iron framework and central bottom drainage valve.',
    keySpecs: [
      'Heavy 0.9mm UV-resistant reinforced PVC fabric',
      'Structural galvanized steel support frame with top ring',
      'Complete with plumbing fittings & 2" drainage outlet',
      'Fast assembly without civil excavation or plastering'
    ],
    application: 'Urban catfish production, fingerling sorting, breeding tanks',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    badge: 'Aquaculture'
  },

  // 6. Agricultural Processing Machinery
  {
    id: 'mach-processing-mill',
    name: 'Heavy-Duty Commercial Grain & Feed Hammer Mill',
    category: 'processing',
    categoryLabel: 'Agro-Processing Machinery',
    description: 'High-output commercial grinding and crushing mill for processing maize, sorghum, soybeans, and cassava into animal feed and flour.',
    keySpecs: [
      'Heat-treated hardened alloy manganese hammer blades',
      'Interchangeable screen sizes (1mm to 8mm aperture)',
      'Cyclone collection system with dust-free bagging spout',
      'Electric or diesel engine drive pulley compatible'
    ],
    application: 'Farm feed preparation, commercial grain milling, livestock ration',
    imageUrl: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80',
    badge: 'Agro-Processing'
  },
  {
    id: 'mach-processing-pelletizer',
    name: 'Floating Fish & Poultry Feed Pelletizing Machine',
    category: 'processing',
    categoryLabel: 'Agro-Processing Machinery',
    description: 'Flat-die feed pellet extruder designed to compress farm feed formulas into floating catfish pellets and poultry feed pellets.',
    keySpecs: [
      'Heavy-duty alloy roller and die plate (2mm–6mm sizes)',
      'Continuous feed hopper with overload safety switch',
      'High thermal extrusion generating firm, water-stable pellets',
      'Available with electric or stationary diesel engine'
    ],
    application: 'On-farm feed self-sufficiency, custom poultry & fish feed production',
    imageUrl: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80',
    badge: 'Feed Production'
  }
];

import type { ActivityDivision } from '../types';

export const BUSINESS_ACTIVITIES: ActivityDivision[] = [
  {
    id: 'machinery-sales',
    title: 'Sale of Agricultural Machineries & Equipment',
    shortDesc: 'Supplying durable, high-performance tractors, heavy generators, irrigation pumps, poultry systems, and agro-processing equipment to empower Nigerian agriculture.',
    fullDesc: 'NAALLAH GENERATORS AND AGRIC MACHINERIES provides dependable agricultural machinery, power equipment, and agro-processing systems designed to boost farm efficiency. We support commercial agribusinesses, smallholder farming cooperatives, and individual farmers with machinery that reduces manual labor, ensures consistent power, and enhances crop and livestock yields.',
    imageUrl: 'https://images.unsplash.com/photo-1530267981375-f0de937f5f13?auto=format&fit=crop&w=1200&q=85',
    keyHighlights: [
      'Heavy-duty 4WD and utility farm tractors with robust attachments',
      'Industrial silent & open diesel generators (10kVA to 50kVA+)',
      'High-discharge diesel & solar irrigation water pumps',
      'Turnkey commercial poultry battery cages and digital incubators',
      'Aquaculture paddlewheel aerators and reinforced fish tanks',
      'Agro-processing hammer mills, threshers, and feed pelletizers'
    ],
    features: [
      {
        iconName: 'Tractor',
        title: 'Modern Field Tractors',
        description: 'Multi-horsepower tractors suited for plowing, ridging, harrowing, and trailer haulage across northern and nationwide terrain.'
      },
      {
        iconName: 'Zap',
        title: 'Industrial Generators',
        description: 'Reliable continuous-duty generators built to power cold storage, hatcheries, borehole pumps, and farm operations.'
      },
      {
        iconName: 'Droplets',
        title: 'Pumps & Irrigation',
        description: 'High-volume water pumps and drip/sprinkler networks enabling profitable dry-season farming and pond maintenance.'
      },
      {
        iconName: 'Cpu',
        title: 'Processing Machines',
        description: 'Grain mills, feed pelletizers, threshers, and de-watering presses for post-harvest value addition.'
      }
    ]
  },
  {
    id: 'poultry-farming',
    title: 'Poultry Farming',
    shortDesc: 'Modern commercial poultry operations specializing in healthy chicken production, sustainable housing systems, strict biosecurity, and quality table egg supply.',
    fullDesc: 'Our poultry farming division is dedicated to modern, hygienic poultry production. By utilizing advanced housing systems, automated watering and feeding technology, and rigorous veterinary biosecurity protocols, we ensure high bird vitality, consistent egg production, and premium poultry meat for regional consumption.',
    imageUrl: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1000&q=80',
    keyHighlights: [
      'Commercial layer operations for fresh, wholesome table eggs',
      'Broiler production with balanced feed nutrition and rapid maturity',
      'Climate-optimized poultry pens with automated nipple drinkers',
      'Strict biosecurity and vaccination schedules for disease prevention',
      'Poultry equipment integration from our machinery division',
      'Direct distribution to retail markets, hotels, and households'
    ],
    features: [
      {
        iconName: 'Egg',
        title: 'Fresh Table Eggs',
        description: 'Graded and clean farm-fresh eggs harvested daily from well-nourished layer hens.'
      },
      {
        iconName: 'ShieldCheck',
        title: 'Strict Biosecurity',
        description: 'Rigorous hygiene, footbaths, and scheduled vaccination ensuring healthy flocks.'
      },
      {
        iconName: 'Home',
        title: 'Modern Housing',
        description: 'Well-ventilated, predator-safe housing designed to minimize stress and maximize bird welfare.'
      },
      {
        iconName: 'Activity',
        title: 'Optimized Nutrition',
        description: 'Custom formulated feeds rich in essential protein, vitamins, and minerals for steady growth.'
      }
    ]
  },
  {
    id: 'fish-farming',
    title: 'Fish Farming & Aquaculture',
    shortDesc: 'Sustainable aquaculture production featuring earthen and concrete catfish ponds, fingerling rearing, water quality management, and market-ready table fish.',
    fullDesc: 'Our fish farming division practices sustainable and intensive aquaculture, focusing primarily on African Catfish (Clarias gariepinus) and allied freshwater species. Using clean water management, specialized aeration, and protein-rich nutrition, we supply robust fingerlings, juveniles, and healthy table-size catfish to consumers and distributors.',
    imageUrl: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1000&q=80',
    keyHighlights: [
      'High-yield earthen and modern concrete catfish pond facilities',
      'Fingerling and juvenile rearing with high survival rates',
      'Freshwater circulation, aeration, and routine water quality testing',
      'Market-ready fresh table catfish for restaurants, smokehouses, and households',
      'Water management powered by dedicated agricultural water pumps',
      'Sustainable feeding regimens promoting rapid, lean fish growth'
    ],
    features: [
      {
        iconName: 'Fish',
        title: 'Table-Size Catfish',
        description: 'Firm, healthy, organically grown catfish raised in pristine water conditions.'
      },
      {
        iconName: 'Waves',
        title: 'Pond & Tank Systems',
        description: 'Engineered concrete tanks and earthen ponds with clean drainage and continuous aeration.'
      },
      {
        iconName: 'Sparkles',
        title: 'Fingerling Hatchery Support',
        description: 'Quality fingerlings and juveniles acclimated for high growth and resilience.'
      },
      {
        iconName: 'Compass',
        title: 'Water Quality Monitoring',
        description: 'Routine pH, dissolved oxygen, and temperature testing for optimal aquatic health.'
      }
    ]
  }
];

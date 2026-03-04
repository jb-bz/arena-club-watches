export interface ServiceRecord {
  date: string;
  description: string;
}

export interface Watch {
  id: string;
  brand: string;
  model: string;
  reference: string;
  year: string;
  price: number;
  movementHealth: number;
  image: string;
  description: string;
  views: number;
  bids: number;
  timeRemaining: string;
  listingType: "auction" | "fixed" | "not_listed";
  noReserve: boolean;
  seller: string;
  specs: {
    caseSize: string;
    material: string;
    movement: string;
    powerReserve: string;
    waterResistance: string;
  };
  metrics: {
    amplitude: number;
    beatError: number;
    rate: number;
  };
  grade: {
    overall: string;
    centering: number;
    edges: number;
    corners: number;
    surface: number;
  };
  serviceHistory: ServiceRecord[];
}

export const watches: Watch[] = [
  {
    id: "1",
    brand: "Rolex",
    model: "Submariner Date",
    reference: "126610LN",
    year: "2023",
    price: 14500,
    movementHealth: 9.8,
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80&w=800",
    description: "The quintessential divers' watch, the Submariner Date is a benchmark in its category.",
    views: 49,
    bids: 4,
    timeRemaining: "3d 15h",
    listingType: "auction",
    noReserve: false,
    seller: "vaultkeeper42",
    specs: {
      caseSize: "41mm",
      material: "Oystersteel",
      movement: "3235, Manufacture Rolex",
      powerReserve: "70 hours",
      waterResistance: "300m",
    },
    metrics: {
      amplitude: 285,
      beatError: 0.1,
      rate: 1,
    },
    grade: {
      overall: "MINT 9",
      centering: 9,
      edges: 9.5,
      corners: 8.5,
      surface: 9.5,
    },
    serviceHistory: [
      { date: "Mar 2024", description: "Complete Overhaul, Bezel Alignment" },
      { date: "Jun 2022", description: "Gasket Replacement, Pressure Test" },
      { date: "Jan 2021", description: "Timing Adjustment, Crystal Polish" },
    ],
  },
  {
    id: "2",
    brand: "Omega",
    model: "Speedmaster Moonwatch",
    reference: "310.30.42.50.01.001",
    year: "2022",
    price: 7200,
    movementHealth: 9.5,
    image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=800",
    description: "The Speedmaster is one of OMEGA's most iconic timepieces, having been a part of all six lunar missions.",
    views: 23,
    bids: 8,
    timeRemaining: "1d 4h",
    listingType: "auction",
    noReserve: true,
    seller: "vaultkeeper42",
    specs: {
      caseSize: "42mm",
      material: "Steel",
      movement: "3861, Manual-winding",
      powerReserve: "50 hours",
      waterResistance: "50m",
    },
    metrics: {
      amplitude: 275,
      beatError: 0.2,
      rate: 2,
    },
    grade: {
      overall: "MINT 9",
      centering: 9.5,
      edges: 9,
      corners: 9,
      surface: 9.5,
    },
    serviceHistory: [
      { date: "Jan 2024", description: "Complete Overhaul, Case Polishing" },
      { date: "Mar 2022", description: "Gasket Replacement, Pressure Test" },
      { date: "Sep 2020", description: "Timing Adjustment, Bracelet Link Added" },
    ],
  },
  {
    id: "3",
    brand: "Patek Philippe",
    model: "Nautilus",
    reference: "5711/1A-010",
    year: "2021",
    price: 125000,
    movementHealth: 10.0,
    image: "https://images.unsplash.com/photo-1619134778706-7015533a6150?auto=format&fit=crop&q=80&w=800",
    description: "With the rounded octagonal shape of its bezel, the Nautilus has exemplified the elegant sports watch since 1976.",
    views: 8,
    bids: 0,
    timeRemaining: "1d 16h",
    listingType: "fixed",
    noReserve: true,
    seller: "watchcollector99",
    specs: {
      caseSize: "40mm",
      material: "Steel",
      movement: "26-330 S C, Self-winding",
      powerReserve: "45 hours",
      waterResistance: "120m",
    },
    metrics: {
      amplitude: 290,
      beatError: 0.0,
      rate: 0,
    },
    grade: {
      overall: "GEM MT 10",
      centering: 10,
      edges: 10,
      corners: 10,
      surface: 10,
    },
    serviceHistory: [
      { date: "Feb 2024", description: "Full Service, Movement Lubrication" },
      { date: "Aug 2022", description: "Crown Replacement, Water Test" },
    ],
  },
  {
    id: "4",
    brand: "Audemars Piguet",
    model: "Royal Oak",
    reference: "15500ST.OO.1220ST.01",
    year: "2023",
    price: 48000,
    movementHealth: 9.7,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=800",
    description: "The Royal Oak is the first luxury sports watch to be made of steel, a true icon of modern design.",
    views: 6,
    bids: 2,
    timeRemaining: "5d 8h",
    listingType: "auction",
    noReserve: false,
    seller: "watchcollector99",
    specs: {
      caseSize: "41mm",
      material: "Steel",
      movement: "4302, Self-winding",
      powerReserve: "70 hours",
      waterResistance: "50m",
    },
    metrics: {
      amplitude: 282,
      beatError: 0.1,
      rate: 1,
    },
    grade: {
      overall: "MINT 9.5",
      centering: 9.5,
      edges: 9.5,
      corners: 9,
      surface: 9.5,
    },
    serviceHistory: [
      { date: "Dec 2023", description: "Complete Overhaul, Bracelet Polish" },
      { date: "May 2021", description: "Gasket Replacement, Dial Cleaning" },
    ],
  },
  {
    id: "5",
    brand: "Tudor",
    model: "Black Bay 58",
    reference: "M79030N-0001",
    year: "2022",
    price: 3800,
    movementHealth: 9.4,
    image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&q=80&w=800",
    description: "A tribute to the brand's first divers' watches with a 39mm case.",
    views: 6,
    bids: 0,
    timeRemaining: "",
    listingType: "not_listed",
    noReserve: false,
    seller: "vaultkeeper42",
    specs: {
      caseSize: "39mm",
      material: "Steel",
      movement: "MT5402, Self-winding",
      powerReserve: "70 hours",
      waterResistance: "200m",
    },
    metrics: {
      amplitude: 270,
      beatError: 0.2,
      rate: 3,
    },
    grade: {
      overall: "MINT 9",
      centering: 9,
      edges: 9,
      corners: 9,
      surface: 9.5,
    },
    serviceHistory: [
      { date: "Nov 2023", description: "Timing Adjustment, Crystal Replacement" },
      { date: "Apr 2021", description: "Full Service, Bezel Insert Replaced" },
    ],
  },
];

export const userVault: Watch[] = [
  {
    id: "v1",
    brand: "Tudor",
    model: "Black Bay 58",
    reference: "M79030N-0001",
    year: "2022",
    price: 3800,
    movementHealth: 9.4,
    image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&q=80&w=800",
    description: "A tribute to the brand's first divers' watches with a 39mm case.",
    views: 1,
    bids: 0,
    timeRemaining: "",
    listingType: "not_listed",
    noReserve: false,
    seller: "you",
    specs: {
      caseSize: "39mm",
      material: "Steel",
      movement: "MT5402, Self-winding",
      powerReserve: "70 hours",
      waterResistance: "200m",
    },
    metrics: {
      amplitude: 270,
      beatError: 0.2,
      rate: 3,
    },
    grade: {
      overall: "MINT 9",
      centering: 9,
      edges: 9,
      corners: 9,
      surface: 9.5,
    },
    serviceHistory: [
      { date: "Nov 2023", description: "Timing Adjustment, Crystal Replacement" },
      { date: "Apr 2021", description: "Full Service, Bezel Insert Replaced" },
    ],
  },
  {
    id: "v2",
    brand: "IWC",
    model: "Pilot's Watch Mark XVIII",
    reference: "IW327009",
    year: "2021",
    price: 4200,
    movementHealth: 9.2,
    image: "https://hodinkee.imgix.net/uploads/images/1453058613256-o6kbgrq1nc-f224382ccea80c0f9d26204447b21efd/38_IWC_IW327001_PT_Mark_XVIII_Lifestyle.jpg",
    description: "The Pilot's Watch Mark XVIII is a classic entry-level pilot's watch.",
    views: 6,
    bids: 0,
    timeRemaining: "",
    listingType: "not_listed",
    noReserve: false,
    seller: "you",
    specs: {
      caseSize: "40mm",
      material: "Steel",
      movement: "35111, Self-winding",
      powerReserve: "42 hours",
      waterResistance: "60m",
    },
    metrics: {
      amplitude: 265,
      beatError: 0.3,
      rate: 4,
    },
    grade: {
      overall: "NM-MT 8",
      centering: 8,
      edges: 8.5,
      corners: 8,
      surface: 8.5,
    },
    serviceHistory: [
      { date: "Jul 2023", description: "Complete Overhaul, Hands Replacement" },
      { date: "Jan 2022", description: "Gasket Replacement, Pressure Test" },
    ],
  },
];

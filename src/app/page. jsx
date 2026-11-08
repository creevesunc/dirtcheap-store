```react
'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  ShoppingCart, Cpu, HardDrive, Monitor, Smartphone, Wrench, Network, 
  Layers, Info, Mail, Phone, ShieldCheck, CheckCircle2, AlertTriangle, 
  Plus, Minus, Trash2, ArrowRight, Settings, Package, DollarSign, 
  Search, Menu, X, ChevronRight, ChevronLeft, Lock, User, RefreshCw, BarChart2, Check,
  HelpCircle, ExternalLink, Printer, Send
} from 'lucide-react';

// ==========================================
// INITIAL MOCK DATA & CONFIGURATIONS
// ==========================================

const INITIAL_PRODUCTS = [
  {
    id: 'optiplex-980-mt-i7',
    name: 'DELL OPTIPLEX 980 MT CORE i7',
    category: 'Desktop Computers',
    originalPrice: 249.99,
    stock: 40,
    condition: 'Refurbished - Grade A',
    description: 'Powerful multi-core desktop ready for office, school, and home workstation tasks.',
    specs: { cpu: 'Intel Core i7 Quad-Core', defaultRam: '8GB RAM', defaultStorage: '500GB HDD', os: 'Windows 10 Pro' },
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80',
    maxRam: 16,
    ramOptions: [
      { label: '8GB RAM — Included', price: 0 },
      { label: '12GB RAM — +$20', price: 20 },
      { label: '16GB RAM — +$35', price: 35 }
    ],
    storageOptions: [
      { label: '500GB HDD — Included', price: 0 },
      { label: '1TB HDD — +$15', price: 15 },
      { label: '240GB SSD — +$25', price: 25 },
      { label: '480GB SSD — +$45', price: 45 },
      { label: '1TB SSD — +$75', price: 75 }
    ]
  },
  {
    id: 'optiplex-9020-mt',
    name: 'DELL OPTIPLEX 9020 MT',
    category: 'Desktop Computers',
    originalPrice: 289.99,
    stock: 5,
    condition: 'Refurbished - Grade A',
    description: 'High-performance powerhouse equipped for heavy productivity, student multi-tasking, and career workloads.',
    specs: { cpu: 'Intel Core i7 4th Gen', defaultRam: '8GB RAM', defaultStorage: '500GB HDD', os: 'Windows 10 Pro' },
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=600&q=80',
    maxRam: 32,
    ramOptions: [
      { label: '4GB RAM — Included', price: 0 },
      { label: '8GB RAM — +$20', price: 20 },
      { label: '12GB RAM — +$35', price: 35 },
      { label: '16GB RAM — +$50', price: 50 },
      { label: '20GB RAM — +$65', price: 65 },
      { label: '24GB RAM — +$80', price: 80 },
      { label: '28GB RAM — +$95', price: 95 },
      { label: '32GB RAM — +$110', price: 110 }
    ],
    storageOptions: [
      { label: '250GB HDD — Included', price: 0 },
      { label: '500GB HDD — +$10', price: 10 },
      { label: '1TB HDD — +$20', price: 20 },
      { label: '240GB SSD — +$25', price: 25 },
      { label: '480GB SSD — +$40', price: 40 },
      { label: '1TB SSD — +$75', price: 75 }
    ]
  },
  {
    id: 'optiplex-7010-mt',
    name: 'DELL OPTIPLEX 7010 MT',
    category: 'Desktop Computers',
    originalPrice: 219.99,
    stock: 5,
    condition: 'Refurbished - Grade A',
    description: 'Dependable mid-tier workhorse ideal for kids homework, office operations, and web browsing.',
    specs: { cpu: 'Intel Core i5 3rd Gen', defaultRam: '8GB RAM', defaultStorage: '500GB HDD', os: 'Windows 10 Pro' },
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80',
    maxRam: 16,
    ramOptions: [
      { label: '4GB RAM — Included', price: 0 },
      { label: '8GB RAM — +$20', price: 20 },
      { label: '12GB RAM — +$35', price: 35 },
      { label: '16GB RAM — +$50', price: 50 }
    ],
    storageOptions: [
      { label: '250GB HDD — Included', price: 0 },
      { label: '500GB HDD — +$10', price: 10 },
      { label: '1TB HDD — +$20', price: 20 },
      { label: '240GB SSD — +$25', price: 25 },
      { label: '480GB SSD — +$40', price: 40 }
    ]
  },
  {
    id: 'optiplex-980',
    name: 'DELL OPTIPLEX 980',
    category: 'Desktop Computers',
    originalPrice: 189.99,
    stock: 150,
    condition: 'Refurbished - Grade B',
    description: 'Solid dual-monitor capable desktop built for budget-conscious families and students.',
    specs: { cpu: 'Intel Core i5', defaultRam: '4GB RAM', defaultStorage: '250GB HDD', os: 'Windows 10 Home' },
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=600&q=80',
    maxRam: 16,
    ramOptions: [
      { label: '4GB RAM — Included', price: 0 },
      { label: '8GB RAM — +$20', price: 20 },
      { label: '16GB RAM — +$50', price: 50 }
    ],
    storageOptions: [
      { label: '250GB HDD — Included', price: 0 },
      { label: '500GB HDD — +$10', price: 10 },
      { label: '240GB SSD — +$25', price: 25 }
    ]
  },
  {
    id: 'optiplex-780',
    name: 'DELL OPTIPLEX 780',
    category: 'Desktop Computers',
    originalPrice: 159.99,
    stock: 150,
    condition: 'Refurbished - Grade B',
    description: 'Ultra-affordable reliable desktop for school work and basic administrative tasks.',
    specs: { cpu: 'Intel Core 2 Duo / Quad', defaultRam: '4GB RAM', defaultStorage: '160GB HDD', os: 'Windows 10 Home' },
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
    maxRam: 16,
    ramOptions: [
      { label: '4GB RAM — Included', price: 0 },
      { label: '8GB RAM — +$20', price: 20 }
    ],
    storageOptions: [
      { label: '160GB HDD — Included', price: 0 },
      { label: '250GB HDD — +$10', price: 10 },
      { label: '240GB SSD — +$25', price: 25 }
    ]
  },
  {
    id: 'optiplex-755',
    name: 'DELL OPTIPLEX 755',
    category: 'Desktop Computers',
    originalPrice: 129.99,
    stock: 150,
    condition: 'Refurbished - Budget',
    description: 'Extremely budget-friendly desktop computer designed for kids learning computer basics.',
    specs: { cpu: 'Intel Core 2 Duo', defaultRam: '4GB DDR2', defaultStorage: '160GB HDD', os: 'Windows 10 Home' },
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80',
    maxRam: 8,
    ramOptions: [
      { label: '4GB DDR2 — Included', price: 0 },
      { label: '8GB DDR2 — +$30', price: 30 }
    ],
    storageOptions: [
      { label: '160GB HDD — Included', price: 0 },
      { label: '250GB HDD — +$10', price: 10 }
    ]
  },
  {
    id: 'google-pixel-10-pro-xl',
    name: 'GOOGLE PIXEL 10 PRO XL',
    category: 'Smartphones',
    originalPrice: 519.99,
    stock: 2,
    condition: 'Seller-Assessed 9/10 Condition',
    description: 'Flagship Google Pixel 10 Pro XL smartphone. 16GB RAM, 512GB internal storage. Verizon service compatibility only (verified locked/unlocked per unit). Factory reset and activation locks removed.',
    specs: { cpu: 'Google Tensor', defaultRam: '16GB RAM', defaultStorage: '512GB Storage', os: 'Android' },
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80',
    ramOptions: [{ label: '16GB RAM — Included', price: 0 }],
    storageOptions: [{ label: '512GB Storage — Included', price: 0 }]
  },
  {
    id: 'mouse',
    name: 'OPTICAL MOUSE',
    category: 'Accessories',
    originalPrice: 10.00,
    stock: 150,
    condition: 'Brand New',
    description: 'Optical tracking mouse suitable for everyday desktop computer use.',
    specs: { connectivity: 'USB Wired' },
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80',
    ramOptions: [],
    storageOptions: []
  },
  {
    id: 'keyboard',
    name: 'STANDARD KEYBOARD',
    category: 'Accessories',
    originalPrice: 16.99,
    stock: 150,
    condition: 'Brand New',
    description: 'Computer keyboard with standard key layout and media keys where included.',
    specs: { connectivity: 'USB Wired' },
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80',
    ramOptions: [],
    storageOptions: []
  },
  {
    id: 'monitor',
    name: '22" LCD MONITOR',
    category: 'Monitors',
    originalPrice: 21.99,
    stock: 150,
    condition: 'Refurbished - Grade A',
    description: 'Computer display with crisp resolution, adjustable stand, and video cables included.',
    specs: { resolution: '1080p Full HD', inputs: 'VGA / DVI / DisplayPort' },
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80',
    ramOptions: [],
    storageOptions: []
  },
  {
    id: 'cable-bundle',
    name: 'CABLE / INTERFACE BUNDLE',
    category: 'Accessories',
    originalPrice: 6.99,
    stock: 150,
    condition: 'Brand New',
    description: 'Computer interface ribbons, power cables, HDMI/VGA display cords, and jumper components.',
    specs: { contents: 'Power Cord + Display Cable' },
    image: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=600&q=80',
    ramOptions: [],
    storageOptions: []
  },
  {
    id: 'ethernet-cat6',
    name: 'ETHERNET / CAT6 BULK CABLE (2000 FT)',
    category: 'Networking',
    originalPrice: 164.99,
    stock: 150,
    condition: 'Brand New Bulk Roll',
    description: 'Bulk Ethernet network cable for computer networks and networking installations. 2,000-foot bulk roll.',
    specs: { length: '2,000 Feet', category: 'Cat6 Solid Copper' },
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
    ramOptions: [],
    storageOptions: []
  },
  {
    id: 'network-switch',
    name: '24-PORT GIGABIT NETWORK SWITCH',
    category: 'Networking',
    originalPrice: 39.99,
    stock: 50,
    condition: 'Tested Working',
    description: 'Networking equipment for LAN and server installations. Enterprise-grade 24-port managed/unmanaged switch.',
    specs: { ports: '24 Ports Gigabit', speed: '10/100/1000 Mbps' },
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80',
    ramOptions: [],
    storageOptions: []
  },
  {
    id: 'desk-unit',
    name: 'METAL-PEDESTAL OFFICE DESK',
    category: 'Accessories',
    originalPrice: 49.99,
    stock: 200,
    condition: 'Sturdy Used Condition',
    description: 'Metal-pedestal desk with drawer storage. Ideal for student study rooms and home offices.',
    specs: { material: 'Steel & Wood Laminate', storage: 'Built-in Drawers' },
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=600&q=80',
    ramOptions: [],
    storageOptions: []
  }
];

const PLAEDOES_CATEGORIES = {
  "Grocery & Pantry": ["Fresh Produce", "Meat, Seafood & Plant-Based Alternatives", "Dairy & Eggs", "Deli & Bakery", "Frozen Foods", "Pantry Staples & Baking", "Snacks, Cookies & Chips", "Beverages & Water", "Candy & Sweets", "International Foods", "Breakfast & Cereal"],
  "Household Essentials": ["Laundry Detergent & Care", "Paper & Plastic Goods", "Cleaning Supplies & Tools", "Dishwashing Soap & Packs", "Trash Bags & Storage", "Air Fresheners & Candles", "Pest Control"],
  "Electronics & Entertainment": ["TVs & Home Theater", "Laptops, PCs & Tablets", "Cell Phones & Accessories", "Headphones & Wireless Speakers", "Smart Home & Wi-Fi Equipment", "Wearable Tech & Smartwatches", "Video Games & Consoles", "Movies, TV Shows & Music", "Books & Magazines", "Cameras, Drones & Camcorders", "Printers & Computer Components", "Batteries & Power Accessories"],
  "Home, Furniture & Appliances": ["Furniture & Mattresses", "Kitchen & Dining Appliances", "Cookware, Bakeware & Utensils", "Home Decor, Lighting & Mirrors", "Bedding & Pillows", "Bath Linens & Organizers", "Storage & Home Organization", "Vacuums & Floor Care", "Heating, Cooling & Air Quality", "Large Appliances"],
  "Clothing, Shoes & Accessories": ["Women's Apparel", "Men's Apparel", "Girls' Clothing", "Boys' Clothing", "Baby & Toddler Clothing", "Shoes & Footwear", "Jewelry & Watches", "Handbags, Wallets & Luggage", "Accessories, Hats & Sunglasses"],
  "Baby & Kids": ["Diapers & Wipes", "Baby Formula & Food", "Car Seats & Strollers", "Nursery Furniture & Bedding", "Feeding & Nursing Supplies", "Baby Toys & Activity Gear", "Kids' Rooms & Decor"],
  "Toys & Outdoor Play": ["Action Figures & Playsets", "Dolls & Dollhouses", "Building Sets, Blocks & LEGO", "Board Games & Puzzles", "Arts & Crafts for Kids", "Bikes, Ride-Ons & Scooters", "Outdoor Play & Trampolines", "Learning & STEM Toys"],
  "Beauty & Personal Care": ["Makeup & Cosmetics", "Skincare & Sun Protection", "Hair Care, Color & Styling", "Fragrances, Perfume & Cologne", "Nail Care & Polish", "Oral Care & Toothpaste", "Shaving & Grooming", "Deodorant & Antiperspirant", "Bath & Body Wash"],
  "Pharmacy, Health & Wellness": ["Prescription Pharmacy Services", "Over-The-Counter Medicine", "Vitamins & Dietary Supplements", "Pain Relief & Management", "Cough, Cold & Flu", "First Aid & Injury Recovery", "Eye Care, Contacts & Reading Glasses", "Feminine & Sexual Wellness", "Diabetes Management & Monitors", "Home Health Care & Caregiving Solutions"],
  "Patio & Garden": ["Patio Furniture & Sets", "Grills & Outdoor Cooking", "Lawn Mowers & Outdoor Power Tools", "Garden Center, Plants & Seeds", "Soil, Mulch & Fertilizers", "Watering & Hoses", "Pools & Outdoor Water Fun", "Sheds & Outdoor Storage"],
  "Sports & Outdoors": ["Exercise & Fitness Equipment", "Camping & Hiking Gear", "Cycling & Accessories", "Hunting & Fishing", "Team Sports Equipment", "Boating & Water Sports", "Game Room & Recreational Sports"],
  "Tools & Home Improvement": ["Power Tools & Accessories", "Hand Tools & Equipment", "Building Materials & Hardware", "Lighting & Electrical Supplies", "Plumbing Supplies & Fixtures", "Smart Home Automation", "Paint & Painting Supplies", "Safety Equipment & Workwear"],
  "Auto, Tires & Industrial": ["Tires & Wheels", "Auto Parts & Replacement Components", "Motor Oil, Fluids & Chemicals", "Car Care & Detailing Products", "Automotive Tools & Equipment", "Car Electronics & GPS", "RV & Marine Parts", "Commercial & Heavy Industrial Supplies"],
  "Pets": ["Dog Food, Treats & Toys", "Cat Food, Treats & Litter", "Bird, Fish & Small Animal Supplies", "Pet Health, Grooming & Wellness", "Pet Beds, Crates & Apparel"],
  "Office & School Supplies": ["Stationery, Notebooks & Paper", "Pens, Pencils & Markers", "Folders, Binders & Filing", "Shipping, Packing & Mailing Supplies", "Printers, Ink & Toner", "Office Furniture & Desks"],
  "Celebration & Seasonal": ["Holiday Decor & Lighting", "Party Supplies & Tableware", "Gift Wrapping, Cards & Bags", "Halloween Costumes & Decor", "Pro-Sports Fan Shop"]
};

// ==========================================
// MAIN APP COMPONENT
// ==========================================

export default function App() {
  const scrollRef = useRef(null);
  // Navigation & View State
  const [currentView, setCurrentView] = useState('home'); 
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [subCategory, setSubCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProductId, setActiveProductId] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // DŒPLÆ Gųɲŋa LEASE ıT mode toggle
  const [isLeaseMode, setIsLeaseMode] = useState(false);

  // Users & Auth State
  const [users, setUsers] = useState([
    { email: 'creevesunc@gmail.com', password: '8732', role: 'admin', strikes: 0, banned: false, notifications: [], name: 'Chase Reeves', phone: '276-968-2529', address: 'Stuart, VA' }
  ]);
  const [currentUser, setCurrentUser] = useState(null);
  const [authForm, setAuthForm] = useState({ email: '', password: '', isLogin: true, name: '', phone: '', address: '', howHeard: '', twoFactorCode: '', step: 1 });

  // Persistent Inventory State 
  const [products, setProducts] = useState(INITIAL_PRODUCTS.map(p => ({ ...p, sellerEmail: 'creevesunc@gmail.com', type: 'sale' })));

  // Shopping Cart State
  const [cart, setCart] = useState([]);

  // Dashboard State
  const [dashboardTab, setDashboardTab] = useState('profile'); 

  // Orders / Escrow State
  const [orders, setOrders] = useState([]);

  // Checkout Form State
  const [checkoutForm, setCheckoutForm] = useState({
    name: '', email: '', phone: '', address: '', city: '', state: '', zip: '', shippingOption: 'Standard ($19.99)'
  });
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(null);

  // Support Chat State
  const [supportChats, setSupportChats] = useState([]); 
  const [currentChatInput, setCurrentChatInput] = useState('');
  const [adminSelectedChat, setAdminSelectedChat] = useState(null);

  // Selected Product Configuration State (for Detail View)
  const [configQuantity, setConfigQuantity] = useState(1);
  const [leaseDuration, setLeaseDuration] = useState(1); 

  // Custom Modal State
  const [modalInfo, setModalInfo] = useState({ isOpen: false, title: '', message: '' });
  const showCustomModal = (title, message) => {
    setModalInfo({ isOpen: true, title, message });
  };

  // Promo Balloon State
  const [balloonPopped, setBalloonPopped] = useState(false);
  const [showPromo, setShowPromo] = useState(false);

  // --- NEW HAPTIC & AUDIO ENGINE ---
  const triggerVibration = () => {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate([15, 30, 25]);
    }
  };

  const playRewardTone = () => {
    if (typeof window === 'undefined') return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(1046.5, ctx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(1318.5, ctx.currentTime + 0.08); 
      
      gain1.gain.setValueAtTime(0.3, ctx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
      
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      
      osc1.start();
      osc1.stop(ctx.currentTime + 0.12);
    } catch(e) { console.error("Audio engine skipped:", e); }
  };

  const playCashoutSound = () => {
    if (typeof window === 'undefined') return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        const ctx = new AudioContext();
        for (let i = 0; i < 12; i++) {
           const osc = ctx.createOscillator();
           osc.type = 'square';
           osc.frequency.setValueAtTime(600 + (Math.random() * 200), ctx.currentTime + (i * 0.06));
           const gain = ctx.createGain();
           gain.gain.setValueAtTime(0.1, ctx.currentTime + (i * 0.06));
           gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + (i * 0.06) + 0.02);
           osc.connect(gain);
           gain.connect(ctx.destination);
           osc.start(ctx.currentTime + (i * 0.06));
           osc.stop(ctx.currentTime + (i * 0.06) + 0.03);
        }
      }
      setTimeout(() => {
        if ('speechSynthesis' in window) {
           const msg = new SpeechSynthesisUtterance("Cashout Baby!");
           msg.pitch = 1.4; 
           msg.rate = 1.1;
           window.speechSynthesis.speak(msg);
        }
      }, 700);
    } catch(e) { console.error(e); }
  };

  const playPopSound = () => {
    if (typeof window === 'undefined') return;
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      osc.connect(gain); gain.connect(ctx.destination);
      osc.start(); osc.stop(ctx.currentTime + 0.1);
    } catch(e) {}
  };

  // Real Web Audio Synthesized Fireworks Sounds
  const playFireworksSound = () => {
    if (typeof window === 'undefined') return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContext();
      
      const createBoom = (delay) => {
        const bufferSize = ctx.sampleRate * 1.5; 
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1; // White noise
        }
        
        const noiseSource = ctx.createBufferSource();
        noiseSource.buffer = buffer;
        
        // Bandpass to simulate a distant boom rather than pure static
        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(800, ctx.currentTime + delay);
        filter.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + delay + 0.8);
        
        // Exponential decay envelope
        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0, ctx.currentTime);
        gainNode.gain.setValueAtTime(1, ctx.currentTime + delay);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + delay + 0.8);
        
        noiseSource.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);
        
        noiseSource.start(ctx.currentTime + delay);
        noiseSource.stop(ctx.currentTime + delay + 1.5);
      };
      
      // Sequence of rapid explosions
      createBoom(0);
      createBoom(0.2);
      createBoom(0.4);
      createBoom(0.7);
      createBoom(1.1);
      
    } catch (e) {
      console.error("Audio API error", e);
    }
  };

  const handleBalloonClick = () => {
    if (balloonPopped) return;
    setBalloonPopped(true);
    playPopSound();
    triggerVibration();
    setTimeout(() => {
      playFireworksSound();
      setShowPromo(true);
    }, 200);
  };

  const [rippleEffect, setRippleEffect] = useState(false);
  const triggerWaterRipple = (skipVibrate = false) => {
    setRippleEffect(true);
    setTimeout(() => setRippleEffect(false), 1400);
    if (!skipVibrate) {
      triggerVibration();
    }
  };

  const triggerReward = () => {
    triggerVibration();
    playRewardTone();
  };
  // ---------------------------------

  // 18% Price Reduction helper (Sales Only)
  const getReducedPrice = (original) => Math.round(original * 0.82 * 100) / 100;

  // Quantity Discount Calculator Helper
  const calculateTierDiscount = (qty) => {
    if (qty >= 50) return { percent: 25, label: '50+ pieces: 25% Off' };
    if (qty >= 11) return { percent: 20, label: '11–49 pieces: 20% Off' };
    if (qty >= 5) return { percent: 15, label: '5–10 pieces: 15% Off' };
    return { percent: 0, label: 'None' };
  };

  // Regex Validation for PII
  const containsPII = (text) => {
    const phoneRegex = /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/g;
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    return phoneRegex.test(text) || emailRegex.test(text);
  };

  // Cart Totals calculation
  const cartItemCount = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart]);
  
  const cartSubtotals = useMemo(() => {
    let merchandiseSubtotal = 0;
    let totalItems = 0;

    cart.forEach(item => {
      const prod = products.find(p => p.id === item.productId);
      if (!prod) return;
      
      let itemUnitPrice = 0;
      if (prod.type === 'lease') {
        itemUnitPrice = prod.originalPrice * item.quantity; 
      } else {
        const baseRed = getReducedPrice(prod.originalPrice);
        const ramCost = prod.ramOptions?.[item.selectedRam]?.price || 0;
        const storCost = prod.storageOptions?.[item.selectedStorage]?.price || 0;
        itemUnitPrice = baseRed + ramCost + storCost;
      }

      merchandiseSubtotal += itemUnitPrice * item.quantity;
      totalItems += item.quantity;
    });

    const discountTier = calculateTierDiscount(totalItems);
    const discountAmount = Math.round((merchandiseSubtotal * (discountTier.percent / 100)) * 100) / 100;
    const discountedMerchandiseTotal = Math.max(0, merchandiseSubtotal - discountAmount);
    
    // Add 7.5% Service Charge for Buyer
    const buyerServiceFee = Math.round(discountedMerchandiseTotal * 0.075 * 100) / 100;
    
    const shippingCost = checkoutForm.shippingOption.includes('Express') ? 39.99 : (discountedMerchandiseTotal > 0 ? 19.99 : 0);
    const tax = Math.round((discountedMerchandiseTotal * 0.05) * 100) / 100;
    const finalTotal = Math.round((discountedMerchandiseTotal + buyerServiceFee + shippingCost + tax) * 100) / 100;

    return {
      merchandiseSubtotal: discountedMerchandiseTotal,
      discountTier,
      discountAmount,
      buyerServiceFee,
      shipping: shippingCost,
      tax,
      finalTotal,
      totalItems
    };
  }, [cart, products, checkoutForm.shippingOption]);

  const handleAuth = (e) => {
    e.preventDefault();
    triggerWaterRipple();
    const { email, password, isLogin, name, phone, address, howHeard, step, twoFactorCode } = authForm;
    
    if (step === 1) {
      if (isLogin) {
        const u = users.find(user => user.email === email && user.password === password);
        if (u) {
          if (u.banned) {
            showCustomModal('Account Banned', 'Your account is banned due to PII policy violations.');
          } else if (u.email === 'creevesunc@gmail.com') {
            // REAL WORLD FIX: Bypass 2FA for master admin account
            setCurrentUser(u);
            setCurrentView('dashboard');
            setAuthForm({...authForm, step: 1, email: '', password: '', twoFactorCode: ''});
            triggerReward();
          } else {
            showCustomModal('2FA Sent', 'A verification code has been sent to your registered device.');
            setAuthForm({...authForm, step: 2});
          }
        } else {
          showCustomModal('Login Failed', 'Invalid credentials.');
        }
      } else {
        if (users.find(user => user.email === email)) {
          showCustomModal('Error', 'Email already exists.');
          return;
        }
        if(!name || !phone || !address) {
           showCustomModal('Error', 'Please fill out all required fields.');
           return;
        }
        showCustomModal('2FA Sent', 'A verification code has been sent to your phone.');
        setAuthForm({...authForm, step: 2});
      }
    } else if (step === 2) {
      if (twoFactorCode.length >= 4) { // Accept any mock code for simulation
        if(isLogin) {
           const u = users.find(user => user.email === email);
           setCurrentUser(u);
           setCurrentView('dashboard');
           setAuthForm({...authForm, step: 1, email: '', password: '', twoFactorCode: ''});
        } else {
           const newUser = { email, password, name, phone, address, howHeard, role: 'user', strikes: 0, banned: false, notifications: [] };
           setUsers(prev => [...prev, newUser]);
           setCurrentUser(newUser);
           setCurrentView('dashboard');
           setAuthForm({ email: '', password: '', isLogin: true, name: '', phone: '', address: '', howHeard: '', twoFactorCode: '', step: 1 });
        }
        triggerReward();
      } else {
        showCustomModal('Error', 'Invalid 2FA code.');
      }
    }
  };

  const handleAddToCart = (product, ramIndex = 0, storageIndex = 0, qty = 1, leaseDuration = 1) => {
    triggerReward();
    if (product.type !== 'lease' && qty > product.stock) {
      showCustomModal('Stock Limit Exceeded', `Cannot add ${qty} units. Only ${product.stock} available.`);
      return;
    }

    const cartId = `${product.id}-${ramIndex}-${storageIndex}-${leaseDuration}`;
    setCart(prev => {
      const existingIndex = prev.findIndex(item => item.cartId === cartId);
      if (existingIndex > -1) {
        const updated = [...prev];
        const newQty = updated[existingIndex].quantity + qty;
        if (product.type !== 'lease' && newQty > product.stock) {
          showCustomModal('Stock Limit Exceeded', `Quantity exceeds available stock.`);
          return prev;
        }
        updated[existingIndex].quantity = newQty;
        return updated;
      } else {
        return [...prev, {
          cartId, productId: product.id, quantity: qty, selectedRam: ramIndex, selectedStorage: storageIndex, leaseDuration
        }];
      }
    });
    setCurrentView('cart');
  };

  const processCheckout = async (e) => {
    e.preventDefault();
    triggerReward();
    if (!checkoutForm.name || !checkoutForm.email || !checkoutForm.address) {
      showCustomModal('Missing Information', 'Please fill out required fields.');
      return;
    }
    
    // Add waiver for lease items
    const hasLeases = cart.some(item => {
      const prod = products.find(p => p.id === item.productId);
      return prod && prod.type === 'lease';
    });
    
    if (hasLeases && !window.confirm("LEASING WAIVER: You agree to return all leased items. Failure to return will result in a charge for the total value of the item. Any damage is subject to support hearing. Do you agree?")) {
      return;
    }

    setPaymentProcessing(true);

    // ==========================================
    // REAL WORLD STRIPE INTEGRATION LOGIC (VERCEL)
    // ==========================================
    // CRITICAL SECURITY NOTE: You can NEVER put a Stripe Secret Key in frontend React code.
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          cart: cart, 
          customer: checkoutForm,
          totalAmount: cartSubtotals.finalTotal
        })
      });

      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      
      if (data.stripeCheckoutUrl) {
        window.location.href = data.stripeCheckoutUrl; 
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (err) {
      showCustomModal('Payment Setup Required', 'Your Stripe backend is not connected yet! Please deploy your Vercel Serverless Function to /api/create-checkout-session to process real payments.');
      setPaymentProcessing(false);
    }
  };

  const verifyShipping = (orderId, trackingText) => {
    triggerWaterRipple();
    setTimeout(() => {
      setOrders(prev => prev.map(o => {
        if(o.id === orderId) {
          return { ...o, status: 'Shipped (Funds Pending Release)', tracking: trackingText };
        }
        return o;
      }));
      showCustomModal('Shipping Verified', 'Tracking verified! Seller fee of 10% will be applied upon delivery and funds released.');
    }, 1500);
  };

  const filteredProducts = products.filter(p => {
    const matchType = isLeaseMode ? p.type === 'lease' : p.type === 'sale';
    const matchCat = (selectedCategory === 'All' || p.category === selectedCategory) || 
                     (selectedCategory === 'PlaeDoeS Market-Place' && (!subCategory || p.subCategory === subCategory));
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchType && matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen shine-white-bg font-sans text-slate-800 selection:bg-cyan-500 selection:text-white">
      <style dangerouslySetInnerHTML={{ __html: `
        /* Shiny Reflective White/Black/Dark-Gold Marble Floor Background */
        .shine-white-bg {
          background-color: #f0f4f8;
          background-image: 
            linear-gradient(115deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.1) 45%, rgba(0,0,0,0.08) 50%, rgba(255,255,255,0.5) 55%, rgba(255,255,255,0.95) 100%),
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cg fill='none' stroke-linecap='round'%3E%3Cpath d='M0,40 Q50,60 100,10 T200,80' stroke='%23111111' stroke-width='1.5' opacity='0.8'/%3E%3Cpath d='M-20,160 Q40,120 120,170 T240,130' stroke='%23222222' stroke-width='1' opacity='0.7'/%3E%3Cpath d='M50,-20 Q70,50 20,100 T80,220' stroke='%238b6508' stroke-width='2' opacity='0.9'/%3E%3Cpath d='M150,-20 Q120,80 180,130 T140,220' stroke='%23b8860b' stroke-width='1.5' opacity='0.8'/%3E%3C/g%3E%3Cg fill='%238b6508' opacity='0.95'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3Ccircle cx='38' cy='25' r='1.5'/%3E%3Cpath d='M80,130 Q90,135 95,120 Z'/%3E%3Ccircle cx='180' cy='180' r='2'/%3E%3C/g%3E%3Cg fill='%23111111' opacity='0.9'%3E%3Ccircle cx='180' cy='50' r='2.5'/%3E%3Ccircle cx='170' cy='58' r='1.5'/%3E%3Ccircle cx='60' cy='180' r='1.5'/%3E%3C/g%3E%3C/svg%3E"),
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cg fill='none' stroke-linecap='round'%3E%3Cpath d='M-10,15 Q30,50 70,-10' stroke='%231a1a1a' stroke-width='1' opacity='0.8'/%3E%3Cpath d='M10,110 Q50,70 120,100' stroke='%236b4a04' stroke-width='1.2' opacity='0.9'/%3E%3C/g%3E%3Cg fill='%236b4a04' opacity='0.95'%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3Ccircle cx='80' cy='20' r='1.5'/%3E%3Cpath d='M30,30 L36,33 L32,38 Z'/%3E%3C/g%3E%3Cg fill='%23050505' opacity='0.95'%3E%3Ccircle cx='15' cy='80' r='1.5'/%3E%3Ccircle cx='90' cy='90' r='1'/%3E%3C/g%3E%3C/svg%3E"),
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cg fill='%23111111' opacity='0.8'%3E%3Ccircle cx='10' cy='10' r='0.8'/%3E%3Ccircle cx='45' cy='35' r='1.2'/%3E%3C/g%3E%3Cg fill='%238b6508' opacity='0.9'%3E%3Ccircle cx='30' cy='50' r='1'/%3E%3Ccircle cx='55' cy='10' r='1.2'/%3E%3C/g%3E%3C/svg%3E"),
            radial-gradient(circle at 50% 50%, #ffffff 0%, #e2e8f0 100%);
          background-size: 100% 100%, 200px 200px, 100px 100px, 60px 60px, 100% 100%;
          background-position: 0 0, 0 0, 40px 60px, 15px 25px, 0 0;
          background-attachment: fixed;
        }
        .cyber-gold-title {
          font-family: 'Orbitron', sans-serif; color: #d4af37;
          text-shadow: 0 0 10px rgba(212, 175, 55, 0.6), 0 0 20px rgba(255, 215, 0, 0.4), 0 0 30px rgba(255, 165, 0, 0.25);
          letter-spacing: 2px;
        }
        @keyframes alienMultiColorGlow {
          0% { filter: drop-shadow(0 0 10px #00ffcc); fill: #00ffcc; stroke: #00ffcc; }
          33% { filter: drop-shadow(0 0 10px #ff007f); fill: #ff007f; stroke: #ff007f; }
          66% { filter: drop-shadow(0 0 10px #d4af37); fill: #d4af37; stroke: #d4af37; }
          100% { filter: drop-shadow(0 0 10px #00ffcc); fill: #00ffcc; stroke: #00ffcc; }
        }
        .neon-alien-logo { animation: alienMultiColorGlow 5s infinite ease-in-out; }
        .water-pond {
          position: relative; background: linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(238, 242, 246, 0.98) 100%);
          border: 1px solid rgba(0, 180, 216, 0.35); box-shadow: inset 0 0 30px rgba(0, 150, 255, 0.08), 0 15px 35px rgba(0,0,0,0.08);
          overflow: hidden;
        }
        .ripple-animation {
          position: absolute; border: 3px solid rgba(0, 180, 216, 0.85); border-radius: 50%;
          animation: rippleEffectAnim 1.4s cubic-bezier(0, 0.2, 0.8, 1) forwards; pointer-events: none; z-index: 100;
        }
        @keyframes rippleEffectAnim {
          0% { width: 0px; height: 0px; opacity: 1; transform: translate(-50%, -50%); }
          100% { width: 600px; height: 600px; opacity: 0; transform: translate(-50%, -50%); }
        }
        .snake-skin-matte {
          background-color: #0a0a0a; background-size: 16px 16px;
          background-image: linear-gradient(45deg, #151515 25%, transparent 25%, transparent 75%, #151515 75%, #151515), linear-gradient(45deg, #151515 25%, transparent 25%, transparent 75%, #151515 75%, #151515);
          background-position: 0 0, 8px 8px; color: #ffffff; border: 1px solid rgba(0, 255, 204, 0.3); box-shadow: 0 10px 30px rgba(0,0,0,0.4);
        }
        .balloon {
          position: fixed; bottom: 40px; right: 40px; width: 60px; height: 70px;
          background: rgba(138, 43, 226, 0.7); border-radius: 50% 50% 50% 50% / 40% 40% 60% 60%;
          box-shadow: inset -5px -5px 15px rgba(0,0,0,0.3), 0 0 20px rgba(138, 43, 226, 0.5);
          z-index: 50; animation: bobbing 3s ease-in-out infinite; cursor: pointer;
        }
        .balloon::before {
          content: ''; position: absolute; bottom: -10px; left: 50%; transform: translateX(-50%);
          width: 0; height: 0; border-left: 5px solid transparent; border-right: 5px solid transparent; border-bottom: 10px solid rgba(138, 43, 226, 0.7);
        }
        .balloon::after {
          content: ''; position: absolute; bottom: -60px; left: 50%; width: 2px; height: 60px; background: #FFD700; transform-origin: top; animation: string-sway 3s ease-in-out infinite;
        }
        @keyframes bobbing { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes string-sway { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(10deg); } }
        
        .confetti-piece {
          position: fixed; width: 10px; height: 10px; z-index: 9999; animation: fall 3s linear forwards;
        }
        @keyframes fall { to { transform: translateY(100vh) rotate(720deg); } }
      `}} />

      {rippleEffect && (
        <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center">
          <div className="ripple-animation"></div>
        </div>
      )}

      {modalInfo.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="snake-skin-matte p-8 rounded-3xl max-w-md w-full text-center space-y-6 border border-cyan-500 shadow-2xl">
            <div className="w-16 h-16 bg-cyan-500/10 text-cyan-400 rounded-2xl flex items-center justify-center mx-auto border border-cyan-500/30">
              <Info className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-black text-white">{modalInfo.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{modalInfo.message}</p>
            </div>
            <button 
              onClick={() => { triggerWaterRipple(); setModalInfo({ isOpen: false, title: '', message: '' }); }}
              className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-black py-3 rounded-xl text-sm transition shadow-lg shadow-cyan-500/20"
            >
              OK / Dismiss
            </button>
          </div>
        </div>
      )}

      {/* DŒPLÆ Gųɲŋa LEASE ıT BANNER */}
      <div className="bg-gradient-to-r from-slate-300 via-gray-100 to-slate-300 text-slate-900 text-center py-3 relative z-50 shadow-md">
        <h2 className="text-xl md:text-2xl font-black tracking-widest uppercase">✨️💲✨️ DŒPLÆ Gųɲŋa LEASE ıT ✨️💲✨️</h2>
        <p className="text-[10px] md:text-xs font-bold opacity-90 tracking-wide mt-1">Lease anything you own, at your custom price, for as long as you want them to have iT!</p>
        <button 
          onClick={() => { 
            triggerWaterRipple(); 
            const nextLeaseState = !isLeaseMode;
            setIsLeaseMode(nextLeaseState); 
            if (nextLeaseState) {
              setSelectedCategory('All');
              setSubCategory('');
            }
            setCurrentView('catalog'); 
          }}
          className={`absolute right-4 top-1/2 -translate-y-1/2 px-4 py-1.5 rounded-lg text-xs font-black shadow-lg transition ${isLeaseMode ? 'bg-rose-600 text-white hover:bg-rose-500' : 'bg-slate-900 text-slate-100 hover:scale-105'}`}
        >
          {isLeaseMode ? 'Leave Item Leasing Service' : 'Enter Item Leasing Service'}
        </button>
      </div>

      {/* PLÆDŒ'S MARKETPLACE BANNER */}
      <div className="bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-500 text-slate-900 text-center py-3 relative z-40 shadow-md border-t border-slate-400">
        <h2 className="text-xl md:text-2xl font-black tracking-widest uppercase">✨️💲✨️ PLÆDŒ'S MARKETPLACE ✨️💲✨️</h2>
        <p className="text-[10px] md:text-xs font-bold opacity-90 tracking-wide mt-1">Buy, Sell, and Trade Everything in the Market!</p>
        <button 
          onClick={() => { 
            triggerWaterRipple(); 
            if(selectedCategory === 'PlaeDoeS Market-Place') {
              setSelectedCategory('All');
              setSubCategory('');
            } else {
              setSelectedCategory('PlaeDoeS Market-Place');
              setIsLeaseMode(false); 
              setCurrentView('catalog');
            }
          }}
          className={`absolute right-4 top-1/2 -translate-y-1/2 px-4 py-1.5 rounded-lg text-xs font-black shadow-lg transition ${selectedCategory === 'PlaeDoeS Market-Place' ? 'bg-rose-600 text-white hover:bg-rose-500' : 'bg-slate-900 text-yellow-400 hover:scale-105'}`}
        >
          {selectedCategory === 'PlaeDoeS Market-Place' ? 'Leave Plaedoes-marketplace' : 'Enter Plaedoes-marketplace'}
        </button>
      </div>

      {/* COMBINED HEADER & CATEGORIES BAR */}
      <header className="sticky top-0 z-50 snake-skin-matte py-3 px-4 shadow-2xl border-b border-cyan-500/40 flex items-center justify-between group">
        <div className="flex-1 relative flex items-center overflow-hidden pr-4">
          <button onClick={() => scrollRef.current?.scrollBy({left: -200, behavior: 'smooth'})} className="absolute left-0 z-20 bg-slate-900 text-yellow-400 p-2 rounded-r-xl shadow-[5px_0_15px_rgba(0,0,0,0.8)] border-y border-r border-cyan-500/50 hover:bg-slate-800 transition-all flex items-center justify-center animate-pulse">
            <ChevronLeft size={24}/>
          </button>
          
          <div ref={scrollRef} className="flex-1 flex items-center justify-start overflow-x-auto gap-4 sm:gap-6 [&::-webkit-scrollbar]:hidden px-12 sm:px-14">
            <span className="cyber-gold-title text-base sm:text-lg font-black tracking-widest uppercase flex-shrink-0 cursor-pointer" onClick={() => { triggerWaterRipple(); setCurrentView('home'); }}>
              {isLeaseMode ? 'DŒPLÆ LEASE' : 'DIRT CHEAP DESKTOPS'}
            </span>
            <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-400 flex-nowrap pb-1">
              <button onClick={() => { triggerWaterRipple(); setCurrentView('dashboard'); setDashboardTab('profile'); }} className="bg-[#800020] text-white font-black px-4 py-2 rounded-lg uppercase tracking-widest whitespace-nowrap shadow-lg shadow-red-900/60 border border-red-400/50 hover:bg-[#a00020] transition">List Item!</button>
              <button onClick={() => { triggerWaterRipple(); setSelectedCategory('All'); setSubCategory(''); setCurrentView('catalog'); }} className="underline decoration-cyan-500/50 hover:text-white transition whitespace-nowrap">All Items</button>
              <button onClick={() => { triggerWaterRipple(); setSelectedCategory('Desktop Computers'); setSubCategory(''); setCurrentView('catalog'); }} className="underline decoration-cyan-500/50 hover:text-white transition whitespace-nowrap">Desktops</button>
              <button onClick={() => { triggerWaterRipple(); setSelectedCategory('Smartphones'); setSubCategory(''); setCurrentView('catalog'); }} className="underline decoration-cyan-500/50 hover:text-white transition whitespace-nowrap">Smartphones</button>
              <button onClick={() => { triggerWaterRipple(); setSelectedCategory('Accessories'); setSubCategory(''); setCurrentView('catalog'); }} className="underline decoration-cyan-500/50 hover:text-white transition whitespace-nowrap">Accessories</button>
              <button onClick={() => { triggerWaterRipple(); setSelectedCategory('PlaeDoeS Market-Place'); setSubCategory(''); setCurrentView('catalog'); }} className="text-yellow-400 underline decoration-yellow-400/80 hover:text-yellow-200 transition font-black tracking-widest whitespace-nowrap drop-shadow-md">PlaeDoeS Market-Place</button>
            </div>
          </div>

          <button onClick={() => scrollRef.current?.scrollBy({left: 200, behavior: 'smooth'})} className="absolute right-4 z-20 bg-slate-900 text-yellow-400 p-2 rounded-l-xl shadow-[-5px_0_15px_rgba(0,0,0,0.8)] border-y border-l border-cyan-500/50 hover:bg-slate-800 transition-all flex items-center justify-center animate-pulse">
            <ChevronRight size={24}/>
          </button>
        </div>

        <div className="flex items-center space-x-3 pl-3 border-l border-cyan-500/30">
          <button 
            onClick={() => { triggerWaterRipple(); setCurrentView('cart'); }}
            className="relative bg-slate-800 hover:bg-slate-700 border border-slate-600 p-2 sm:p-3 rounded-xl flex items-center space-x-2 transition shadow-sm group"
          >
            <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 group-hover:scale-110 transition" />
            <span className="hidden sm:inline font-bold text-sm text-white">Cart</span>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-cyan-600 text-white text-xs font-black w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center shadow-md animate-bounce">
                {cartItemCount}
              </span>
            )}
          </button>

          <button 
            onClick={() => { triggerWaterRipple(); setCurrentView('dashboard'); }}
            className="bg-slate-900 hover:bg-slate-800 border border-cyan-500/40 text-cyan-300 px-3 py-2 sm:py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition shadow-sm whitespace-nowrap"
          >
            <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">{currentUser ? 'Dashboard' : 'Login'}</span>
          </button>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded-xl bg-slate-100 text-slate-800">
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-cyan-500/40 px-4 pt-2 pb-6 space-y-3 shadow-2xl absolute w-full z-40">
           <button onClick={() => { triggerWaterRipple(); setSelectedCategory('PlaeDoeS Market-Place'); setCurrentView('catalog'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 font-black text-yellow-400 underline decoration-yellow-400/80">PlaeDoeS Market-Place</button>
           <button onClick={() => { triggerWaterRipple(); setSelectedCategory('Desktop Computers'); setCurrentView('catalog'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-white underline decoration-cyan-500/50">Desktop Computers</button>
           <button onClick={() => { triggerWaterRipple(); setSelectedCategory('Smartphones'); setCurrentView('catalog'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-white underline decoration-cyan-500/50">Smartphones</button>
           <button onClick={() => { triggerWaterRipple(); setSelectedCategory('Accessories'); setCurrentView('catalog'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-white underline decoration-cyan-500/50">Accessories</button>
           <button onClick={() => { triggerWaterRipple(); setCurrentView('dashboard'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-cyan-400 font-bold border-t border-slate-700 mt-2 pt-2">My Account / Dashboard</button>
        </div>
      )}

      {/* VIEW: HOME */}
      {currentView === 'home' && (
        <main className="py-20 text-center space-y-8">
           <h1 className="text-4xl sm:text-6xl font-black text-slate-900">
              {isLeaseMode ? 'WELCOME TO THE LEASE MARKET' : 'WE SELL CHEAP DESKTOP COMPUTERS!!!!'}
           </h1>
           <button 
              onClick={() => { triggerWaterRipple(); setCurrentView('catalog'); }}
              className="bg-cyan-600 hover:bg-cyan-500 text-white font-black px-10 py-5 rounded-2xl text-xl shadow-xl transition"
            >
              SHOP {isLeaseMode ? 'LEASES' : 'ITEMS'} NOW <ArrowRight className="inline w-6 h-6" />
            </button>
        </main>
      )}

      {/* VIEW: CATALOG */}
      {currentView === 'catalog' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          <button 
            onClick={() => { triggerWaterRipple(); setCurrentView('dashboard'); setDashboardTab('profile'); }}
            className="w-full bg-[#cc0000] hover:bg-[#ff1a1a] text-white font-black text-2xl sm:text-3xl py-4 sm:py-6 rounded-3xl border-4 border-red-400 shadow-[0_0_20px_rgba(255,0,0,0.6)] mb-8 uppercase tracking-widest transition-transform hover:scale-[1.02]"
          >
            POST NEW ITEM
          </button>

          <div className="snake-skin-matte p-6 rounded-3xl shadow-lg mb-8 space-y-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <h1 className="text-2xl font-black text-white uppercase">{selectedCategory} {subCategory && `> ${subCategory}`}</h1>
              <div className="flex gap-4">
                <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="bg-slate-900 border border-cyan-500/40 text-white rounded-xl px-4 py-2" />
              </div>
            </div>

            {selectedCategory === 'PlaeDoeS Market-Place' && (
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {Object.keys(PLAEDOES_CATEGORIES).map(cat => (
                  <button 
                    key={cat} 
                    onClick={() => setSubCategory(cat)}
                    className={`text-xs p-2 rounded border transition ${subCategory === cat ? 'bg-cyan-600 text-white border-cyan-400' : 'bg-slate-800 text-gray-300 border-slate-700 hover:border-cyan-500'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
            
            {subCategory && PLAEDOES_CATEGORIES[subCategory] && (
               <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700">
                 <span className="text-xs font-bold text-gray-400 w-full mb-1">Subcategories:</span>
                 {PLAEDOES_CATEGORIES[subCategory].map(sub => (
                   <span key={sub} className="bg-slate-900 border border-slate-700 text-cyan-300 text-xs px-2 py-1 rounded">{sub}</span>
                 ))}
               </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(prod => {
              const displayPrice = prod.type === 'lease' ? prod.originalPrice : getReducedPrice(prod.originalPrice);
              return (
                <div key={prod.id} className="snake-skin-matte p-6 rounded-3xl flex flex-col justify-between shadow-lg">
                  <div>
                    <div className="relative h-48 overflow-hidden rounded-2xl border border-cyan-500/40 bg-slate-900 mb-4 water-pond">
                      <img src={prod.images ? prod.images[0] : prod.image} alt={prod.name} className="w-full h-full object-cover" />
                      {prod.type === 'lease' && <div className="absolute top-3 left-3 bg-purple-600 text-white text-xs font-black px-2 py-1 rounded shadow">LEASE</div>}
                      <div className="absolute bottom-3 right-3 bg-slate-900/90 text-white text-xs font-bold px-2 py-1 rounded border border-cyan-500/30">Stock: {prod.stock}</div>
                    </div>
                    <div className="space-y-2">
                      <span className="text-[11px] font-bold text-cyan-400 uppercase">{prod.category}</span>
                      <h3 className="text-lg font-black text-white">{prod.name}</h3>
                      <p className="text-xs text-gray-400 line-clamp-2">{prod.description}</p>
                    </div>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-700 flex items-center justify-between">
                    <div>
                      <div className="text-xl font-black text-cyan-400">${displayPrice.toFixed(2)} {prod.type === 'lease' ? `per ${prod.leaseMetric || 'day'}` : ''}</div>
                    </div>
                    <button 
                      onClick={() => { triggerReward(); setActiveProductId(prod.id); setCurrentView('product'); }}
                      className="bg-cyan-600 hover:bg-cyan-500 text-white font-black px-4 py-2.5 rounded-xl text-xs uppercase"
                    >
                      {prod.type === 'lease' ? 'Lease Info' : 'Buy Now'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* VIEW: PRODUCT DETAIL */}
      {currentView === 'product' && activeProductId && (() => {
        const prod = products.find(p => p.id === activeProductId);
        if(!prod) return null;
        const displayPrice = prod.type === 'lease' ? prod.originalPrice : getReducedPrice(prod.originalPrice);

        return (
          <div className="max-w-5xl mx-auto px-4 py-12">
            <button onClick={() => setCurrentView('catalog')} className="text-cyan-600 font-bold mb-6 hover:underline">← Back</button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 snake-skin-matte p-8 rounded-3xl">
              <div>
                 <img src={prod.images ? prod.images[0] : prod.image} className="w-full h-80 object-cover rounded-xl border border-cyan-500/40" alt={prod.name}/>
                 {prod.images && prod.images.length > 1 && (
                   <div className="flex gap-2 mt-4">
                     {prod.images.map((img, i) => (
                       <img key={i} src={img} className="w-16 h-16 object-cover rounded border border-cyan-500" />
                     ))}
                   </div>
                 )}
              </div>
              <div className="space-y-4">
                <h1 className="text-3xl font-black text-white">{prod.name}</h1>
                <p className="text-gray-400">{prod.description}</p>
                <div className="text-3xl font-black text-cyan-400">${displayPrice.toFixed(2)} {prod.type === 'lease' ? `/ ${prod.leaseMetric}` : ''}</div>
                
                {prod.type === 'lease' ? (
                  <div className="space-y-2">
                    <label className="text-xs text-white uppercase">Duration ({prod.leaseMetric}s) - Max: {prod.maxDuration}</label>
                    <input type="number" min="1" max={prod.maxDuration} value={leaseDuration} onChange={(e) => setLeaseDuration(Number(e.target.value))} className="w-full bg-slate-900 border border-cyan-500 rounded p-3 text-white" />
                  </div>
                ) : (
                  <div className="space-y-2">
                    <label className="text-xs text-white uppercase">Quantity (Stock: {prod.stock})</label>
                    <input type="number" min="1" max={prod.stock} value={configQuantity} onChange={(e) => setConfigQuantity(Number(e.target.value))} className="w-full bg-slate-900 border border-cyan-500 rounded p-3 text-white" />
                  </div>
                )}
                
                <button 
                  onClick={() => handleAddToCart(prod, 0, 0, configQuantity, leaseDuration)}
                  className="w-full bg-cyan-600 text-white font-black py-4 rounded-xl uppercase hover:bg-cyan-500"
                >
                  Add to Cart
                </button>
                <div className="text-xs text-gray-500 mt-4 border-t border-slate-700 pt-4">
                  Seller: {prod.sellerEmail}
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* VIEW: CART */}
      {currentView === 'cart' && (
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-black text-slate-900 mb-8">Cart</h1>
          <div className="snake-skin-matte p-6 rounded-3xl space-y-4">
             {cart.map(item => {
               const prod = products.find(p => p.id === item.productId);
               const price = prod.type === 'lease' ? prod.originalPrice * item.leaseDuration : getReducedPrice(prod.originalPrice) * item.quantity;
               return (
                 <div key={item.cartId} className="flex justify-between items-center border-b border-slate-700 pb-4">
                    <div>
                      <h3 className="text-white font-bold">{prod.name}</h3>
                      <p className="text-xs text-gray-400">
                        {prod.type === 'lease' ? `Leasing for ${item.leaseDuration} ${prod.leaseMetric}(s)` : `Qty: ${item.quantity}`}
                      </p>
                    </div>
                    <div className="text-cyan-400 font-bold">${price.toFixed(2)}</div>
                 </div>
               );
             })}
             
             <div className="space-y-2 text-sm pt-4">
                <div className="flex justify-between text-gray-400"><span>Merchandise Subtotal:</span><span className="text-white">${cartSubtotals.merchandiseSubtotal.toFixed(2)}</span></div>
                <div className="flex justify-between text-gray-400"><span>Buyer Service Fee (7.5%):</span><span className="text-white">${cartSubtotals.buyerServiceFee.toFixed(2)}</span></div>
                <div className="flex justify-between text-gray-400"><span>Est. Tax (5%):</span><span className="text-white">${cartSubtotals.tax.toFixed(2)}</span></div>
                <div className="flex justify-between text-white font-black text-lg pt-2 border-t border-slate-700"><span>Total:</span><span className="text-cyan-400">${cartSubtotals.finalTotal.toFixed(2)}</span></div>
             </div>
             
             <button onClick={() => setCurrentView('checkout')} className="w-full bg-cyan-600 text-white font-black py-4 rounded-xl mt-4">Proceed to Checkout</button>
          </div>
        </div>
      )}

      {/* VIEW: CHECKOUT */}
      {currentView === 'checkout' && (
        <div className="max-w-4xl mx-auto px-4 py-12">
           <form onSubmit={processCheckout} className="snake-skin-matte p-8 rounded-3xl space-y-6">
             <h2 className="text-2xl font-black text-white">Shipping & Secure Escrow Checkout</h2>
             
             <div className="grid grid-cols-2 gap-4">
               <input type="text" placeholder="Name" required value={checkoutForm.name} onChange={(e) => setCheckoutForm({...checkoutForm, name: e.target.value})} className="bg-slate-900 border border-cyan-500 rounded p-3 text-white" />
               <input type="email" placeholder="Email" required value={checkoutForm.email} onChange={(e) => setCheckoutForm({...checkoutForm, email: e.target.value})} className="bg-slate-900 border border-cyan-500 rounded p-3 text-white" />
               <input type="text" placeholder="Address" required value={checkoutForm.address} onChange={(e) => setCheckoutForm({...checkoutForm, address: e.target.value})} className="col-span-2 bg-slate-900 border border-cyan-500 rounded p-3 text-white" />
             </div>

             <div className="space-y-2">
               <label className="text-white font-bold">Shipping Method</label>
               <select value={checkoutForm.shippingOption} onChange={(e) => setCheckoutForm({...checkoutForm, shippingOption: e.target.value})} className="w-full bg-slate-900 border border-cyan-500 rounded p-3 text-white">
                 <option value="Standard ($19.99)">Standard Shipping ($19.99)</option>
                 <option value="Express ($39.99)">Express Shipping ($39.99)</option>
               </select>
             </div>
             
             <div className="bg-slate-800 p-4 rounded text-sm text-gray-300">
               <p><strong>Escrow Notice:</strong> Your payment will be held securely in an administrative holding account. The seller will be notified to ship the item. Only after tracking is verified will funds (minus 10% seller fee) be released.</p>
             </div>

             <button type="submit" disabled={paymentProcessing} className="w-full bg-cyan-600 text-white font-black py-4 rounded-xl">
               {paymentProcessing ? 'Processing Secure Hold...' : `Pay $${cartSubtotals.finalTotal.toFixed(2)} to Escrow`}
             </button>
           </form>
        </div>
      )}

      {/* VIEW: DASHBOARD (Auth & Post Items) */}
      {currentView === 'dashboard' && (
        <div className="max-w-6xl mx-auto px-4 py-12">
          {!currentUser ? (
            <div className="max-w-md mx-auto snake-skin-matte p-8 rounded-3xl space-y-6">
              <h2 className="text-2xl font-black text-white">{authForm.isLogin ? 'Secure Login' : 'Create Verified Account'}</h2>
              <form onSubmit={handleAuth} className="space-y-4">
                {authForm.step === 1 && (
                  <>
                    <input type="email" required placeholder="Email Address" value={authForm.email} onChange={(e) => setAuthForm({...authForm, email: e.target.value})} className="w-full bg-slate-900 border border-cyan-500 rounded p-3 text-white" />
                    <input type="password" required placeholder="Password" value={authForm.password} onChange={(e) => setAuthForm({...authForm, password: e.target.value})} className="w-full bg-slate-900 border border-cyan-500 rounded p-3 text-white" />
                    
                    {!authForm.isLogin && (
                      <>
                        <input type="text" required placeholder="Full Name" value={authForm.name} onChange={(e) => setAuthForm({...authForm, name: e.target.value})} className="w-full bg-slate-900 border border-cyan-500 rounded p-3 text-white" />
                        <input type="tel" required placeholder="Phone Number" value={authForm.phone} onChange={(e) => setAuthForm({...authForm, phone: e.target.value})} className="w-full bg-slate-900 border border-cyan-500 rounded p-3 text-white" />
                        <input type="text" required placeholder="Mailing Address" value={authForm.address} onChange={(e) => setAuthForm({...authForm, address: e.target.value})} className="w-full bg-slate-900 border border-cyan-500 rounded p-3 text-white" />
                        <input type="text" placeholder="How did you hear about us?" value={authForm.howHeard} onChange={(e) => setAuthForm({...authForm, howHeard: e.target.value})} className="w-full bg-slate-900 border border-cyan-500 rounded p-3 text-white" />
                      </>
                    )}
                  </>
                )}
                {authForm.step === 2 && (
                  <>
                    <p className="text-cyan-400 text-sm">Enter the 4-digit code sent to your device.</p>
                    <input type="text" required placeholder="4-Digit 2FA Code" value={authForm.twoFactorCode} onChange={(e) => setAuthForm({...authForm, twoFactorCode: e.target.value})} className="w-full bg-slate-900 border border-cyan-500 rounded p-3 text-white tracking-widest text-center text-lg" maxLength="4" />
                  </>
                )}
                <button type="submit" className="w-full bg-cyan-600 text-white font-black py-3 rounded-xl">{authForm.step === 1 ? (authForm.isLogin ? 'Login' : 'Sign Up Free') : 'Verify 2FA & Enter'}</button>
              </form>
              {authForm.step === 1 && (
                <button onClick={() => setAuthForm({...authForm, isLogin: !authForm.isLogin})} className="text-cyan-400 text-sm w-full text-center">Switch to {authForm.isLogin ? 'Sign Up' : 'Login'}</button>
              )}
            </div>
          ) : (
            <div className="space-y-8">
              <div className="flex justify-between items-center snake-skin-matte p-6 rounded-3xl flex-wrap gap-4">
                <div>
                  <h1 className="text-2xl font-black text-white">Dashboard: {currentUser.email}</h1>
                  <p className="text-xs text-gray-400">Role: {currentUser.role} | Strikes: {currentUser.strikes}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => setDashboardTab('profile')} className={`px-4 py-2 rounded font-bold text-sm ${dashboardTab === 'profile' ? 'bg-cyan-600 text-white' : 'bg-slate-700 text-gray-300'}`}>Post Item</button>
                  <button onClick={() => setDashboardTab('escrow')} className={`px-4 py-2 rounded font-bold text-sm ${dashboardTab === 'escrow' ? 'bg-cyan-600 text-white' : 'bg-slate-700 text-gray-300'}`}>Orders/Escrow</button>
                  <button onClick={() => setDashboardTab('notifications')} className={`px-4 py-2 rounded font-bold text-sm ${dashboardTab === 'notifications' ? 'bg-cyan-600 text-white' : 'bg-slate-700 text-gray-300 relative'}`}>
                    Notifications
                    {currentUser.notifications?.filter(n => !n.read).length > 0 && <span className="absolute -top-1 -right-1 bg-rose-500 w-3 h-3 rounded-full"></span>}
                  </button>
                  <button onClick={() => setDashboardTab('chat')} className={`px-4 py-2 rounded font-bold text-sm ${dashboardTab === 'chat' ? 'bg-cyan-600 text-white' : 'bg-slate-700 text-gray-300'}`}>Support Chat</button>
                  
                  {currentUser.role === 'admin' && (
                    <button onClick={() => setDashboardTab('admin')} className={`px-4 py-2 rounded font-bold text-sm text-yellow-400 ${dashboardTab === 'admin' ? 'bg-slate-800 border border-yellow-400' : 'bg-slate-900 border border-slate-700'}`}>Admin Hub</button>
                  )}

                  <button onClick={() => { setCurrentUser(null); setCurrentView('home'); }} className="px-4 py-2 bg-rose-600 text-white rounded font-bold text-sm">Logout</button>
                </div>
              </div>

              {dashboardTab === 'profile' && (
                <div className="snake-skin-matte p-8 rounded-3xl">
                  <h3 className="text-xl font-black text-white mb-4">Post a New Item for {isLeaseMode ? 'Lease' : 'Sale'} (Free)</h3>
                  <p className="text-xs text-rose-400 mb-4">WARNING: No personal info sharing. If detected, post is deleted and you get 1 strike (3 = BAN).</p>
                  
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target;
                    const desc = form.desc.value;
                    
                    if(containsPII(desc)) {
                      showCustomModal('PII Detected', 'Personal information detected. Post removed. Strike added.');
                      setUsers(prev => prev.map(u => u.email === currentUser.email ? {...u, strikes: u.strikes + 1} : u));
                      return;
                    }
                    
                    const files = form.photos.files;
                    const images = [];
                    for(let i=0; i<Math.min(files.length, 4); i++) {
                      images.push(URL.createObjectURL(files[i]));
                    }

                    const newProd = {
                      id: 'user-item-' + Date.now(),
                      name: form.title.value.toUpperCase(),
                      category: form.category.value,
                      subCategory: form.subCategory?.value || null,
                      originalPrice: Number(form.price.value),
                      stock: 1, 
                      condition: form.condition.value,
                      description: desc,
                      type: isLeaseMode ? 'lease' : 'sale',
                      leaseMetric: isLeaseMode ? form.metric.value : null,
                      maxDuration: isLeaseMode ? Number(form.maxDuration.value) : null,
                      image: images[0] || 'https://placehold.co/600x400/0a0a0a/00ffcc?text=No+Image',
                      images: images.length > 0 ? images : ['https://placehold.co/600x400/0a0a0a/00ffcc?text=No+Image'],
                      sellerEmail: currentUser.email
                    };

                    setProducts(prev => [newProd, ...prev]);
                    form.reset();
                    triggerReward(); 
                    showCustomModal('Success', 'Item posted successfully!');
                  }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="col-span-1 sm:col-span-2 p-4 bg-slate-900 border border-cyan-500/40 rounded-xl mb-2">
                      <label className="text-xs text-cyan-400 font-bold block mb-2 uppercase">Upload Photos (Max 4)</label>
                      <input name="photos" type="file" multiple accept="image/*" className="text-white text-sm w-full" />
                    </div>

                    <input name="title" required placeholder="Title" className="bg-slate-900 border border-cyan-500 rounded p-3 text-white" />
                    <input name="price" type="number" step="0.01" required placeholder={isLeaseMode ? "Price per unit ($)" : "Selling Price ($)"} className="bg-slate-900 border border-cyan-500 rounded p-3 text-white" />
                    
                    <select name="category" required className="bg-slate-900 border border-cyan-500 rounded p-3 text-white">
                      <option value="PlaeDoeS Market-Place">PlaeDoeS Market-Place</option>
                      <option value="Desktop Computers">Desktop Computers</option>
                    </select>

                    <input name="condition" required placeholder="Condition (e.g. New, Used)" className="bg-slate-900 border border-cyan-500 rounded p-3 text-white" />
                    
                    {isLeaseMode && (
                      <>
                        <select name="metric" required className="bg-slate-900 border border-cyan-500 rounded p-3 text-white">
                           <option value="hour">Per Hour</option>
                           <option value="day">Per Day</option>
                           <option value="week">Per Week</option>
                           <option value="month">Per Month</option>
                        </select>
                        <input name="maxDuration" type="number" required placeholder="Max Duration" className="bg-slate-900 border border-cyan-500 rounded p-3 text-white" />
                      </>
                    )}

                    <textarea name="desc" required placeholder="Description (NO PHONE/EMAIL)" rows="3" className="col-span-1 sm:col-span-2 bg-slate-900 border border-cyan-500 rounded p-3 text-white"></textarea>
                    
                    <button type="submit" onClick={() => triggerWaterRipple(true)} className="col-span-1 sm:col-span-2 bg-cyan-600 text-white font-black py-3 rounded-xl mt-2">POST ITEM</button>
                  </form>
                </div>
              )}

              {dashboardTab === 'escrow' && (
                <div className="snake-skin-matte p-8 rounded-3xl">
                  <h3 className="text-xl font-black text-white mb-4">Escrow & Orders</h3>
                  {orders.filter(o => o.sellerEmail === currentUser.email || o.customer.email === currentUser.email).map(o => (
                    <div key={o.id} className="bg-slate-900 border border-cyan-500/40 p-4 rounded-xl mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-cyan-400">Order: {o.id}</span>
                        <span className="bg-emerald-600 text-white px-2 py-1 rounded text-xs">{o.status}</span>
                      </div>
                      <div className="text-sm text-gray-300">
                        <p><strong>Item:</strong> {o.productSnapshot?.name} (Qty: {o.item.quantity})</p>
                        <p><strong>Buyer:</strong> {o.customer.name}</p>
                        <p><strong>Shipping:</strong> {o.customer.address}, {o.customer.city}, {o.customer.state}</p>
                        {o.tracking && <p className="text-cyan-300 mt-2">Tracking: {o.tracking}</p>}
                      </div>
                      
                      {o.status.includes('Holding') && o.sellerEmail === currentUser.email && (
                        <div className="mt-4 border-t border-slate-700 pt-4 flex gap-2 items-center flex-wrap">
                           <input type="text" id={`track-${o.id}`} placeholder="Enter Tracking Number or Image URL" className="bg-slate-800 text-white px-3 py-2 rounded text-sm flex-1" />
                           <button 
                             onClick={() => verifyShipping(o.id, document.getElementById(`track-${o.id}`).value)}
                             className="bg-cyan-600 text-white px-4 py-2 rounded text-sm font-bold"
                           >Verify & Release Funds (Minus 10% Fee)</button>
                        </div>
                      )}
                    </div>
                  ))}
                  {orders.filter(o => o.sellerEmail === currentUser.email || o.customer.email === currentUser.email).length === 0 && <p className="text-gray-400">No active orders or escrow holds.</p>}
                </div>
              )}

              {dashboardTab === 'notifications' && (
                <div className="snake-skin-matte p-8 rounded-3xl">
                  <h3 className="text-xl font-black text-white mb-4">Notifications</h3>
                  {currentUser.notifications && currentUser.notifications.length > 0 ? (
                    <div className="space-y-3">
                      {currentUser.notifications.map((n, i) => (
                         <div key={i} className={`p-4 rounded-xl text-sm ${n.read ? 'bg-slate-900 text-gray-400' : 'bg-cyan-900/30 text-white border border-cyan-500/40'}`}>
                           {n.text}
                         </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-400">No notifications.</p>
                  )}
                  {currentUser.notifications?.length > 0 && (
                     <button onClick={() => setUsers(prev => prev.map(u => u.email === currentUser.email ? {...u, notifications: u.notifications.map(x => ({...x, read: true}))} : u))} className="mt-4 text-xs text-cyan-400 underline">Mark all as read</button>
                  )}
                </div>
              )}

              {dashboardTab === 'chat' && (
                <div className="snake-skin-matte p-6 rounded-3xl h-[500px] flex flex-col">
                  <h3 className="text-xl font-black text-white mb-4 flex justify-between items-center">
                    Support Chat
                    <span className="text-xs text-green-400 font-normal">Admin Online (SMS Gateway Active)</span>
                  </h3>
                  <div className="flex-1 bg-slate-900 border border-cyan-500/40 rounded-xl p-4 overflow-y-auto space-y-4 mb-4">
                     {(supportChats.find(c => c.userEmail === currentUser.email)?.messages || []).map((msg, i) => (
                        <div key={i} className={`flex ${msg.sender === 'admin' ? 'justify-start' : 'justify-end'}`}>
                          <div className={`max-w-[70%] p-3 rounded-xl text-sm ${msg.sender === 'admin' ? 'bg-slate-700 text-white' : 'bg-cyan-600 text-white'}`}>
                            <div className="text-[10px] opacity-70 mb-1">{msg.sender === 'admin' ? 'Chase Reeves (Support)' : 'You'}</div>
                            {msg.text}
                          </div>
                        </div>
                     ))}
                  </div>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      value={currentChatInput}
                      onChange={(e) => setCurrentChatInput(e.target.value)}
                      placeholder="Type message to Support..." 
                      className="flex-1 bg-slate-800 text-white p-3 rounded-xl border border-slate-600 focus:outline-none focus:border-cyan-500"
                    />
                    <button 
                      onClick={() => {
                        if(!currentChatInput.trim()) return;
                        triggerWaterRipple();
                        const newMsg = { sender: 'user', text: currentChatInput, date: new Date().toISOString() };
                        setSupportChats(prev => {
                          const existing = prev.find(c => c.userEmail === currentUser.email);
                          if(existing) {
                            return prev.map(c => c.userEmail === currentUser.email ? {...c, messages: [...c.messages, newMsg]} : c);
                          }
                          return [...prev, { userEmail: currentUser.email, messages: [newMsg] }];
                        });
                        setCurrentChatInput('');
                        showCustomModal('SMS Sent', 'Your message has been routed via SMS to 276-968-2529.');
                      }}
                      className="bg-cyan-600 text-white px-6 font-bold rounded-xl"
                    >Send</button>
                  </div>
                </div>
              )}

              {dashboardTab === 'admin' && currentUser.role === 'admin' && (
                <div className="snake-skin-matte p-8 rounded-3xl space-y-8">
                  <h3 className="text-xl font-black text-yellow-400 mb-4">Admin Hub</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-slate-900 border border-slate-700 p-4 rounded-xl">
                      <h4 className="font-bold text-white mb-2">User Management</h4>
                      {users.map(u => (
                        <div key={u.email} className="flex justify-between items-center text-xs text-gray-300 py-2 border-b border-slate-800">
                          <span>{u.email} ({u.strikes} strikes)</span>
                          <button onClick={() => setUsers(prev => prev.map(user => user.email === u.email ? {...user, banned: !user.banned} : user))} className={`${u.banned ? 'bg-red-600' : 'bg-slate-700'} px-2 py-1 rounded text-white`}>
                            {u.banned ? 'Unban' : 'Ban'}
                          </button>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-slate-900 border border-slate-700 p-4 rounded-xl flex flex-col">
                      <h4 className="font-bold text-white mb-2">Support Chat Inbox</h4>
                      <div className="flex-1 overflow-y-auto space-y-2 mb-2">
                        {supportChats.map(c => (
                          <button key={c.userEmail} onClick={() => setAdminSelectedChat(c.userEmail)} className={`block w-full text-left p-2 rounded text-sm ${adminSelectedChat === c.userEmail ? 'bg-cyan-900 text-white' : 'bg-slate-800 text-gray-300'}`}>
                            {c.userEmail} ({c.messages.length} msgs)
                          </button>
                        ))}
                      </div>
                      {adminSelectedChat && (
                        <div className="pt-2 border-t border-slate-700 flex gap-2">
                           <input type="text" id="adminReply" placeholder="Reply via SMS gateway..." className="flex-1 bg-slate-800 text-white p-2 text-xs rounded" />
                           <button onClick={() => {
                             const text = document.getElementById('adminReply').value;
                             if(!text) return;
                             setSupportChats(prev => prev.map(c => c.userEmail === adminSelectedChat ? {...c, messages: [...c.messages, {sender: 'admin', text}]} : c));
                             document.getElementById('adminReply').value = '';
                           }} className="bg-yellow-500 text-slate-900 px-3 py-1 text-xs font-bold rounded">Reply</button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}
        </div>
      )}
      
      {/* ========================================== */}
      {/* FOOTER */}
      {/* ========================================== */}
      <footer className="snake-skin-matte border-t border-cyan-500/40 mt-20 text-gray-400 text-sm shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-slate-950 border border-cyan-400 rounded-xl flex items-center justify-center">
                <span className="text-xl">👽</span>
              </div>
              <span className="text-lg cyber-gold-title">DIRT CHEAP DESKTOPS</span>
            </div>
            <div className="bg-slate-900 p-4 rounded-xl border border-cyan-500/20 text-xs">
               <h4 className="font-bold text-white mb-2 uppercase text-cyan-400">Direct Contact</h4>
               <p className="text-white"><strong>Owner:</strong> Chase Reeves</p>
               <p className="flex items-center gap-2 mt-1"><Phone className="w-3 h-3 text-cyan-400" /> <a href="tel:2769682529" className="hover:text-cyan-400">276-968-2529</a></p>
               <p className="flex items-center gap-2 mt-1"><Mail className="w-3 h-3 text-cyan-400" /> <a href="mailto:creevesunc@gmail.com" className="hover:text-cyan-400">creevesunc@gmail.com</a></p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider">About Us</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              WE SELL CHEAP DESKTOP COMPUTERS!!!! AFFORDABLE COMPUTERS FOR HOME, SCHOOL, KIDS, AND CAREERS. 
              We also operate PlaeDoeS Market-Place and DŒPLÆ Gųɲŋa LEASE ıT peer-to-peer services.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider">Quick Links</h4>
            <ul className="text-xs space-y-2">
              <li><button onClick={() => { triggerWaterRipple(); setCurrentView('home'); }} className="hover:text-cyan-600">Home</button></li>
              <li><button onClick={() => { triggerWaterRipple(); setSelectedCategory('PlaeDoeS Market-Place'); setCurrentView('catalog'); }} className="hover:text-yellow-400">PlaeDoeS Market-Place</button></li>
              <li><button onClick={() => { triggerWaterRipple(); setCurrentView('dashboard'); }} className="hover:text-cyan-600">Dashboard / Auth</button></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider">Secure & Trusted</h4>
            <p className="text-xs text-slate-600">
              Protected by Escrow Holding Accounts, persistent inventory tracking, SMS verified 2FA, and strict zero-PII listing policies.
            </p>
          </div>

        </div>

        <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
          © 2026 DirtCheap Desktops & PlaeDoeS Market-Place • All Rights Reserved.
        </div>
      </footer>

      {/* FLOATING PROMO BALLOON */}
      {!balloonPopped && (
        <div onClick={handleBalloonClick} className="balloon"></div>
      )}

      {/* PROMO CONFETTI & MODAL */}
      {showPromo && (
        <>
          {[...Array(50)].map((_, i) => (
            <div 
              key={i} 
              className="confetti-piece" 
              style={{
                left: `${Math.random() * 100}vw`,
                backgroundColor: ['#ff007f', '#00ffcc', '#d4af37', '#7928ca'][Math.floor(Math.random() * 4)],
                animationDuration: `${2 + Math.random() * 3}s`,
                animationDelay: `${Math.random() * 0.5}s`
              }}
            ></div>
          ))}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <div className="snake-skin-matte p-8 rounded-3xl max-w-lg w-full text-center space-y-6 border border-yellow-400 shadow-2xl">
              <div className="text-6xl">🎉</div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-yellow-400 uppercase">You Found The Secret Promo!</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Unlock massive discounts when you buy computers in bulk. Great for offices and schools!</p>
                <div className="bg-slate-900 p-4 rounded-xl border border-cyan-500/30 text-left space-y-2 mt-4">
                   <div className="flex justify-between items-center border-b border-slate-700 pb-1">
                      <span className="font-bold text-white">5 - 10 Computers</span>
                      <span className="text-emerald-400 font-black">15% OFF</span>
                   </div>
                   <div className="flex justify-between items-center border-b border-slate-700 pb-1">
                      <span className="font-bold text-white">11 - 49 Computers</span>
                      <span className="text-emerald-400 font-black">20% OFF</span>
                   </div>
                   <div className="flex justify-between items-center">
                      <span className="font-bold text-white">50+ Computers</span>
                      <span className="text-emerald-400 font-black">25% OFF</span>
                   </div>
                </div>
              </div>
              <button 
                onClick={() => { triggerWaterRipple(); setShowPromo(false); }}
                className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-black py-3 rounded-xl text-sm transition shadow-lg shadow-cyan-500/20 uppercase"
              >
                Claim Discounts Now
              </button>
            </div>
          </div>
        </>
      )}

    </div>
  );
}
```

export type ServiceItem = {
  name: string;
  price: string;
  priceNum: number;
  features: string[];
  popular?: boolean;
};

export type ServiceCategory = {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  basePrice: number;
  items: ServiceItem[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "websites",
    title: "Website Design",
    description: "Fast, mobile-friendly, SEO optimized websites that convert.",
    icon: "Globe",
    gradient: "from-blue-500 via-blue-400 to-cyan-400",
    basePrice: 500,
    items: [
      { name: "Starter Website", price: "R500", priceNum: 500, features: ["1 Page Website", "Mobile Responsive", "Contact Form", "Fast Delivery"] },
      { name: "Business Website", price: "R1,500", priceNum: 1500, popular: true, features: ["Up to 5 Pages", "Mobile Responsive", "Contact Forms", "SEO Setup"] },
      { name: "Professional Website", price: "R3,500", priceNum: 3500, features: ["10+ Pages", "SEO Optimization", "Analytics", "Premium Design"] },
      { name: "Corporate Website", price: "R6,500+", priceNum: 6500, features: ["Custom Features", "Dashboards", "User Accounts", "Integrations"] },
    ],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Websites",
    description: "Online stores with payments, inventory and analytics.",
    icon: "ShoppingBag",
    gradient: "from-indigo-500 via-blue-500 to-sky-400",
    basePrice: 2500,
    items: [
      { name: "Starter Store", price: "R2,500", priceNum: 2500, features: ["Product Catalog", "WhatsApp Ordering", "Mobile Responsive", "Basic SEO"] },
      { name: "Business Store", price: "R5,000", priceNum: 5000, popular: true, features: ["Payment Gateway", "Shopping Cart", "Customer Accounts", "Order Management"] },
      { name: "Professional E-Commerce", price: "R8,500", priceNum: 8500, features: ["Inventory Management", "Analytics Dashboard", "Coupon System", "Email Marketing"] },
      { name: "Enterprise Store", price: "R15,000+", priceNum: 15000, features: ["Marketplace Features", "Vendor Accounts", "Advanced Reports", "Multi-Currency"] },
    ],
  },
  {
    id: "apps",
    title: "Mobile App Design & Development",
    description: "Native & cross-platform apps for iOS and Android.",
    icon: "Smartphone",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    basePrice: 1000,
    items: [
      { name: "UI/UX App Design", price: "R1,000", priceNum: 1000, features: ["Figma Mockups", "Prototype", "Design System", "User Research"] },
      { name: "Business App", price: "R5,000", priceNum: 5000, popular: true, features: ["Custom Features", "Push Notifications", "Analytics", "App Store Submit"] },
      { name: "E-Commerce App", price: "R8,000", priceNum: 8000, features: ["Product Catalog", "Payment Integration", "Order Tracking", "User Accounts"] },
      { name: "Booking App", price: "R10,000", priceNum: 10000, features: ["Calendar System", "Payment Gateway", "Notifications", "Admin Panel"] },
      { name: "Marketplace App", price: "R15,000", priceNum: 15000, features: ["Vendor Accounts", "Commission System", "Rating System", "Multi-language"] },
      { name: "Custom Enterprise App", price: "R25,000+", priceNum: 25000, features: ["Custom Architecture", "Scalable Backend", "Advanced Security", "Ongoing Support"] },
    ],
  },
  {
    id: "games",
    title: "Game Development",
    description: "From arcade classics to multiplayer online games.",
    icon: "Gamepad2",
    gradient: "from-violet-500 via-blue-500 to-cyan-500",
    basePrice: 5000,
    items: [
      { name: "2D Mobile Game", price: "R5,000", priceNum: 5000, features: ["2D Graphics", "Level Design", "Sound Effects", "Mobile Optimized"] },
      { name: "Simple Arcade Game", price: "R8,000", priceNum: 8000, popular: true, features: ["High Score System", "Multiple Levels", "Retro Aesthetic", "Share Feature"] },
      { name: "Educational Game", price: "R10,000", priceNum: 10000, features: ["Curriculum Aligned", "Progress Tracking", "Parent Portal", "Multiplayer"] },
      { name: "Multiplayer Game", price: "R25,000", priceNum: 25000, features: ["Real-Time Sync", "Chat System", "Leaderboards", "Server Hosting"] },
      { name: "Advanced Mobile Game", price: "R40,000+", priceNum: 40000, features: ["3D Graphics", "Monetization", "In-App Purchases", "Analytics"] },
      { name: "PC Game Development", price: "R75,000+", priceNum: 75000, features: ["Steam Integration", "High-Fidelity Graphics", "Modding Support", "Anti-Cheat"] },
    ],
  },
  {
    id: "design",
    title: "Graphic Design",
    description: "Logos, flyers, posters and full brand identity.",
    icon: "Palette",
    gradient: "from-pink-500 via-violet-500 to-blue-500",
    basePrice: 50,
    items: [
      { name: "Logo Design", price: "R50", priceNum: 50, features: ["3 Concepts", "Unlimited Revisions", "Vector Files", "Color Palette"] },
      { name: "Flyer Design", price: "R80", priceNum: 80, features: ["Print Ready", "Custom Layout", "High Resolution", "PDF + PNG"] },
      { name: "Poster Design", price: "R100", priceNum: 100, popular: true, features: ["A3/A2/A1 Sizes", "Print Ready", "Custom Illustration", "Source Files"] },
      { name: "Business Card", price: "R80", priceNum: 80, features: ["Double Sided", "Print Ready", "Premium Design", "QR Code Optional"] },
      { name: "Social Media Pack", price: "R250", priceNum: 250, features: ["10 Post Templates", "Stories & Reels", "Profile Branding", "Editable Files"] },
      { name: "Brand Identity Package", price: "R1,500", priceNum: 1500, features: ["Logo + Variations", "Brand Guidelines", "Stationery", "Social Assets"] },
    ],
  },
  {
    id: "business-plans",
    title: "Business Plan Services",
    description: "Funding-ready business plans and proposals.",
    icon: "FileText",
    gradient: "from-emerald-500 via-blue-500 to-indigo-500",
    basePrice: 500,
    items: [
      { name: "Startup Business Plan", price: "R500", priceNum: 500, features: ["Executive Summary", "Market Research", "Financial Projections", "PDF Delivery"] },
      { name: "Professional Business Plan", price: "R1,200", priceNum: 1200, popular: true, features: ["Detailed Analysis", "SWOT Analysis", "5-Year Projections", "Editable Doc"] },
      { name: "Investor Ready Plan", price: "R2,500", priceNum: 2500, features: ["Pitch Deck", "Financial Models", "Competitive Analysis", "Investor Brief"] },
      { name: "Funding Proposal Package", price: "R3,500", priceNum: 3500, features: ["Loan Proposal", "Grant Application", "Supporting Docs", "Compliance Ready"] },
      { name: "Complete Strategy Package", price: "R5,000", priceNum: 5000, features: ["All-Inclusive", "Strategy Consulting", "Pitch Deck", "12 Months Review"] },
    ],
  },
  {
    id: "software",
    title: "Software Development",
    description: "Custom CRMs, ERPs, SaaS and AI-powered platforms.",
    icon: "Cpu",
    gradient: "from-sky-500 via-blue-600 to-indigo-700",
    basePrice: 12000,
    items: [
      { name: "Custom CRM System", price: "R12,000+", priceNum: 12000, features: ["Lead Management", "Pipeline Tracking", "Reporting", "Email Integration"] },
      { name: "Inventory Management", price: "R15,000+", priceNum: 15000, popular: true, features: ["Stock Tracking", "Barcode Scanning", "Multi-Location", "Supplier Portal"] },
      { name: "School Management System", price: "R20,000+", priceNum: 20000, features: ["Student Records", "Grade Management", "Parent Portal", "Attendance"] },
      { name: "Hospital Management", price: "R30,000+", priceNum: 30000, features: ["Patient Records", "Appointment System", "Billing", "HIPAA Aligned"] },
      { name: "Custom SaaS Platform", price: "R50,000+", priceNum: 50000, features: ["Multi-Tenant", "Subscription Billing", "Analytics", "API Access"] },
      { name: "AI-Powered Platforms", price: "R80,000+", priceNum: 80000, features: ["ML Integration", "Natural Language", "Predictive Models", "Scalable Infra"] },
    ],
  },
];

export const portfolioCategories = [
  "All",
  "Business Websites",
  "E-Commerce Stores",
  "Mobile Apps",
  "Game Projects",
  "Graphic Designs",
  "Business Plans",
  "Software Systems",
];

export const portfolioItems = [
  { title: "NovaTech Corporate Site", category: "Business Websites", tags: ["Next.js", "Tailwind"], color: "from-blue-600 to-cyan-500", client: "NovaTech SA" },
  { title: "UrbanBite Food Delivery", category: "E-Commerce Stores", tags: ["Stripe", "React"], color: "from-orange-500 to-pink-500", client: "UrbanBite" },
  { title: "FitTrack Mobile App", category: "Mobile Apps", tags: ["React Native"], color: "from-emerald-500 to-teal-500", client: "FitTrack" },
  { title: "Space Runner 2D", category: "Game Projects", tags: ["Unity", "C#"], color: "from-violet-600 to-purple-500", client: "Indie Studio" },
  { title: "Luxe Cosmetics Branding", category: "Graphic Designs", tags: ["Illustrator"], color: "from-pink-500 to-rose-500", client: "Luxe Co." },
  { title: "Solar Startup Investor Deck", category: "Business Plans", tags: ["Finance"], color: "from-amber-500 to-orange-500", client: "Solarise" },
  { title: "MediCore Hospital ERP", category: "Software Systems", tags: ["Node.js", "Postgres"], color: "from-sky-500 to-blue-700", client: "MediCore" },
  { title: "EduLearn LMS Platform", category: "Software Systems", tags: ["Next.js"], color: "from-indigo-500 to-violet-500", client: "EduLearn" },
  { title: "BrewHouse E-Shop", category: "E-Commerce Stores", tags: ["Shopify"], color: "from-yellow-500 to-amber-600", client: "BrewHouse" },
  { title: "TravelMate Booking App", category: "Mobile Apps", tags: ["Flutter"], color: "from-teal-500 to-cyan-500", client: "TravelMate" },
  { title: "Pixel Quest Arcade", category: "Game Projects", tags: ["Godot"], color: "from-fuchsia-500 to-purple-600", client: "PixelPlay" },
  { title: "FreshFarm Brand Identity", category: "Graphic Designs", tags: ["Branding"], color: "from-lime-500 to-green-500", client: "FreshFarm" },
];

export const testimonials = [
  {
    name: "Thando Mokoena",
    company: "Mokoena Consulting",
    avatar: "TM",
    rating: 5,
    text: "KANDK delivered our corporate website in record time. The design is sleek, fast and already bringing in leads. Unbeatable pricing for premium quality!",
  },
  {
    name: "Sarah van der Merwe",
    company: "Bloom & Co Florist",
    avatar: "SV",
    rating: 5,
    text: "Our online store is beautiful and sales have doubled since launch. The team was patient, professional and incredibly affordable.",
  },
  {
    name: "Kabelo Dlamini",
    company: "Dlamini Logistics",
    avatar: "KD",
    rating: 5,
    text: "They built us a custom inventory management system that replaced 3 different spreadsheets. Worth every rand — honestly should have cost 3x more.",
  },
  {
    name: "Priya Naidoo",
    company: "Naidoo Legal",
    avatar: "PN",
    rating: 5,
    text: "The investor-ready business plan they prepared helped us secure R500K funding. Professional, thorough and delivered on time.",
  },
  {
    name: "Jaco Pretorius",
    company: "Pretorius Gym",
    avatar: "JP",
    rating: 5,
    text: "Our booking app works flawlessly. Members love it and our admin time has dropped by 70%. Amazing work by the KANDK team.",
  },
  {
    name: "Lerato Moloi",
    company: "Lerato's Bakery",
    avatar: "LM",
    rating: 5,
    text: "From logo to website to WhatsApp orders — they handled everything. Best investment I made for my small business this year.",
  },
];

export const features = [
  { icon: "Zap", title: "Fast Delivery", desc: "Projects delivered on or ahead of deadline." },
  { icon: "Coins", title: "Affordable Pricing", desc: "Premium work at startup-friendly prices." },
  { icon: "Award", title: "Professional Quality", desc: "Industry-standard designs & clean code." },
  { icon: "Sparkles", title: "Modern Designs", desc: "Clean, trendy and future-proof aesthetics." },
  { icon: "Smartphone", title: "Mobile Friendly", desc: "Flawless on every device & screen size." },
  { icon: "TrendingUp", title: "SEO Optimized", desc: "Rank higher on Google from day one." },
  { icon: "Headphones", title: "Dedicated Support", desc: "We stay with you long after launch." },
  { icon: "ShieldCheck", title: "Secure Development", desc: "Best practices for bullet-proof security." },
];

export const faqs = [
  {
    q: "Why are your prices so affordable?",
    a: "We are a growing technology company focused on building our portfolio, gaining client trust and establishing our reputation. To celebrate our launch, we offer premium-quality services at heavily discounted startup prices — often 50–70% lower than typical South African agencies.",
  },
  {
    q: "How long does a project take?",
    a: "Timelines vary by scope. Starter websites take 3–5 business days, business websites 7–14 days, e-commerce 2–4 weeks, and custom software 4–12 weeks. We provide a detailed timeline in every quote.",
  },
  {
    q: "Do you offer revisions?",
    a: "Absolutely. Every project includes revisions as standard. We work with you until you're 100% happy with the result — your satisfaction is our priority.",
  },
  {
    q: "Do you provide hosting?",
    a: "Yes, we offer hosting and domain registration services at competitive rates. We can also deploy to your existing hosting of choice (Netlify, Vercel, AWS, etc.).",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Definitely. We specialize in modernizing outdated websites with fresh designs, better performance and improved SEO while keeping your existing content and brand identity.",
  },
  {
    q: "Can you build fully custom software?",
    a: "Yes — CRMs, ERPs, SaaS platforms, AI-powered tools, school and hospital systems, inventory management and much more. Tell us your idea and we'll bring it to life.",
  },
];

export const blogPosts = [
  {
    title: "Why Every Small Business Needs a Website in 2026",
    excerpt: "In today's digital economy, not having a website is like not having a storefront. Here's why it matters more than ever.",
    date: "Mar 12, 2026",
    category: "Web Design",
    readTime: "5 min",
    color: "from-blue-500 to-cyan-400",
    url: "https://www.forbes.com/sites/theyec/2021/05/27/why-every-small-business-needs-a-website/",
  },
  {
    title: "E-Commerce in South Africa: A Complete 2026 Guide",
    excerpt: "From payment gateways to delivery logistics — everything you need to launch a successful online store in SA.",
    date: "Mar 05, 2026",
    category: "E-Commerce",
    readTime: "8 min",
    color: "from-indigo-500 to-violet-500",
    url: "https://www.shopify.com/za/blog/ecommerce-south-africa",
  },
  {
    title: "Mobile Apps vs. Websites: Which Should You Build First?",
    excerpt: "We break down the pros, cons and cost differences to help you decide where to invest your budget.",
    date: "Feb 28, 2026",
    category: "Mobile Apps",
    readTime: "6 min",
    color: "from-cyan-500 to-blue-500",
    url: "https://www.businessofapps.com/insights/mobile-app-vs-website/",
  },
];

export const stats = [
  { label: "Projects Delivered", value: 150, suffix: "+" },
  { label: "Happy Clients", value: 120, suffix: "+" },
  { label: "Industries Served", value: 25, suffix: "" },
  { label: "5-Star Reviews", value: 98, suffix: "%" },
];

export const clients = [
  "NovaTech", "UrbanBite", "FitTrack", "MediCore", "EduLearn",
  "BrewHouse", "TravelMate", "FreshFarm", "Luxe Co.", "Solarise",
  "PixelPlay", "Mokoena Inc.",
];

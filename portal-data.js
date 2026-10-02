// =========================================================================
// SS PROJECTS — UNIFIED DIGITAL PORTAL & SMART QR SYSTEM DATA
// Founders: Sanket Bhende (Lead Architect) & Sakshi Patil (Tech Specialist)
// =========================================================================

const PORTAL_CONFIG = {
  brandName: "SS Projects",
  brandBadge: "Digital Studio & Web Agency",
  tagline: "High-Conversion 3D Websites, Smart QR Systems & Next-Gen Web Apps",
  bio: "We craft immersive 3D digital experiences, table-to-cloud QR ecosystems, and custom full-stack solutions that accelerate modern brands.",
  location: "Maharashtra, India • Global Remote",
  availability: "Available for New Projects & Collaborations",
  livePortalUrl: "https://ss-projects.pages.dev",
  upiId: "sanketbhende0@okhdfcbank",
  upiName: "Sanket Bhende (SS Projects)",
  portfolioUrl: "https://sanket-portfolio-211.pages.dev/",

  // Two Founders (Sakshi Patil first, Sanket Bhende Founder)
  founders: [
    {
      id: "sakshi",
      name: "Sakshi Patil",
      title: "Co-Founder & Tech Specialist",
      specialty: "Computer Science Engineering • Software Systems",
      phone: "+91 9579453006",
      phoneRaw: "9579453006",
      whatsapp: "919579453006",
      email: "",
      linkedin: "https://www.linkedin.com/in/sakshipatil-cse",
      instagram: "",
      instagramHandle: "",
      portfolio: "",
      badge: "Co-Founder"
    },
    {
      id: "sanket",
      name: "Sanket Bhende",
      title: "Founder & Web Architect",
      specialty: "Full-Stack • 3D Creative Dev • System Architecture",
      phone: "+91 9822725265",
      phoneRaw: "9822725265",
      whatsapp: "919822725265",
      email: "sanketbhende0@gmail.com",
      linkedin: "https://www.linkedin.com/in/mrsankya/",
      instagram: "https://www.instagram.com/sankya.ai",
      instagramHandle: "@sankya.ai",
      portfolio: "https://sanket-portfolio-211.pages.dev/",
      badge: "Founder"
    }
  ]
};

const SERVICES_DATA = [
  {
    id: "smart-qr",
    title: "Smart All-in-One QR Systems",
    icon: "qr-code",
    desc: "Custom QR landing hubs for cafés, restaurants & businesses. Seamlessly integrates digital menu, 1-tap UPI payment, Wi-Fi auto-connect, and Google Review boosters.",
    badge: "High Demand 🔥"
  },
  {
    id: "3d-web",
    title: "3D & Interactive Web Experiences",
    icon: "box",
    desc: "Next-gen immersive 3D websites using Three.js, Spline, and WebGL that captivate visitors and multiply client engagement.",
    badge: "Signature"
  },
  {
    id: "full-stack",
    title: "Full-Stack Web & SaaS Apps",
    icon: "layers",
    desc: "Modern React, Node.js, Vite & Tailwind applications with clean database architectures, seamless APIs, and blazing speed.",
    badge: "Scalable"
  },
  {
    id: "business-growth",
    title: "AI Review & Rating Boosters",
    icon: "sparkles",
    desc: "Frictionless rating engines that skyrocket business Google Reviews and shield establishments from negative public feedback.",
    badge: "Growth Hack"
  }
];

// All 10 Deployed Cloudflare Pages Projects Available for Live Embedding & Interactive Preview
const ALL_PROJECTS_DATA = [
  {
    id: "sanket-3d-portfolio",
    title: "Sanket Bhende — 3D Interactive Portfolio",
    category: "3D & Interactive",
    featured: true,
    description: "Flagship 3D creative developer portfolio featuring custom GLSL shaders, dynamic Three.js canvas, and smooth interactive navigation.",
    tags: ["3D Web", "Three.js", "WebGL", "Cloudflare"],
    liveUrl: "https://sanket-portfolio-211.pages.dev/",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=700&auto=format&fit=crop&q=80",
    stats: "3D Shader & Physics Engine"
  },
  {
    id: "hidden-cafe-qr",
    title: "Hidden Café — Smart All-in-One QR Hub",
    category: "Smart QR Systems",
    featured: true,
    description: "Complete table-to-cloud QR experience for Hidden Café featuring digital menu, instant UPI pay, auto Wi-Fi connect, and direct Google Review launcher.",
    tags: ["Smart QR", "UPI Pay", "Wi-Fi Intent", "Live"],
    liveUrl: "https://hiddencafe-jalgaon.pages.dev",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=700&auto=format&fit=crop&q=80",
    stats: "1-Tap UPI & Auto Wi-Fi"
  },
  {
    id: "pastora",
    title: "Pastora — Luxury Italian Dining Experience",
    category: "3D & Interactive",
    featured: true,
    description: "Artisanal gourmet restaurant digital web experience featuring fluid kinetic typography, reservations, and luxury Italian ambiance.",
    tags: ["Luxury UI", "Kinetic Design", "Cloudflare Pages"],
    liveUrl: "https://pastora-restaurant.pages.dev",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&auto=format&fit=crop&q=80",
    stats: "Luxury Fine-Dining UI"
  },
  {
    id: "velora-cafe",
    title: "Velora Café Jalgaon — Artisanal Coffee Experience",
    category: "Full-Stack Web App",
    featured: true,
    description: "Modern, high-performance coffee house digital ordering and menu portal built with React, Vite, and responsive mobile-first architecture.",
    tags: ["React", "Vite", "Tailwind", "Production"],
    liveUrl: "https://velora-cafe-jalgaon.pages.dev",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=700&auto=format&fit=crop&q=80",
    stats: "React + Vite Mobile App"
  },
  {
    id: "velora-brewbeans",
    title: "Brew & Beans Café — Crafted Coffee Roastery",
    category: "Full-Stack Web App",
    featured: false,
    description: "Specialty coffee roastery storefront with rich product showcasing, interactive brew guides, and dark roast aesthetics.",
    tags: ["React", "Tailwind", "Dark Mode", "High Performance"],
    liveUrl: "https://velora-cafe-brewbeans.pages.dev",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&auto=format&fit=crop&q=80",
    stats: "Artisanal Coffee Storefront"
  },
  {
    id: "aveline",
    title: "Aveline — Architecture & Modern Living",
    category: "Multi-Page Architecture",
    featured: true,
    description: "Comprehensive 32-page luxury architectural studio and interior design showcase with smooth page transitions and rich editorial layouts.",
    tags: ["32 Pages", "Architecture", "Luxury Design"],
    liveUrl: "https://aveline.pages.dev",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&auto=format&fit=crop&q=80",
    stats: "32 Complete Pages"
  },
  {
    id: "slice-town",
    title: "Slice Town — Artisanal Pizzeria & Bar",
    category: "Food & Hospitality",
    featured: false,
    description: "Vibrant, high-energy modern pizzeria & cocktail lounge digital ordering menu with dynamic cart and crust customization.",
    tags: ["E-Commerce", "Food Tech", "Mobile First"],
    liveUrl: "https://slice-town.pages.dev",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700&auto=format&fit=crop&q=80",
    stats: "Interactive Pizza Menu"
  },
  {
    id: "kafe-milano",
    title: "Kafe Milano — European Roastery & Bistro",
    category: "Multi-Page Experience",
    featured: false,
    description: "13-page Italian coffee house & bistro web experience with table reservations, daily specials, and European ambiance.",
    tags: ["13 Pages", "Bistro", "Storytelling"],
    liveUrl: "https://kafe-milano.pages.dev",
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=700&auto=format&fit=crop&q=80",
    stats: "13 Full Pages"
  },
  {
    id: "deuxbakery",
    title: "Deux Bakery — Parisian Artisanal Pâtisserie",
    category: "Multi-Page Experience",
    featured: false,
    description: "31-page French pastry & sourdough bakery experience with morning menus, catering inquiries, and delicate bakery aesthetics.",
    tags: ["31 Pages", "French Bakery", "Catering"],
    liveUrl: "https://deuxbakery.pages.dev",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=700&auto=format&fit=crop&q=80",
    stats: "31 Complete Pages"
  },
  {
    id: "menuthere-chokolade",
    title: "Café Chokolade — Digital Menu System",
    category: "Smart QR Systems",
    featured: false,
    description: "Interactive digital menu platform designed for fast table ordering, dish imagery, and zero-contact menu browsing.",
    tags: ["Digital Menu", "Touch Friendly", "Instant QR"],
    liveUrl: "https://menuthere-cafechokolade.pages.dev",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&auto=format&fit=crop&q=80",
    stats: "Smart Menu System"
  }
];

// For backwards compatibility
const PORTFOLIO_PROJECTS = ALL_PROJECTS_DATA.filter(p => p.featured);

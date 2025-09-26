// Template Configuration
// Customize your marketing agency website by editing the values below

export const templateConfig = {
  // Company Information
   company: {
    name: "Hansco",
    tagline: "Bersama Hansco Usaha Maju",
    description: "Hans.co adalah agensi digital marketing dan multimedia yang didirikan untuk membantu pelaku UMKM, instansi, dan perusahaan lokal menghadapi tantangan era digital 4.0",
    founded: "2024",
    email: "email@email.com",
    phone: "+62 8123 4567-890",
    address: {
      street: "Jl. Cimanuk No. 23",
      city: "Garut",
      state: "Jawa Barat",
      zip: "44151",
      country: "Indonesia"
    },
    socialMedia: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "https://www.instagram.com/hansss_co/"
    }
  },

  // Hero Section
  hero: {
    badge: "#1 Agensi Pemasaran",
    title: "Bersama Hansco Usaha Maju",
    titleHighlight: "Pemasaran Strategis",
    subtitle: "Hans.co adalah agensi digital marketing dan multimedia yang membantu UMKM, instansi, dan perusahaan lokal beradaptasi dan berkembang di era digital 4.0",
    primaryCTA: "Mulai Sekarang",
    secondaryCTA: "Berita Terbaru",
    statsText: "klien puas"
  },

  // Services Configuration
  services: [
    {
      icon: "chart-line",
      title: "Pemasaran Digital",
      description: "Kampanye berbasis data yang menghasilkan hasil terukur dan memaksimalkan ROI Anda.",
      features: ["SEO & SEM", "Media Sosial", "Pemasaran Konten", "Kampanye Email"],
      color: "blue"
    },
    {
      icon: "users",
      title: "Strategi Merek",
      description: "Membangun identitas merek yang kuat dan relevan dengan audiens target Anda.",
      features: ["Identitas Merek", "Riset Pasar", "Positioning", "Panduan Merek"],
      color: "green"
    },
    {
      icon: "code",
      title: "Pengembangan Web",
      description: "Website dan aplikasi kustom yang meningkatkan keterlibatan dan konversi.",
      features: ["Desain Responsif", "E-commerce", "CMS", "Optimasi Performa"],
      color: "purple"
    },
    {
      icon: "analytics",
      title: "Analitik & Wawasan",
      description: "Ambil keputusan yang tepat dengan analisis data menyeluruh dan laporan yang jelas.",
      features: ["Pelacakan Performa", "Uji A/B", "Perilaku Pengguna", "Analisis ROI"],
      color: "orange"
    }
  ],

  // Stats Configuration
  stats: [
    { number: "999+", label: "Proyek Selesai" },
    { number: "99%", label: "Kepuasan Klien" },
    { number: "999%", label: "Kenaikan ROI Rata-Rata" },
    { number: "24/7", label: "Layanan Tersedia" }
  ],

  // Testimonials
  testimonials: [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "AirstreamPro mengubah kehadiran digital kami. Tingkat konversi meningkat 180% dalam 6 bulan.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      company: "RetailCorp",
      role: "Marketing Director",
      content: "Pendekatan strategis dan eksekusinya melebihi harapan kami. Sangat direkomendasikan!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
    }
  ],

  // Team Members
  team: [
    {
      name: "John Smith",
      role: "CEO & Founder",
      description: "10+ tahun dalam pemasaran digital dan strategi bisnis.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      description: "Ahli dalam desain merek dan kampanye kreatif.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      description: "Pengembang full-stack dengan keahlian pada teknologi web modern.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Emily Davis",
      role: "Marketing Strategist",
      description: "Spesialis SEO, SEM, dan pemasaran performa.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face"
    }
  ],

  // Company Values
  values: [
    {
      icon: "lightbulb",
      title: "Inovasi",
      description: "Kami terus mengeksplorasi teknologi dan strategi baru untuk tetap terdepan.",
      color: "blue"
    },
    {
      icon: "handshake",
      title: "Integritas",
      description: "Komunikasi jujur dan praktik etis adalah inti dari segala yang kami lakukan.",
      color: "green"
    },
    {
      icon: "trophy",
      title: "Keunggulan",
      description: "Kami berusaha mencapai keunggulan dalam setiap proyek, besar maupun kecil.",
      color: "purple"
    },
    {
      icon: "users",
      title: "Kolaborasi",
      description: "Hasil terbaik datang dari kerja sama erat dengan klien sebagai mitra.",
      color: "orange"
    }
  ],

  // Navigation
  navigation: [
    { label: "Beranda", href: "home" },
    { label: "Tentang", href: "about" },
    { label: "Blog", href: "blog" },
    { label: "FAQ", href: "faq" },
    { label: "Kontak", href: "contact" }
  ],

  // Business Hours
  businessHours: {
    weekdays: "Senin - Jumat: 09:00 - 18:00",
    saturday: "Sabtu: 10:00 - 16:00",
    sunday: "Minggu: Tutup"
  },

  // FAQ Categories
  faqCategories: ["Layanan", "Waktu Pengerjaan", "Bisnis", "Harga", "Dukungan"],

  // Blog Categories
  blogCategories: ["Pemasaran Digital", "Branding", "Pengembangan Web", "Analitik", "Strategi"],

  // Theme Colors (override CSS variables)
  theme: {
    primary: "#030213",
    secondary: "#f3f3f5",
    accent: "#3b82f6",
    success: "#10b981",
    warning: "#f59e0b",
    error: "#ef4444"
  }
};

export type TemplateConfig = typeof templateConfig;
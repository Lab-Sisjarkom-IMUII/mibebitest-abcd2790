# Mibebi KasirResto Landing Page

Landing page modern untuk aplikasi kasir digital Mibebi KasirResto yang dirancang untuk mengkonversi pengunjung menjadi pendaftar/demo.

## 🚀 Fitur Utama

- **Responsive Design**: Optimized untuk mobile, tablet, dan desktop
- **SEO Optimized**: Meta tags, sitemap, robots.txt, dan Open Graph
- **Performance**: Lighthouse score ≥90 di semua metrik
- **Accessibility**: WCAG 2.1 compliant
- **Analytics**: GA4 event tracking terintegrasi
- **Modern UI**: Design system dengan Tailwind CSS

## 🛠️ Teknologi

- **Framework**: Next.js 15.5.4
- **Styling**: Tailwind CSS 4
- **Fonts**: Inter & Poppins
- **Icons**: Custom SVG icons
- **Analytics**: Google Analytics 4
- **Deployment**: Vercel-ready

## 📁 Struktur Proyek

```
src/
├── app/
│   ├── layout.js          # Root layout dengan SEO meta
│   ├── page.js            # Main page
│   ├── globals.css        # Global styles & CSS variables
│   ├── loading.js         # Loading component
│   ├── error.js           # Error boundary
│   ├── not-found.js       # 404 page
│   ├── manifest.js        # PWA manifest
│   ├── sitemap.js         # Sitemap generator
│   ├── robots.js          # Robots.txt
│   ├── viewport.js        # Viewport config
│   ├── metadata.js        # SEO metadata
│   ├── icon.js            # Favicon generator
│   ├── apple-icon.js      # Apple touch icon
│   ├── opengraph-image.js # Open Graph image
│   └── twitter-image.js   # Twitter card image
└── components/
    ├── LandingPage.jsx    # Main landing page
    ├── Header.jsx         # Sticky navigation
    ├── HeroSection.jsx    # Hero dengan CTA
    ├── ProblemSection.jsx # Masalah yang diselesaikan
    ├── EngagementFeatures.jsx # Fitur engagement
    ├── OperationalFeatures.jsx # Fitur operasional
    ├── RevenueModel.jsx   # Model bagi hasil
    ├── Advantages.jsx     # Keunggulan
    ├── Testimonials.jsx   # Social proof
    ├── FinalCTA.jsx       # CTA penutup
    └── Footer.jsx          # Footer dengan kontak
```

## 🎨 Design System

### Warna Brand
- **Primary Blue**: `#2563EB`
- **Secondary Orange**: `#F97316`
- **Accent Lime**: `#A3E635`
- **Background**: `#F8FAFC`
- **Text Primary**: `#0F172A`
- **Text Secondary**: `#334155`

### Typography
- **Headings**: Poppins (700)
- **Body**: Inter (400)
- **Responsive**: Mobile-first approach

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Installation

1. Clone repository:
```bash
git clone <repository-url>
cd mibebi-landingpage
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📊 Performance

- **Lighthouse Score**: ≥90 (Performance, Accessibility, SEO, Best Practices)
- **Core Web Vitals**: Optimized
- **Bundle Size**: Minimized dengan tree shaking
- **Images**: WebP/AVIF format dengan lazy loading

## 🔍 SEO Features

- Meta tags lengkap
- Open Graph & Twitter Cards
- Structured data (JSON-LD)
- Sitemap.xml otomatis
- Robots.txt
- Canonical URLs
- Mobile-friendly

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🎯 Conversion Optimization

- **Hero CTA**: Primary action button
- **Social Proof**: Testimonials & stats
- **Trust Indicators**: Security badges
- **Urgency**: Limited time offers
- **Form Optimization**: Minimal fields

## 📈 Analytics

- **GA4 Events**: cta_click, form_submit, scroll_depth
- **Conversion Tracking**: Form submissions
- **User Behavior**: Scroll depth analysis

## 🚀 Deployment

### Vercel (Recommended)
1. Connect GitHub repository
2. Deploy automatically
3. Custom domain setup

### Manual Deployment
```bash
npm run build
npm start
```

## 🔧 Customization

### Mengubah Warna Brand
Edit CSS variables di `src/app/globals.css`:
```css
:root {
  --mibebi-blue: #2563EB;
  --mibebi-orange: #F97316;
  --mibebi-lime: #A3E635;
}
```

### Mengubah Konten
Edit komponen di `src/components/` sesuai kebutuhan.

## 📞 Support

- **Website**: [www.mibebi.com](https://www.mibebi.com)
- **WhatsApp**: [0899-2050-007](https://wa.me/628992050007)
- **Email**: support@mibebi.com
- **Instagram**: [@mibebi.id](https://instagram.com/mibebi.id)

## 📄 License

© 2024 Mibebi. All rights reserved.

---

**Dibuat dengan ❤️ untuk pertumbuhan bisnis restoran Indonesia**
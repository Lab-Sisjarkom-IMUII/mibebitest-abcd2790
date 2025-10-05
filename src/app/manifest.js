export default function manifest() {
  return {
    name: 'Mibebi KasirResto - Kasir Digital yang Menambah Pemasukan Restoran',
    short_name: 'Mibebi KasirResto',
    description: 'Aplikasi kasir modern berbasis AI & QR yang membantu restoran mencatat penjualan, melayani pelanggan lebih cepat, dan bahkan menghasilkan pendapatan tambahan.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8FAFC',
    theme_color: '#2563EB',
    orientation: 'portrait',
    scope: '/',
    lang: 'id',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable any',
      },
    ],
    categories: ['business', 'productivity', 'food'],
    screenshots: [
      {
        src: '/screenshot-mobile.png',
        sizes: '390x844',
        type: 'image/png',
        form_factor: 'narrow',
      },
      {
        src: '/screenshot-desktop.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide',
      },
    ],
  }
}
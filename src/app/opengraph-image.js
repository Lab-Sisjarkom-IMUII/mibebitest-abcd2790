import { ImageResponse } from 'next/og'

export const alt = 'Mibebi KasirResto - Kasir Digital yang Menambah Pemasukan Restoran'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F8FAFC',
          backgroundImage: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 40%, #F97316 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            padding: '60px',
            borderRadius: '20px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #2563EB 0%, #F97316 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: '20px',
            }}
          >
            Mibebi
          </div>
          <div
            style={{
              fontSize: 48,
              fontWeight: 'bold',
              color: '#0F172A',
              textAlign: 'center',
              marginBottom: '20px',
            }}
          >
            Kasir Digital yang Menambah Pemasukan Restoran
          </div>
          <div
            style={{
              fontSize: 24,
              color: '#334155',
              textAlign: 'center',
              maxWidth: '800px',
            }}
          >
            Aplikasi kasir modern berbasis AI & QR yang membantu restoran mencatat penjualan, melayani pelanggan lebih cepat, dan bahkan menghasilkan pendapatan tambahan.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
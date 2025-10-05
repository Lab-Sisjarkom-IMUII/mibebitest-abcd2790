import { ImageResponse } from 'next/og'

export const alt = 'Mibebi KasirResto - Kasir Digital yang Menambah Pemasukan Restoran'
export const size = {
  width: 1200,
  height: 600,
}
export const contentType = 'image/png'

export default function TwitterImage() {
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
            padding: '40px',
            borderRadius: '16px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #2563EB 0%, #F97316 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: '16px',
            }}
          >
            Mibebi KasirResto
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 'bold',
              color: '#0F172A',
              textAlign: 'center',
              marginBottom: '16px',
            }}
          >
            Kasir Digital yang Menambah Pemasukan
          </div>
          <div
            style={{
              fontSize: 18,
              color: '#334155',
              textAlign: 'center',
              maxWidth: '600px',
            }}
          >
            Tanpa biaya bulanan • Bagi hasil 50:50 • AI & QR Technology
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
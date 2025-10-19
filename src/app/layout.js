import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Mibebi KasirResto — Kasir Digital yang Menambah Pemasukan Restoran",
  description: "Aplikasi kasir modern berbasis AI & QR yang membantu restoran mencatat penjualan, melayani pelanggan lebih cepat, dan bahkan menghasilkan pendapatan tambahan. Tanpa biaya bulanan, hanya bagi hasil.",
  keywords: "kasir digital, aplikasi kasir, restoran, QR code, AI, POS, sistem kasir, mibebi",
  icons: {
    icon: "/LogoMibebi.png",
    shortcut: "/LogoMibebi.png",
    apple: "/LogoMibebi.png",
  },
  openGraph: {
    title: "Mibebi KasirResto — Kasir Digital yang Menambah Pemasukan Restoran",
    description: "Aplikasi kasir modern berbasis AI & QR yang membantu restoran mencatat penjualan, melayani pelanggan lebih cepat, dan bahkan menghasilkan pendapatan tambahan.",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/LogoMibebi.png",
        width: 1200,
        height: 630,
        alt: "Mibebi KasirResto Logo",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import './globals.css';
import { Inter, Sora, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['400', '500'],
});

export const metadata = {
  metadataBase: new URL('https://sanjayshivaganesh.com'),
  title: {
    default: 'Sanjay Shivaganesh — Quantum Computing, AI & Software Systems',
    template: '%s — Sanjay Shivaganesh',
  },
  description:
    'Sanjay Shivaganesh is a student researcher, builder, and entrepreneur exploring the future of intelligence through quantum computing, artificial intelligence, and software systems.',
  keywords: [
    'Sanjay Shivaganesh',
    'Quantum Computing',
    'Quantum Machine Learning',
    'Artificial Intelligence',
    'Neural Networks',
    'Hopfield Networks',
    'Student Researcher',
    'Chennai',
    'IB Diploma',
    'CPS Global School',
  ],
  authors: [{ name: 'Sanjay Shivaganesh' }],
  creator: 'Sanjay Shivaganesh',
  openGraph: {
    title: 'Sanjay Shivaganesh — Quantum Computing, AI & Software Systems',
    description:
      'Student researcher, builder, and entrepreneur developing intelligent technologies that bridge emerging science and real-world impact.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanjay Shivaganesh',
    description:
      'Exploring the future of intelligence through quantum computing, AI, and software systems.',
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: '#070b1c',
  colorScheme: 'dark',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} ${jetbrains.variable} dark`}>
      <body className="min-h-screen bg-[#070b1c] font-sans text-slate-200 antialiased selection:bg-indigo-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}


import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { WhatsAppFloat } from '@/components/whatsapp-float';
import { MobileStickyBar } from '@/components/mobile-sticky-bar';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'THE GLAM HOUSE — Salon & Academy | Mohali',
  description: 'Flawless Beauty Starts Here. Premium Permanent Makeup, Hair Treatments, Lash & Brow Services, and Certified Beauty Courses in Mohali.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@400;700&family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <MobileStickyBar />
        <Toaster />
      </body>
    </html>
  );
}

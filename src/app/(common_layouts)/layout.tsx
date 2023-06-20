import 'public/assets/vendor/font-awesome/css/all.css';
import 'public/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import 'public/assets/vendor/tiny-slider/tiny-slider.css';
import 'public/assets/vendor/glightbox/css/glightbox.css';
import 'public/assets/css/style.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import Script from 'next/script';
import BackToTop from '@/components/BackToTop';

export const metadata = {
  title: 'Distancia',
  description: 'Lebanese Educational Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
        
        <Script src="/assets/vendor/glightbox/js/glightbox.js" />
        <Script src="/assets/vendor/custom/theme.js" />
        <Script src="/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js" />
        <Script src="/assets/vendor/tiny-slider/tiny-slider.js" />
        <Script src="/assets/vendor/purecounterjs/dist/purecounter_vanilla.js" />
        <Script src="/assets/js/functions.js" />
       
      </body>
    </html>
)};
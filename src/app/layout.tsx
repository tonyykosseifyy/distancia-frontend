import '../../public/assets/vendor/font-awesome/css/all.css';
import '../../public/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../../public/assets/vendor/tiny-slider/tiny-slider.css';
import '../../public/assets/vendor/glightbox/css/glightbox.css';
import '../../public/assets/css/style.css';


import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import Script from 'next/script';
import BackToTop from '@/components/BackToTop';
import Head from 'next/head';

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
      <Head>        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <body>
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
        
        <Script strategy='lazyOnload' src="/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js" />
        <Script strategy='lazyOnload' src="/assets/vendor/tiny-slider/tiny-slider.js" />
        <Script strategy='lazyOnload' src="/assets/vendor/glightbox/js/glightbox.js" />
        <Script strategy='lazyOnload' src="/assets/vendor/purecounterjs/dist/purecounter_vanilla.js" />
        <Script strategy='lazyOnload' src="/assets/js/functions.js" />

      </body>
    </html>
)};
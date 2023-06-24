import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import Script from 'next/script';

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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <body>
        {children}
        
        <Script src="/assets/vendor/custom/theme.js" />
        <Script src="/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js" />
        <Script src="/assets/js/functions.js" />
      </body>
      
    </html>
)};
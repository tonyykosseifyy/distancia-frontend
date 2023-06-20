import 'public/assets/vendor/font-awesome/css/all.css';
import 'public/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import 'public/assets/css/style.css';


import Script from 'next/script';

export const metadata = {
  title: 'Distancia',
  description: 'Login Page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        
        <Script src="/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js" />
        <Script src="/assets/js/functions.js" />
       
      </body>
    </html>
)};
import Script from "next/script";
import 'public/assets/vendor/plyr/plyr.css';

export const metadata = {
  title: 'Distancia',
  description: 'Course Details'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      {children}   
      <Script src="/assets/vendor/plyr/plyr.js" /> 
    </>        
)};
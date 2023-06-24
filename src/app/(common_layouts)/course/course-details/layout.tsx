import CourseModal from "@/components/course/modal";
import Script from "next/script";
import 'public/assets/vendor/choices/css/choices.css' ;
import 'public/assets/vendor/aos/aos.css';
import 'public/assets/vendor/plyr/plyr.css';

export const metadata = {
  title: 'Distancia',
  description: 'Course Details',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      {children}   
      <CourseModal />
      <Script src="/assets/vendor/choices/js/choices.min.js" /> 
      <Script src="/assets/vendor/aos/aos.js" /> 
      <Script src="/assets/vendor/plyr/plyr.js" /> 
    </>        
)};
import 'public/assets/vendor/choices/css/choices.min.css' ;
import 'public/assets/vendor/aos/aos.css';
import StudentBanner from "@/components/student/student-banner";
import StudentSidebar from "@/components/student/sidebar";
import Script from 'next/script';

export const metadata = {
  title: 'Distancia',
  description: 'Student Dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
        <StudentBanner />
        <section className="pt-0">
          <div className="container">
            <div className="row">
              <StudentSidebar />
              {children}   
            </div>
          </div>
        </section>   
        <Script src="/assets/vendor/choices/js/choices.min.js" /> 
        <Script src="/assets/vendor/aos/aos.js" />

    </main>        
)};
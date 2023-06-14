// import './globals.css'
// import '../assets/scss/style.scss';
// import '../assets/vendor/bootstrap/scss/bootstrap.scss';
// import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
// import '../assets/vendor/font-awesome/css/all.css';
// import '../assets/vendor/font-awesome/css/brands.css';
// import '../assets/vendor/font-awesome/css/fontawesome.css';
// import '../assets/vendor/font-awesome/css/regular.css';
// import '../assets/vendor/font-awesome/css/solid.css';
// import '../assets/vendor/font-awesome/css/svg-with-js.css';
// import '../assets/vendor/font-awesome/css/v4-shims.css';
// import '../assets/vendor/animate/animate.css';
// import '../assets/vendor/aos/aos.css';
// import '../assets/vendor/apexcharts/css/apexcharts.css';
// import '../assets/vendor/choices/css/choices.css';
// import '../assets/vendor/choices/css/base.css';
// import '../assets/vendor/flatpickr/css/flatpickr.css';
// import '../assets/vendor/glightbox/css/glightbox.css';
// import '../assets/vendor/overlay-scrollbar/css/overlayscrollbars.css';
// import '../assets/vendor/plyr/plyr.css';
// import '../assets/vendor/quill/css/quill.snow.css';
// import '../assets/vendor/stepper/css/bs-stepper.css';
// import '../assets/vendor/tiny-slider/tiny-slider.css';



import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';


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
      <head>        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" /> */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      
      <body>
        <Navbar />
        {/* {children} */}
      </body>
    </html>
)};
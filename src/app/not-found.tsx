import 'public/assets/vendor/font-awesome/css/all.css';
import 'public/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import 'public/assets/vendor/tiny-slider/tiny-slider.css';
import 'public/assets/vendor/glightbox/css/glightbox.css';
import 'public/assets/css/style.css';
import React from 'react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


export default function NotFound() {
  return (
    <>
      <Navbar />
      <main>
      <section className="pt-5">
            <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                {/* Image */}
                <img
                    src="images/element/error404-01.svg"
                    className="h-200px h-md-400px mb-4"
                    alt=""
                />
                {/* Title */}
                <h1 className="display-1 text-danger mb-0">404</h1>
                {/* Subtitle */}
                <h2>Oh no, something went wrong!</h2>
                {/* info */}
                <p className="mb-4">
                    Either something went wrong or this page doesn't exist anymore.
                </p>
                {/* Button */}
                <a href="index.html" className="btn btn-primary mb-0">
                    Take me to Homepage
                </a>
                </div>
            </div>
            </div>
      </section>
    </main>
    <Footer />
    </>
    
  )
};

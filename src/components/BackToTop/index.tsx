import React from 'react'
import '../../assets/vendor/font-awesome/css/all.css';
import '../../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../../assets/vendor/tiny-slider/tiny-slider.css';
import '../../assets/vendor/glightbox/css/glightbox.css';
import '../../assets/css/style.css';


function BackToTop() {
  return (
		<div className="back-top">
			<i className="bi bi-arrow-up-short position-absolute top-50 start-50 translate-middle" />
		</div>
	)
}

export default BackToTop;
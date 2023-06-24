import React from 'react';


const CourseModal = (): React.ReactNode => {
  return (
    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header border-0 bg-transparent">
            {/* Close button */}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          {/* Modal body */}
          <div className="modal-body px-5 pb-5 position-relative overflow-hidden">
            {/* Element */}
            <figure className="position-absolute bottom-0 end-0 mb-n4 me-n4 d-none d-sm-block">
              <img src="/images/element/01.svg" alt="element" />
            </figure>
            <figure className="position-absolute top-0 end-0 z-index-n1 opacity-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="818.6px"
                height="235.1px"
                viewBox="0 0 818.6 235.1"
              >
                <path
                  className="fill-info"
                  d="M735,226.3c-5.7,0.6-11.5,1.1-17.2,1.7c-66.2,6.8-134.7,13.7-192.6-16.6c-34.6-18.1-61.4-47.9-87.3-76.7 c-21.4-23.8-43.6-48.5-70.2-66.7c-53.2-36.4-121.6-44.8-175.1-48c-13.6-0.8-27.5-1.4-40.9-1.9c-46.9-1.9-95.4-3.9-141.2-16.5 C8.3,1.2,6.2,0.6,4.2,0H0c3.3,1,6.6,2,10,3c46,12.5,94.5,14.6,141.5,16.5c13.4,0.6,27.3,1.1,40.8,1.9 c53.4,3.2,121.5,11.5,174.5,47.7c26.5,18.1,48.6,42.7,70,66.5c26,28.9,52.9,58.8,87.7,76.9c58.3,30.5,127,23.5,193.3,16.7 c5.8-0.6,11.5-1.2,17.2-1.7c26.2-2.6,55-4.2,83.5-2.2v-1.2C790,222,761.2,223.7,735,226.3z"
                />
              </svg>
            </figure>
            {/* Title */}
            <h2>
              Get Premium Course in <span className="text-success">$800</span>
            </h2>
            <p>
              Prosperous understood Middletons in conviction an uncommonly do.
              Supposing so be resolving breakfast am or perfectly.
            </p>
            {/* Content */}
            <div className="row mb-3 item-collapse">
              <div className="col-sm-6">
                <ul className="list-group list-group-borderless">
                  <li className="list-group-item text-body">
                    {" "}
                    <i className="bi bi-patch-check-fill text-success" />
                    High quality Curriculum
                  </li>
                  <li className="list-group-item text-body">
                    {" "}
                    <i className="bi bi-patch-check-fill text-success" />
                    Tuition Assistance
                  </li>
                  <li className="list-group-item text-body">
                    {" "}
                    <i className="bi bi-patch-check-fill text-success" />
                    Diploma course
                  </li>
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="list-group list-group-borderless">
                  <li className="list-group-item text-body">
                    {" "}
                    <i className="bi bi-patch-check-fill text-success" />
                    Intermediate courses
                  </li>
                  <li className="list-group-item text-body">
                    {" "}
                    <i className="bi bi-patch-check-fill text-success" />
                    Over 200 online courses
                  </li>
                </ul>
              </div>
            </div>
            {/* Button */}
            <a href="#" className="btn btn-lg btn-orange-soft">
              Purchase premium
            </a>
          </div>
          {/* Modal footer */}
          <div className="modal-footer d-block bg-info">
            <div className="d-sm-flex justify-content-sm-between align-items-center text-center text-sm-start">
              {/* Social media button */}
              <ul className="list-inline mb-0 social-media-btn mb-2 mb-sm-0">
                <li className="list-inline-item">
                  {" "}
                  <a
                    className="btn btn-white btn-sm shadow px-2 text-facebook"
                    href="#"
                  >
                    <i className="fab fa-fw fa-facebook-f" />
                  </a>{" "}
                </li>
                <li className="list-inline-item">
                  {" "}
                  <a
                    className="btn btn-white btn-sm shadow px-2 text-instagram"
                    href="#"
                  >
                    <i className="fab fa-fw fa-instagram" />
                  </a>{" "}
                </li>
                <li className="list-inline-item">
                  {" "}
                  <a
                    className="btn btn-white btn-sm shadow px-2 text-twitter"
                    href="#"
                  >
                    <i className="fab fa-fw fa-twitter" />
                  </a>{" "}
                </li>
                <li className="list-inline-item">
                  {" "}
                  <a
                    className="btn btn-white btn-sm shadow px-2 text-linkedin"
                    href="#"
                  >
                    <i className="fab fa-fw fa-linkedin-in" />
                  </a>{" "}
                </li>
              </ul>
              {/* Contact info */}
              <div>
                <p className="mb-1 small">
                  <a href="#" className="text-white">
                    <i className="far fa-envelope fa-fw me-2" />
                    example@gmail.com
                  </a>
                </p>
                <p className="mb-0 small">
                  <a href="#" className="text-white">
                    <i className="fas fa-headset fa-fw me-2" />
                    123-456-789
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseModal;
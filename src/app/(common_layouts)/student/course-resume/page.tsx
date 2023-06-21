import React from 'react'


const StudentCourseResume = () : React.ReactNode => {
  return (
    <div className="col-xl-9">
  {/* Course item START */}
  <div className="card border">
    <div className="card-header border-bottom">
      {/* Card START */}
      <div className="card">
        <div className="row g-0">
          <div className="col-md-3">
            <img
              src="/images/courses/4by3/01.jpg"
              className="rounded-2"
              alt="Card image"
            />
          </div>
          <div className="col-md-9">
            <div className="card-body">
              {/* Title */}
              <h3 className="card-title">
                <a href="#">
                  The Complete Digital Marketing Course - 12 Courses in 1
                </a>
              </h3>
              {/* Info */}
              <ul className="list-inline mb-2">
                <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                  <i className="far fa-clock text-danger me-2" />
                  6h 56m
                </li>
                <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                  <i className="fas fa-table text-orange me-2" />
                  82 lectures
                </li>
                <li className="list-inline-item h6 fw-light">
                  <i className="fas fa-signal text-success me-2" />
                  Beginner
                </li>
              </ul>
              {/* button */}
              <a href="#" className="btn btn-primary-soft btn-sm mb-0">
                Resume course
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Card END */}
    </div>
    <div className="card-body">
      {/* Title */}
      <h5>Course Curriculum</h5>
      {/* Accordion START */}
      <div
        className="accordion accordion-icon accordion-bg-light"
        id="accordionExample2"
      >
        {/* Item */}
        <div className="accordion-item mb-3">
          <h6 className="accordion-header font-base" id="heading-1">
            <a
              className="accordion-button fw-bold rounded collapsed d-block pe-4"
              href="#collapse-1"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-1"
              aria-expanded="true"
              aria-controls="collapse-1"
            >
              <span className="mb-0">Introduction of Digital Marketing</span>
              <span className="small d-block mt-1">(3 Lectures)</span>
            </a>
          </h6>
          <div
            id="collapse-1"
            className="accordion-collapse collapse show"
            aria-labelledby="heading-1"
            data-bs-parent="#accordionExample2"
          >
            <div className="accordion-body mt-3">
              <div className="vstack gap-3">
                {/* Progress bar */}
                <div className="overflow-hidden">
                  <div className="d-flex justify-content-between">
                    <p className="mb-1 h6">1/2 Completed</p>
                    <h6 className="mb-1 text-end">80%</h6>
                  </div>
                  <div className="progress progress-sm bg-primary bg-opacity-10">
                    <div
                      className="progress-bar bg-primary aos"
                      role="progressbar"
                      data-aos="slide-right"
                      data-aos-delay={200}
                      data-aos-duration={1000}
                      data-aos-easing="ease-in-out"
                      style={{ width: "80%" }}
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
                {/* Course lecture */}
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="position-relative d-flex align-items-center">
                      <a
                        href="#"
                        className="btn btn-success btn-round btn-sm mb-0 stretched-link position-static"
                      >
                        <i className="fas fa-play me-0" />
                      </a>
                      <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-200px">
                        Introduction
                      </span>
                    </div>
                    <p className="mb-0 text-truncate">2m 10s</p>
                  </div>
                  {/* Add note button */}
                  <a
                    className="btn btn-xs btn-warning mb-0"
                    data-bs-toggle="collapse"
                    href="#addnote-1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="addnote-1"
                  >
                    <i className="bi fa-fw bi-pencil-square me-2" />
                    Note
                  </a>
                  <a href="#" className="btn btn-xs btn-dark mb-0">
                    Play again
                  </a>
                  {/* Notes START */}
                  <div className="collapse" id="addnote-1">
                    <div className="card card-body p-0 mt-2">
                      {/* Note item */}
                      <div className="d-flex justify-content-between bg-light rounded-2 p-2 mb-2">
                        {/* Content */}
                        <div className="d-flex align-items-center">
                          <span className="badge bg-dark me-2">5:20</span>
                          <h6 className="d-inline-block text-truncate w-100px w-sm-200px mb-0 fw-light">
                            Describe SEO Engine
                          </h6>
                        </div>
                        {/* Button */}
                        <div className="d-flex">
                          <a
                            href="#"
                            className="btn btn-sm btn-light btn-round me-2 mb-0"
                          >
                            <i className="bi fa-fw bi-play-fill" />
                          </a>
                          <a
                            href="#"
                            className="btn btn-sm btn-light btn-round mb-0"
                          >
                            <i className="bi fa-fw bi-trash-fill" />
                          </a>
                        </div>
                      </div>
                      {/* Note item */}
                      <div className="d-flex justify-content-between bg-light rounded-2 p-2 mb-2">
                        {/* Content */}
                        <div className="d-flex align-items-center">
                          <span className="badge bg-dark me-2">10:20</span>
                          <h6 className="d-inline-block text-truncate w-100px w-sm-200px mb-0 fw-light">
                            Know about all marketing
                          </h6>
                        </div>
                        {/* Button */}
                        <div className="d-flex">
                          <a
                            href="#"
                            className="btn btn-sm btn-light btn-round me-2 mb-0"
                          >
                            <i className="bi fa-fw bi-play-fill" />
                          </a>
                          <a
                            href="#"
                            className="btn btn-sm btn-light btn-round mb-0"
                          >
                            <i className="bi fa-fw bi-trash-fill" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Notes END */}
                  <hr className="mb-0" />
                </div>
                {/* Course lecture */}
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="position-relative d-flex align-items-center">
                      <a
                        href="#"
                        className="btn btn-success btn-round btn-sm mb-0 stretched-link position-static"
                      >
                        <i className="fas fa-play me-0" />
                      </a>
                      <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">
                        {" "}
                        What is Digital Marketing What is Digital Marketing
                      </span>
                    </div>
                    <p className="mb-0 text-truncate">15m 10s</p>
                  </div>
                  {/* Add note button */}
                  <a
                    className="btn btn-xs btn-warning mb-0"
                    data-bs-toggle="collapse"
                    href="#addnote-2"
                    role="button"
                    aria-expanded="false"
                    aria-controls="addnote-2"
                  >
                    <i className="bi fa-fw bi-pencil-square me-2" />
                    Note
                  </a>
                  <a href="#" className="btn btn-xs btn-dark mb-0">
                    Play again
                  </a>
                  {/* Notes START */}
                  <div className="collapse" id="addnote-2">
                    <div className="card card-body p-0 mt-2">
                      {/* Note item */}
                      <div className="d-flex justify-content-between bg-light rounded-2 p-2 mb-2">
                        {/* Content */}
                        <div className="d-flex align-items-center">
                          <span className="badge bg-dark me-2">5:20</span>
                          <h6 className="d-inline-block text-truncate w-100px w-sm-200px mb-0 fw-light">
                            Describe SEO Engine
                          </h6>
                        </div>
                        {/* Button */}
                        <div className="d-flex">
                          <a
                            href="#"
                            className="btn btn-sm btn-light btn-round me-2 mb-0"
                          >
                            <i className="bi fa-fw bi-play-fill" />
                          </a>
                          <a
                            href="#"
                            className="btn btn-sm btn-light btn-round mb-0"
                          >
                            <i className="bi fa-fw bi-trash-fill" />
                          </a>
                        </div>
                      </div>
                      {/* Note item */}
                      <div className="d-flex justify-content-between bg-light rounded-2 p-2 mb-2">
                        {/* Content */}
                        <div className="d-flex align-items-center">
                          <span className="badge bg-dark me-2">10:20</span>
                          <h6 className="d-inline-block text-truncate w-100px w-sm-200px mb-0 fw-light">
                            Know about all marketing
                          </h6>
                        </div>
                        {/* Button */}
                        <div className="d-flex">
                          <a
                            href="#"
                            className="btn btn-sm btn-light btn-round me-2 mb-0"
                          >
                            <i className="bi fa-fw bi-play-fill" />
                          </a>
                          <a
                            href="#"
                            className="btn btn-sm btn-light btn-round mb-0"
                          >
                            <i className="bi fa-fw bi-trash-fill" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Notes END */}
                  <hr className="mb-0" />
                </div>
                {/* Course lecture */}
                <div className="d-flex justify-content-between align-items-center">
                  <div className="position-relative d-flex align-items-center">
                    <a
                      href="#"
                      className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                    >
                      <i className="fas fa-play me-0" />
                    </a>
                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">
                      Type of Digital Marketing
                    </span>
                  </div>
                  <p className="mb-0 text-truncate">18m 10s</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Item */}
        <div className="accordion-item mb-3">
          <h6 className="accordion-header font-base" id="heading-2">
            <a
              className="accordion-button fw-bold collapsed rounded d-block pe-4"
              href="#collapse-2"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-2"
              aria-expanded="false"
              aria-controls="collapse-2"
            >
              <span className="mb-0">Customer Life cycle</span>
              <span className="small d-block mt-1">(3 Lectures)</span>
            </a>
          </h6>
          <div
            id="collapse-2"
            className="accordion-collapse collapse"
            aria-labelledby="heading-2"
            data-bs-parent="#accordionExample2"
          >
            {/* Accordion body START */}
            <div className="accordion-body mt-3">
              <div className="vstack gap-3">
                {/* Progress bar */}
                <div className="overflow-hidden">
                  <div className="d-flex justify-content-between">
                    <p className="mb-1 h6">0/3 Completed</p>
                    <h6 className="mb-1 text-end">0%</h6>
                  </div>
                  <div className="progress progress-sm bg-primary bg-opacity-10">
                    <div
                      className="progress-bar bg-primary aos"
                      role="progressbar"
                      data-aos="slide-right"
                      data-aos-delay={200}
                      data-aos-duration={1000}
                      data-aos-easing="ease-in-out"
                      style={{ width: "0%" }}
                      aria-valuenow={0}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
                {/* Course lecture */}
                <div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="position-relative d-flex align-items-center">
                      <a
                        href="#"
                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                      >
                        <i className="fas fa-play me-0" />
                      </a>
                      <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-sm-400px">
                        Introduction
                      </span>
                    </div>
                    <p className="mb-0 text-truncate">2m 10s</p>
                  </div>
                  <hr className="mb-0" />
                </div>
                {/* Course lecture */}
                <div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="position-relative d-flex align-items-center">
                      <a
                        href="#"
                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                      >
                        <i className="fas fa-play me-0" />
                      </a>
                      <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">
                        {" "}
                        What is Digital Marketing What is Digital Marketing
                      </span>
                    </div>
                    <p className="mb-0 text-truncate">15m 10s</p>
                  </div>
                  <hr className="mb-0" />
                </div>
                {/* Course lecture */}
                <div className="d-flex justify-content-between align-items-center">
                  <div className="position-relative d-flex align-items-center">
                    <a
                      href="#"
                      className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static"
                      data-bs-toggle="modal"
                      data-bs-target="#coursePremium"
                    >
                      <i className="bi bi-lock-fill" />
                    </a>
                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">
                      Type of Digital Marketing
                    </span>
                  </div>
                  <p className="mb-0 text-truncate">18m 10s</p>
                </div>
              </div>
            </div>
            {/* Accordion body END */}
          </div>
        </div>
      </div>
      {/* Accordion END */}
    </div>
  </div>
  {/* Course item END */}
  {/* Course item START */}
  <div className="card border mt-4">
    <div className="card-header border-bottom">
      {/* Card START */}
      <div className="card">
        <div className="row g-0">
          <div className="col-md-3">
            <img
              src="/images/courses/4by3/08.jpg"
              className="rounded-2"
              alt="Card image"
            />
          </div>
          <div className="col-md-9">
            <div className="card-body">
              {/* Title */}
              <h3 className="card-title">
                <a href="#">Sketch from A to Z: for app designer</a>
              </h3>
              {/* Info */}
              <ul className="list-inline mb-2">
                <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                  <i className="far fa-clock text-danger me-2" />
                  8h 56m
                </li>
                <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                  <i className="fas fa-table text-orange me-2" />
                  65 lectures
                </li>
                <li className="list-inline-item h6 fw-light">
                  <i className="fas fa-signal text-success me-2" />
                  All level
                </li>
              </ul>
              {/* Button */}
              <a href="#" className="btn btn-primary-soft btn-sm mb-0">
                Resume course
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Card END */}
    </div>
    <div className="card-body">
      {/* Title */}
      <h5>Course Curriculum</h5>
      {/* Accordion START */}
      <div
        className="accordion accordion-icon accordion-bg-light"
        id="accordionExample4"
      >
        {/* Item */}
        <div className="accordion-item mb-3">
          <h6 className="accordion-header font-base" id="heading-1-1">
            <a
              className="accordion-button fw-bold rounded collapsed d-block pe-4"
              href="#collapse-1-1"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-1-1"
              aria-expanded="false"
              aria-controls="collapse-1-1"
            >
              <span className="mb-0">Introduction of Sketch</span>
              <span className="small d-block mt-1">(3 Lectures)</span>
            </a>
          </h6>
          <div
            id="collapse-1-1"
            className="accordion-collapse collapse"
            aria-labelledby="heading-1-1"
            data-bs-parent="#accordionExample4"
          >
            <div className="accordion-body mt-3">
              <div className="vstack gap-3">
                {/* Progress bar */}
                <div className="overflow-hidden">
                  <div className="d-flex justify-content-between">
                    <p className="mb-1 h6">1/3 Completed</p>
                    <h6 className="mb-1 text-end">35%</h6>
                  </div>
                  <div className="progress progress-sm bg-primary bg-opacity-10">
                    <div
                      className="progress-bar bg-primary aos"
                      role="progressbar"
                      data-aos="slide-right"
                      data-aos-delay={200}
                      data-aos-duration={1000}
                      data-aos-easing="ease-in-out"
                      style={{ width: "35%" }}
                      aria-valuenow={35}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
                {/* Course lecture */}
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="position-relative d-flex align-items-center">
                      <a
                        href="#"
                        className="btn btn-success btn-round btn-sm mb-0 stretched-link position-static"
                      >
                        <i className="fas fa-play me-0" />
                      </a>
                      <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">
                        Introduction
                      </span>
                    </div>
                    <p className="mb-0 text-truncate">2m 10s</p>
                  </div>
                  {/* Add note button */}
                  <a
                    className="btn btn-xs btn-warning mb-0"
                    data-bs-toggle="collapse"
                    href="#addnote-3"
                    role="button"
                    aria-expanded="false"
                    aria-controls="addnote-3"
                  >
                    <i className="bi fa-fw bi-pencil-square me-2" />
                    Note
                  </a>
                  <a href="#" className="btn btn-xs btn-dark mb-0">
                    Play again
                  </a>
                  {/* Notes START */}
                  <div className="collapse" id="addnote-3">
                    <div className="card card-body p-0 mt-2">
                      {/* Note item */}
                      <div className="d-flex justify-content-between bg-light rounded-2 p-2 mb-2">
                        {/* Content */}
                        <div className="d-flex align-items-center">
                          <span className="badge bg-dark me-2">5:20</span>
                          <h6 className="d-inline-block text-truncate w-100px w-sm-400px mb-0 fw-light">
                            Describe SEO Engine
                          </h6>
                        </div>
                        {/* Button */}
                        <div className="d-flex">
                          <a
                            href="#"
                            className="btn btn-sm btn-light btn-round me-2 mb-0"
                          >
                            <i className="bi fa-fw bi-play-fill" />
                          </a>
                          <a
                            href="#"
                            className="btn btn-sm btn-light btn-round mb-0"
                          >
                            <i className="bi fa-fw bi-trash-fill" />
                          </a>
                        </div>
                      </div>
                      {/* Note item */}
                      <div className="d-flex justify-content-between bg-light rounded-2 p-2 mb-2">
                        {/* Content */}
                        <div className="d-flex align-items-center">
                          <span className="badge bg-dark me-2">10:20</span>
                          <h6 className="d-inline-block text-truncate w-100px w-sm-400px mb-0 fw-light">
                            Know about all marketing
                          </h6>
                        </div>
                        {/* Button */}
                        <div className="d-flex">
                          <a
                            href="#"
                            className="btn btn-sm btn-light btn-round me-2 mb-0"
                          >
                            <i className="bi fa-fw bi-play-fill" />
                          </a>
                          <a
                            href="#"
                            className="btn btn-sm btn-light btn-round mb-0"
                          >
                            <i className="bi fa-fw bi-trash-fill" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Notes END */}
                  <hr className="mb-0" />
                </div>
                {/* Course lecture */}
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="position-relative d-flex align-items-center">
                      <a
                        href="#"
                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                      >
                        <i className="fas fa-play me-0" />
                      </a>
                      <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">
                        {" "}
                        What is Digital Marketing What is Digital Marketing
                      </span>
                    </div>
                    <p className="mb-0 text-truncate">15m 10s</p>
                  </div>
                  <hr className="mb-0" />
                </div>
                {/* Course lecture */}
                <div className="d-flex justify-content-between align-items-center">
                  <div className="position-relative d-flex align-items-center">
                    <a
                      href="#"
                      className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                    >
                      <i className="fas fa-play me-0" />
                    </a>
                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">
                      Type of Digital Marketing
                    </span>
                  </div>
                  <p className="mb-0 text-truncate">18m 10s</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Item */}
        <div className="accordion-item mb-3">
          <h6 className="accordion-header font-base" id="heading-1-4">
            <a
              className="accordion-button fw-bold collapsed rounded d-block pe-4"
              href="#collapse-1-4"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-1-4"
              aria-expanded="false"
              aria-controls="collapse-1-4"
            >
              <span className="mb-0">YouTube Marketing</span>
              <span className="small d-block mt-1">(5 Lectures)</span>
            </a>
          </h6>
          <div
            id="collapse-1-4"
            className="accordion-collapse collapse"
            aria-labelledby="heading-1-4"
            data-bs-parent="#accordionExample4"
          >
            {/* Accordion body START */}
            <div className="accordion-body mt-3">
              <div className="vstack gap-3">
                {/* Progress bar */}
                <div className="overflow-hidden">
                  <div className="d-flex justify-content-between">
                    <p className="mb-1 h6">0/5 Completed</p>
                    <h6 className="mb-1 text-end">0%</h6>
                  </div>
                  <div className="progress progress-sm bg-primary bg-opacity-10">
                    <div
                      className="progress-bar bg-primary aos"
                      role="progressbar"
                      data-aos="slide-right"
                      data-aos-delay={200}
                      data-aos-duration={1000}
                      data-aos-easing="ease-in-out"
                      style={{ width: "0%" }}
                      aria-valuenow={0}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
                {/* Course lecture */}
                <div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="position-relative d-flex align-items-center">
                      <a
                        href="#"
                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                      >
                        <i className="fas fa-play me-0" />
                      </a>
                      <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">
                        Video Flow
                      </span>
                    </div>
                    <p className="mb-0 text-truncate">25m 5s</p>
                  </div>
                  <hr className="mb-0" />
                </div>
                {/* Course lecture */}
                <div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="position-relative d-flex align-items-center">
                      <a
                        href="#"
                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                      >
                        <i className="fas fa-play me-0" />
                      </a>
                      <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">
                        Webmaster Tool
                      </span>
                    </div>
                    <p className="mb-0 text-truncate">15m 20s</p>
                  </div>
                  <hr className="mb-0" />
                </div>
                {/* Course lecture */}
                <div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="position-relative d-flex align-items-center">
                      <a
                        href="#"
                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                      >
                        <i className="fas fa-play me-0" />
                      </a>
                      <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">
                        Featured Contents on Channel
                      </span>
                    </div>
                    <p className="mb-0 text-truncate">32m 20s</p>
                  </div>
                  <hr className="mb-0" />
                </div>
                {/* Course lecture */}
                <div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="position-relative d-flex align-items-center">
                      <a
                        href="#"
                        className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static"
                        data-bs-toggle="modal"
                        data-bs-target="#coursePremium"
                      >
                        <i className="bi bi-lock-fill" />
                      </a>
                      <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">
                        Managing Comments
                      </span>
                    </div>
                    <p className="mb-0 text-truncate">20m 20s</p>
                  </div>
                  <hr className="mb-0" />
                </div>
                {/* Course lecture */}
                <div className="d-flex justify-content-between align-items-center">
                  <div className="position-relative d-flex align-items-center">
                    <a
                      href="#"
                      className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static"
                      data-bs-toggle="modal"
                      data-bs-target="#coursePremium"
                    >
                      <i className="bi bi-lock-fill" />
                    </a>
                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">
                      Channel Analytics
                    </span>
                  </div>
                  <p className="mb-0 text-truncate">18m 20s</p>
                </div>
              </div>
            </div>
            {/* Accordion body END */}
          </div>
        </div>
      </div>
      {/* Accordion END */}
    </div>
  </div>
  {/* Course item END */}
</div>


  )
}

export default StudentCourseResume ;
import React from 'react';
import Script from 'next/script';
import Link from 'next/link';


const CourseVideo = () : React.ReactNode => {
  return (
    <main>
      <section className="py-0 bg-dark position-relative">
        <div className="row g-0">
          <div className="d-flex">
            <div className="overflow-hidden fullscreen-video w-100">
              {/* Full screen video START */}
              <div className="video-player rounded-3">
              <video controls crossOrigin="anonymous" playsInline poster="/images/videos/poster.jpg">
                <source src="/images/videos/1080p.mp4" type="video/mp4" />
                <source src="/images/videos/720p.mp4" type="video/mp4"  />
                <source src="/images/videos/360p.mp4" type="video/mp4" />
              
                {/* Caption files */}
                <track kind="captions" label="English" srcLang="en" src="/images/videos/en.vtt" default />
                <track kind="captions" label="French" srcLang="fr" src="/images/videos/fr.vtt" />
              </video>
              </div>
              {/* Full screen video END */}
              {/* Plyr resources and browser polyfills are specified in the pen settings */}
            </div>
            {/* Page content START */}
            <div className="justify-content-end position-relative">
              {/* Collapse button START */}
              <button
                className="navbar-toggler btn btn-white mt-4 plyr-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseWidthExample"
                aria-expanded="false"
                aria-controls="collapseWidthExample"
              >
                <span className="navbar-toggler-animation">
                  <span />
                  <span />
                  <span />
                </span>
              </button>
              {/* Collapse button END */}
              {/* Collapse body START */}
              <div className="collapse collapse-horizontal" id="collapseWidthExample">
                <div className="card vh-100 overflow-auto rounded-0 w-280px w-sm-400px">
                  {/* Title */}
                  <div className="card-header bg-light rounded-0">
                    <h1 className="mt-2 fs-5">
                      The Complete Digital Marketing Course - 12 Courses in 1
                    </h1>
                    <h6 className="mb-0 fw-normal">
                      <a href="#">By Jacqueline Miller</a>
                    </h6>
                  </div>
                  {/* Course content START */}
                  <div className="card-body">
                    <div className="d-sm-flex justify-content-sm-between">
                      <h5>Course content</h5>
                      {/* Button */}
                      <button
                        type="button"
                        className="btn btn-sm btn-warning"
                        data-bs-toggle="modal"
                        data-bs-target="#Notemodal"
                      >
                        <i className="bi fa-fw bi-pencil-square me-2" />
                        Add note
                      </button>
                    </div>
                    <hr /> {/* Divider */}
                    {/* Course START */}
                    <div className="row">
                      <div className="col-12">
                        {/* Accordion START */}
                        <div
                          className="accordion accordion-flush-light accordion-flush"
                          id="accordionExample"
                        >
                          {/* Item */}
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                <span className="mb-0 fw-bold">
                                  Introduction of Digital Marketing
                                </span>
                              </button>
                            </h2>
                            <div
                              id="collapseOne"
                              className="accordion-collapse collapse show"
                              aria-labelledby="headingOne"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body px-3">
                                <div className="vstack gap-3">
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
                                        <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">
                                          Introduction
                                        </span>
                                      </div>
                                      <p className="mb-0 text-truncate">2m 10s</p>
                                    </div>
                                    {/* Add note button */}
                                    <a
                                      className="btn btn-xs btn-warning"
                                      data-bs-toggle="collapse"
                                      href="#addnote-1"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="addnote-1"
                                    >
                                      View note
                                    </a>
                                    {/* Notes START */}
                                    <div className="collapse" id="addnote-1">
                                      <div className="card card-body p-0">
                                        {/* Note item */}
                                        <div className="d-flex justify-content-between bg-light rounded-2 p-2 mb-2">
                                          {/* Content */}
                                          <div className="d-flex align-items-center">
                                            <span className="badge bg-dark me-2">
                                              5:20
                                            </span>
                                            <h6 className="d-inline-block text-truncate w-40px w-sm-150px mb-0 fw-light">
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
                                            <span className="badge bg-dark me-2">
                                              10:20
                                            </span>
                                            <h6 className="d-inline-block text-truncate w-40px w-sm-150px mb-0 fw-light">
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
                                        <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">
                                          {" "}
                                          What is Digital Marketing What is Digital
                                          Marketing
                                        </span>
                                      </div>
                                      <p className="mb-0 text-truncate">15m 10s</p>
                                    </div>
                                    {/* Add note button */}
                                    <a
                                      className="btn btn-xs btn-warning"
                                      data-bs-toggle="collapse"
                                      href="#addnote-2"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="addnote-2"
                                    >
                                      View note
                                    </a>
                                    {/* Notes START */}
                                    <div className="collapse" id="addnote-2">
                                      <div className="card card-body p-0">
                                        {/* Note item */}
                                        <div className="d-flex justify-content-between bg-light rounded-2 p-2 mb-2">
                                          {/* Content */}
                                          <div className="d-flex align-items-center">
                                            <span className="badge bg-dark me-2">
                                              5:20
                                            </span>
                                            <h6 className="d-inline-block text-truncate w-40px w-sm-150px mb-0 fw-light">
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
                                            <span className="badge bg-dark me-2">
                                              10:20
                                            </span>
                                            <h6 className="d-inline-block text-truncate w-40px w-sm-150px mb-0 fw-light">
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
                                      <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">
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
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                <span className="mb-0 fw-bold">
                                  Customer Life cycle
                                </span>
                              </button>
                            </h2>
                            <div
                              id="collapseTwo"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingTwo"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body px-3">
                                <div className="vstack gap-3">
                                  {/* Course lecture */}
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div className="position-relative d-flex align-items-center">
                                      <a
                                        href="#"
                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                      >
                                        <i className="fas fa-play me-0" />
                                      </a>
                                      <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">
                                        Introduction
                                      </span>
                                    </div>
                                    <p className="mb-0 text-truncate">2m 10s</p>
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
                                      <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">
                                        {" "}
                                        What is Digital Marketing What is Digital
                                        Marketing
                                      </span>
                                    </div>
                                    <p className="mb-0 text-truncate">15m 10s</p>
                                  </div>
                                  {/* Course lecture */}
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div className="position-relative d-flex align-items-center">
                                      <a
                                        href="#"
                                        className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static"
                                      >
                                        <i className="bi bi-lock-fill" />
                                      </a>
                                      <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">
                                        Type of Digital Marketing
                                      </span>
                                    </div>
                                    <p className="mb-0 text-truncate">18m 10s</p>
                                  </div>
                                </div>{" "}
                                {/* Row END */}
                              </div>
                            </div>
                          </div>
                          {/* Item */}
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                <span className="mb-0 fw-bold">
                                  What is Search Engine Optimization(SEO)
                                </span>
                              </button>
                            </h2>
                            <div
                              id="collapseThree"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingThree"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body px-3">
                                <div className="vstack gap-3">
                                  {/* Course lecture */}
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div className="position-relative d-flex align-items-center">
                                      <a
                                        href="#"
                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                      >
                                        <i className="fas fa-play me-0" />
                                      </a>
                                      <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">
                                        Introduction
                                      </span>
                                    </div>
                                    <p className="mb-0 text-truncate">2m 10s</p>
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
                                      <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">
                                        How to SEO Optimise Your Homepage
                                      </span>
                                    </div>
                                    <p className="mb-0 text-truncate">15m 00s</p>
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
                                      <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">
                                        How to Write Title Tags Search Engines Love
                                      </span>
                                    </div>
                                    <p className="mb-0 text-truncate">28m 10s</p>
                                  </div>
                                  {/* Course lecture */}
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div className="position-relative d-flex align-items-center">
                                      <a
                                        href="#"
                                        className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static"
                                      >
                                        <i className="bi bi-lock-fill" />
                                      </a>
                                      <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">
                                        SEO Keyword Planning
                                      </span>
                                    </div>
                                    <p className="mb-0 text-truncate">38m 22s</p>
                                  </div>
                                  {/* Course lecture */}
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div className="position-relative d-flex align-items-center">
                                      <a
                                        href="#"
                                        className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static"
                                      >
                                        <i className="bi bi-lock-fill" />
                                      </a>
                                      <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">
                                        Internal and External Links
                                      </span>
                                    </div>
                                    <p className="mb-0 text-truncate">12m 10s</p>
                                  </div>
                                  {/* Course lecture */}
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div className="position-relative d-flex align-items-center">
                                      <a
                                        href="#"
                                        className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static"
                                      >
                                        <i className="bi bi-lock-fill" />
                                      </a>
                                      <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">
                                        Measuring SEO Effectiveness
                                      </span>
                                    </div>
                                    <p className="mb-0 text-truncate">35m 10s</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Item */}
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                              >
                                <span className="mb-0 fw-bold">
                                  YouTube Marketing
                                </span>
                              </button>
                            </h2>
                            <div
                              id="collapseFour"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingFour"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body px-3">
                                <div className="vstack gap-3">
                                  {/* Course lecture */}
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div className="position-relative d-flex align-items-center">
                                      <a
                                        href="#"
                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                      >
                                        <i className="fas fa-play me-0" />
                                      </a>
                                      <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">
                                        Video Flow
                                      </span>
                                    </div>
                                    <p className="mb-0 text-truncate">25m 5s</p>
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
                                      <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">
                                        Webmaster Tool
                                      </span>
                                    </div>
                                    <p className="mb-0 text-truncate">15m 20s</p>
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
                                      <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">
                                        Featured Contents on Channel
                                      </span>
                                    </div>
                                    <p className="mb-0 text-truncate">32m 20s</p>
                                  </div>
                                  {/* Course lecture */}
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div className="position-relative d-flex align-items-center">
                                      <a
                                        href="#"
                                        className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static"
                                      >
                                        <i className="bi bi-lock-fill" />
                                      </a>
                                      <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">
                                        Managing Comments
                                      </span>
                                    </div>
                                    <p className="mb-0 text-truncate">20m 20s</p>
                                  </div>
                                  {/* Course lecture */}
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div className="position-relative d-flex align-items-center">
                                      <a
                                        href="#"
                                        className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static"
                                      >
                                        <i className="bi bi-lock-fill" />
                                      </a>
                                      <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">
                                        Channel Analytics
                                      </span>
                                    </div>
                                    <p className="mb-0 text-truncate">18m 20s</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Item */}
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFive">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFive"
                                aria-expanded="false"
                                aria-controls="collapseFive"
                              >
                                <span className="mb-0 fw-bold">Why SEO</span>
                              </button>
                            </h2>
                            <div
                              id="collapseFive"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingFive"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body px-3">
                                <div className="vstack gap-3">
                                  {/* Course lecture */}
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div className="position-relative d-flex align-items-center">
                                      <a
                                        href="#"
                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                      >
                                        <i className="fas fa-play me-0" />
                                      </a>
                                      <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">
                                        Understanding SEO
                                      </span>
                                    </div>
                                    <p className="mb-0 text-truncate">20m 20s</p>
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
                                      <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">
                                        On-Page SEO
                                      </span>
                                    </div>
                                    <p className="mb-0 text-truncate">5m 20s</p>
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
                                      <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">
                                        Local SEO
                                      </span>
                                    </div>
                                    <p className="mb-0 text-truncate">16m 20s</p>
                                  </div>
                                  {/* Course lecture */}
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div className="position-relative d-flex align-items-center">
                                      <a
                                        href="#"
                                        className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static"
                                      >
                                        <i className="bi bi-lock-fill" />
                                      </a>
                                      <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">
                                        Measuring SEO Effectiveness
                                      </span>
                                    </div>
                                    <p className="mb-0 text-truncate">12m 20s</p>
                                  </div>
                                  {/* Course lecture */}
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div className="position-relative d-flex align-items-center">
                                      <a
                                        href="#"
                                        className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static"
                                      >
                                        <i className="bi bi-lock-fill" />
                                      </a>
                                      <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">
                                        SEO Keyword Planning
                                      </span>
                                    </div>
                                    <p className="mb-0 text-truncate">36m 12s</p>
                                  </div>
                                  {/* Course lecture */}
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div className="position-relative d-flex align-items-center">
                                      <a
                                        href="#"
                                        className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static"
                                      >
                                        <i className="bi bi-lock-fill" />
                                      </a>
                                      <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">
                                        Keywords in Blog and Articles
                                      </span>
                                    </div>
                                    <p className="mb-0 text-truncate">15m 20s</p>
                                  </div>
                                  {/* Course lecture */}
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div className="position-relative d-flex align-items-center">
                                      <a
                                        href="#"
                                        className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static"
                                      >
                                        <i className="bi bi-lock-fill" />
                                      </a>
                                      <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">
                                        Mobile SEO
                                      </span>
                                    </div>
                                    <p className="mb-0 text-truncate">15m 00s</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Item */}
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingSix">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseSix"
                                aria-expanded="false"
                                aria-controls="collapseSix"
                              >
                                <span className="mb-0 fw-bold">
                                  Integration with Website
                                </span>
                              </button>
                            </h2>
                            <div
                              id="collapseSix"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingSix"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body px-3">
                                <div className="vstack gap-3">
                                  {/* Course lecture */}
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div className="position-relative d-flex align-items-center">
                                      <a
                                        href="#"
                                        className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                                      >
                                        <i className="fas fa-play me-0" />
                                      </a>
                                      <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">
                                        Creating LinkedIn Account
                                      </span>
                                    </div>
                                    <p className="mb-0 text-truncate">13m 20s</p>
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
                                      <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">
                                        Advance Searching
                                      </span>
                                    </div>
                                    <p className="mb-0 text-truncate">31m 20ss</p>
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
                                      <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">
                                        LinkedIn Mobile App
                                      </span>
                                    </div>
                                    <p className="mb-0 text-truncate">25m 20s</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Accordion END */}
                      </div>
                    </div>
                    {/* Course END */}
                  </div>
                  {/* Course content END */}
                  <div className="card-footer">
                    <div className="d-grid">
                      <a
                        href="course-detail.html"
                        className="btn btn-primary-soft mb-0"
                      >
                        Back to course
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Collapse body END */}
            </div>
            {/* Page content END */}
          </div>
        </div>
      </section>
    <div
      className="modal fade"
      id="Notemodal"
      tabIndex={-1}
      aria-labelledby="NotemodalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="NotemodalLabel">
              Add New Note
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            {/* Note input */}
            <div className="col-12">
              <label className="form-label">
                Type your note <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Type your note"
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save Note
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
  );
};

export default CourseVideo;
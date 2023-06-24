import React from 'react';
import 'public/assets/vendor/stepper/css/bs-stepper.min.css';
import Script from 'next/script';

const StudentQuiz = () : React.ReactNode => {
  return (
    <>
       <div className="col-xl-9">
      {/* Course item START */}
      <div className="card border">
        <div className="card-header border-bottom">
          {/* Course list START */}
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-2">
                    <img
                      src="/images/courses/4by3/01.jpg"
                      className="rounded-2"
                      alt="Card image"
                    />
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      {/* Title */}
                      <h3 className="card-title">
                        <a href="#">
                          The Complete Digital Marketing Course - 12 Courses in 1
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Course list END */}
        </div>
        <div className="card-body">
          {/* Step content START */}
          <div className="card bg-transparent border rounded-3 mb-1">
            <div id="stepper" className="bs-stepper stepper-outline">
              {/* Card header */}
              <div className="card-header bg-light border-bottom px-lg-5">
                {/* Step Buttons START */}
                <div className="bs-stepper-header" role="tablist">
                  {/* Step 1 */}
                  <div className="step" data-target="#step-1">
                    <div className="d-grid text-center align-items-center">
                      <button
                        type="button"
                        className="btn btn-link step-trigger mb-0"
                        role="tab"
                        id="steppertrigger1"
                        aria-controls="step-1"
                      >
                        <span className="bs-stepper-circle">1</span>
                      </button>
                    </div>
                  </div>
                  <div className="line" />
                  {/* Step 2 */}
                  <div className="step" data-target="#step-2">
                    <div className="d-grid text-center align-items-center">
                      <button
                        type="button"
                        className="btn btn-link step-trigger mb-0"
                        role="tab"
                        id="steppertrigger2"
                        aria-controls="step-2"
                      >
                        <span className="bs-stepper-circle">2</span>
                      </button>
                    </div>
                  </div>
                  <div className="line" />
                  {/* Step 3 */}
                  <div className="step" data-target="#step-3">
                    <div className="d-grid text-center align-items-center">
                      <button
                        type="button"
                        className="btn btn-link step-trigger mb-0"
                        role="tab"
                        id="steppertrigger3"
                        aria-controls="step-3"
                      >
                        <span className="bs-stepper-circle">3</span>
                      </button>
                    </div>
                  </div>
                  <div className="line" />
                  {/* Step 4 */}
                  <div className="step" data-target="#step-4">
                    <div className="d-grid text-center align-items-center">
                      <button
                        type="button"
                        className="btn btn-link step-trigger mb-0"
                        role="tab"
                        id="steppertrigger4"
                        aria-controls="step-4"
                      >
                        <span className="bs-stepper-circle">4</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Step Buttons END */}
              </div>
              {/* Card body START */}
              <div className="card-body">
                <h6 className="text-danger text-end mb-0">
                  <i className="bi bi-clock-history me-2" />
                  Time Left: 00:01:30
                </h6>
                {/* Step content START */}
                <div className="bs-stepper-content">
                  <form>
                    {/* Step 1 content START */}
                    <div
                      id="step-1"
                      role="tabpanel"
                      className="content fade"
                      aria-labelledby="steppertrigger1"
                    >
                      {/* Title */}
                      <h4>How do you protect your business against cyber-crime?</h4>
                      <hr /> {/* Divider */}
                      <div className="vstack gap-2">
                        {/* Feed ques item */}
                        <div>
                          <input
                            type="radio"
                            className="btn-check"
                            name="ques"
                            id="option1"
                          />
                          <label
                            className="btn btn-outline-primary w-100"
                            htmlFor="option1"
                          >
                            We have cybersecurity insurance coverage
                          </label>
                        </div>
                        {/* Feed ques item */}
                        <div>
                          <input
                            type="radio"
                            className="btn-check"
                            name="ques"
                            id="option2"
                          />
                          <label
                            className="btn btn-outline-primary w-100"
                            htmlFor="option2"
                          >
                            Our dedicated staff will protect us
                          </label>
                        </div>
                        {/* Feed ques item */}
                        <div>
                          <input
                            type="radio"
                            className="btn-check"
                            name="ques"
                            id="option3"
                          />
                          <label
                            className="btn btn-outline-primary w-100"
                            htmlFor="option3"
                          >
                            We give regular training for best practices
                          </label>
                        </div>
                        {/* Feed ques item */}
                        <div>
                          <input
                            type="radio"
                            className="btn-check"
                            name="ques"
                            id="option4"
                          />
                          <label
                            className="btn btn-outline-primary w-100"
                            htmlFor="option4"
                          >
                            Third-party vendor protection
                          </label>
                        </div>
                      </div>
                      {/* Step 1 button */}
                      <div className="d-flex justify-content-center mt-3">
                        <button
                          type="button"
                          className="btn btn-primary next-btn mb-0"
                        >
                          Next question
                        </button>
                      </div>
                    </div>
                    {/* Step 1 content END */}
                    {/* Step 2 content START */}
                    <div
                      id="step-2"
                      role="tabpanel"
                      className="content fade"
                      aria-labelledby="steppertrigger2"
                    >
                      {/* Title */}
                      <h4>What is SEO?</h4>
                      <hr /> {/* Divider */}
                      <div className="vstack gap-2">
                        {/* Feed ques item */}
                        <div>
                          <input
                            type="radio"
                            className="btn-check"
                            name="ques"
                            id="option11"
                          />
                          <label
                            className="btn btn-outline-primary w-100"
                            htmlFor="option11"
                          >
                            We have cybersecurity insurance coverage
                          </label>
                        </div>
                        {/* Feed ques item */}
                        <div>
                          <input
                            type="radio"
                            className="btn-check"
                            name="ques"
                            id="option22"
                          />
                          <label
                            className="btn btn-outline-primary w-100"
                            htmlFor="option22"
                          >
                            Our dedicated staff will protect us
                          </label>
                        </div>
                        {/* Feed ques item */}
                        <div>
                          <input
                            type="radio"
                            className="btn-check"
                            name="ques"
                            id="option33"
                          />
                          <label
                            className="btn btn-outline-primary w-100"
                            htmlFor="option33"
                          >
                            We give regular training for best practices
                          </label>
                        </div>
                        {/* Feed ques item */}
                        <div>
                          <input
                            type="radio"
                            className="btn-check"
                            name="ques"
                            id="option44"
                          />
                          <label
                            className="btn btn-outline-primary w-100"
                            htmlFor="option44"
                          >
                            Third-party vendor protection
                          </label>
                        </div>
                      </div>
                      {/* Next button */}
                      <div className="d-flex justify-content-center mt-3">
                        <button
                          type="button"
                          className="btn btn-primary next-btn mb-0"
                        >
                          Next question
                        </button>
                      </div>
                    </div>
                    {/* Step 2 content END */}
                    {/* Step 3 content START */}
                    <div
                      id="step-3"
                      role="tabpanel"
                      className="content fade"
                      aria-labelledby="steppertrigger3"
                    >
                      {/* Title */}
                      <h4>Who should join this course?</h4>
                      <hr /> {/* Divider */}
                      <div className="vstack gap-2">
                        {/* Feed ques item */}
                        <div>
                          <input
                            type="radio"
                            className="btn-check"
                            name="ques"
                            id="option111"
                          />
                          <label
                            className="btn btn-outline-primary w-100"
                            htmlFor="option111"
                          >
                            We have cybersecurity insurance coverage
                          </label>
                        </div>
                        {/* Feed ques item */}
                        <div>
                          <input
                            type="radio"
                            className="btn-check"
                            name="ques"
                            id="option222"
                          />
                          <label
                            className="btn btn-outline-primary w-100"
                            htmlFor="option222"
                          >
                            Our dedicated staff will protect us
                          </label>
                        </div>
                        {/* Feed ques item */}
                        <div>
                          <input
                            type="radio"
                            className="btn-check"
                            name="ques"
                            id="option333"
                          />
                          <label
                            className="btn btn-outline-primary w-100"
                            htmlFor="option333"
                          >
                            We give regular training for best practices
                          </label>
                        </div>
                        {/* Feed ques item */}
                        <div>
                          <input
                            type="radio"
                            className="btn-check"
                            name="ques"
                            id="option444"
                          />
                          <label
                            className="btn btn-outline-primary w-100"
                            htmlFor="option444"
                          >
                            Third-party vendor protection
                          </label>
                        </div>
                      </div>
                      {/* Next button */}
                      <div className="d-flex justify-content-center mt-3">
                        <button
                          type="button"
                          className="btn btn-primary next-btn mb-0"
                        >
                          Next question
                        </button>
                      </div>
                    </div>
                    {/* Step 3 content END */}
                    {/* Step 4 content START */}
                    <div
                      id="step-4"
                      role="tabpanel"
                      className="content fade"
                      aria-labelledby="steppertrigger4"
                    >
                      {/* Title */}
                      <h4>What are the T&amp;C for this program?</h4>
                      <hr /> {/* Divider */}
                      <div className="vstack gap-2">
                        {/* Feed ques item */}
                        <div>
                          <input
                            type="radio"
                            className="btn-check"
                            name="ques"
                            id="option1111"
                          />
                          <label
                            className="btn btn-outline-primary w-100"
                            htmlFor="option1111"
                          >
                            We have cybersecurity insurance coverage
                          </label>
                        </div>
                        {/* Feed ques item */}
                        <div>
                          <input
                            type="radio"
                            className="btn-check"
                            name="ques"
                            id="option2222"
                          />
                          <label
                            className="btn btn-outline-primary w-100"
                            htmlFor="option2222"
                          >
                            Our dedicated staff will protect us
                          </label>
                        </div>
                        {/* Feed ques item */}
                        <div>
                          <input
                            type="radio"
                            className="btn-check"
                            name="ques"
                            id="option3333"
                          />
                          <label
                            className="btn btn-outline-primary w-100"
                            htmlFor="option3333"
                          >
                            We give regular training for best practices
                          </label>
                        </div>
                        {/* Feed ques item */}
                        <div>
                          <input
                            type="radio"
                            className="btn-check"
                            name="ques"
                            id="option4444"
                          />
                          <label
                            className="btn btn-outline-primary w-100"
                            htmlFor="option4444"
                          >
                            Third-party vendor protection
                          </label>
                        </div>
                      </div>
                      {/* Next button */}
                      <div className="d-flex justify-content-center mt-3">
                        <button
                          type="button"
                          className="btn btn-success next-btn mb-0"
                        >
                          View result
                        </button>
                      </div>
                    </div>
                    {/* Step 4 content END */}
                  </form>
                </div>
              </div>
              {/* Card body END */}
            </div>
          </div>
        </div>
      </div>
      {/* Course item END */}
    </div>
    <Script src='/assets/vendor/stepper/js/bs-stepper.min.js' />
    </>
   

  );
}

export default StudentQuiz ;
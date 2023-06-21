import React from 'react'


const StudentDashboard = () : React.ReactNode => {
  return (
		<div className="col-xl-9">
  <div className="card card-body bg-transparent border rounded-3">
    {/* Update plan START */}
    <div className="row g-4">
      {/* Update plan item */}
      <div className="col-6 col-lg-3">
        <span>Active Plan</span>
        <h4>Basic</h4>
      </div>
      {/* Update plan item */}
      <div className="col-6 col-lg-3">
        <span>Monthly limit</span>
        <h4>Unlimited</h4>
      </div>
      {/* Update plan item */}
      <div className="col-6 col-lg-3">
        <span>Cost</span>
        <h4>$99/Month</h4>
      </div>
      {/* Update plan item */}
      <div className="col-6 col-lg-3">
        <span>Renewal Date</span>
        <h4>Feb 17, 2023</h4>
      </div>
    </div>
    {/* Update plan END */}
    {/* Progress bar */}
    <div className="overflow-hidden my-4">
      <h6 className="mb-0">85%</h6>
      <div className="progress progress-sm bg-primary bg-opacity-10">
        <div
          className="progress-bar bg-primary aos"
          role="progressbar"
          data-aos="slide-right"
          data-aos-delay={200}
          data-aos-duration={1000}
          data-aos-easing="ease-in-out"
          style={{ width: "85%" }}
          aria-valuenow={85}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
    {/* Button */}
    <div className="d-sm-flex justify-content-sm-between align-items-center">
      <div>
        {/* Switch Content */}
        <div className="d-sm-flex">
          <div className="form-check form-switch form-check-md">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkPrivacy1"
              defaultChecked={false}
            />
            <label className="form-check-label" htmlFor="checkPrivacy1">
              Auto Renewal
            </label>
          </div>
        </div>
        <p className="mb-0 small">
          Your plan will automatically renew on: 02/17/2023. Payment Amount:
          USD250
        </p>
      </div>
      {/* Buttons */}
      <div className="mt-2 mt-sm-0">
        <button type="button" className="btn btn-sm btn-danger-soft me-2 mb-0">
          Cancel plan
        </button>
        <a href="#" className="btn btn-sm btn-success mb-0">
          Upgrade plan
        </a>
      </div>
    </div>
    {/* Divider */}
    <hr />
    {/* Plan Benefits */}
    <div className="row">
      <h6 className="mb-3">The plan includes</h6>
      <div className="col-md-6">
        <ul className="list-unstyled">
          <li className="mb-3 h6 fw-light">
            <i className="bi bi-patch-check-fill text-success me-2" />
            Up to 05 users monthly
          </li>
          <li className="mb-3 h6 fw-light">
            <i className="bi bi-patch-check-fill text-success me-2" />
            Free 5 host &amp; domain
          </li>
          <li className="mb-3 h6 fw-light">
            <i className="bi bi-patch-check-fill text-success me-2" />
            Custom infrastructure
          </li>
          <li className="mb-3 h6 fw-light">
            <i className="bi bi-patch-check-fill text-success me-2" />
            Access to all our room
          </li>
        </ul>
      </div>
      <div className="col-md-6">
        <ul className="list-unstyled">
          <li className="mb-3 h6 fw-light">
            <i className="bi bi-patch-check-fill text-success me-2" />
            24/7 dedicated Support
          </li>
          <li className="mb-3 h6 fw-light">
            <i className="bi bi-patch-check-fill text-success me-2" />
            Unlimited updates
          </li>
          <li className="h6 fw-light">
            <i className="bi bi-patch-check-fill text-success me-2" />
            Landing pages &amp; Web widgets
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

  )
}

export default StudentDashboard ;
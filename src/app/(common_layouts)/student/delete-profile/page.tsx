import React from 'react';


const StudentDelete = () : React.ReactNode => {
  return (
    <div className="col-xl-9">
      {/* Title and select START */}
      <div className="card border bg-transparent rounded-3 mb-0">
        {/* Card header */}
        <div className="card-header bg-transparent border-bottom">
          <h3 className="card-header-title mb-0">Deactivate Account</h3>
        </div>
        {/* Card body */}
        <div className="card-body">
          <h6>Before you go...</h6>
          <ul>
            <li>
              Take a backup of your data <a href="#">Here</a>{" "}
            </li>
            <li>If you delete your account, you will lose your all data.</li>
          </ul>
          <div className="form-check form-check-md my-4">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue=""
              id="deleteaccountCheck"
            />
            <label className="form-check-label" htmlFor="deleteaccountCheck">
              Yes, I'd like to delete my account
            </label>
          </div>
          <a href="#" className="btn btn-success-soft mb-2 mb-sm-0">
            Keep my account
          </a>
          <a href="#" className="btn btn-danger mb-0">
            Delete my account
          </a>
        </div>
      </div>
      {/* Title and select END */}
    </div>
  );
}

export default StudentDelete ;
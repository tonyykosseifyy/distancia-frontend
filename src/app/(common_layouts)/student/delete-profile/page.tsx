import React from 'react';


const StudentSettings = () : React.ReactNode => {
  return (
    <div className="col-xl-9">
      {/* Privacy START */}
      <div className="border rounded-3">
        <div className="row">
          <div className="col-12">
            {/* Card START */}
            <div className="card bg-transparent">
              {/* Card header START */}
              <div className="card-header bg-transparent border-bottom">
                <h3 className="card-header-title">Settings</h3>
              </div>
              {/* Card header END */}
              {/* Card body START */}
              <div className="card-body">
                {/* Profile START */}
                <h5 className="mb-4">Profile Settings</h5>
                <div className="form-check form-switch form-check-md">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="profilePublic"
                    checked={true}
                  />
                  <label className="form-check-label" htmlFor="profilePublic">
                    Your profile's public visibility
                  </label>
                </div>
                {/* Profile START */}
                <hr />
                {/* Divider */}
                {/* Notification START */}
                <h5 className="card-header-title">Notifications Settings</h5>
                <p className="mb-2 mt-3">
                  Choose type of notifications you want to receive
                </p>
                <div className="form-check form-switch form-check-md mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkPrivacy1"
                    checked={true}
                  />
                  <label className="form-check-label" htmlFor="checkPrivacy1">
                    Notify me via email when logging in
                  </label>
                </div>
                <div className="form-check form-switch form-check-md mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkPrivacy2"
                  />
                  <label className="form-check-label" htmlFor="checkPrivacy2">
                    Send SMS confirmation for all online payments
                  </label>
                </div>
                <div className="form-check form-switch form-check-md mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkPrivacy3"
                    checked={true}
                  />
                  <label className="form-check-label" htmlFor="checkPrivacy3">
                    Check which device(s) access your account
                  </label>
                </div>
                <div className="form-check form-switch form-check-md mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkPrivacy4"
                  />
                  <label className="form-check-label" htmlFor="checkPrivacy4">
                    Show your profile publicly
                  </label>
                </div>
                {/* Notification START */}
                {/* Buttons */}
                <div className="d-sm-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-sm btn-primary me-2 mb-0"
                  >
                    Save changes
                  </button>
                  <a href="#" className="btn btn-sm btn-outline-secondary mb-0">
                    Cancel
                  </a>
                </div>
              </div>
              {/* Card body END */}
            </div>
            {/* Card END */}
          </div>
          {/* Privacy END */}
        </div>
      </div>
      {/* Main content END */}
    </div>

  );
}

export default StudentSettings ;
import React from 'react';


const StudentEditProfile = () : React.ReactNode => {
  return (
  <div className="col-xl-9">
    {/* Edit profile START */}
    <div className="card bg-transparent border rounded-3">
      {/* Card header */}
      <div className="card-header bg-transparent border-bottom">
        <h3 className="card-header-title mb-0">Edit Profile</h3>
      </div>
      {/* Card body START */}
      <div className="card-body">
        {/* Form */}
        <form className="row g-4">
          {/* Profile picture */}
          <div className="col-12 justify-content-center align-items-center">
            <label className="form-label">Profile picture</label>
            <div className="d-flex align-items-center">
              <label
                className="position-relative me-4"
                htmlFor="uploadfile-1"
                title="Replace this pic"
              >
                {/* Avatar place holder */}
                <span className="avatar avatar-xl">
                  <img
                    id="uploadfile-1-preview"
                    className="avatar-img rounded-circle border border-white border-3 shadow"
                    src="/images/avatar/07.jpg"
                    alt=""
                  />
                </span>
                {/* Remove btn */}
                <button type="button" className="uploadremove">
                  <i className="bi bi-x text-white" />
                </button>
              </label>
              {/* Upload button */}
              <label className="btn btn-primary-soft mb-0" htmlFor="uploadfile-1">
                Change
              </label>
              <input
                id="uploadfile-1"
                className="form-control d-none"
                type="file"
              />
            </div>
          </div>
          {/* Full name */}
          <div className="col-12">
            <label className="form-label">Full name</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                defaultValue="Lori"
                placeholder="First name"
              />
              <input
                type="text"
                className="form-control"
                defaultValue="Stevens"
                placeholder="Last name"
              />
            </div>
          </div>
          {/* Username */}
          <div className="col-md-6">
            <label className="form-label">Username</label>
            <div className="input-group">
              <span className="input-group-text">Eduport.com</span>
              <input
                type="text"
                className="form-control"
                defaultValue="loristev"
              />
            </div>
          </div>
          {/* Email id */}
          <div className="col-md-6">
            <label className="form-label">Email id</label>
            <input
              className="form-control"
              type="email"
              defaultValue="example@gmail.com"
              placeholder="Email"
            />
          </div>
          {/* Phone number */}
          <div className="col-md-6">
            <label className="form-label">Phone number</label>
            <input
              type="text"
              className="form-control"
              defaultValue={1234567890}
              placeholder="Phone number"
            />
          </div>
          {/* Location */}
          <div className="col-md-6">
            <label className="form-label">Location</label>
            <input
              className="form-control"
              type="text"
              defaultValue="California"
            />
          </div>
          {/* About me */}
          <div className="col-12">
            <label className="form-label">About me</label>
            <textarea
              className="form-control"
              rows={3}
              defaultValue={
                "I’ve found a way to get paid for my favorite hobby, and do so while following my dream of traveling the world."
              }
            />
            <div className="form-text">Brief description for your profile.</div>
          </div>
          {/* Education */}
          <div className="col-12">
            <label className="form-label">Education</label>
            <input
              className="form-control mb-2"
              type="text"
              defaultValue="Bachelor in Computer Graphics"
            />
            <input
              className="form-control mb-2"
              type="text"
              defaultValue="Masters in Computer Graphics"
            />
            <button className="btn btn-sm btn-light mb-0">
              <i className="bi bi-plus me-1" />
              Add more
            </button>
          </div>
          {/* Save button */}
          <div className="d-sm-flex justify-content-end">
            <button type="button" className="btn btn-primary mb-0">
              Save changes
            </button>
          </div>
        </form>
      </div>
      {/* Card body END */}
    </div>
    {/* Edit profile END */}
    <div className="row g-4 mt-3">
      {/* Linked account START */}
      <div className="col-lg-6">
        <div className="card bg-transparent border rounded-3">
          {/* Card header */}
          <div className="card-header bg-transparent border-bottom">
            <h5 className="card-header-title mb-0">Linked account</h5>
          </div>
          {/* Card body START */}
          <div className="card-body pb-0">
            {/* Google */}
            <div className="position-relative mb-4 d-sm-flex bg-success bg-opacity-10 border border-success p-3 rounded">
              {/* Title and content */}
              <h2 className="fs-1 mb-0 me-3">
                <i className="fab fa-google text-google-icon" />
              </h2>
              <div>
                <div className="position-absolute top-0 start-100 translate-middle bg-white rounded-circle lh-1 h-20px">
                  <i className="bi bi-check-circle-fill text-success fs-5" />
                </div>
                <h6 className="mb-1">Google</h6>
                <p className="mb-1 small">
                  You are successfully connected to your Google account
                </p>
                {/* Button */}
                <button type="button" className="btn btn-sm btn-danger mb-0">
                  Invoke
                </button>
                <a href="#" className="btn btn-sm btn-link text-body mb-0">
                  Learn more
                </a>
              </div>
            </div>
            {/* Linkedin */}
            <div className="mb-4 d-sm-flex border p-3 rounded">
              {/* Title and content */}
              <h2 className="fs-1 mb-0 me-3">
                <i className="fab fa-linkedin-in text-linkedin" />
              </h2>
              <div>
                <h6 className="mb-1">Linkedin</h6>
                <p className="mb-1 small">
                  Connect with Linkedin account for a personalized experience
                </p>
                {/* Button */}
                <button type="button" className="btn btn-sm btn-primary mb-0">
                  Connect Linkedin
                </button>
                <a href="#" className="btn btn-sm btn-link text-body mb-0">
                  Learn more
                </a>
              </div>
            </div>
            {/* Facebook */}
            <div className="mb-4 d-sm-flex border p-3 rounded">
              {/* Title and content */}
              <h2 className="fs-1 mb-0 me-3">
                <i className="fab fa-facebook text-facebook" />
              </h2>
              <div>
                <h6 className="mb-1">Facebook</h6>
                <p className="mb-1 small">
                  Connect with Facebook account for a personalized experience
                </p>
                {/* Button */}
                <button type="button" className="btn btn-sm btn-primary mb-0">
                  Connect Facebook
                </button>
                <a href="#" className="btn btn-sm btn-link text-body mb-0">
                  Learn more
                </a>
              </div>
            </div>
          </div>
          {/* Card body END */}
        </div>
      </div>
      {/* Linked account end */}
      {/* Social media profile START */}
      <div className="col-lg-6">
        <div className="card bg-transparent border rounded-3">
          {/* Card header */}
          <div className="card-header bg-transparent border-bottom">
            <h5 className="card-header-title mb-0">Social media profile</h5>
          </div>
          {/* Card body START */}
          <div className="card-body">
            {/* Facebook username */}
            <div className="mb-3">
              <label className="form-label">
                <i className="fab fa-facebook text-facebook me-2" />
                Enter facebook username
              </label>
              <input
                className="form-control"
                type="text"
                defaultValue="loristev"
                placeholder="Enter username"
              />
            </div>
            {/* Twitter username */}
            <div className="mb-3">
              <label className="form-label">
                <i className="bi bi-twitter text-twitter me-2" />
                Enter twitter username
              </label>
              <input
                className="form-control"
                type="text"
                defaultValue="loristev"
                placeholder="Enter username"
              />
            </div>
            {/* Instagram username */}
            <div className="mb-3">
              <label className="form-label">
                <i className="fab fa-instagram text-instagram-gradient me-2" />
                Enter instagram username
              </label>
              <input
                className="form-control"
                type="text"
                defaultValue="loristev"
                placeholder="Enter username"
              />
            </div>
            {/* Youtube */}
            <div className="mb-3">
              <label className="form-label">
                <i className="fab fa-youtube text-youtube me-2" />
                Add your youtube profile URL
              </label>
              <input
                className="form-control"
                type="text"
                defaultValue="https://www.youtube.com/in/Eduport-05620abc"
                placeholder="Enter username"
              />
            </div>
            {/* Button */}
            <div className="d-flex justify-content-end mt-4">
              <button type="button" className="btn btn-primary mb-0">
                Save changes
              </button>
            </div>
          </div>
          {/* Card body END */}
        </div>
      </div>
      {/* Social media profile END */}
      {/* EMail change START */}
      <div className="col-lg-6">
        <div className="card bg-transparent border rounded-3">
          {/* Card header */}
          <div className="card-header bg-transparent border-bottom">
            <h5 className="card-header-title mb-0">Update email</h5>
          </div>
          {/* Card body */}
          <div className="card-body">
            <p>
              Your current email address is{" "}
              <span className="text-primary">example@gmail.com</span>
            </p>
            {/* Email */}
            <form>
              <label className="form-label">Enter your new email id</label>
              <input
                className="form-control"
                type="email"
                placeholder="Enter new email"
              />
              <div className="d-flex justify-content-end mt-4">
                <button type="button" className="btn btn-primary mb-0">
                  Update email
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* EMail change end */}
      {/* Password change START */}
      <div className="col-lg-6">
        <div className="card border bg-transparent rounded-3">
          {/* Card header */}
          <div className="card-header bg-transparent border-bottom">
            <h5 className="card-header-title mb-0">Update password</h5>
          </div>
          {/* Card body START */}
          <div className="card-body">
            {/* Current password */}
            <div className="mb-3">
              <label className="form-label">Current password</label>
              <input
                className="form-control"
                type="password"
                placeholder="Enter current password"
              />
            </div>
            {/* New password */}
            <div className="mb-3">
              <label className="form-label"> Enter new password</label>
              <div className="input-group">
                <input
                  className="form-control"
                  type="password"
                  placeholder="Enter new password"
                />
                <span className="input-group-text p-0 bg-transparent">
                  <i className="far fa-eye cursor-pointer p-2 w-40px" />
                </span>
              </div>
              <div className="rounded mt-1" id="psw-strength" />
            </div>
            {/* Confirm password */}
            <div>
              <label className="form-label">Confirm new password</label>
              <input
                className="form-control"
                type="password"
                placeholder="Enter new password"
              />
            </div>
            {/* Button */}
            <div className="d-flex justify-content-end mt-4">
              <button type="button" className="btn btn-primary mb-0">
                Change password
              </button>
            </div>
          </div>
          {/* Card body END */}
        </div>
      </div>
      {/* Password change end */}
    </div>
  </div>
  )
}

export default StudentEditProfile ;
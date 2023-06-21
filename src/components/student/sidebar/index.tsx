import React from 'react'

const StudentSidebar = () : React.ReactNode => {
  return (
    <div className="col-xl-3">
  {/* Responsive offcanvas body START */}
  <div
    className="offcanvas-xl offcanvas-end"
    tabIndex={-1}
    id="offcanvasSidebar"
  >
    {/* Offcanvas header */}
    <div className="offcanvas-header bg-light">
      <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
        My profile
      </h5>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvasSidebar"
        aria-label="Close"
      />
    </div>
    {/* Offcanvas body */}
    <div className="offcanvas-body p-3 p-xl-0">
      <div className="bg-dark border rounded-3 p-3 w-100">
        {/* Dashboard menu */}
        <div className="list-group list-group-dark list-group-borderless collapse-list">
          <a className="list-group-item" href="student-dashboard.html">
            <i className="bi bi-ui-checks-grid fa-fw me-2" />
            Dashboard
          </a>
          <a className="list-group-item" href="student-subscription.html">
            <i className="bi bi-card-checklist fa-fw me-2" />
            My Subscriptions
          </a>
          <a className="list-group-item" href="student-course-list.html">
            <i className="bi bi-basket fa-fw me-2" />
            My Courses
          </a>
          <a className="list-group-item" href="student-course-resume.html">
            <i className="far fa-fw fa-file-alt me-2" />
            Course Resume
          </a>
          <a className="list-group-item" href="student-quiz.html">
            <i className="bi bi-question-diamond fa-fw me-2" />
            Quiz
          </a>
          <a className="list-group-item" href="student-payment-info.html">
            <i className="bi bi-credit-card-2-front fa-fw me-2" />
            Payment Info
          </a>
          <a className="list-group-item active" href="student-bookmark.html">
            <i className="bi bi-cart-check fa-fw me-2" />
            Wishlist
          </a>
          <a className="list-group-item" href="instructor-edit-profile.html">
            <i className="bi bi-pencil-square fa-fw me-2" />
            Edit Profile
          </a>
          <a className="list-group-item" href="instructor-setting.html">
            <i className="bi bi-gear fa-fw me-2" />
            Settings
          </a>
          <a className="list-group-item" href="instructor-delete-account.html">
            <i className="bi bi-trash fa-fw me-2" />
            Delete Profile
          </a>
          <a
            className="list-group-item text-danger bg-danger-soft-hover"
            href="#"
          >
            <i className="fas fa-sign-out-alt fa-fw me-2" />
            Sign Out
          </a>
          {/* Collapse menu */}
          <a
            className="list-group-item"
            data-bs-toggle="collapse"
            href="#collapseauthentication"
            role="button"
            aria-expanded="false"
            aria-controls="collapseauthentication"
          >
            <i className="bi bi-lock fa-fw me-2" />
            Dropdown level
          </a>
          {/* Submenu */}
          <ul
            className="nav collapse flex-column"
            id="collapseauthentication"
            data-bs-parent="#navbar-sidebar"
          >
            <li className="nav-item">
              {" "}
              <a className="nav-link" href="#">
                Dropdown item
              </a>
            </li>
            <li className="nav-item">
              {" "}
              <a className="nav-link" href="#">
                Dropdown item
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* Responsive offcanvas body END */}
    </div>
  )
};

export default StudentSidebar ;
import React from 'react';

const PaymentCard = (): React.ReactNode => {
  return (
    <div
      className="modal fade"
      id="addNewcard"
      tabIndex={-1}
      aria-labelledby="addNewcardLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header bg-dark">
            <h5 className="modal-title text-white" id="addNewcardLabel">
              Add card
            </h5>
            <button
              type="button"
              className="btn btn-sm btn-light mb-0"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="bi bi-x-lg" />
            </button>
          </div>
          <div className="modal-body">
            <form className="row text-start g-3">
              {/* Card number */}
              <div className="col-12">
                <label className="form-label">
                  Card Number <span className="text-danger">*</span>
                </label>
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control"
                    maxLength={16}
                    placeholder="xxxx xxxx xxxx xxxx"
                  />
                  <img
                    src="assets/images/client/visa.svg"
                    className="w-40px position-absolute top-50 end-0 translate-middle-y me-2"
                    alt=""
                  />
                </div>
              </div>
              {/* Expiration Date */}
              <div className="col-md-6">
                <label className="form-label">
                  Expiration date <span className="text-danger">*</span>
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    maxLength={2}
                    placeholder="Month"
                  />
                  <input
                    type="text"
                    className="form-control"
                    maxLength={4}
                    placeholder="Year"
                  />
                </div>
              </div>
              {/*Cvv code  */}
              <div className="col-md-6">
                <label className="form-label">
                  CVV / CVC <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  maxLength={3}
                  placeholder="xxx"
                />
              </div>
              {/* Card name */}
              <div className="col-12">
                <label className="form-label">
                  Name on Card <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  aria-label="name of card holder"
                  placeholder="Name of card holder"
                />
              </div>
              {/* Check box */}
              <div className="col-md-12">
                <div className="form-check mb-0">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Secuarely save card and details
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger-soft my-0"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-success my-0">
              Save Card
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PaymentCard;
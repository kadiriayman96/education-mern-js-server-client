import React from "react";

const PriceCard = ({ type, price, color }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-5 mb-md-0 h-100">
        <div className="text-center mb-5">
          <span
            className="badge fw-normal text-uppercase"
            style={{ backgroundColor: color }}
          >
            {type}
          </span>
        </div>
        <div className="card-body px-4 py-6 py-md-5 py-lg-6">
          <div className="d-flex justify-content-start text-secondary">
            <span className="h4 mb-0 mt-2 me-2">$</span>
            <span className="display-3 fw-medium">{price}</span>
            <span className="display-4 fw-medium">.00</span>
          </div>
          <p className="text-muted mb-2 my-md-3">
            A private limited is the most popular
          </p>
          <hr className="border border-1" />
          <ul className="list-unstyled">
            <li className="mb-3">
              <i className="fas fa-check text-info me-2"></i>Access to 25
              courses
            </li>
            <li className="mb-3">
              <i className="fas fa-check text-info me-2"></i>Course Discussions
            </li>
            <li className="mb-3">
              <i className="fas fa-check text-info me-2"></i>Offline Viewing
            </li>
            <li className="mb-3">
              <i className="fas fa-check text-muted me-2"></i>Certificate after
              completion
            </li>
            <li className="mb-3">
              <i className="fas fa-check text-muted me-2"></i> Private sessions
            </li>
          </ul>
          <div className="d-grid">
            {" "}
            <a className="btn btn-lg btn-primary" href="#!">
              Purchase now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;

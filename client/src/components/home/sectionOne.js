import React from "react";

const SectionOne = () => {
  return (
    <section className="pt-6 bg-600" id="home" style={{ marginTop: "2.8rem" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 col-lg-6 order-0 order-md-1 text-end">
            <img
              className="pt-7 pt-md-0 w-100"
              src="assets/img/gallery/hero-header.png"
              width="470"
              alt="hero-header"
            />
          </div>
          <div className="col-md-7 col-lg-6 text-md-start text-center py-6">
            <h4 className="fw-bold font-sans-serif">Become Master</h4>
            <h1 className="fs-6 fs-xl-7 mb-5">
              Learn New Skills Online Find Best Courses
            </h1>
            <a className="btn btn-primary me-2" href="#!" role="button">
              Get A Quote
            </a>
            <a className="btn btn-outline-secondary" href="#!" role="button">
              Read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;

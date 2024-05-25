import React from "react";

const CourseCard = ({ image, title, description }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img
          className="card-img-top w-100"
          src={image}
          // src="assets/img/gallery/design.png"
          alt="courses"
        />
        <div className="card-body">
          <h5 className="font-sans-serif fw-bold fs-md-0 fs-lg-1">{title}</h5>
          <a
            className="text-muted fs--1 stretched-link text-decoration-none"
            href="#!"
          >
            {description}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

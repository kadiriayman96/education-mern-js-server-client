import React from "react";
import CourseCard from "../cards/courseCard";

const CoursesContainer = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <h1 className="text-center mb-5"> Top Featured Courses</h1>
          <CourseCard
            image="assets/img/gallery/design.png"
            title="Basic Python"
            description="Learn New Skills Online Find Best Courses"
          />
          <CourseCard
            image="assets/img/gallery/design.png"
            title="Basic Python"
            description="Learn New Skills Online Find Best Courses"
          />
          <CourseCard
            image="assets/img/gallery/design.png"
            title="Basic Python"
            description="Learn New Skills Online Find Best Courses"
          />
        </div>
      </div>
    </section>
  );
};

export default CoursesContainer;

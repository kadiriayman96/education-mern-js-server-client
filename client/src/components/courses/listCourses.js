import React from "react";
import CourseCard from "../cards/courseCard";

const OurCoursesList = () => {
  return (
    <section className="pb-0" style={{ marginTop: "-17rem" }}>
      <div className="container">
        <div className="row">
          <CourseCard
            image={"assets/img/gallery/design.png"}
            title={"Basic Dev Ayman Course"}
            description={
              "Learn New Skills Online Find Best Courses Huate Gamme"
            }
          />
          <CourseCard
            image={"assets/img/gallery/arguments.png"}
            title={"Basic Dev Yasser Course"}
            description={
              "Learn New Skills Online Find Best Courses Haute Gamme"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default OurCoursesList;

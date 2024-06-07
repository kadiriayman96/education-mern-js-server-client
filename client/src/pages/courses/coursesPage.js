import React from "react";
import CoursesFilter from "../../components/courses/filterCourses";
import OurCoursesList from "../../components/courses/listCourses";

const CoursesPage = () => {
  return (
    <div className="CoursesPage">
      <CoursesFilter />
      <OurCoursesList />
    </div>
  );
};

export default CoursesPage;

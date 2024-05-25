import React from "react";
import SectionOne from "../../components/home/sectionOne";
import UpcomingCourse from "../../components/home/upcomingCourse";
import CoursesContainer from "../../components/home/coursesContainer";
import SectionTwo from "../../components/home/sectionTwo";

const HomePage = () => {
  return (
    <div className="HomePage">
      <SectionOne />
      <UpcomingCourse />
      <CoursesContainer />
      <SectionTwo />
    </div>
  );
};

export default HomePage;

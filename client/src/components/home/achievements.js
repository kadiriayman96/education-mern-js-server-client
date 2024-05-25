import React from "react";

const Achievements = (props) => {
  const {
    total_courses,
    total_teachers,
    total_students,
    total_certifications,
  } = props;
  return (
    <section>
      <div
        class="bg-holder"
        style={{
          backgroundImage: "url(assets/img/gallery/funfacts-2-bg.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>

      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-lg-3 text-center mb-5">
            <img
              src="assets/img/gallery/published.png"
              height="100"
              alt="..."
            />
            <h1 class="my-2">{total_courses}</h1>
            <p class="text-info fw-bold">COURSES PUBLISHED</p>
          </div>
          <div class="col-sm-6 col-lg-3 text-center mb-5">
            <img
              src="assets/img/gallery/instructors.png"
              height="100"
              alt="..."
            />
            <h1 class="my-2">{total_teachers}</h1>
            <p class="text-info fw-bold">EXPERT INSTRUCTORS</p>
          </div>
          <div class="col-sm-6 col-lg-3 text-center mb-5">
            <img src="assets/img/gallery/learners.png" height="100" alt="..." />
            <h1 class="my-2">{total_students}</h1>
            <p class="text-info fw-bold">HAPPY LEARNERS</p>
          </div>
          <div class="col-sm-6 col-lg-3 text-center mb-5">
            <img src="assets/img/gallery/awards.png" height="100" alt="..." />
            <h1 class="my-2">{total_certifications}</h1>
            <p class="text-info fw-bold">AWARDS ACHIEVED</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

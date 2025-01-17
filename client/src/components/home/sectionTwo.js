import React from "react";
import Achievements from "./achievements";

const SectionTwo = () => {
  return (
    <div>
      <section class="pt-0">
        <div class="container">
          <div class="row h-100 align-items-center">
            <div class="col-md-12 col-lg-6 h-100">
              <div class="card card-span text-white h-100">
                <img
                  class="w-100"
                  src="assets/img/gallery/student-feedback.png"
                  alt="..."
                />
                <div class="card-body px-xl-5 px-md-3 pt-0">
                  <div
                    class="d-flex flex-column align-items-center bg-200"
                    style={{ marginTop: "-2.4rem" }}
                  >
                    <h5 class="mt-3 mb-0">Reda Aboulouafa</h5>
                    <p class="text-muted">Full Stack Web Developer Junior</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-lg-6 h-100">
              <h1 class="my-4">
                Successful Student
                <br />
                <span class="text-primary">Feedback</span>
              </h1>
              <p>
                Take courses from the world’s best instructors and universities.
                Courses include recorded auto-graded and peer-reviewed
                assignments, video lectures, and community discussion forums.
                When you complete a course, you’ll be eligible to receive a
                shareable electronic Course Certificate for a small fee.
              </p>
              <div class="mt-6">
                <h5 class="font-sans-serif fw-bold mb-3">
                  The courses that Reda has taken
                </h5>
                <div class="card card-span bg-600">
                  <div class="card-body">
                    <div class="row flex-center gx-0">
                      <div class="col-lg-4 col-xl-3 text-center text-xl-start">
                        <img
                          src="assets/img/gallery/art-design.png"
                          width="120"
                          alt="courses"
                        />
                      </div>
                      <div class="col-lg-8 col-xl-9">
                        <h5 class="font-sans-serif fw-bold">
                          Modern and Contemporary Art and Design
                        </h5>
                        <p class="text-muted fs--1">The Museum of Modern Art</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Achievements
        total_courses={30}
        total_teachers={12}
        total_students={99}
        total_certifications={60}
      />
    </div>
  );
};

export default SectionTwo;

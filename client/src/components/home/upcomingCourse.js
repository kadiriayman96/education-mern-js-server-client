import React from "react";

const UpcomingCourse = () => {
  return (
    <section className="py-0" style={{ marginTop: "-5.8rem" }}>
      <div className="container">
        <div className="row">
          <div className="card card-span bg-secondary">
            <div className="card-body">
              <div className="row flex-center gx-0">
                <div className="col-lg-4 col-xl-2 text-center text-xl-start">
                  <img
                    src="assets/img/gallery/funfacts.png"
                    width="170"
                    alt="..."
                  />
                </div>
                <div className="col-lg-8 col-xl-4">
                  <h1 className="text-light fs-lg-4 fs-xl-5">
                    Upcoming Our{" "}
                    <span className="text-primary">Basic in Python </span>
                    Course!
                  </h1>
                </div>
                <div className="col-lg-12 col-xl-6">
                  <h1 className="display-1 text-light text-center text-xl-end">
                    11 : 02 : 45 : 21
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingCourse;

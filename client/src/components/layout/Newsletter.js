import React from "react";

const Newsletter = () => {
  return (
    <section>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 col-lg-4 mb-5">
            <img src="assets/img/gallery/cta.png" width="280" alt="cta" />
          </div>
          <div class="col-md-6 col-lg-5">
            <h5 class="text-primary font-sans-serif fw-bold">Subscrible now</h5>
            <h1 class="mb-5">
              Get every single
              <br />
              update you will get
            </h1>
            <form class="row g-0 align-items-center">
              <div class="col">
                <div class="input-group-icon">
                  <input
                    class="form-control form-little-squirrel-control"
                    type="email"
                    placeholder="Enter email "
                    aria-label="email"
                  />
                  <i class="fas fa-envelope input-box-icon"></i>
                </div>
              </div>
              <div class="col-auto">
                <button class="btn btn-primary rounded-0" type="submit">
                  Subscribe now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

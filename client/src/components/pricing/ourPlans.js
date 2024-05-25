import React from "react";
import PriceCard from "../cards/pricesCard";

const OurPlans = () => {
  return (
    <section className="bg-600">
      <div className="container">
        <div className="row">
          <div className="col">
            <h6 className="font-sans-serif text-primary fw-bold">Our Plans </h6>
            <h1 className="mb-6">Get in Reasonable Price</h1>
          </div>
          <div className="col">
            <div className="d-flex justify-content-end">
              <label className="form-check-label me-2" for="customSwitch1">
                Monthly
              </label>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  id="customSwitch1"
                  type="checkbox"
                  checked="checked"
                />
                <label
                  className="form-check-label align-top"
                  for="customSwitch1"
                >
                  Yearly
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <PriceCard type={"BASIC"} price={19} color="#002147" />
          <PriceCard type={"PREMIUM"} price={29} color="#00B2B2" />
          <PriceCard type={"ENTREPRISE"} price={49} color="#EE4D47" />
        </div>
      </div>
    </section>
  );
};

export default OurPlans;

import React from "react";

const LoginSection = () => {
  return (
    <div className="container mt-5">
      <div
        className="row justify-content-center"
        style={{ marginTop: "100px" }}
      >
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div
              className="card-header text-center bg-primary text-white"
              style={{ paddingTop: "25px", paddingBottom: "10px" }}
            >
              <h4>Login</h4>
            </div>
            <div className="card-body p-4">
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;

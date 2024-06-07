import React from "react";
import LoginSection from "../../components/auth/loginSection";
import RegisterSection from "../../components/auth/registerSection";

const AuthentificationPage = () => {
  return (
    <div className="AuthentificationPage">
      <LoginSection />
      <RegisterSection />
    </div>
  );
};

export default AuthentificationPage;

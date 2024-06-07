import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/homePage";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Newsletter from "./components/layout/Newsletter";
import PricingPage from "./pages/pricing/pricingPage";
import CoursesPage from "./pages/courses/coursesPage";
import AuthentificationPage from "./pages/auth/authentificationPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/auth" element={<AuthentificationPage />} />
        </Routes>
      </Router>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
// eslint-disable-next-line

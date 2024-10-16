import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import VolunteerLogin from "./components/VolunteerLogin";
import VolunteerSignup from "./components/VolunteerSignup";
import OrganizerLogin from "./components/OrganizerLogin";
import OrganizerSignup from "./components/OrganizerSignup";
import LandingPage from "./components/LandingPage";
import ChooseRolePage from "./components/ChooseRole"; // Import the new ChooseRolePage component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  return (
    <Router>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {/* Routing for different pages */}
        <Routes>
          {/* Volunteer and Organizer login/signup routes */}
          <Route path="/login/volunteer" element={<VolunteerLogin />} />
          <Route path="/signup/volunteer" element={<VolunteerSignup />} />
          <Route path="/login/organizer" element={<OrganizerLogin />} />
          <Route path="/signup/organizer" element={<OrganizerSignup />} />

          {/* Landing page with Spline and Get Started button */}
          <Route path="/" element={<LandingPage />} />

          {/* New page for choosing between Volunteer and Organizer */}
          <Route path="/choose" element={<ChooseRolePage />} />

          {/* Redirect any unmatched routes to the homepage */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

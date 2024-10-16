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

const App = () => {
  return (
    <Router>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {/* Routing for Login/Signup */}
        <Routes>
          <Route path="/login/volunteer" element={<VolunteerLogin />} />
          <Route path="/signup/volunteer" element={<VolunteerSignup />} />
          <Route path="/login/organizer" element={<OrganizerLogin />} />
          <Route path="/signup/organizer" element={<OrganizerSignup />} />

          {/* Main Application Content */}
          <Route path="/" element={<LandingPage />} />

          {/* Redirect any unmatched routes to the homepage */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

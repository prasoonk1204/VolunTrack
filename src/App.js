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
import ChooseRolePage from "./components/ChooseRole";
import VDashboard from "./components/volunteer/VDashboard";
import VEventList from "./components/volunteer/VEventList";
import VTasks from "./components/volunteer/VTasks";
import VProfile from "./components/volunteer/VProfile";
import VCalendar from "./components/volunteer/VCalendar"; // Import volunteer components
import ODashboard from "./components/organizer/ODashboard";
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

          {/* Volunteer-specific routes */}
          <Route path="/volunteer/dashboard" element={<VDashboard />} />
          <Route path="/volunteer/events" element={<VEventList />} />
          <Route path="/volunteer/tasks" element={<VTasks />} />
          <Route path="/volunteer/profile" element={<VProfile />} />
          <Route path="/volunteer/calendar" element={<VCalendar />} />

          {/* Organizer-specific routes */}
          <Route path="/organizer/dashboard" element={<ODashboard />} />

          {/* Redirect any unmatched routes to the homepage */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

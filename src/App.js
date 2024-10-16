import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import VolunteerView from "./components/VolunteerView";
import OrganizerView from "./components/OrganizerView";
import yourImage from "./assets/main.jpeg";
import VolunteerLogin from "./components/VolunteerLogin";
import VolunteerSignup from "./components/VolunteerSignup";
import OrganizerLogin from "./components/OrganizerLogin";
import OrganizerSignup from "./components/OrganizerSignup";

const App = () => {
  const [view, setView] = useState("volunteer"); // Default view

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
          <Route
            path="/"
            element={
              <div className="flex flex-col items-center w-full p-4">
                {/* Landing Image */}
                <img
                  src={yourImage}
                  alt="Landing"
                  className="w-full h-96 object-cover mb-4"
                />

                {/* Button Options */}
                <div className="mt-4">      
                  <button
                    className={`mr-4 px-4 py-2 rounded ${
                      view === "volunteer"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300 text-black"
                    }`}
                    onClick={() => setView("volunteer")}
                  >
                    Volunteer
                  </button>
                  <button
                    className={`px-4 py-2 rounded ${
                      view === "organizer"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300 text-black"
                    }`}
                    onClick={() => setView("organizer")}
                  >
                    Organizer
                  </button>
                </div>

                {/* Content Based on Selected View */}
                <div className="mt-4 w-full p-4 bg-white rounded shadow-lg">
                  {view === "volunteer" ? <VolunteerView /> : <OrganizerView />}
                </div>

              </div>
            }
          />


          {/* Redirect any unmatched routes to the homepage */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VolunteerView from "./VolunteerView";
import OrganizerView from "./OrganizerView";
// import yourImage from "../assets/main.jpeg";

const LandingPage = () => {
  const [view, setView] = useState("volunteer"); // Default view
  const navigate = useNavigate();

  const handleVolunteerSignup = () => {
    navigate("/signup/volunteer"); // Redirect to the volunteer signup page
  };

  const handleOrganizerSignup = () => {
    navigate("/signup/organizer"); // Redirect to the organizer signup page
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Landing Image */}
      <div className="w-full h-svh relative flex flex-col justify-center items-center">
        <h1 className="text-6xl ">VolunTrack</h1>
        <p className="text-2xl">Connecting Volunteers and Organizers for a Better Tomorrow.</p>
        {/* <img src={yourImage} alt="Landing" className="h-1/2 mb-4" /> */}
      </div>

      {/* Button Options */}
      <div className="w-full h-96 flex gap-6">
        <button
          className={`w-1/2 flex flex-col justify-center items-center gap-10 
            ${
              view === "volunteer"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black"
            }`}
          onClick={() => setView("volunteer")}
        >
          <h1 className="text-4xl h-32">
            Engage, Empower, Impact – Join the Movement and Make a Difference!
          </h1>
          <button
            className={`mr-4 px-4 py-2 rounded ${
              view === "volunteer"
                ? "bg-gray-50 text-black"
                : "bg-black text-white"
            }`}
            onClick={handleVolunteerSignup}
          >
            Join as Volunteer
          </button>
        </button>
        <button
          className={`w-1/2 flex flex-col justify-center items-center gap-10 
            ${
              view === "organizer"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black"
            }`}
          onClick={() => setView("organizer")}
        >
          <h1 className="text-4xl h-32">
            Connect, Coordinate, Contribute - Streamline Volunteer Management
            for Your Organization
          </h1>
          <button
            className={`px-4 py-2 rounded ${
              view === "organizer"
                ? "bg-gray-50 text-black"
                : "bg-black text-white"
            }`}
            onClick={handleOrganizerSignup}
          >
            Host as Organizer
          </button>
        </button>
      </div>

      {/* Content Based on Selected View */}
      <div className="w-full px-4 bg-white rounded shadow-lg">
        {view === "volunteer" ? <VolunteerView /> : <OrganizerView />}
      </div>
    </div>
  );
};

export default LandingPage;

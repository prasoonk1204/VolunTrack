import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/choose"); // Redirect to the page with Volunteer and Organizer options
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Landing Section with Spline Design */}
      <div className="w-full h-screen relative flex flex-col justify-center items-center">
        {/* Spline 3D Design */}
        <iframe
          src="https://my.spline.design/particleshand-650d426739ad3f62de6e0ef270ba5729/"
          className="h-screen w-full m-0"
          title="Spline Design"
        ></iframe>

        {/* Overlay Text */}
        <div className="absolute top-1/2 transform -translate-y-1/2 text-center">
          <h1 className="text-6xl text-black mb-4">VolunTrack</h1>
          <p className="text-3xl text-black mb-8">
            Connecting Volunteers and Organizers for a Better Tomorrow.
          </p>

          {/* Get Started Button */}
          <button
            onClick={handleGetStarted}
            className="px-8 py-3 border-4 border-blue-500 hover:text-white text-xl rounded-xl hover:bg-blue-500 transition duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

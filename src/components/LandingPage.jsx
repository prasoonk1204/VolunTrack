import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/choose");
  };

  return (
    <div className="flex flex-col items-center w-full relative bg-black font-sans">
      <div className="w-full h-screen relative flex ">
        <div className="w-2/5  text-white flex flex-col justify-center pl-12 gap-4 z-10">
          <h1 className="text-6xl mb-4 font-bold">VolunTrack</h1>
          <p className="text-2xl  mb-6">
            Connecting Volunteers and Organizers for a Better Tomorrow.
          </p>

          {/* Get Started Button */}
          <button
            onClick={handleGetStarted}
            className="px-8 py-3 w-2/4 border-4 border-blue-500 hover:text-white text-lg rounded-xl hover:bg-blue-500 transition duration-300"
          >
            Get Started
          </button>
        </div>

        {/* Spline 3D Design */}
        <iframe
          src="https://my.spline.design/threadsfeatureheaderanimation-c9d007801a477348d2efcf7e55c24bec/"
          frameborder="0"
          className="w-4/5 fixed right-0 h-full z-0"
        ></iframe>
      </div>
      <div className="bg-black h-16 fixed bottom-0 right-0 z-20 w-40"></div>
    </div>
  );
};

export default LandingPage;

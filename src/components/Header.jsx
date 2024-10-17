import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ currentRole }) => {
  const navigate = useNavigate();

  return (
    <header className="bg-gray-800 text-white p-4 w-full flex justify-between items-center">
      {/* Logo and Title */}
      <div className="flex items-center ">
        <img src="/logo.png" alt="Logo" className="h-10 w-10 mr-3" />
        {/* Logo */}
        <h1 className="text-2xl">VolunTrack</h1> {/* Heading */}
      </div>
    </header>
  );
};

export default Header;

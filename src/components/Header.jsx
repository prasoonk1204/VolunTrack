import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ currentRole }) => {
  const navigate = useNavigate();


  return (
    <header className="bg-gray-800 text-white p-4 w-full flex justify-between">
      <h1 className="text-2xl px-6">VolunTrack</h1>
      
    </header>
  );
};

export default Header;

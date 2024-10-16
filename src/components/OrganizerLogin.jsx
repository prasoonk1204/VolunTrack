// src/components/OrganizerLogin.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OrganizerLogin = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Organizer Login Data: ", loginData);
  };
  
  const navigate = useNavigate();

  const handleOrganizerSignup = () => {
    navigate("/signup/organizer"); // Redirect to the organizer signup page
  };

  return (
    <div className="w-96 mx-auto p-4 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Organizer Login</h2>
      <form onSubmit={handleLoginSubmit} className="mb-4">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleLoginChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleLoginChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
      </form>
      <p className="mb-4">
        Don't have an account?{" "}
        <span
          className="text-blue-500 hover:underline"
          onClick={handleOrganizerSignup}
        >
          Signup
        </span>
      </p>
    </div>
  );
};

export default OrganizerLogin;

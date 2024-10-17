import React, { useState } from "react";
import VNavbar from "./VNavbar";

const VProfile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+91 9876543210",
    location: "New Delhi, India",
    bio: "Passionate about community service and making the world a better place.",
    profilePicture: "", // Add a default image link or placeholder
    totalHours: 120,
    eventsParticipated: 15,
    password: "********",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formValues, setFormValues] = useState(profile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile(formValues);
    setIsEditing(false);
  };

  return (
    <div className="flex w-screen">
      <VNavbar />
      <div className="ml-[20%] p-8 w-full">
        <h1 className="text-3xl font-bold mb-6">Profile</h1>

        <div className="bg-white shadow-md rounded-lg p-6 w-full">
          {isEditing ? (
            <form onSubmit={handleSubmit}>
              {/* Profile Picture Upload */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">
                  Profile Picture
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="mt-2"
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      profilePicture: e.target.files[0],
                    })
                  }
                />
              </div>

              {/* Name */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border rounded-lg"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border rounded-lg"
                  required
                />
              </div>

              {/* Phone */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formValues.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border rounded-lg"
                  required
                />
              </div>

              {/* Location */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formValues.location}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border rounded-lg"
                  required
                />
              </div>

              {/* Bio */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">
                  Bio
                </label>
                <textarea
                  name="bio"
                  value={formValues.bio}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border rounded-lg"
                />
              </div>

              {/* Password */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border rounded-lg"
                />
              </div>

              {/* Save/Cancel Buttons */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  className="ml-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div>
              {/* Profile Details */}
              <div className="flex flex-col items-center mb-6">
                <img
                  src={profile.profilePicture || "/default-profile.png"} // Add a default image path
                  alt="Profile"
                  className="w-32 h-32 rounded-full mb-4"
                />
                <h2 className="text-2xl font-semibold">{profile.name}</h2>
                <p className="text-gray-700">{profile.bio}</p>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">
                  Email
                </label>
                <p>{profile.email}</p>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">
                  Phone
                </label>
                <p>{profile.phone}</p>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">
                  Location
                </label>
                <p>{profile.location}</p>
              </div>

              {/* Volunteer Statistics */}
              {/* <div className="mt-6">
                <h3 className="text-lg font-semibold">Volunteer Statistics</h3>
                <p>Total Volunteering Hours: {profile.totalHours}</p>
                <p>Events Participated: {profile.eventsParticipated}</p>
              </div> */}

              <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VProfile;

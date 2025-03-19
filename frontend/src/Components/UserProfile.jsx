import React, { useState } from "react";
import ProfileImg from "../assets/profile.jpg";

const UserProfile = () => {
  const [user] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+254700123456",
    membership: "Gold Member",
    joinDate: "March 2025",
  });

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-10 bg-white my-5 rounded shadow-lg">
      <h2 className="text-2xl font-bold">My Profile</h2>
      {/* Profile Section */}
      <div className="p-6 rounded-lg shadow-md bg-amber-50 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
        <img
          src={ProfileImg}
          alt="Profile"
          className="rounded-full w-28 sm:w-36 lg:w-40 shadow-md"
        />
        <div>
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-600">{user.phone}</p>
        </div>
      </div>

      {/* Membership Details */}
      <div className="p-6 mt-4 rounded-lg shadow-md bg-amber-50">
        <h3 className="text-lg font-semibold mb-2">Membership Details</h3>
        <p><strong>Type:</strong> {user.membership}</p>
        <p><strong>Joined:</strong> {user.joinDate}</p>
      </div>

      {/* Security Settings */}
      <div className="p-6 mt-4 rounded-lg shadow-md bg-amber-50">
        <h3 className="text-lg font-semibold mb-2">Security Settings</h3>
        <input 
          type="password" 
          placeholder="Change Password" 
          className="w-full sm:w-3/4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          className="w-full sm:w-1/2 bg-blue-600 text-white p-2 my-4 rounded-md font-semibold cursor-pointer hover:bg-blue-700 transition duration-300">
          Update Password
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
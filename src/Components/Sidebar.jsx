import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaAddressCard, FaHome, FaUser } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { MdMenu, MdClose, MdOutlineSegment } from "react-icons/md"; // Added icons for mobile menu
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Toggle state

  return (
    <div className="relative">
      {/* MOBILE TOGGLE BUTTON */}
      <button
        className="md:hidden absolute top-4 left-4 text-white text-3xl"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <MdClose /> : <MdOutlineSegment />}
      </button>

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white 
        w-64 p-6 transform transition-transform duration-300 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:w-1/4 lg:w-1/5`}
      >
        <h1 className="text-3xl font-extrabold text-center text-amber-400 pb-10">Jamii Care</h1>
        <h1 className="text-xl font-extrabold text-center">User Dashboard</h1>

        {/* NAV LINKS */}
        <nav className="mt-10 space-y-4">
          <Link
            to="/userdashboard/home"
            className={`block py-2 px-4 rounded-md ${
              activeLink === 0 ? "bg-gray-600" : "hover:bg-gray-700"
            }`}
            onClick={() => setActiveLink(0)}
          >
            <div className="flex items-center gap-2">
              <FaHome /> Home
            </div>
          </Link>

          <Link
            to="/userdashboard/transactions"
            className={`block py-2 px-4 rounded-md ${
              activeLink === 1 ? "bg-gray-600" : "hover:bg-gray-700"
            }`}
            onClick={() => setActiveLink(1)}
          >
            <div className="flex items-center gap-2">
              <FaMoneyBillTransfer /> Transactions
            </div>
          </Link>

          <Link
            to="/userdashboard/profile"
            className={`block py-2 px-4 rounded-md ${
              activeLink === 2 ? "bg-gray-600" : "hover:bg-gray-700"
            }`}
            onClick={() => setActiveLink(2)}
          >
            <div className="flex items-center gap-2">
              <CgProfile /> My Profile
            </div>
          </Link>

          {/* LOGOUT */}
          {/* <Link
            to="/logout"
            className="block py-2 px-4 mt-10 text-red-400 hover:text-red-500"
          >
            <div className="flex items-center gap-2">
              <FiLogOut /> Logout
            </div>
          </Link> */}
        </nav>
      </div>

      {/* OVERLAY FOR MOBILE MENU */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
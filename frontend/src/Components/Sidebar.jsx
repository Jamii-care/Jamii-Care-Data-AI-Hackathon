import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { MdClose, MdOutlineSegment } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation(); // Get current route

  // Function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="relative">
      {/* MOBILE TOGGLE BUTTON */}
      <button
        className="md:hidden fixed top-16 left-4 z-50 text-3xl text-amber-500 rounded-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <MdClose /> : <MdOutlineSegment />}
      </button>

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-6 shadow-lg
        transform transition-all duration-300 ease-in-out z-50
        ${isSidebarOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"}
        md:relative md:translate-x-0 md:w-64 lg:w-[100%] md:h-[90vh]`}
      >
        <h1 className="text-xl font-extrabold text-center mb-10">User Dashboard</h1>

        {/* NAV LINKS */}
        <nav className="space-y-4">
          <Link
            to="/userdashboard/home"
            className={`flex items-center gap-2 py-2 px-4 rounded-md transition-all duration-200 ${
              isActive("/userdashboard/home") ? "bg-blue-600 text-white" : "hover:bg-gray-800"
            }`}
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaHome /> Home
          </Link>

          <Link
            to="/userdashboard/transactions"
            className={`flex items-center gap-2 py-2 px-4 rounded-md transition-all duration-200 ${
              isActive("/userdashboard/transactions") ? "bg-blue-600 text-white" : "hover:bg-gray-800"
            }`}
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaMoneyBillTransfer /> Transactions
          </Link>

          <Link
            to="/userdashboard/profile"
            className={`flex items-center gap-2 py-2 px-4 rounded-md transition-all duration-200 ${
              isActive("/userdashboard/profile") ? "bg-blue-600 text-white" : "hover:bg-gray-800"
            }`}
            onClick={() => setIsSidebarOpen(false)}
          >
            <CgProfile /> My Profile
          </Link>
        </nav>
      </div>

      {/* OVERLAY FOR MOBILE */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-primarywhite bg-opacity-96 md:hidden z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
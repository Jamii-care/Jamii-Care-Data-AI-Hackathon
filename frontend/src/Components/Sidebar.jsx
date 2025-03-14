import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { MdMenu, MdClose, MdOutlineSegment } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Toggle state

  return (
    <div className="relative">
      {/* MOBILE TOGGLE BUTTON */}
      <button
        className="md:hidden fixed top-16 left-4 z-60 text-3xl text-white rounded-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <MdClose className="left-10"/> : <MdOutlineSegment />}
      </button>

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-6 
        transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:relative md:translate-x-0 md:w-64 lg:w-[100%] md:h-[90vh] z-50 `}
      >
        <h1 className="text-xl font-extrabold text-center mb-10">User Dashboard</h1>

        {/* NAV LINKS */}
        <nav className="space-y-4">
          <Link
            to="/admindashboard/home"
            className={`flex items-center gap-2 py-2 px-4 rounded-md ${
              activeLink === 0 ? "bg-gray-700" : "hover:bg-gray-800"
            }`}
            onClick={() => setActiveLink(0)}
          >
            <FaHome /> Home
          </Link>

          <Link
            to="/admindashboard/transactions"
            className={`flex items-center gap-2 py-2 px-4 rounded-md ${
              activeLink === 1 ? "bg-gray-700" : "hover:bg-gray-800"
            }`}
            onClick={() => setActiveLink(1)}
          >
            <FaMoneyBillTransfer /> Transactions
          </Link>

          <Link
            to="/admindashboard/profile"
            className={`flex items-center gap-2 py-2 px-4 rounded-md ${
              activeLink === 2 ? "bg-gray-700" : "hover:bg-gray-800"
            }`}
            onClick={() => setActiveLink(2)}
          >
            <CgProfile /> My Profile
          </Link>
        </nav>
      </div>

      {/* OVERLAY FOR MOBILE */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
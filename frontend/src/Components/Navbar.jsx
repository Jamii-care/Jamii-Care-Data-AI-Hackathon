import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-secondarygray px-6 md:px-20 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="font-extrabold text-3xl text-amber-400">
          Jamii Care
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-16 font-bold">
          <li className="text-white hover:text-gray-400 duration-300 ease-in-out">
            <a href="/" className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-gray-400 after:left-1/2 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
              Home
            </a>
          </li>
          <li className="text-white hover:text-gray-400 duration-300 ease-in-out">
            <a href="/login" className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-gray-400 after:left-1/2 after:bottom-[-6px] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
              Log In
            </a>
          </li>
          <li className="text-white hover:text-gray-400 duration-300 ease-in-out">
            <a href="/signup" className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-gray-400 after:left-1/2 after:bottom-[-6px] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
              Sign Up
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`flex flex-col md:hidden items-center gap-4 w-full overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 py-4" : "max-h-0"} `}>
        <a href="/" className="text-white py-2 hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</a>
        <a href="/login" className="text-white py-2 hover:text-gray-400" onClick={() => setIsOpen(false)}>Log In</a>
        <a href="/signup" className="text-white py-2 hover:text-gray-400" onClick={() => setIsOpen(false)}>Sign Up</a>
      </div>
      )}
    </nav>
  );
};

export default Navbar;
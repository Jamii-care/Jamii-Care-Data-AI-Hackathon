import React, { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // For navigation
import axios from "axios";
import { toast } from "react-toastify";
import BGRight from "../Assets/git-stephen-gitau.jpg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });

      if (response.data.success) {
        const { token, role } = response.data;

        // Store token (if applicable)
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);

        // Redirect based on role and toast if successful
        if (role === "admin") {
          toast.success("ADMIN LOGGED IN SUCCESSFULLY", {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          // Delay navigation slightly to ensure the toast is visible
          setTimeout(() => {
            navigate("/admindashboard/home");
          }, 3000);
        } else {
          toast.success("USER LOGGED IN SUCCESSFULLY", {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          // Delay navigation slightly to ensure the toast is visible
          setTimeout(() => {
            navigate("/userdashboard/home");
          }, 3000);
        }
      } else {
        setError("Invalid email or password.");
      }
    } catch (error) {
      setError("Error logging in. Please try again.");
    }
  };

  return (
    <div className="bg-primarygray min-h-screen flex items-center justify-center px-4">
      <div className="bg-primarywhite w-full max-w-4xl flex flex-col md:flex-row rounded shadow-lg overflow-hidden">
        {/* Left Section - Login Form */}
        <div className="border-b md:border-r border-gray-400 w-full md:w-3/5 p-6 md:p-10">
          <div className="text-center text-lg pb-4">
            <h1 className="font-bold text-xl">Hello !</h1>
            <p className="font-thin">Sign in to your account.</p>
          </div>
          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter Your Email"
                className="p-2 w-full border border-gray-500 rounded-md shadow-md focus:shadow-lg focus:border-gray-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col gap-1 relative">
              <label htmlFor="password" className="font-semibold">
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                className="p-2 w-full border border-gray-500 rounded-md shadow-md focus:shadow-lg focus:border-gray-600 pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="absolute right-3 top-10 cursor-pointer text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>

            <div className="flex justify-between text-sm md:text-base font-medium">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-blue-600" />
                <span>Remember Me</span>
              </label>
              <a href="#" className="text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>

            {error && <p className="text-red-500 text-center">{error}</p>}

            <button
              type="submit"
              className="bg-blue-700 hover:bg-green-600 hover:text-white shadow-xl font-bold py-2 rounded-full w-full md:w-1/2 mx-auto cursor-pointer transition-all duration-500 ease-in-out"
            >
              Login
            </button>
            <p className="md:pt-6 md:hidden text-center">
              <a href="/signup" className="text-black">
                Don't have an account?
                <span className="text-yellow-800 font-semibold"> Sign Up.</span>
              </a>
            </p>
          </form>
        </div>

        {/* Right Section - Login Info */}
        <div className="bg-secondarygray w-full md:w-2/5 md:flex md:flex-col items-center justify-center text-center text-white p-6 md:p-10 hidden relative">
          <img src={BGRight} alt="Login Background" className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <h2 className="text-lg md:text-xl font-bold relative">Welcome Back!</h2>
          <p className="mt-4 px-4 text-sm md:text-base font-semibold relative">
            Manage your welfare activities with ease. Stay ahead with real-time insights and secure transactions.
          </p>
          <p className="text-white/90 italic text-xs md:text-sm relative">
            "Take control of your welfare finances effortlessly!"
          </p>
          <ul className="mt-4 text-xs md:text-sm space-y-2 relative">
            <li className="flex items-center gap-2">
              <GiCheckMark /> Transparent Transactions
            </li>
            <li className="flex items-center gap-2">
              <GiCheckMark /> AI-Powered Fraud Detection
            </li>
            <li className="flex items-center gap-2">
              <GiCheckMark /> Smart Budgeting & Forecasting
            </li>
          </ul>
          <p className="pt-6 relative">
            <a href="/signup" className="text-white hover:font-semibold">
              Don't have an account? <span className="text-yellow-400">Sign Up.</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

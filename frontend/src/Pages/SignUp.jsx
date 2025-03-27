import React, { useState, useEffect, useRef } from "react";
import { GiCheckMark } from "react-icons/gi";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import RightBg from "../assets/shvetsa.jpg";

const SECRET_KEY = "JAMII-ADMIN-SECRET"; // Temporary secret key for admin registration

const SignUp = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("user");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [adminSecret, setAdminSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Refs for focusing inputs
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  useEffect(() => {
    console.log("API URL:", import.meta.env.VITE_API_URL);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Validation checks with auto-focus
    if (!email) {
      setError("Email is required!");
      emailRef.current?.focus();
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters!");
      passwordRef.current?.focus();
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      confirmPasswordRef.current?.focus();
      return;
    }

    if (!termsAccepted) {
      setError("You must accept the terms and conditions to proceed.");
      return;
    }

    if (role === "admin" && adminSecret !== SECRET_KEY) {
      setError("Invalid admin secret key!");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/signup`,
        {
          email,
          password,
          full_name: fullName,
          role,
        }
      );

      // Store user data in localStorage
      const userData = response.data;
      localStorage.setItem("userEmail", userData.email);
      localStorage.setItem("userRole", userData.role);

      // Success message and redirect
      // alert("Registration successful! Please login to continue.");
      toast.success("USER REGISTERED SUCCESSFULLY", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // Delay navigation slightly to ensure the toast is visible
      setTimeout(() => {
        navigate("/login");
      }, 3000); // 3-second delay before redirecting to login
    } catch (err) {
      if (err.response?.data?.detail) {
        setError(err.response.data.detail);
      } else if (err.message === "Network Error") {
        setError(
          "Unable to connect to the server. Please check your internet connection."
        );
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
      console.error("Signup error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-primarygray min-h-screen flex items-center justify-center p-4">
      <div className="bg-primarywhite w-full max-w-4xl flex flex-col md:flex-row rounded shadow-lg overflow-hidden">
        <div className="border-b md:border-r border-gray-400 w-full md:w-3/5 p-6 md:p-10">
          <h1 className="text-xl font-bold text-center pb-4">
            Hello! Sign up below.
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Role Selection */}
            <div className="flex gap-4">
              <label>
                <input
                  type="radio"
                  value="user"
                  checked={role === "user"}
                  onChange={() => setRole("user")}
                />
                User
              </label>
              <label>
                <input
                  type="radio"
                  value="admin"
                  checked={role === "admin"}
                  onChange={() => setRole("admin")}
                />
                Admin
              </label>
            </div>

            {role === "admin" && (
              <div className="flex flex-col gap-1">
                <label className="font-semibold">Admin Secret Key</label>
                <input
                  type="text"
                  placeholder="Enter the Admin Secret Key"
                  className="p-2 border border-gray-500 rounded"
                  value={adminSecret}
                  onChange={(e) => setAdminSecret(e.target.value)}
                  required
                />
              </div>
            )}

            <input
              type="text"
              placeholder="Full Name"
              className="p-2 border border-gray-500 rounded"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email"
              className="p-2 border border-gray-500 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref={emailRef}
              required
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="p-2 border border-gray-500 rounded w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ref={passwordRef}
                required
              />
              <button
                type="button"
                className="absolute right-4 top-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoEyeOff /> : <IoEye />}
              </button>
            </div>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="p-2 border border-gray-500 rounded w-full"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                ref={confirmPasswordRef}
                required
              />
              <button
                type="button"
                className="absolute right-4 top-2"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <IoEyeOff /> : <IoEye />}
              </button>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              <label htmlFor="terms" className="text-sm">
                I accept the{" "}
                <a href="#" className="text-blue-600">
                  Terms & Conditions
                </a>
              </label>
            </div>

            {error && <p className="text-red-600 text-center">{error}</p>}

            <button
              type="submit"
              className="bg-green-600 text-white mt-10 py-2 rounded-full w-full md:w-2/3 mx-auto cursor-pointer hover:bg-blue-700 duration-300 ease-in-out"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
            <p className="md:pt-6 md:hidden text-center">
              <a href="/signup" className="text-black">
                Already have an account?
                <span className="text-yellow-800 font-semibold"> Sign in.</span>
              </a>
            </p>
          </form>
        </div>

        {/* Right side on larger screens */}
        <div className="hidden md:flex relative w-2/5">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${RightBg})` }}
          />

          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black opacity-70"></div>

          {/* Content */}
          <div className="relative flex flex-col items-center justify-center text-white p-10">
            <h2 className="text-2xl font-bold mb-4">Join Jamii Care Today!</h2>
            <p className="text-center">
              Empowering communities through transparency and efficient welfare
              management.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex flex-row items-center"> <TiTick className="size-6 text-green-600"/> Secure & Transparent Transactions</li>
              <li className="flex flex-row items-center"> <TiTick className="size-6 text-green-600"></TiTick>AI-Powered Fraud Detection</li>
              <li className="flex flex-row items-center"> <TiTick className="size-6 text-green-600"></TiTick> Smart Budgeting & Planning</li>
            </ul>
            <p className="pt-20">
            <a href="/login" className="text-white hover:font-semibold">
              Already have an account?{" "}
              <span className="text-yellow-400">Sign in.</span>
            </a>
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

import React, { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { IoEye, IoEyeOff } from "react-icons/io5";

const SignUp = () => {
  const [role, setRole] = useState("user");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!termsAccepted) {
      alert("You must accept the terms and conditions to proceed.");
      return;
    }
    alert("Registration successful!");
  };

  return (
    <div className="bg-primarygray min-h-screen flex items-center justify-center p-4">
      <div className="bg-primarywhite w-full max-w-4xl flex flex-col md:flex-row rounded shadow-lg overflow-hidden">
        <div className="border-b md:border-r border-gray-400 w-full md:w-3/5 p-6 md:p-10">
          <div className="text-center text-lg pb-4">
            <h1 className="font-bold text-xl">Hello!</h1>
            <p className="font-thin">Sign up below.</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Role Selection */}
            <div className="flex gap-4">
              <label>
                <input
                  type="radio"
                  value="user"
                  checked={role === "user"}
                  onChange={handleRoleChange}
                />
                User
              </label>
              <label>
                <input
                  type="radio"
                  value="admin"
                  checked={role === "admin"}
                  onChange={handleRoleChange}
                />
                Admin
              </label>
            </div>

            {/* Displaying the secret key input if admin is true */}
            {role === "admin" && (
              <div className="flex flex-col gap-1">
                <label className="font-semibold">Secret Key</label>
                <input
                  type="text"
                  placeholder="Enter the Admin Secret Key"
                  className="p-2 w-full border border-gray-500 rounded shadow-md focus:shadow-lg focus:border-gray-600"
                  required
                />
              </div>
            )}

            <div className="flex flex-col gap-1">
              <label className="font-semibold">Username</label>
              <input
                type="text"
                placeholder="Enter Your Username"
                className="p-2 w-full border border-gray-500 rounded shadow-md focus:shadow-lg focus:border-gray-600"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="p-2 w-full border border-gray-500 rounded shadow-md focus:shadow-lg focus:border-gray-600"
                required
              />
            </div>

            {/* Password Input with Toggle / show password icon */}
            <div className="flex flex-col gap-1 relative">
              <label className="font-semibold">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                className="p-2 w-full border border-gray-500 rounded shadow-md focus:shadow-lg focus:border-gray-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-4 top-10"
                onClick={toggleShowPassword}
              >
                {showPassword ? <IoEyeOff /> : <IoEye />}
              </button>
            </div>

            {/* Confirm Password Input with Toggle / show password icon */}
            <div className="flex flex-col gap-1 relative">
              <label className="font-semibold">Confirm Password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Your Password"
                className="p-2 w-full border border-gray-500 rounded shadow-md focus:shadow-lg focus:border-gray-600"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-4 top-10"
                onClick={toggleShowConfirmPassword}
              >
                {showConfirmPassword ? <IoEyeOff /> : <IoEye />}
              </button>
            </div>

            {/* Terms and Conditions Checkbox */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              <label htmlFor="terms" className="text-sm">
                I have read and agree to the{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Terms and Conditions
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-900 shadow-xl font-bold py-2 rounded-full w-full md:w-2/3 mx-auto cursor-pointer duration-300 ease-in-out"
            >
              Register
            </button>
            <p className="md:pt-10 text-black text-center md:hidden">
              <a href="/login">
                Already have an account?{" "}
                <span className="text-yellow-800 font-semibold">Sign in.</span>
              </a>
            </p>
          </form>
        </div>

        {/* Right section - Signup Info */}
        <div className="bg-secondaryblue w-full md:w-2/5 p-6 md:flex md:flex-col items-center justify-center text-center text-white hidden">
          <h2 className="text-lg font-bold">Join Jamii Care Today!</h2>
          <p className="text-center mt-4 px-6 font-semibold">
            Secure. Transparent. Smart. Become part of a community that takes
            control of its welfare finances effortlessly!
          </p>
          <ul className="mt-4 text-sm space-y-2 flex flex-col">
            <li className="flex flex-row items-center gap-1">
              <GiCheckMark /> Seamless Contributions & Withdrawals
            </li>
            <li className="flex flex-row items-center gap-1">
              <GiCheckMark /> AI-Powered Fraud Detection
            </li>
            <li className="flex flex-row items-center gap-1">
              <GiCheckMark /> Real-time Financial Insights
            </li>
            <li className="flex flex-row items-center gap-1">
              <GiCheckMark /> Budget Planning & Forecasting
            </li>
          </ul>

          <p className="pt-10 text-white">
            <a href="/login">
              Already have an account?{" "}
              <span className="text-yellow-400 font-semibold">Sign in.</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
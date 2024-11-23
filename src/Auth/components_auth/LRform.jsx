import React, { useState } from "react";
import { Link } from "react-router-dom";

const LRform = ({ type, onSubmit }) => {
  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-2xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-8 py-12 bg-white shadow-xl sm:rounded-3xl sm:p-20">
          <div className="max-w-xl mx-auto">
            <div>
              <h1 className="text-3xl font-semibold text-gray-800">
                {type === "Login"
                  ? "Login to your account"
                  : "Create a new account"}
              </h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="py-6 space-y-6 text-gray-700">
                {/* Email Input */}
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="email"
                    name="email"
                    type="text"
                    className="peer placeholder-transparent h-12 w-full border-b-2 border-gray-400 text-gray-900 focus:outline-none focus:border-blue-500"
                    placeholder="Email address"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-4 text-gray-500 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-4 peer-focus:text-gray-500 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>

                {/* Username Input (only for Register) */}
                {type === "Register" && (
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="username"
                      name="username"
                      type="text"
                      className="peer placeholder-transparent h-12 w-full border-b-2 border-gray-400 text-gray-900 focus:outline-none focus:border-blue-500"
                      placeholder="Username"
                      onChange={handleChange}
                      required
                    />
                    <label
                      htmlFor="username"
                      className="absolute left-0 -top-4 text-gray-500 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-4 peer-focus:text-gray-500 peer-focus:text-sm"
                    >
                      Username
                    </label>
                  </div>
                )}

                {/* Password Input */}
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="password"
                    name="password"
                    type="password"
                    className="peer placeholder-transparent h-12 w-full border-b-2 border-gray-400 text-gray-900 focus:outline-none focus:border-blue-500"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-4 text-gray-500 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-4 peer-focus:text-gray-500 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>

                {/* Submit Button */}
                <div className="relative">
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-medium rounded-md py-3 hover:bg-blue-600 transition-all"
                  >
                    {type === "Login" ? "Login" : "Register"}
                  </button>
                </div>
              </div>

              {/* Navigation Links */}
              {type === "Register" ? (
                <Link to="/login" className="block text-center text-blue-500 hover:text-blue-600 mt-4">
                  Already have an account? Login
                </Link>
              ) : (
                <Link to="/register" className="block text-center text-blue-500 hover:text-blue-600 mt-4">
                  Don't have an account? Register
                </Link>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LRform;

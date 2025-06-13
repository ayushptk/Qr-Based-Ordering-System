import React, { useState } from 'react';
import { FaGoogle, FaFacebookF, FaGithub, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const Loginpart = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // Handle sign in logic here
  };

  const handleSignUp = () => {
    // Handle sign up navigation here
  };

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full flex flex-col md:flex-row overflow-hidden">
        {/* Left Panel */}
        <div className="md:w-1/2 bg-orange-600 text-white flex flex-col items-center justify-center p-8 relative rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
          <div className="w-48 h-48 mb-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4140/4140047.png"
              alt="Welcome Illustration"
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-3xl font-bold mb-2">Welcome Back !</h2>
          <p className="text-sm mb-6 text-center px-4">
            Enter your personal details to use all of site this feature
          </p>
          <button
            onClick={handleSignUp}
            className="border border-white rounded px-6 py-2 hover:bg-white hover:text-orange-600 transition"
          >
            Sign Up
          </button>
          {/* Decorative shape */}
          <div className="hidden md:block absolute top-0 right-0 w-40 h-full bg-orange-500 rounded-l-full"></div>
        </div>

        {/* Right Panel */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Create Account</h2>

          {/* Social Login Buttons */}
          <div className="flex space-x-4 mb-6">
            <button
              aria-label="Sign in with Google"
              className="flex items-center justify-center w-10 h-10 rounded border border-gray-300 hover:bg-gray-100 transition"
            >
              <FaGoogle className="text-red-500" />
            </button>
            <button
              aria-label="Sign in with Facebook"
              className="flex items-center justify-center w-10 h-10 rounded border border-gray-300 hover:bg-gray-100 transition"
            >
              <FaFacebookF className="text-blue-600" />
            </button>
            <button
              aria-label="Sign in with GitHub"
              className="flex items-center justify-center w-10 h-10 rounded border border-gray-300 hover:bg-gray-100 transition"
            >
              <FaGithub className="text-gray-800" />
            </button>
          </div>

          <form onSubmit={handleSignIn} className="space-y-4">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <FaLock />
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-400 focus:outline-none"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="form-checkbox h-4 w-4 text-orange-600"
                />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-orange-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition flex items-center justify-center space-x-2"
            >
              <span>Sign In</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Loginpart;

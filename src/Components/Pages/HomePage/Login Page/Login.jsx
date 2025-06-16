import React, { useState } from 'react';
import { FaGoogle, FaFacebookF, FaGithub, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUser } from 'react-icons/fa';

// SignInFormComponent
const SignInForm = ({ handleSignIn, email, setEmail, password, setPassword, showPassword, togglePasswordVisibility, rememberMe, setRememberMe }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 text-gray-700">
      <h2 className="text-3xl font-bold text-orange-600 mb-6">Sign In</h2>
      <div className="flex space-x-4 mb-6">
        <button aria-label="Sign in with Google" className="social-icon"><FaGoogle className="text-red-500" /></button>
        <button aria-label="Sign in with Facebook" className="social-icon"><FaFacebookF className="text-blue-600" /></button>
        <button aria-label="Sign in with GitHub" className="social-icon"><FaGithub className="text-gray-800" /></button>
      </div>
      <p className="text-gray-500 mb-4 text-sm">or use your email account</p>
      <form onSubmit={handleSignIn} className="w-full max-w-sm space-y-4">
        <div className="relative">
          <span className="input-icon"><FaEnvelope /></span>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="form-input" />
        </div>
        <div className="relative">
          <span className="input-icon"><FaLock /></span>
          <input type={showPassword ? 'text' : 'password'} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="form-input pr-10" />
          <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-3 flex items-center text-gray-400 focus:outline-none" aria-label={showPassword ? 'Hide password' : 'Show password'}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center space-x-2 text-gray-600 cursor-pointer">
            <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} className="form-checkbox h-4 w-4 text-orange-500 rounded focus:ring-orange-500 border-gray-300" />
            <span>Remember me</span>
          </label>
          <a href="#" className="text-orange-600 hover:underline">Forgot Password?</a>
        </div>
        <button type="submit" className="form-button">Sign In</button>
      </form>
    </div>
  );
};

// SignUpFormComponent
const SignUpForm = ({ handleSignUpSubmit, name, setName, email, setEmail, password, setPassword, showPassword, togglePasswordVisibility }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 text-gray-700">
      <h2 className="text-3xl font-bold text-orange-600 mb-6">Create Account</h2>
      <div className="flex space-x-4 mb-6">
        <button aria-label="Sign up with Google" className="social-icon"><FaGoogle className="text-red-500" /></button>
        <button aria-label="Sign up with Facebook" className="social-icon"><FaFacebookF className="text-blue-600" /></button>
        <button aria-label="Sign up with GitHub" className="social-icon"><FaGithub className="text-gray-800" /></button>
      </div>
      <p className="text-gray-500 mb-4 text-sm">or use your email for registration</p>
      <form onSubmit={handleSignUpSubmit} className="w-full max-w-sm space-y-4">
        <div className="relative">
          <span className="input-icon"><FaUser /></span>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required className="form-input" />
        </div>
        <div className="relative">
          <span className="input-icon"><FaEnvelope /></span>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="form-input" />
        </div>
        <div className="relative">
          <span className="input-icon"><FaLock /></span>
          <input type={showPassword ? 'text' : 'password'} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="form-input pr-10" />
          <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-3 flex items-center text-gray-400 focus:outline-none" aria-label={showPassword ? 'Hide password' : 'Show password'}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <button type="submit" className="form-button">Sign Up</button>
      </form>
    </div>
  );
};

const Loginpart = () => {
  const [isSignUpPanelActive, setIsSignUpPanelActive] = useState(false);

  // States for SignInForm
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [showSignInPassword, setShowSignInPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // States for SignUpForm
  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [showSignUpPassword, setShowSignUpPassword] = useState(false);

  const toggleSignInPasswordVisibility = () => setShowSignInPassword(!showSignInPassword);
  const toggleSignUpPasswordVisibility = () => setShowSignUpPassword(!showSignUpPassword);

  const handleSignIn = (e) => {
    e.preventDefault();
    // console.log('Sign In:', { email: signInEmail, password: signInPassword, rememberMe });
    // Add sign in logic here
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    // console.log('Sign Up:', { name: signUpName, email: signUpEmail, password: signUpPassword });
    // Add sign up logic here
  };
  
  const overlayButtonBase = "border border-white rounded-full px-8 py-2.5 text-sm font-semibold hover:bg-white hover:text-orange-500 focus:bg-white focus:text-orange-500 transition-colors duration-300 uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-white";

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center p-4 font-sans">
      <div className={`
        bg-white rounded-xl shadow-2xl relative overflow-hidden
        w-full max-w-xs sm:max-w-sm md:max-w-3xl lg:max-w-4xl
        min-h-[600px] md:min-h-[550px]
      `}>
        {/* Sign-Up Form Container */}
        <div className={`
          absolute top-0 left-0 h-full w-full md:w-1/2
          transition-all duration-700 ease-in-out
          ${isSignUpPanelActive ? 'opacity-100 z-[5] translate-x-0 md:translate-x-full' : 'opacity-0 z-[1] translate-x-0 md:translate-x-0 pointer-events-none'}
        `}>
          <SignUpForm
            handleSignUpSubmit={handleSignUpSubmit}
            name={signUpName} setName={setSignUpName}
            email={signUpEmail} setEmail={setSignUpEmail}
            password={signUpPassword} setPassword={setSignUpPassword}
            showPassword={showSignUpPassword} togglePasswordVisibility={toggleSignUpPasswordVisibility}
          />
        </div>

        {/* Sign-In Form Container */}
        <div className={`
          absolute top-0 left-0 h-full w-full md:w-1/2
          transition-all duration-700 ease-in-out
          ${isSignUpPanelActive ? 'opacity-0 z-[1] -translate-x-full pointer-events-none' : 'opacity-100 z-[5] translate-x-0 pointer-events-auto'}
        `}>
          <SignInForm
            handleSignIn={handleSignIn}
            email={signInEmail} setEmail={setSignInEmail}
            password={signInPassword} setPassword={setSignInPassword}
            showPassword={showSignInPassword} togglePasswordVisibility={toggleSignInPasswordVisibility}
            rememberMe={rememberMe} setRememberMe={setRememberMe}
          />
        </div>

        {/* Overlay Container */}
        <div className={`
          absolute top-0 left-0 md:left-1/2 w-full md:w-1/2 h-full
          overflow-hidden transition-all duration-700 ease-in-out z-10
          ${isSignUpPanelActive ? 'md:-translate-x-full rounded-r-xl md:rounded-l-none md:rounded-r-xl' : 'md:translate-x-0 rounded-l-xl md:rounded-r-none md:rounded-l-xl'}
        `}>
          <div className={`
            bg-gradient-to-br from-orange-400 to-orange-600 text-white
            relative h-full w-full md:w-[200%]
            transition-transform duration-700 ease-in-out
            flex flex-col
            md:transform ${isSignUpPanelActive ? 'md:translate-x-0' : 'md:translate-x-[-50%]'}
          `}>
            {/* Overlay Panel for "Welcome Back" (Sign In prompt) */}
            <div className={`
              w-full md:absolute md:top-0 md:left-0 md:w-1/2 h-1/2 md:h-full
              flex flex-col items-center justify-center text-center p-6 md:p-12
              transition-all duration-700 ease-in-out
              md:transform ${isSignUpPanelActive ? 'md:opacity-100 md:translate-x-0' : 'md:opacity-0 md:-translate-x-1/4 md:pointer-events-none'}
              ${isSignUpPanelActive ? 'opacity-100 order-1 flex' : 'opacity-0 order-2 hidden md:flex'} 
            `}>
              <img src="/Images/welcomelogin.png" alt="Illustration" className="w-32 h-32 md:w-40 md:h-40 object-contain mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Welcome Back!</h2>
              <p className="text-xs md:text-sm mb-6 px-4 text-white">
                To keep connected with us please login with your personal info
              </p>
              <button onClick={() => setIsSignUpPanelActive(false)} className={overlayButtonBase}>
                Sign In
              </button>
            </div>

            {/* Overlay Panel for "Hello, Friend" (Sign Up prompt) */}
            <div className={`
              w-full md:absolute md:top-0 md:right-0 md:w-1/2 h-1/2 md:h-full
              flex flex-col items-center justify-center text-center p-6 md:p-12
              transition-all duration-700 ease-in-out
              md:transform ${isSignUpPanelActive ? 'md:opacity-0 md:translate-x-1/4 md:pointer-events-none' : 'md:opacity-100 md:translate-x-0'}
              ${isSignUpPanelActive ? 'opacity-0 order-2 hidden md:flex' : 'opacity-100 order-1 flex'}
            `}>
              <img src="/Images/welcomelogin.png" alt="Illustration" className="w-32 h-32 md:w-40 md:h-40 object-contain mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Hello, Friend!</h2>
              <p className="text-xs md:text-sm mb-6 px-4 text-white">
                Enter your personal details and start your journey with us
              </p>
              <button onClick={() => setIsSignUpPanelActive(true)} className={overlayButtonBase}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem; /* 40px */
          height: 2.5rem; /* 40px */
          border-radius: 9999px; /* full */
          border: 1px solid #e2e8f0; /* slate-300 or gray-300 */
          color: #64748b; /* slate-500 */
          transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
        }
        .social-icon:hover {
          background-color: #f8fafc; /* slate-50 or gray-100 */
          color: #f97316; /* orange-600 */
        }
        .form-input {
          width: 100%;
          padding-left: 2.75rem; /* pl-11 for slightly more space for icon */
          padding-right: 0.75rem; /* pr-3 */
          padding-top: 0.625rem; /* py-2.5 */
          padding-bottom: 0.625rem;
          border: 1px solid #cbd5e1; /* slate-300 */
          border-radius: 0.5rem; /* rounded-lg for softer look */
          font-size: 0.875rem; /* text-sm */
          background-color: #f8fafc; /* slate-50, very light gray */
          color: #334155; /* slate-700 */
          transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        }
        .form-input::placeholder {
          color: #94a3b8; /* slate-400 */
        }
        .form-input:focus {
          outline: none;
          border-color: #f97316; /* orange-500 */
          box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.3); /* ring-orange-500 with opacity */
        }
        .input-icon {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 1rem; /* left-4, more padding */
          display: flex;
          align-items: center;
          color: #94a3b8; /* slate-400 */
          pointer-events: none; /* So it doesn't interfere with input click */
        }
        .form-button {
          width: 100%;
          background-color: #f97316; /* orange-500 */
          color: white;
          padding-top: 0.75rem; /* py-3 for a bit more height */
          padding-bottom: 0.75rem;
          border-radius: 0.5rem; /* rounded-lg */
          font-weight: 600; /* semibold */
          text-transform: uppercase;
          letter-spacing: 0.05em; /* tracking-wider */
          font-size: 0.875rem; /* text-sm */
          transition: background-color 0.2s ease-in-out, transform 0.1s ease-in-out;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .form-button:hover {
          background-color: #ea580c; /* orange-600 */
          transform: translateY(-1px);
        }
        .form-button:active {
          transform: translateY(0px);
        }
        .form-checkbox {
          border-color: #cbd5e1; /* slate-300 */
        }
        .form-checkbox:focus {
          --tw-ring-color: #f97316; /* orange-500 */
           box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Loginpart;
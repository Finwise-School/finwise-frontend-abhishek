import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import signupimage from "../../assets/images/login/signup.png";
import { GoogleLogin } from "@react-oauth/google";

const SignupPage = () => {
  const handleSuccess = (response) => {
    console.log("Signup Success:", response);
  };

  const handleFailure = (error) => {
    console.error("Signup Failed:", error);
  };

  const { isAuthenticated, login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.finwiseschool.com/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, email }),
      });

      if (response.ok) {
        login(); // Call login function to set the user as authenticated
        navigate("/"); // Redirect after successful signup
      } else {
        const error = await response.text();
        setMessage(error);
      }
    } catch (error) {
      setMessage("An error occurred during signup.");
      console.error(error);
    }
  };

  return (
    <div className=" grid grid-cols-2 justify-center align pl-[10%] pt-[5%]">
      <div className="text">
        <h1 className="text-3xl text-black font-bold">Get Started Now</h1>

        <form onSubmit={handleSignup}>
          <div className="formGroup mb-4">
            <label
              htmlFor="username"
              className="block mb-2 pt-[5%] font-extrabold"
            >
              Name
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your name"
              required
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 w-full px-4 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-white focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 pt-[5%] font-extrabold"
            >                                                             
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-white focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 pt-[5%] font-extrabold"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-white focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="terms flex items-center mb-4 mt-4">
            <input
              id="agreeToTerms"
              type="checkbox"
              checked={agreeToTerms}
              onChange={() => setAgreeToTerms(!agreeToTerms)}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label
              htmlFor="agree-to-terms"
              className="ml-2 text-sm text-black"
            >
              I agree to the{" "}
              <Link to="/terms" className="text-blue-600 underline">
                terms and conditions
              </Link>
            </label>
          </div>

          {message && <p className="text-red-600 mb-4">{message}</p>}

          <button
            type="submit"
            className={`w-full py-2 px-4 bg-blue-900 text-white rounded ${
              !agreeToTerms ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!agreeToTerms}
          >
            Signup
          </button>

          <div className="flex justify-center items-center my-3 mb-14 mt-16">
            <div className="w-1/4 h-px bg-gray-300"></div>
            <span className="mx-4 text-gray-500">or</span>
            <div className="w-1/4 h-px bg-gray-300"></div>
          </div>

          <div className="w-full max-w-sm p-4 justify-center items-center align-middle self-center ml-20"  >
            <GoogleLogin
              onSuccess={handleSuccess}
              onFailure={handleFailure}
              buttonText="Sign up with Google"
              className="w-full bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600 "
            />
          </div>

          <div className="flex justify-center items-center mt-4">
            <span className="text-black font-bold">
              Have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Sign in
              </Link>
            </span>
          </div>
        </form>
      </div>

      <div>
        <img src={signupimage} height={500} width={500} alt="Signup" />
      </div>
    </div>
  );
};

export default SignupPage;
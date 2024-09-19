import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import loginimage from '../../assets/images/login/loging.png';
import { GoogleLogin } from "@react-oauth/google";

const LoginPage = () => {
  const handleSuccess = (response) => {
    console.log("Login Success:", response);
  };

  const handleFailure = (error) => {
    console.error("Login Failed:", error);
  };

  const { isAuthenticated, login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.finwiseschool.com/login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, email }), 
      });

      if (response.ok) {
        login(); 
        navigate('/'); 
      } else {
        const error = await response.text();
        setMessage(error);
      }
    } catch (error) {
      setMessage('An error occurred during login.');
      console.error(error);
    }
  };

  return (
    <div className='grid grid-cols-2 justify-center align pl-[15%] pt-[5%]'>
      <div className='text'>
        <h1 className='text-3xl text-black font-bold mb-3'>Welcome Back!</h1>
        <p className='text-black font-semibold mb-6'>Enter your Credentials to access your account</p>

        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor='email' className='block mb-2 pt-[5%] font-extrabold'>Email address</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Enter your email'
              required
              autoComplete='off'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-white focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <div className=' flex items-center justify-between '>
            <label htmlFor='password' className='block mb-2 pt-[5%] font-extrabold'>Password</label>
            <Link className='text-blue-600 underline hover:text-blue-800 block mb-2 pt-[5%] font-extrabold'>forgot password</Link>
            </div>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Enter your password'
              required
              autoComplete='off'
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              className="mt-1 w-full px-4 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-white focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className='terms flex items-center mb-4 mt-4'>
            <input
              id='agreeToTerms'
              type='checkbox'
              checked={agreeToTerms}
              onChange={() => setAgreeToTerms(!agreeToTerms)}
              className='h-4 w-4 text-blue-600 border-gray-300 rounded'
            />
            <label htmlFor='agree-to-terms' className='ml-2 text-sm text-black'>
              Remember for 30 days
            </label>
          </div>

          <button
            type='submit'
            className="w-full py-2 px-4 bg-blue-900 text-white rounded"
          >
            Login
          </button>

          <div className='flex justify-center items-center my-3 mb-14 mt-12'>
            <div className='w-1/4 h-px bg-gray-300'></div>
            <span className='mx-4 text-gray-500'>or</span>
            <div className='w-1/4 h-px bg-gray-300'></div>
          </div>

          <div className="w-full max-w-sm p-6 ml-20">
            <GoogleLogin
              onSuccess={handleSuccess}
              onFailure={handleFailure}
              buttonText="Sign in with Google"
              className="w-full bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600 items-center justify-center"
            />
          </div>

          <div className="flex justify-center items-center mt-4">
            <span className="text-black font-bold">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-600 underline hover:text-blue-800">
                Sign up
              </Link>
            </span>
          </div>
        </form>
      </div>

      <div>
        <img src={loginimage} height={500} width={500} alt="Login" />
      </div>
    </div>
  );
};

export default LoginPage;

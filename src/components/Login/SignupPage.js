import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Loggins from '../../assets/images/loginss/logins.jpg';

const SignupPage = () => {
  const { isAuthenticated } = useAuth();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home'); // Redirect to home if already logged in
    }
  }, [isAuthenticated, navigate]);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, email }),
      });
  
      const data = await response.text();
      if (response.ok) {
        navigate('/login'); // Redirect to login after successful signup
      } else {
        setMessage(data);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setMessage('An error occurred during signup.');
    }
  };
  

  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Loggins})` }}>
      <div className="flex items-center justify-center h-full">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg border border-white border-opacity-30 shadow-lg p-8 max-w-md w-full mt-24">
          <h2 className="text-5xl font-extrabold mb-8 text-center text-white">Signup</h2>
          <form onSubmit={handleSignup}>
            <div className="formGroup mb-4">
              <label htmlFor="username" className="block text-white font-bold mb-2">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                required
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 w-full px-4 py-2 bg-white border border-slate-300 rounded-md shadow-sm
                focus:outline-none focus:border-white focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="formGroup mb-4">
              <label htmlFor="email" className="block text-white font-bold mb-2">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full px-4 py-2 bg-white border border-slate-300 rounded-md shadow-sm
                focus:outline-none focus:border-white focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="formGroup mb-4">
              <label htmlFor="password" className="block text-white font-bold mb-2">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                required
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full px-4 py-2 bg-white border border-slate-300 rounded-md shadow-sm
                focus:outline-none focus:border-white focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Signup
            </button>
          </form>
          <p className="mt-4 ">
            Already have an account? <a href="/login" className="text-blue-700 font-medium">Login</a>
          </p>
          {message && <p className="mt-4 text-red-500 text-center">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

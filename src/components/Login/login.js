import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Loggings from '../../assets/images/loginss/logins.jpg';

const LoginPage = () => {
  const { isAuthenticated, login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/'); // Redirect to home if already logged in
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, email }),
      });

      if (response.ok) {
        login(); // Set authentication state to true
        navigate('/'); // Redirect to home page
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
    <div className='h-screen bg-cover' style={{ backgroundImage: `url(${Loggings})` }}>
      <div className="flex justify-center h-full items-center">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg border border-white border-opacity-30 shadow-lg p-8 max-w-md w-full mt-28 mb-10">
          <h2 className="text-5xl font-extrabold mb-8 text-center text-white">Login</h2>
          <form onSubmit={handleLogin}>
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
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" type="submit">
              Login
            </button>
          </form>
          <p className="mt-4">
            Don't have an account? <Link to="/signup" className="text-blue-700 font-medium">Sign-up</Link>
          </p>
          {message && <p className="mt-4 text-red-500">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

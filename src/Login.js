import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './assets/LineC.jpg';


const Login = () => {
  const navigate = useNavigate();


  const [email, setEmail] = useState('ice@example.com');
  const [password, setPassword] = useState('123456');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const mockData = {
        token: 'mock-token-123',
        user: { name: 'Ice', email }
      };

      localStorage.setItem('token', mockData.token);
      localStorage.setItem('user', JSON.stringify(mockData.user));
      navigate('/gallery');
    } catch (err) {
      setError('Login failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-sm p-6 rounded-xl shadow-md border border-gray-200">
        <div className="text-center mb-6">
          <img
            src={logo}
            alt="LINE COLLECTOR Logo"
            className="w-24 h-24 mx-auto rounded-full"
          />
          <h1 className="text-2xl font-bold text-green-600 mt-2">LINE COLLECTOR</h1>
          <p className="text-gray-500 text-sm">Login to continue</p>
        </div>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            className="w-full mb-6 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md text-lg font-semibold transition"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}

        <div className="text-center mt-4 text-sm text-gray-500">
          <p className="hover:underline cursor-pointer">Forgot password?</p>
          <p className="hover:underline cursor-pointer mt-1">Create account</p>
        </div>
      </div>
    </div>
  );
};

export default Login;

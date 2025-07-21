import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <nav className="bg-green-600 text-white px-6 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between shadow-md">
      <div className="text-xl font-bold text-center sm:text-left">
        LINE COLLECTOR
      </div>
      <div className="mt-2 sm:mt-0 flex flex-col sm:flex-row sm:items-center gap-4 text-sm font-medium text-white">
        <Link to="/gallery" className="hover:underline">Gallery</Link>
        {user && <span>👤 {user.name}</span>}
        <button
          onClick={handleLogout}
          className="bg-white text-green-600 px-3 py-1 rounded hover:bg-gray-100 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 px-8 py-4 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-3 group">
        <div className="w-9 h-9 bg-zinc-100 rounded-lg flex items-center justify-center transition-transform group-hover:rotate-6">
           <img src="/assets/logo.svg" alt="logo" className="w-5 h-5 invert" />
        </div>
        <span className="text-lg font-bold tracking-tight text-zinc-100">CodeSensei</span>
      </Link>

      <div className="flex gap-8 items-center">
        <div className="hidden md:flex gap-8">
          <Link to="/" className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors">Home</Link>
          <Link to="/about" className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors">About</Link>
        </div>
        
        {token ? (
          <button 
            onClick={handleLogout}
            className="text-sm font-semibold text-zinc-100 hover:text-red-400 transition-colors"
          >
            Logout
          </button>
        ) : (
          <Link 
            to="/login" 
            className="bg-zinc-100 text-zinc-950 px-5 py-2 rounded-lg text-sm font-bold hover:bg-white transition-all shadow-md shadow-white/5"
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
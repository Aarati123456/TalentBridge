import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          TalentBridge
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li><Link to="/" className="hover:text-indigo-600">Home</Link></li>
          <li><Link to="/explore" className="hover:text-indigo-600">Explore</Link></li>
          <li><Link to="/upload" className="hover:text-indigo-600">Upload Talent</Link></li>
          <li><Link to="/dashboard" className="hover:text-indigo-600">Dashboard</Link></li>
          <li><Link to="/login" className="hover:text-indigo-600">Login</Link></li>
          <li><Link to="/register" className="hover:text-indigo-600">Register</Link></li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col p-4 gap-4">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/explore" onClick={() => setMenuOpen(false)}>Explore</Link></li>
            <li><Link to="/upload" onClick={() => setMenuOpen(false)}>Upload Talent</Link></li>
            <li><Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link></li>
            <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
            <li><Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="bg-gray-800">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link
          to="/"
          className="font-bold text-3xl text-white hover:text-blue-400"
        >
          Auth App
        </Link>
        <ul className="flex gap-4">
          <Link to="/" className="text-white hover:text-blue-400">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-blue-400">
            About
          </Link>
          <Link to="/profile" className="text-white hover:text-blue-400">
            {currentUser ? (<img src={currentUser.profilePicture} alt={currentUser.name} className="w-8 h-8 rounded-full object-cover" />) : ("Sign In") }
          </Link>
        </ul>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
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
          <Link to="/sign-in" className="text-white hover:text-blue-400">
            Sign In
          </Link>
        </ul>
      </div>
    </div>
  );
}

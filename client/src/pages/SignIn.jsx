import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { set } from "mongoose";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      set
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {        
        const data = await response.json();
        console.log(data);
        setLoading(false);
        setError(false);
        navigate("/");
      } else {
        setLoading(false);
        setError(true);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <button disabled={loading} className="bg-gray-600 text-white p-3 rounded-lg uppercase hover:opacity-80 disabled:opacity-20">
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>
      <div className="mt-3">
        <p>
          {`Don't have an account?`}{" "}
          <Link to="/sign-up" className="text-blue-600">
            Sign Up
          </Link>
        </p>
      </div>
      <p className="text-red-600">{error && "Something went wrong"}</p>
    </div>
  );
}

import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-50 p-5">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-[#244D3F] opacity-20">
          404
        </h1>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-3xl font-bold text-[#244D3F] mb-2">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <Link
            to="/"
            className="px-8 py-3 bg-[#244D3F] text-white font-bold rounded-full hover:bg-[#1a3a30] transition-all shadow-lg"
          >Back to Home</Link>
        </div>
      </div>
      <div className="mt-20">
         <img src="/logo.png" alt="Logo" className="w-30 h-12 opacity-50" />
      </div>
    </div>
  );
};

export default NotFound;

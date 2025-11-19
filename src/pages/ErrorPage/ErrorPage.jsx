import React from "react";
import { FiAlertTriangle } from "react-icons/fi";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 text-center">
      <title>GreenNest - Error!</title>
      <FiAlertTriangle
        size={80}
        className="text-yellow-400 mb-6 animate-bounce"
      />
      <h1 className="text-6xl font-bold mb-2">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Oops! Page Not Found</h2>
      <p className="text-gray-400 max-w-md mb-8">
        The page you’re looking for doesn’t exist or has been moved. Let’s get
        you back to safety!
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;

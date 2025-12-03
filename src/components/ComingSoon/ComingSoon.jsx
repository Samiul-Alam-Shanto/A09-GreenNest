import React from "react";
import { Link } from "react-router";
import { FaSeedling } from "react-icons/fa";
import { motion } from "framer-motion";
import { useParams } from "react-router";

const ComingSoon = () => {
  const { pageName } = useParams();
  //   console.log(pageName);
  return (
    <div className="min-h-screen flex items-center justify-center font-poppins text-text-dark px-4">
      <motion.div
        className="text-center max-w-md mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <FaSeedling
          className="text-green-400 text-7xl mx-auto mb-6 animate-pulse"
          // A subtle animation to make the seedling feel alive
          style={{ animationDuration: "2s" }}
        />

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-primary">{pageName}</span> Page is Growing Soon!
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Our team is currently nurturing this part of our garden. We're working
          hard to cultivate something special for you. Please check back later!
        </p>

        <Link
          to="/"
          className="btn btn-lg bg-primary text-white hover:bg-opacity-80 border-none px-10 shadow-lg transition-transform duration-300 hover:scale-105"
        >
          Return to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default ComingSoon;

import React from "react";
import { Link } from "react-router-dom";

const ShareYourRecipe = () => {
  return (
    <div
      className="relative h-[400px] flex items-center justify-center"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80)",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0  bg-opacity-50
      "
      ></div>

      {/* Content */}
      <div className="relative text-center text-white max-w-2xl px-4">
        <h2 className="text-4xl font-bold mb-4">Got a Delicious Recipe?</h2>
        <p className="mb-6 text-lg">
          Share your homemade magic with the world! Upload your recipe and
          inspire others to cook like you.
        </p>
        <Link to="/add-recipe">
          <button className="btn btn-primary px-8 text-white">
            Share Your Recipe
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShareYourRecipe;

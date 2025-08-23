import React from "react";
import { Link } from "react-router-dom";

const SeeAllRecipes = () => {
  return (
    <div className="text-center py-16 px-4 bg-gradient-to-br from-orange-50 via-yellow-100 to-pink-50 shadow-inner rounded-lg">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-tight">
        Explore More Delicious Recipes
      </h2>
      <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
        Discover a wide variety of dishes from around the world, curated to
        spark your culinary creativity.
      </p>

      <Link to="/all-recipes">
        <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
          🍽️ See All Recipes
        </button>
      </Link>
    </div>
  );
};

export default SeeAllRecipes;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopRecipes = () => {
  const [topRecipes, setTopRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/top-recipes")
      .then((res) => res.json())
      .then((data) => setTopRecipes(data))
      .catch((err) => console.error("Failed to fetch top recipes:", err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Top Recipes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topRecipes.map((recipe) => (
          <div
            key={recipe._id}
            className="bg-white shadow rounded overflow-hidden"
          >
            <img
              src={
                recipe.imageUrl ||
                "https://via.placeholder.com/300x200?text=No+Image"
              }
              alt={recipe.title}
              className="w-full h-40 object-cover"
              onError={(e) =>
                (e.target.src =
                  "https://via.placeholder.com/300x200?text=No+Image")
              }
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{recipe.title}</h3>
              <p className="text-sm text-gray-600">
                Cuisine: {recipe.cuisine}
              </p>
              <p className="text-sm text-gray-600">
                Likes: {recipe.likeCount || 0}
              </p>
              <Link to={`/recipe-details/${recipe._id}`}>
                <button className="mt-3 w-full btn btn-secondary">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRecipes;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMeta } from "../providers/MetaContext";

const AllRecipes = () => {
  const { setMeta } = useMeta();
  useEffect(() => {
    setMeta({
      title: "All Recipes | Munchy Magic",
      description: "Browse all delicious recipes from various cuisines.",
    });
  }, []);

  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [cuisineTypes, setCuisineTypes] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState("All");

  useEffect(() => {
    fetch(
      `https://munchy-magic-server.onrender.com/recipes-by-cuisine?cuisine=${selectedCuisine}`
    )
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setFilteredRecipes(data);

        const cuisines = ["All", ...new Set(data.map((r) => r.cuisine))];
        setCuisineTypes(cuisines);
      });
  }, [selectedCuisine]);

  const handleCuisineChange = (e) => {
    const selected = e.target.value;
    setSelectedCuisine(selected);

    if (selected === "All") {
      setFilteredRecipes(recipes);
    } else {
      setFilteredRecipes(recipes.filter((r) => r.cuisine === selected));
    }
  };

  return (
    <>
      <div className="p-6 max-w-7xl mx-auto">
        {/* Filter Dropdown */}
        <div className="mb-6 flex items-center gap-4">
          <label htmlFor="filter" className="font-medium">
            Filter by Cuisine:
          </label>
          <select
            id="filter"
            className="border px-4 py-2 rounded shadow-sm"
            value={selectedCuisine}
            onChange={handleCuisineChange}
          >
            {cuisineTypes.map((type, idx) => (
              <option key={idx} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe._id}
              className="border rounded-lg overflow-hidden shadow hover:shadow-md transition"
            >
              <img
                src={
                  recipe.imageUrl ||
                  "https://via.placeholder.com/300x200?text=No+Image"
                }
                alt={recipe.title}
                className="w-full h-40 object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/300x200?text=No+Image";
                }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{recipe.title}</h3>
                <p className="text-sm text-gray-600">
                  Cuisine: {recipe.cuisine}
                </p>
                <p className="text-sm text-gray-600">
                  Likes: {recipe.likeCount || 0}
                </p>
                <Link to={`/recipe-details/${recipe._id}`}>
                  <button className="mt-3 w-full bg-rose-500 text-white py-2 rounded hover:bg-rose-600 transition">
                    See Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllRecipes;

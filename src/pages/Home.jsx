import React from "react";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "./RecipeCard";

const Home = () => {
  const recipes = useLoaderData();
  console.log(recipes);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;

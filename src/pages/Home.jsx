import React from "react";
import { useLoaderData } from "react-router-dom";
// import RecipeCard from "./RecipeCard";
import ShareYourRecipe from "../components/ShareYourRecipe";
import TopRecipes from "../components/TopRecipes";
import SeeAllRecipes from "../components/SeeAllRecipes";
import AboutUs from "./AboutUs";
import Testimonials from "./Testimonials";
import ChefsTips from "./ChefsTips";

const Home = () => {
  const recipes = useLoaderData();
  console.log(recipes);

  return (
    <div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>
        ))}
      </div> */}
      <TopRecipes></TopRecipes>

      <ShareYourRecipe></ShareYourRecipe>
      <SeeAllRecipes></SeeAllRecipes>
      <AboutUs></AboutUs>
      <Testimonials></Testimonials>
      <ChefsTips></ChefsTips>
    </div>
  );
};

export default Home;

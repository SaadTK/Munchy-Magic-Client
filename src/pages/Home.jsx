import React from "react";
import { useLoaderData } from "react-router-dom";
// import RecipeCard from "./RecipeCard";
import ShareYourRecipe from "../components/ShareYourRecipe";
import TopRecipes from "../components/TopRecipes";
import SeeAllRecipes from "../components/SeeAllRecipes";
import AboutUs from "./AboutUs";
import Testimonials from "./Testimonials";
import ChefsTips from "./ChefsTips";
import Hero from "../components/Hero";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  const recipes = useLoaderData();
  console.log(recipes);

  return (
    <div className="w-screen">
      <Hero />

      <AboutUs />

      <TopRecipes />

      <ChefsTips />

      <Testimonials />

      <SeeAllRecipes />

      <ShareYourRecipe />

      <NewsLetter />
    </div>
  );
};

export default Home;

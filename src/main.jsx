import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import Error404 from "./pages/Error404";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import AllRecipes from "./pages/AllRecipes";
import MyRecipes from "./pages/MyRecipes";
import RecipeDetails from "./pages/RecipeDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthProvider from "./providers/AuthContext";
// import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error404></Error404>,
    children: [
      { index: true, element: <Home /> },
      { path: "add-recipe", element: <AddRecipe /> },
      { path: "all-recipes", element: <AllRecipes /> },
      { path: "my-recipes", element: <MyRecipes /> },
      { path: "recipe-detail/:id", element: <RecipeDetails /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <Error404 /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      {/* <ToastContainer position="top-center" /> */}
      <Toaster position="top-center" />
    </AuthProvider>
  </StrictMode>
);

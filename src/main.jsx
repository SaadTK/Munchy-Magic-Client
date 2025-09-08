import { MetaProvider } from "./providers/MetaContext";

import { StrictMode, Suspense } from "react";
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

import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader";
import PrivateRoute from "./components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        loader: () =>
          fetch("https://munchy-magic-server.onrender.com/all-recipes"),
        element: <Home />,
      },
      {
        path: "all-recipes",
        element: <AllRecipes />,
      },
      {
        path: "add-recipe",
        element: (
          <PrivateRoute>
            <AddRecipe />
          </PrivateRoute>
        ),
      },
      {
        path: "my-recipes",
        element: (
          <PrivateRoute>
            <MyRecipes />
          </PrivateRoute>
        ),
      },
      {
        path: "recipe-details/:id",
        element: (
          <PrivateRoute>
            <RecipeDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <Error404 /> },
]);

// Inside your render tree:
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MetaProvider>
      {/* <HelmetProvider> */}
      <AuthProvider>
        <Suspense fallback={<Loader />}>
          <RouterProvider router={router} />
        </Suspense>
        <Toaster position="top-center" />
      </AuthProvider>
    </MetaProvider>
    {/* </HelmetProvider> */}
  </StrictMode>
);

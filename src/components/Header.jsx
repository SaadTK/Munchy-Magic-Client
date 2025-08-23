import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthContext";
import { FiLogOut } from "react-icons/fi";
import ThemeToggle from "./ThemeToggles";
import logo from "../assets/logo.png";
import defaultAvatar from "../assets/avatar-default.svg";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut().catch((err) => console.error(err));
  };

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 px-4 md:px-6 py-4 shadow">
      {/* Logo */}
      <div className="navbar-start">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl md:text-2xl font-bold text-primary"
        >
          <img src={logo} alt="Munchy Magic" className="w-10 h-10" />
          Munchy Magic
        </Link>
      </div>

      {/* Mobile Dropdown */}
      <div className="dropdown lg:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <AiOutlineMenu className="text-2xl" />
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <NavLink to="/" className="text-base">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/all-recipes" className="text-base">
              All Recipes
            </NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink to="/add-recipe" className="text-base">
                  Add Recipe
                </NavLink>
              </li>
              <li>
                <NavLink to="/my-recipes" className="text-base">
                  My Recipes
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Center Navigation (Desktop Only) */}
      <div className="navbar-center hidden lg:flex items-center space-x-6">
        <NavLink to="/" className="btn btn-ghost text-lg">
          Home
        </NavLink>
        <NavLink to="/all-recipes" className="btn btn-ghost text-lg">
          All Recipes
        </NavLink>
        {user && (
          <>
            <NavLink to="/add-recipe" className="btn btn-ghost text-lg">
              Add Recipe
            </NavLink>
            <NavLink to="/my-recipes" className="btn btn-ghost text-lg">
              My Recipes
            </NavLink>
          </>
        )}
      </div>

      {/* Right Side */}
      <div className="navbar-end flex items-center gap-3">
        <ThemeToggle />

        {/* Auth Buttons or Avatar */}
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full border border-primary">
                <img src={user.photoURL || defaultAvatar} alt="User Avatar" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <span className="font-semibold">
                  {user.displayName || "User"}
                </span>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="btn btn-error btn-sm mt-2"
                >
                  <FiLogOut className="mr-1" /> Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link to="/login" className="btn btn-primary btn-sm">
              Login
            </Link>
            <Link to="/register" className="btn btn-outline btn-sm">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

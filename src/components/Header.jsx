import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthContext";
import { FiLogOut } from "react-icons/fi";
import ThemeToggle from "./ThemeToggles";
import logo from "../assets/logo.png";
import defaultAvatar from "../assets/avatar-default.svg";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut().catch((err) => console.error(err));
  };

  return (
    <div className="navbar bg-base-100  sticky top-0 z-50 px-6 py-4">
      {/* Logo */}
      <div className="navbar-start">
        <Link
          to="/"
          className="flex items-center gap-3 text-2xl font-bold text-primary"
        >
          <img src={logo} alt="Munchy Magic" className="w-10 h-10" />
          Munchy Magic
        </Link>
      </div>

      {/* Center Navigation */}
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
        {/* {user && (
          <>
            <Link to="/login" className="btn btn-primary btn-sm">
              Login
            </Link>
            <Link to="/register" className="btn btn-outline btn-sm">
              Register
            </Link>
          </>
        )} */}
      </div>

      {/* Right Side: Theme + Avatar */}
      <div className="navbar-end flex items-center gap-4">
        <ThemeToggle />

        {/* User Dropdown */}
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
          <>
            <Link to="/login" className="btn btn-primary btn-sm">
              Login
            </Link>
            <Link to="/register" className="btn btn-outline btn-sm">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

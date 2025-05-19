import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { FiLogOut } from "react-icons/fi";
import ThemeToggle from "./ThemeToggles";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const navLinks = (
    <>
      <NavLink to="/" className="btn btn-ghost text-base">
        Home
      </NavLink>
      <NavLink to="/recipes" className="btn btn-ghost text-base">
        All Recipes
      </NavLink>
      {user && (
        <>
          <NavLink to="/add-recipe" className="btn btn-ghost text-base">
            Add Recipe
          </NavLink>
          <NavLink to="/my-recipes" className="btn btn-ghost text-base">
            My Recipes
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl font-bold text-primary"
        >
          Munchy Magic
        </Link>
      </div>
      <div className="flex-none gap-4">
        <div className="hidden md:flex items-center space-x-2">{navLinks}</div>
        {!user ? (
          <>
            <Link to="/login" className="btn btn-sm btn-outline">
              Login
            </Link>
            <Link to="/register" className="btn btn-sm btn-outline">
              Register
            </Link>
          </>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-circle avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user.photoURL || "/default-avatar.png"} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
            >
              <li className="text-center font-semibold">
                {user.displayName || "User"}
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                </div>
              </li>
              <li>
                <button
                  onClick={logoutUser}
                  className="btn btn-sm text-red-500 flex items-center"
                >
                  <FiLogOut className="mr-2" /> Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

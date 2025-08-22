import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthContext.jsx";
import toast from "react-hot-toast";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        toast.success("Logged in successfully!");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error(err);
        setError("Invalid email or password.");
        toast.error("Login failed. Check your credentials.");
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Logged in with Google!");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error(err);
        toast.error("Google login failed.");
      });
  };

  return (
    <>
      <header>
        <Header />
      </header>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login to Munchy Magic</h1>
            <p className="py-6">
              Manage and discover amazing recipes. Sign in to get started!
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-2">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>

              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

              <div className="divider">OR</div>

              <button
                onClick={handleGoogleLogin}
                type="button"
                className="btn btn-outline w-full"
              >
                Continue with Google
              </button>

              <p className="text-sm text-center mt-4">
                New to Munchy Magic?{" "}
                <Link to="/register" className="text-blue-600 hover:underline">
                  Register here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Login;

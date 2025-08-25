import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../providers/AuthContext";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validatePassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isValidLength = password.length >= 6;

    return hasUppercase && hasLowercase && isValidLength;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validatePassword(formData.password)) {
      const msg =
        "Password must contain an uppercase letter, a lowercase letter, and be at least 6 characters.";
      setError(msg);
      toast.error("Invalid password. Follow the requirements.");
      return;
    }

    try {
      await createUser(formData.email, formData.password);
      toast.success("Registration successful!");
      navigate("/");
    } catch (err) {
      setError(err.message);
      toast.error("Registration failed. Try again.");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      toast.success("Google login successful!");
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error("Google login failed!");
    }
  };

  return (
    <>
      <Helmet>
        <title>Register | Munchy Magic</title>
        <meta
          name="description"
          content="Register now and browse all delicious recipes from various cuisines on Munchy Magic."
        />
      </Helmet>

      <header>
        <Header />
      </header>
      <div className="min-h-screen flex items-center justify-center bg-base-100">
        <div className="w-full max-w-md p-6 bg-base-200 rounded-lg shadow-lg">
          <h2 className="text-center text-3xl font-bold mb-6 text-primary">
            Register
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input input-bordered w-full"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="photoURL"
              placeholder="Photo URL"
              className="input input-bordered w-full"
              value={formData.photoURL}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button type="submit" className="btn btn-primary w-full">
              Register
            </button>
          </form>

          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline w-full mt-4"
          >
            Sign in with Google
          </button>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-semibold">
              Login here
            </Link>
          </p>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Register;

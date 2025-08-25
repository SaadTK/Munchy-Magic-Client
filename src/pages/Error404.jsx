import React, { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import loaderAnimation from "../assets/loader.json";
import { AuthContext } from "../providers/AuthContext";

import { useMeta } from "../providers/MetaContext";
const Error404 = ({
  message = "Oops! Page not found or something went wrong.",
}) => {
  const { setMeta } = useMeta();
  useEffect(() => {
    setMeta({
      title: "All Recipes | Munchy Magic",
      description: "Browse all delicious recipes from various cuisines.",
    });
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext);

  const handleGoBack = () => {
    // If there's a previous path in history
    if (location.key !== "default") {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#ffe6e6",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 24,
          textAlign: "center",
        }}
        role="alert"
      >
        <Lottie
          animationData={loaderAnimation}
          loop={false}
          autoplay={true}
          style={{
            width: 200,
            height: 200,
            filter: "hue-rotate(330deg) saturate(1.5)",
          }}
        />
        <h1
          style={{
            marginTop: 24,
            fontSize: 28,
            color: "#cc0000",
            fontWeight: "700",
          }}
        >
          {message}
        </h1>
        <p style={{ marginTop: 8, fontSize: 16, color: "#800000" }}>
          The page you're looking for doesn't exist or an error occurred.
        </p>

        <div style={{ marginTop: 32, display: "flex", gap: "16px" }}>
          <button onClick={() => navigate("/")} className="btn btn-primary">
            Go to Home
          </button>

          {!user ? (
            <button
              onClick={() => navigate("/login")}
              className="btn btn-outline"
            >
              Go to Login
            </button>
          ) : (
            <button onClick={handleGoBack} className="btn btn-secondary">
              Go Back
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Error404;

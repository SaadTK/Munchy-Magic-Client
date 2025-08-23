import React from "react";
import Lottie from "lottie-react";
// import loaderAnimation from "../assets/loader.json";
import loaderAnimation from "../assets/loader.json";

const Loader = () => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
      aria-label="Loading"
      role="status"
    >
      <Lottie
        animationData={loaderAnimation}
        loop={true}
        autoplay={true}
        style={{ width: 180, height: 180 }}
      />
      <p
        style={{
          marginTop: 16,
          fontSize: 18,
          color: "#555",
          fontWeight: "600",
        }}
      >
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loader;

import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { AuthContext } from "../providers/AuthContext";

const MainLayout = () => {
  const { loading } = useContext(AuthContext);
  if (loading) return <Loader />;

  return (
    <>
      {/* <header className="w-11/12 mx-auto"> */}
      <header>
        <Header />
      </header>
      <div>
        <Outlet />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
const MainLayout = () => {
  return (
    <>
      <header className="w-11/12 mx-auto">
        <Header></Header>
      </header>
      <div className="">
        <Outlet></Outlet>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default MainLayout;

import React from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div className="container mx-auto">
      <div className="font-orbit">
        <NavBar></NavBar>

        <Outlet></Outlet>
        <div className="font-orbit"></div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;

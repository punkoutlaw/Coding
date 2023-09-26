import { Outlet } from "react-router-dom";
import React from "react";
import Navigation from "../components/nav";
import Footer from "../components/footer";

const Layout = () => {
  return (
    <>

    <Navigation />

      <Outlet />

    <Footer />

    </>
  )
};

export default Layout;
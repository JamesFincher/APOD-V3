import React from "react";
import Nav from "./components/layout/Nav/Nav";
import Footer from "./components/layout/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

import React from "react";
import Nav from "./components/layout/Nav/Nav";
import Footer from "./components/layout/Footer";

type Children = {
  children: React.ReactNode;
};

const Layout = ({ children }: Children) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

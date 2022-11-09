import React, { ReactNode } from "react";
import Nav from "./components/layout/Nav/Nav";
import Footer from "./components/layout/Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

import React, { ReactNode } from "react";
import Nav from "./components/layout/Nav/Nav";
import Footer from "./components/layout/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

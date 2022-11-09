import React, { ReactNode } from "react";
import Nav from "./components/layout/Nav/Nav";
import Footer from "./components/layout/Footer";

type LayoutProps = {
  children: ReactNode;

}

const Layout React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

import React, { ReactNode } from "react";
import Nav from "./components/layout/Nav/Nav";
import Footer from "./components/layout/Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="overflow-auto max-h-screen min-h-screen	">
        <Nav />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;

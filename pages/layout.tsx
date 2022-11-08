import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

type Props = {
  children: React.ReactNode;
};

const layout = (props: Props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default layout;

import React from "react";
import { Slice } from "gatsby";
import "./layout.scss";

const Layout = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: any;
}) => {
  return (
    <main {...props} className="layout">
      <Slice alias="header" />
      <div className="layout__content">{children}</div>
      <Slice alias="footer" />
    </main>
  );
};

export default Layout;

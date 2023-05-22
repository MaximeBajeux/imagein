import React from "react";
import { Slice } from "gatsby";
import Cursor from "../cursor/cursor";
import "./layout.scss";
import { isMobile } from "react-device-detect";

const Layout = ({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <main {...props} className={`layout ${className ? className : ""}`}>
      {!isMobile && <Cursor />}
      <Slice alias="header" />
      <div className="layout__content">{children}</div>
      <Slice alias="footer" />
    </main>
  );
};

export default Layout;

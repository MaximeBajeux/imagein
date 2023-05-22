import React from "react";
import { Slice } from "gatsby";
import Cursor from "../cursor/cursor";
import "./layout.scss";
import { useBreakpoint } from "../../hooks/use-breakpoint";

const Layout = ({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => {
  const { breakpoint } = useBreakpoint();
  return (
    <main {...props} className={`layout ${className ? className : ""}`}>
      {breakpoint === "xl" || (breakpoint === "lg" && <Cursor />)}
      <Slice alias="header" />
      <div className="layout__content">{children}</div>
      <Slice alias="footer" />
    </main>
  );
};

export default Layout;

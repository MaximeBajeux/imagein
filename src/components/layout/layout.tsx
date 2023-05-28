import React, { lazy, Suspense } from "react";
import { Slice } from "gatsby";
import { isMobile } from "react-device-detect";
import "./layout.scss";

const LazyCursor = lazy(() => import("../cursor/cursor"));

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
      {!isMobile && (
        <Suspense fallback={null}>
          <LazyCursor />
        </Suspense>
      )}
      <Slice alias="header" />
      <div className="layout__content">{children}</div>
      <Slice alias="footer" />
    </main>
  );
};

export default Layout;

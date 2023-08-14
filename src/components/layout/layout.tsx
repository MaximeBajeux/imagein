import React, { lazy, Suspense, useEffect } from "react";
import { Slice } from "gatsby";
import { isMobile } from "react-device-detect";
import { isBrowser } from "react-device-detect";
import "./layout.scss";

const LazyCursor = lazy(() => import("../cursor/cursor"));
const LazyCookieContent = lazy(() => import("../cookiecontent/cookiecontent"));

const Layout = ({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => {
  const [showCookieContent, setShowCookieContent] = React.useState(false);

  useEffect(() => {
    // we want to show cookie content only if user has scroll an entire page and not on page load

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      if (window.scrollY > windowHeight) {
        setShowCookieContent(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main {...props} className={`layout ${className ? className : ""}`}>
      {!isMobile && isBrowser && (
        <Suspense fallback={null}>
          <LazyCursor />
        </Suspense>
      )}
      <Slice alias="header" />
      <div className="layout__content">{children}</div>
      <Slice alias="footer" />

      {showCookieContent && isBrowser && (
        <Suspense fallback={null}>
          <LazyCookieContent />
        </Suspense>
      )}
    </main>
  );
};

export default Layout;

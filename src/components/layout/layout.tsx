import React, { lazy, useEffect } from "react";
import { Slice } from "gatsby";
import { isMobile } from "react-device-detect";
import SuspenseHelper from "../suspensehelper/suspensehelper";
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
      <SuspenseHelper fallback={null}>
        {!isMobile && <LazyCursor />}
      </SuspenseHelper>
      <Slice alias="header" />
      <div className="layout__content">{children}</div>
      <Slice alias="footer" />

      {showCookieContent && (
        <SuspenseHelper fallback={null}>
          <LazyCookieContent />
        </SuspenseHelper>
      )}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${process.env.GATSBY_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </main>
  );
};

export default Layout;

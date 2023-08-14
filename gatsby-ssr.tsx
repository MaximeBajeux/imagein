import React from "react";

import RootElement from "./src/components/rootelement/rootelement";

export const wrapRootElement = ({ element }) => {
  return <RootElement>{element}</RootElement>;
};

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="partytown-vanilla-config"
      dangerouslySetInnerHTML={{
        __html: `partytown = {
          resolveUrl={function(url) {
            if (url.hostname === "connect.facebook.net") {
              var proxyUrl = new URL('https://image-in.net/');
              proxyUrl.searchParams.append('url', url.href);
              return proxyUrl;
            }
            return url;
          },
        }`,
      }}
    />,
  ]);
};

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
            const proxyMap = {
              'connect.facebook.net': ${process.env.GATSBY_FACEBOOK_REVERSE_PROXY_URL},
            };
            url.hostname = proxyMap[url.hostname] || url.hostname;
            return url;
          },
        }`,
      }}
    />,
  ]);
};

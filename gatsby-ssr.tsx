import React from "react";
import { Partytown } from "@builder.io/partytown/react";

const ORIGIN = "https://www.googletagmanager.com";

export const onRenderBody = ({ setHeadComponents }) => {
  if (
    process.env.NODE_ENV !== "production" &&
    process.env.NODE_ENV !== "test"
  ) {
    return null;
  }

  const partytownComp = <Partytown key="partytown" forward={["gtag"]} />;

  const googleAnalyticsScript = (
    <script
      key="google-analytics"
      type="text/partytown"
      src={`${ORIGIN}/gtag/js?id=${process.env.GATSBY_GA_MEASUREMENT_ID}`}
    />
  );

  const googleAnalyticsConfig = (
    <script
      key="google-analytics-config"
      type="text/partytown"
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag(){ window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.GATSBY_GA_MEASUREMENT_ID}', { send_page_view: false })`,
      }}
    />
  );

  setHeadComponents([
    partytownComp,
    googleAnalyticsScript,
    googleAnalyticsConfig,
  ]);
};

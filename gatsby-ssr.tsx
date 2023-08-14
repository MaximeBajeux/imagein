import React from "react";

import RootElement from "./src/components/rootelement/rootelement";

export const wrapRootElement = ({ element }) => {
  return <RootElement>{element}</RootElement>;
};

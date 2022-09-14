import React from "react";
import { StyleInner, StyleLoader } from "./Loader.styles";

export function Loader() {
  return (
    <StyleLoader>
      <StyleInner className="one"></StyleInner>
      <StyleInner className="two"></StyleInner>
      <StyleInner className="three"></StyleInner>
    </StyleLoader>
  );
}

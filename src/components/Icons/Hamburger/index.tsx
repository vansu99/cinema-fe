import * as React from "react";

export const Hamburger = ({ className = "", color = "black", viewBox = "4 4 24 24" }) =>
  React.createElement(
    "svg",
    { className: `${className}`, viewBox: viewBox },
    React.createElement("path", {
      d: "M5,21H27a1,1,0,0,1,0,2H5a1,1,0,0,1,0-2ZM5,9H27a1,1,0,0,1,0,2H5A1,1,0,0,1,5,9Zm0,6H27a1,1,0,0,1,0,2H5a1,1,0,0,1,0-2Z",
      fillRule: "evenodd",
      fill: color,
    })
  );

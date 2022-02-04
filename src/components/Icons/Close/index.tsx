import * as React from "react";

export const Close = ({ className = "", viewBox = "0 0 48 48" }) =>
  React.createElement(
    "svg",
    {
      className: `${className} icon`,
      focusable: "false",
      viewBox: viewBox,
      "aria-hidden": "true",
    },
    React.createElement("path", {
      d: "M23.72,22.31,17.41,16l6.31-6.31a1,1,0,0,0-1.41-1.41L16,14.59,9.69,8.28A1,1,0,0,0,8.28,9.69L14.59,16,8.28,22.31a1,1,0,0,0,1.41,1.41L16,17.41l6.31,6.31a1,1,0,0,0,1.41-1.41Z",
    })
  );

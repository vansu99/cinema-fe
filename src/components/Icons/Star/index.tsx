import * as React from "react";

export const Star = ({
  className = "",
  color = "#fecf0a",
  viewBox = "0 0 32 32",
}) =>
  React.createElement(
    "svg",
    {
      className: `${className}`,
      viewBox: viewBox,
      "aria-hidden": "true",
    },
    React.createElement("path", {
      d:
        "M16 25.19l-8.24 4.65a.9.9 0 0 1-1.33-1l1.8-9-6.86-6.26A.9.9 0 0 " +
        "1 1.88 12l9.32-1.08 4-8.39a.9.9 0 0 1 1.63 0l4 8.39L30.12 12a.9.9 " +
        "0 0 1 .5 1.56l-6.88 6.29 1.74 9a.9.9 0 0 1-1.33 1z",
      fill: color,
      fillRule: "evenodd",
    })
  );

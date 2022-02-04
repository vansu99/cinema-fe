import * as React from "react";

export const ChevronLeft = ({
  className = "",
  viewBox = "0 0 32 32",
}) =>
  React.createElement(
    "svg",
    { className: `${className} icon`, viewBox: viewBox },
    React.createElement("path", {
      d:
        "M11.5,16a1,1,0,0,1,.29-.74l6.91-7a1,1,0,0,1,1.48,0,1.06,1.06,0,0," +
        "1,0,1.49L14.08,16l6.13,6.18a1.06,1.06,0,0,1,0,1.49,1,1,0,0,1-1.48," +
        "0l-6.91-7A1,1,0,0,1,11.5,16Z",
    })
  );

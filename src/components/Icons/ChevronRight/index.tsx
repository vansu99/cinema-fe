import * as React from "react";

export const ChevronRight = ({ className = "", viewBox = "0 0 32 32" }) =>
  React.createElement(
    "svg",
    { className: `${className} icon`, viewBox: viewBox },
    React.createElement("path", {
      d:
        "M20.5,16a1,1,0,0,1-.29.74l-6.91,7a1,1,0,0,1-1.48,0,1.06,1.06,0," +
        "0,1,0-1.49L17.92,16,11.79,9.82a1.06,1.06,0,0,1,0-1.49,1,1,0,0,1,1.48," +
        "0l6.91,7A1,1,0,0,1,20.5,16Z",
    })
  );

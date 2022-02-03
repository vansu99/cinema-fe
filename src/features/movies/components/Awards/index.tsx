import React, { useState } from "react";
import {
  StyledAwards,
  StyledAwardContent,
  StyledAwardHeading,
  StyledAwardFocus,
  StyledAwardDesc
} from "./styled";

export type Coordinates = {
  x: number;
  y: number;
};

export default function Awards(): JSX.Element {
  const [coordinates, setCoordinates] = useState<Coordinates>({ x: 0, y: 0 });

  const handleMousemove = (e: any) => {
    setCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <StyledAwards onMouseMove={handleMousemove}>
      <StyledAwardFocus
        style={{
          background: `radial-gradient(circle at ${coordinates.x}px ${coordinates.y}px, transparent, #000 20%)`,
        }}
      />
      <StyledAwardContent>
        <StyledAwardHeading>
          the best <br />
          <div>
            of <span>2022</span> web
          </div>
          annual awards
        </StyledAwardHeading>
        <StyledAwardDesc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab temporibus expedita error sequi, possimus explicabo totam cupiditate.</StyledAwardDesc>
      </StyledAwardContent>
    </StyledAwards>
  );
}

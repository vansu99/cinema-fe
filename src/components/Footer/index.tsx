import React from "react";
import { StyledFooter, StyledFooterLogo, StyledFooterCopyRight } from "./styled";

export default function Footer(): JSX.Element {
  return (
    <StyledFooter>
      <StyledFooterLogo>
        cinema<span>VS</span>
      </StyledFooterLogo>
      <StyledFooterCopyRight>
        Copyright ©{" "}
        <a target="_blank" href="https://github.com/vansu99" rel="noreferrer">
          Su Tran
        </a>{" "}
        2022
      </StyledFooterCopyRight>
    </StyledFooter>
  );
}

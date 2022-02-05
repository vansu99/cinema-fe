import React, { useEffect, useState } from "react";
import Media from "react-media";
import { routes } from "../../mocks";
import { Hamburger, Close } from "../Icons";
import {
  Header,
  Nav,
  Logo,
  Menu,
  MenuItem,
  MenuLink,
  Account,
  MobileNav,
  MenuMobile,
  MenuMobileItem,
} from "./styled";

interface IBreakpoints {
  small: string;
  mediumMin: string;
}

const Navbar = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const openMenuMobile = () => {
    setIsMobile(true);
    document.body.classList.add("no-scroll");
  };

  const closeMenuMobile = () => {
    setIsMobile(false);
    document.body.classList.remove("no-scroll");
  };

  const handleResizeWindow = () => {
    if (window.innerWidth > 750) {
      setIsMobile(false);
      document.body.classList.remove("no-scroll");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);

    return () => window.removeEventListener("resize", handleResizeWindow);
  }, [isMobile]);

  return (
    <Header>
      <Nav>
        <Logo href="#!">
          cinema<span>VS</span>
        </Logo>
        <Media
          queries={{
            small: "(max-width: 750px)",
            mediumMin: "(min-width: 751px)",
          }}
        >
          {(matches: IBreakpoints) => (
            <>
              {matches.small && (
                <MenuMobile value={isMobile}>
                  <button className="icon-mobile" onClick={closeMenuMobile}>
                    <Close />
                  </button>
                  {routes.map((route) => (
                    <MenuMobileItem key={route.id}>
                      <MenuLink href={route.href}>{route.name}</MenuLink>
                    </MenuMobileItem>
                  ))}
                </MenuMobile>
              )}
              {matches.mediumMin && (
                <Menu>
                  {routes.map((route) => (
                    <MenuItem key={route.id}>
                      <MenuLink href={route.href}>{route.name}</MenuLink>
                    </MenuItem>
                  ))}
                </Menu>
              )}
            </>
          )}
        </Media>
        <Media
          queries={{
            small: "(max-width: 750px)",
            mediumMin: "(min-width: 751px)",
          }}
        >
          {(matches: IBreakpoints) => (
            <>
              {matches.small && (
                <MobileNav onClick={openMenuMobile}>
                  <Hamburger color="#fff" />
                </MobileNav>
              )}
              {matches.mediumMin && (
                <Account href="#!">
                  <i className="bx bxs-user bx-sm"></i>
                </Account>
              )}
            </>
          )}
        </Media>
      </Nav>
    </Header>
  );
};

export default Navbar;

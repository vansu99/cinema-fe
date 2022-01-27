import React from "react";
import { Header, Nav, Logo, Menu, MenuItem, MenuLink, Account } from "./styled";

const Navbar = () => {
  return (
    <Header>
      <Nav>
        <Logo href="#!">
          cinema<span>VS</span>
        </Logo>
        <Menu>
          <MenuItem>
            <MenuLink href="#!">Home</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#!">Movies</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#!">About</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#!">Contact</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#!">Rating</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#!">Awards</MenuLink>
          </MenuItem>
        </Menu>
        <Account href="#!">
          <i className="bx bxs-user bx-sm"></i>
        </Account>
      </Nav>
    </Header>
  );
};

export default Navbar;

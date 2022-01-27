import styled from "styled-components";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";

export const Header = styled.header``;

export const Nav = styled.nav`
  padding: 2rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.a`
  display: block;
  color: ${colors.textWhite};
  font-size: 1.7rem;
  span {
    color: ${colors.textTeal};
    font-size: 2rem;
  }
`;

export const Menu = styled.ul`
  display: flex;
`;

export const MenuItem = styled.li`
  &:not(:first-child) {
    margin-left: 3rem;
  }
`;

export const MenuLink = styled.a`
  display: inline-block;
  color: ${colors.textWhite};
  ${typography.size.small}
  ${typography.weight.normal}
  transition: color 250ms ease;
  
  &:hover {
    color: ${colors.textTeal};
  }
`;

export const Account = styled.a`
  display: inline-block;
  color: ${colors.textWhite};
  transition: color 250ms ease;

  &:hover {
    color: ${colors.textTeal};
  }
`

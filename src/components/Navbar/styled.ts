import styled from "styled-components";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";
import { variables } from "../../styles/variables";

type StyleMobileProps = {
  value: boolean;
};

export const Header = styled.header``;

export const Nav = styled.nav`
  padding: 2rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${variables.mobile} {
    padding-left: 3rem;
    padding-right: 3rem;
  }
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
  height: 100%;

  &:hover {
    color: ${colors.textTeal};
  }
`;

export const MobileNav = styled.button`
  display: block;
  outline: none;
  background: transparent;
  border: 0;
  width: 2.5rem;
  height: 2.5rem;
`;

export const MenuMobile = styled.ul<StyleMobileProps>`
  width: 26rem;
  background-color: ${colors.bodyColor};
  display: flex;
  flex-direction: column;
  padding: 6rem 4rem;
  position: fixed;
  ${({ value }) => (value ? `right: 0;` : `right: -100%;`)}
  top: 0;
  z-index: 99;
  height: 100vh;
  overflow: hidden;
  box-shadow: 0 1px 5px 0 rgba(83, 83, 83, 0.2);
  transition: right 0.3s ease;

  .icon-mobile {
    width: 3rem;
    height: 3rem;
    position: absolute;
    right: 2rem;
    top: 2rem;
    cursor: pointer;
    outline: none;
    border: 0;
    background: transparent;
  }
`;

export const MenuMobileItem = styled.li`
  margin-bottom: 2rem;
`;

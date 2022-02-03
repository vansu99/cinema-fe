import { colors } from './../../styles/colors';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
  padding: 2rem 0;
  text-align: center;
  border-top: 1px solid ${colors.textTeal};
`

export const StyledFooterLogo = styled.h3`
  color: #fff;
  font-size: 1.5rem;
  span {
    font-size: 1.7rem;
    color: ${colors.textTeal};
  }
`

export const StyledFooterCopyRight = styled.p`
  margin-top: 1rem;
  font-size: 1.1rem;

  a {
    color: ${colors.textTeal};
  }
`
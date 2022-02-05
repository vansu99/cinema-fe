import styled from "styled-components";
import { colors } from "../../../../styles/colors";
import { variables } from "../../../../styles/variables";

export const CategoryWrapper = styled.div`
  padding: 5rem 10rem 2rem;

  @media ${variables.mobile} {
    padding: 3rem;
  }
`;

export const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -3rem;
  overflow: hidden;
`;

export const CategoryItem = styled.a`
  cursor: pointer;
  width: calc((100% / 5) - 3rem);
  height: 6rem;
  color: ${colors.textWhite};
  margin-right: 3rem;
  margin-bottom: 3rem;
  font-size: 1.4rem;
  line-height: 1.3;
  word-wrap: break-word;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.textTeal};
  border-radius: 5px;
  transition: all 0.2s ease;

  @media ${variables.tablet} {
    width: calc((100% / 3) - 3rem);
  }

  @media ${variables.mobile} {
    width: calc(50% - 3rem);
    height: 4.5rem;
    font-size: 1.3rem;
  }

  &:hover {
    background-color: ${colors.textTeal};
  }
`;

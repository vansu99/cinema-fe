import styled from "styled-components";
import { colors } from "../../../../styles/colors";

export const CategoryWrapper = styled.div`
  padding: 5rem 10rem 2rem;
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
  word-wrap: break-word;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.textTeal};
  border-radius: 5px;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${colors.textTeal};
  }
`;

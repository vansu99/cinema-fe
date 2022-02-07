import styled, {css} from "styled-components";
import { typography } from "./typography";
import { colors } from "./colors";
import { variables } from "./variables";

const StyledHeading = styled.div`
  text-align: center;
  position: relative;
  padding-bottom: 3rem;
  margin-bottom: 4rem;

  h3 {
    text-transform: capitalize;
    ${typography.size.large}
    margin-bottom: 2rem;
  }

  p {
    ${typography.size.medium}
  }

  @media ${variables.mobile} {
    h3 {
      font-size: 2rem;
    }
    p {
      ${typography.size.small}
    }
  }

  &:after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 10rem;
    height: 2px;
    background-color: ${colors.textTeal};
  }
`;

const textTruncate = css`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  max-width: 100%;
  white-space: pre-wrap;
  word-break: break-word; // rớt xuống theo từ
`;

export { StyledHeading, textTruncate };

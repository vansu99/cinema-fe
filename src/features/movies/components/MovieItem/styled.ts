import styled from "styled-components";
import { colors } from "../../../../styles/colors";

type StyledMovieItemProps = {
  count: number;
  spacing: number;
};

export const StyledMovieItem = styled.div<StyledMovieItemProps>`
  ${({ count, spacing }) => {
    return `
        width: calc((100% / ${count}) - ${spacing}rem);
        margin-right: ${spacing}rem;
      `;
  }}
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;

export const StyledMovieButton = styled.figcaption`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.7);
  transition: all 0.35s ease;
  opacity: 0;
  visibility: hidden;

  button {
    display: inline-block;
    text-align: center;
    padding: 1rem;
    font-size: 1.3rem;
    font-weight: normal;
    letter-spacing: 1px;
    border: 2px solid ${colors.textTeal};
    border-radius: 4px;
    color: #fff;
    background: transparent;
    text-transform: capitalize;
  }
`;

export const StyledMovieThumbnail = styled.div`
  position: relative;
  width: 100%;
  height: 27rem;
  overflow: hidden;
  border-radius: 14px;

  img {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    vertical-align: bottom;
  }

  &:hover ${StyledMovieButton} {
    opacity: 1;
    visibility: visible;
  }
`;

export const StyledMovieInfo = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 1.5rem 0 0;
`;

export const StyledMovieTitle = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 2.5rem;
  margin-bottom: 0.8rem;

  h3 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    max-width: 100%;
    white-space: pre-wrap;
    word-break: break-word;
    font-size: 1.5rem;
    line-height: 1.3;
    color: ${colors.textWhite};
    transition: color 0.2s linear;

    &:hover {
      color: ${colors.textTeal};
    }
  }
`;

export const StyledMovieItemDesc = styled.p`
  display: flex;
  color: ${colors.textGray};
  font-size: 1.3rem;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const StyledMovieRating = styled.span`
  color: ${colors.yellowColor};
  display: inline-block;
  padding-left: 5px;
`;

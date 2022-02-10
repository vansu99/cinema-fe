import styled from 'styled-components';
import { colors } from '../../../../styles/colors';
import { textTruncate } from '../../../../styles/common';
import { typography } from '../../../../styles/typography';

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

// Modal Film Detail
export const StyledModalFilmDetail = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    width: 50%;
    &:not(:last-child) {
      padding-right: 2rem;
    }
  }
`;

export const StyledModalThumbnail = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;

export const StyledModalInfo = styled.div``;

export const StyledModalHeading = styled.h2`
  font-size: 1.9rem;
  font-weight: bold;
  color: ${colors.textWhite};
  margin-bottom: 2rem;
`;

export const StyledModalRating = styled.div`
  display: flex;
  align-items: baseline;
  margin: 1rem 0 2rem;

  .icon {
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 0.6rem;
  }
`;

export const StyledModalDesc = styled.p`
  ${typography.size.small}
  color: ${colors.textGray};
  ${textTruncate}
`;

export const StyledModalRightWrapper = styled.div`
  padding: 2rem 0 3rem 2rem;
`;

export const StyledModalRight = styled.h3`
  ${typography.size.large}
  color: ${colors.textWhite};
  padding-left: 2rem;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    height: 100%;
    background-color: ${colors.textTeal};
  }
`;

export const StyledHall = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 1.5rem 0 0 -2rem;
`;

export const StyledHallItem = styled.li`
  width: calc(33.333% - 2rem);
  margin-left: 2rem;
  padding: 2rem;
  background-color: rgba(171, 171, 171, 0.2);
  border-radius: 6px;
  transition: all 0.2s ease;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    background-color: #555166;
    border-color: ${colors.textTeal};
  }

  h5 {
    color: #fff;
  }
  span {
    font-size: 1.2rem;
  }
`;

export const StyledDate = styled.div`
  display: grid !important;
  justify-content: flex-start !important;
  grid-auto-columns: 15%;
  grid-auto-flow: column;
  grid-template-columns: unset;
  grid-column-gap: 1.5rem;
  overflow-x: auto;
  margin-top: 1.5rem;
  scroll-snap-type: x mandatory;
  scroll-snap-stop: always;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    scroll-snap-align: center;
    width: auto;
  }
`;

export const StyledDateItem = styled.div`
  cursor: pointer;
  background-color: rgba(171, 171, 171, 0.2);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 6.5rem;
  user-select: none;
  font-weight: bold;
  color: #fff;

  &:hover {
    background-color: #555166;
    border-color: ${colors.textTeal};
  }
`;

// Seats
export const StyledSeatWrapper = styled.div`
  display: flex;
`;

export const StyledSeatList = styled.ul`
  display: flex;
  margin-top: 2rem;
`;

export const StyledSeatItem = styled.li`
  background-color: #444451;
  height: 12px;
  width: 15px;
  margin: 3px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;

  &:nth-of-type(2) {
    margin-right: 1.6rem;
  }

  &:nth-last-of-type(2) {
    margin-left: 1.6rem;
  }

  & > input[type='checkbox'] {
    display: none;
  }
`;

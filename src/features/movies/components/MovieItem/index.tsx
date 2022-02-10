import React from 'react';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { Movie } from '../../types';
import {
  StyledMovieInfo,
  StyledMovieItem,
  StyledMovieItemDesc,
  StyledMovieThumbnail,
  StyledMovieTitle,
  StyledMovieRating,
  StyledMovieButton,
  StyledModalInfo,
  StyledModalThumbnail,
  StyledModalDesc,
  StyledModalHeading,
  StyledModalRight,
  StyledModalRating,
  StyledModalFilmDetail,
  StyledHall,
  StyledHallItem,
  StyledDate,
  StyledDateItem,
  StyledSeatWrapper,
  StyledSeatItem,
  StyledSeatList,
  StyledModalRightWrapper,
} from './styled';
import { useModal } from '../../../../hooks';
import { Star } from '../../../../components/Icons';
import Modal from '../../../../components/Modal';
import { halls } from '../../../../mocks';

dayjs.extend(localizedFormat);
interface MovieItemProps extends Movie {
  count?: number;
  spacing?: number;
}

const MovieItem = ({
  count = 0,
  spacing = 0,
  rate = 0,
  name,
  image,
  startDate,
  description,
}: MovieItemProps): JSX.Element => {
  const context = useModal();

  const showModalFilmDetail = () =>
    context?.showModal(() => (
      <Modal title="" theme="hsl(219, 48%, 8%)" width={75}>
        <StyledModalFilmDetail>
          <div>
            <StyledModalThumbnail>
              <img src={image} alt="" />
            </StyledModalThumbnail>
            <StyledModalInfo>
              <StyledModalHeading>{name}</StyledModalHeading>
              <StyledModalDesc>
                Ngày công chiếu: {dayjs(startDate).format('ll')}
              </StyledModalDesc>
              <StyledModalRating>
                <Star className="icon" /> <span>{rate}</span>
              </StyledModalRating>
              <StyledModalDesc>{description}</StyledModalDesc>
            </StyledModalInfo>
          </div>
          <div>
            <StyledModalRight>Buy tickets</StyledModalRight>
            <StyledModalRightWrapper>
              <div>
                <h4>Select hall</h4>
                <StyledHall>
                  {halls.map((hall) => (
                    <StyledHallItem key={hall.id}>
                      <h5>{hall.name}</h5>
                      <span>{hall.seat} seats</span>
                    </StyledHallItem>
                  ))}
                </StyledHall>
              </div>
              <div>
                <h4>Select date</h4>
                <StyledDate>
                  <StyledDateItem>s09</StyledDateItem>
                  <StyledDateItem>s09</StyledDateItem>
                  <StyledDateItem>s09</StyledDateItem>
                  <StyledDateItem>s09</StyledDateItem>
                  <StyledDateItem>s09</StyledDateItem>
                  <StyledDateItem>s09</StyledDateItem>
                  <StyledDateItem>s09</StyledDateItem>
                  <StyledDateItem>09s</StyledDateItem>
                </StyledDate>
              </div>
              <div>
                <h4>Select seats</h4>
                <StyledSeatWrapper>
                  <div></div>
                  <StyledSeatList>
                    <StyledSeatItem>
                      <input type="checkbox" name="" id="" />
                    </StyledSeatItem>
                    <StyledSeatItem>
                      <input type="checkbox" name="" id="" />
                    </StyledSeatItem>
                    <StyledSeatItem>
                      <input type="checkbox" name="" id="" />
                    </StyledSeatItem>
                    <StyledSeatItem>
                      <input type="checkbox" name="" id="" />
                    </StyledSeatItem>
                    <StyledSeatItem>
                      <input type="checkbox" name="" id="" />
                    </StyledSeatItem>
                    <StyledSeatItem>
                      <input type="checkbox" name="" id="" />
                    </StyledSeatItem>
                    <StyledSeatItem>
                      <input type="checkbox" name="" id="" />
                    </StyledSeatItem>
                    <StyledSeatItem>
                      <input type="checkbox" name="" id="" />
                    </StyledSeatItem>
                  </StyledSeatList>
                </StyledSeatWrapper>
              </div>
            </StyledModalRightWrapper>
            <div></div>
          </div>
        </StyledModalFilmDetail>
      </Modal>
    ));

  return (
    <StyledMovieItem count={count} spacing={spacing}>
      <StyledMovieThumbnail>
        <img src={image} alt="" />
        <StyledMovieButton>
          <button onClick={showModalFilmDetail}>get ticket</button>
        </StyledMovieButton>
      </StyledMovieThumbnail>
      <a href="#!">
        <StyledMovieInfo>
          <StyledMovieTitle>
            <h3>{name}</h3>
          </StyledMovieTitle>
          <StyledMovieItemDesc>
            Rate: <StyledMovieRating>{rate}</StyledMovieRating>/10
          </StyledMovieItemDesc>
          <StyledMovieItemDesc>
            Released {dayjs(startDate).format('ll')}
          </StyledMovieItemDesc>
        </StyledMovieInfo>
      </a>
    </StyledMovieItem>
  );
};

export default MovieItem;

import React from "react";
import ReactPlayer from "react-player/lazy";
import { StyledHeading } from "../../../../styles/common";
import {
  PopularMovieList,
  PopularMovieWrapper,
  PopularMovieLeft,
  PopularMovieRight,
  PopularMovieItem,
  PopularMovieHeading,
  PopularMovieItemSide,
  PopularMovieItemVideo,
  PopularMovieItemVideoInfo, PopularMovieLeftList, PopularMovieBottom, PopularMovieBottomHeader,
} from "./styled";

const PopularMovie = () => {
  return (
    <PopularMovieWrapper>
      <StyledHeading>
        <h3>Popular movies</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
      </StyledHeading>
      <PopularMovieList>
        <PopularMovieLeft>
          <PopularMovieLeftList>
            <PopularMovieItem>
              <ReactPlayer
                  className="react-player"
                  url="https://www.youtube.com/watch?v=jGr8XDxB-9I"
                  width="100%"
                  height="100%"
              />
            </PopularMovieItem>
            <PopularMovieItem>
              <ReactPlayer
                  className="react-player"
                  url="https://www.youtube.com/watch?v=6HfLJLwIRHM"
                  width="100%"
                  height="100%"
              />
            </PopularMovieItem>
          </PopularMovieLeftList>

          {/*Bottom*/}
          <div>
            <PopularMovieBottomHeader>
              <h3>Popular movies</h3>
              <div className="d-flex">
                <a href="#!">All movies</a>
              </div>
            </PopularMovieBottomHeader>

            <PopularMovieBottom>
              <div>
                <PopularMovieItemVideo>
                  <ReactPlayer
                      className="react-player"
                      url="https://www.youtube.com/watch?v=D37eoAptw_s"
                      width="100%"
                      height="100%"
                  />
                </PopularMovieItemVideo>
                <PopularMovieItemVideoInfo>
                  <h4>Jiro</h4>
                  <p>Release</p>
                </PopularMovieItemVideoInfo>
              </div>
              <div>
                <PopularMovieItemVideo>
                  <ReactPlayer
                      className="react-player"
                      url="https://www.youtube.com/watch?v=subhyB2NGFM"
                      width="100%"
                      height="100%"
                  />
                </PopularMovieItemVideo>
                <PopularMovieItemVideoInfo>
                  <h4>Mái ấm gia đình</h4>
                  <p>Release</p>
                </PopularMovieItemVideoInfo>
              </div>
              <div>
                <PopularMovieItemVideo>
                  <ReactPlayer
                      className="react-player"
                      url="https://www.youtube.com/watch?v=mrUVbhbhvIY"
                      width="100%"
                      height="100%"
                  />
                </PopularMovieItemVideo>
                <PopularMovieItemVideoInfo>
                  <h4>Phi vụ triệu đô</h4>
                  <p>Release</p>
                </PopularMovieItemVideoInfo>
              </div>
            </PopularMovieBottom>
          </div>
        </PopularMovieLeft>

        {/*Right*/}
        <PopularMovieRight>
          <PopularMovieHeading>New trailers</PopularMovieHeading>
          <div>
            <PopularMovieItemSide>
              <PopularMovieItemVideo>
                <ReactPlayer
                  className="react-player"
                  url="https://www.youtube.com/watch?v=6HfLJLwIRHM"
                  width="100%"
                  height="100%"
                />
              </PopularMovieItemVideo>
              <PopularMovieItemVideoInfo>
                <h4>Jiro</h4>
                <p>Release</p>
              </PopularMovieItemVideoInfo>
            </PopularMovieItemSide>
            <PopularMovieItemSide>
              <PopularMovieItemVideo>
                <ReactPlayer
                  className="react-player"
                  url="https://www.youtube.com/watch?v=6HfLJLwIRHM"
                  width="100%"
                  height="100%"
                />
              </PopularMovieItemVideo>
              <PopularMovieItemVideoInfo>
                <h4>Jiro</h4>
                <p>Release</p>
              </PopularMovieItemVideoInfo>
            </PopularMovieItemSide>
          </div>
        </PopularMovieRight>
      </PopularMovieList>
    </PopularMovieWrapper>
  );
};

export default PopularMovie;

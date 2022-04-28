/** @format */

import MovieItem from "../../Components/MovieItem";
import styled from "styled-components";
const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
`;
const MovieTheaters = data => {
  return (
    <MovieListContainer className='row'>
      {data &&
        data.data &&
        data.data.phim.phimchieurap.map((item, index) => {
          return (
            <MovieItem
              key={index}
              id={index}
              item={item}
              typemovie={"Phim chiếu rạp"}
            />
          );
        })}
    </MovieListContainer>
  );
};

export default MovieTheaters;

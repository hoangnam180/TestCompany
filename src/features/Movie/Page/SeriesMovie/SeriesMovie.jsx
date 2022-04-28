/** @format */
import React from "react";
import styled from "styled-components";
import MovieItem from "../../Components/MovieItem";
const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
`;
const SeriesMovie = data => {
  return (
    <MovieListContainer className='row'>
      {data &&
        data.data &&
        data.data.phim.phimbo.map((item, index) => {
          return (
            <MovieItem
              key={index}
              id={index}
              item={item}
              typemovie={"Phim bộ"}
            />
          );
        })}
    </MovieListContainer>
  );
};

export default SeriesMovie;

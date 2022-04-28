/** @format */
import React from "react";
import styled from "styled-components";
import MovieItem from "../../Components/MovieItem";
const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
`;
const OddMovie = data => {
  return (
    <MovieListContainer className='row'>
      {data &&
        data.data &&
        data.data.phim.phimle.map((item, index) => {
          return (
            <MovieItem
              key={index}
              id={index}
              item={item}
              typemovie={"Phim lẻ"}
            />
          );
        })}
    </MovieListContainer>
  );
};

export default OddMovie;

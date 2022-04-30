/** @format */
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../../../context/itemmovie-context";
import MovieItem from "../../Components/MovieItem";
const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
`;
const SeriesMovie = data => {
  const {setMovie } = useContext(UserContext);
  const navigate = useNavigate()
  const handleClickItem = (id, keyid) => {
    setMovie(data.data.phim.phimbo[id]);
    navigate("/detail");
  };
  return (
    <MovieListContainer className='row'>
      {data &&
        data.data &&
        data.data.phim.phimbo.map((item, index) => {
          return (
            <MovieItem
              onClick={handleClickItem}
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

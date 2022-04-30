/** @format */

import MovieItem from "../../Components/MovieItem";
import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "../../../../context/itemmovie-context";
import { useNavigate } from "react-router-dom";
const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
`;
const MovieTheaters = data => {
  const {setMovie } = useContext(UserContext);
  const navigate = useNavigate()
  const handleClickItem = (id, keyid) => {
    setMovie(data.data.phim.phimchieurap[id]);
    navigate("/detail");
  };
  return (
    <MovieListContainer className='row'>
      {data &&
        data.data &&
        data.data.phim.phimchieurap.map((item, index) => {
          return (
            <MovieItem
              onClick={handleClickItem}
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

/** @format */
import { Pagination } from "antd";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../../../context/itemmovie-context";
import MovieItem from "../../Components/MovieItem";
const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
`;
const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;
const OddMovie = data => {
  const {setMovie } = useContext(UserContext);
  const navigate = useNavigate()
  const handleClickItem = (id, keyid) => {
    setMovie(data.data.phim.phimle[id]);
    navigate("/detail");
  };
  const pageSize = 28;
  const [current, setCurrent] = useState({
    minIndex: 0,
    maxIndex: pageSize,
    current: 1,
  });
  const onChange = page => {
    setCurrent(prev => {
      return {
        ...prev,
        current: page,
        minIndex: (page - 1) * pageSize,
        maxIndex: page * pageSize,
      };
    });
  };
  return (
    <Container>
    <MovieListContainer className='row'>
      {data &&
        data.data &&
        data.data.phim.phimle.map((item, index) => {
          return (
            index >= current.minIndex &&
            index < current.maxIndex && (
            <MovieItem
              onClick={handleClickItem}
              key={index}
              id={index}
              item={item}
              typemovie={"Phim lẻ"}
            />)
          );
        })}
    </MovieListContainer>
    <Pagination
        pageSize={pageSize}
        current={current.current}
        total={data.data.phim.phimle.length}
        onChange={onChange}
        showSizeChanger={false}
        size={"big"}
        style={{ textAlign: "right", marginRight: "5%", marginTop: "15px" }}
      />
    </Container>
    
  );
};

export default OddMovie;

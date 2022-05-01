/** @format */

import React, { useContext, useState } from "react";
import "antd/dist/antd.css";
import { Pagination } from "antd";
import styled from "styled-components";
import MovieItem from "../../Components/MovieItem";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../../context/itemmovie-context";

const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
`;
const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;

const Title = styled.h1`
  padding: 0 20px;
  margin: 0;
  margin-top: 20px;
  position: relative;
  color: #fff;
  &::before {
    content: "";
    position: absolute;
    height: 1px;
    width: 100%;
    top: 100%;
    background-color: #fff;
  }
`;
const keyvalue = [
  {
    key: "phimchieurap",
    title: "Phim chiếu rạp",
  },
  {
    key: "phimbo",
    title: "Phim bộ",
  },
  {
    key: "phimhoathinh",
    title: "Phim hoạt hình",
  },
  {
    key: "phimle",
    title: "Phim lẻ",
  },
];

const HomePage = ({ data }) => {
  const pageSize = 20;
  let navigate = useNavigate();
  const [current, setCurrent] = useState({
    data: data.phim,
    minIndex: 0,
    maxIndex: pageSize,
    current: 1,
  });
  const { movie, setMovie } = useContext(UserContext);
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

  const handleClickItem = (id, keyid) => {
    setMovie(data.phim[keyid][id]);
    navigate("/detail");
  };
  return (
    <Container>
      {keyvalue.map((item, index) => {
        const { key, title } = item;
        return (
          <div key={key}>
            <Title className='title'>{item.title}</Title>
            <MovieListContainer className='row'>
              {current?.data &&
                current?.data[key] &&
                current.data[key].map((item, index) => {
                  return (
                    index >= current.minIndex &&
                    index < current.maxIndex && (
                        <MovieItem
                          onClick={handleClickItem}
                          key={index}
                          id={index}
                          keyid={key}
                          item={item}
                          typemovie={title}
                        />
                    )
                  );
                })}
            </MovieListContainer>
          </div>
        );
      })}
      <Pagination
        pageSize={pageSize}
        current={current.current}
        total={370}
        onChange={onChange}
        showSizeChanger={false}
        size={"big"}
        style={{ textAlign: "right", marginRight: "5%", marginTop: "15px" }}
      />
    </Container>
  );
};

export default React.memo(HomePage);

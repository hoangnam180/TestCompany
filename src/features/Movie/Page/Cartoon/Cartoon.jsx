/** @format */
import MovieItem from "../../Components/MovieItem";
import styled from "styled-components";
import { useContext, useState } from "react";
import { UserContext } from "../../../../context/itemmovie-context";
import { useNavigate } from "react-router-dom";
import { Pagination } from "antd";
const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
`;
const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;
const Cartoon = data => {
  const {setMovie } = useContext(UserContext);
  const navigate = useNavigate()
  const handleClickItem = (id) => {
    setMovie(data.data.phim.phimhoathinh[id]);
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
        data.data.phim.phimhoathinh.map((item, index) => {
          return (
            index >= current.minIndex &&
            index < current.maxIndex && (
            <MovieItem
              onClick={handleClickItem}
              key={index}
              id={index}
              item={item}
              typemovie={"Phim hoạt hình"}
            />
            )
          );
        })}
    </MovieListContainer>
    <Pagination
        pageSize={pageSize}
        current={current.current}
        total={data.data.phim.phimhoathinh.length}
        onChange={onChange}
        showSizeChanger={false}
        size={"big"}
        style={{ textAlign: "right", marginRight: "5%", marginTop: "15px" }}
      />
    </Container>
  );
};

export default Cartoon;

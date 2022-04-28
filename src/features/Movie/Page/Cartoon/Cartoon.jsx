/** @format */
import MovieItem from "../../Components/MovieItem";
import styled from "styled-components";
const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
`;
const Cartoon = data => {
  return (
    <MovieListContainer className='row'>
      {data &&
        data.data &&
        data.data.phim.phimhoathinh.map((item, index) => {
          return (
            <MovieItem
              key={index}
              id={index}
              item={item}
              typemovie={"Phim hoạt hình"}
            />
          );
        })}
    </MovieListContainer>
  );
};

export default Cartoon;

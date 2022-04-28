/** @format */

import React from "react";
import styled from "styled-components";
const MovieItemContainer = styled.div`
  .inneritem {
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 4px 0 #aaaaaa94;
    cursor: pointer;
    padding: 10px;
    margin-top: 15px;
  }

  .movie_item_img {
    height: 300px;
    object-fit: cover;
    overflow: hidden;
  }
  .movie_item_title {
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    margin: 15px 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 5px;
  }
  .movie_item_info {
    display: flex;
    flex-direction: column;
  }
  .movie_item_info span {
    font-size: 15px;
    font-weight: 400;
    color: #fff;
    text-transform: capitalize;
  }
`;

const MovieItem = ({ item, typemovie, onClick, id, keyid }) => {
  return (
    <MovieItemContainer
      onClick={() => {
        onClick(id, keyid);
      }}
      className='col c-12 m-4 lm-3 l-2-4'>
      <li className='inneritem'>
        <img className='movie_item_img' src={item.imageUrl} alt='poster' />
        <h4 className='movie_item_title'>{item.title}</h4>
        <div className='movie_item_info'>
          <span>Loại Phim: {typemovie}</span>
          <span>Thể Loại: {item.category}</span>
        </div>
      </li>
    </MovieItemContainer>
  );
};

export default MovieItem;

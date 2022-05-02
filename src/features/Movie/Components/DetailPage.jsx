/** @format */

import React, { useContext, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../../../context/itemmovie-context";
import Iframe from "react-iframe";
import { Empty } from "antd";

const DetaiPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  min-height: 75vh;
  .video {
    margin-top: 30px;
    text-align: center;
  }
  .title {
    color: white;
  }
  .wrap-title {
    display: flex;
    justify-content: center;
  }
  .episode-list {
    display: flex;
    flex-wrap: wrap;
    max-width: 700px;
    margin: 0 auto;
    justify-content: center;
  }
  .episode {
    display: inline-block;
    padding: 5px;
    margin: 4px;
    color: #f1f1f1;
    text-shadow: 0 1px #111;
    border-color: #505050 #414141 #2c2c2c;
    background-color: #4f4f4f;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0%, #696969),
      color-stop(70%, #4f4f4f),
      color-stop(100%, #3c3c3c)
    );
    background-image: -webkit-linear-gradient(
      top,
      #696969 0%,
      #4f4f4f 70%,
      #3c3c3c 100%
    );
    cursor: pointer;
    &:hover {
      color: #702526;
      text-shadow: 0 1px #ea8f99;
      border-color: #e1696e #c85252 #a03a38;
      background-color: #e46565;
      background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        color-stop(0%, #eb9093),
        color-stop(70%, #e46565),
        color-stop(100%, #e25755)
      );
      background-image: -webkit-linear-gradient(
        top,
        #eb9093 0%,
        #e46565 70%,
        #e25755 100%
      );
      background-image: -moz-linear-gradient(
        top,
        #eb9093 0%,
        #e46565 70%,
        #e25755 100%
      );
      background-image: -ms-linear-gradient(
        top,
        #eb9093 0%,
        #e46565 70%,
        #e25755 100%
      );
      background-image: -o-linear-gradient(
        top,
        #eb9093 0%,
        #e46565 70%,
        #e25755 100%
      );
      background-image: linear-gradient(
        top,
        #eb9093 0%,
        #e46565 70%,
        #e25755 100%
      );
      -webkit-box-shadow: inset 0 1px #dcaaaa, inset 0 0 0 1px #df777a,
        0 1px #a03a38, 0 3px #be4b49, 0 4px #a03a38, 0 5px 2px rgb(0 0 0 / 40%);
      box-shadow: inset 0 1px #dcaaaa, inset 0 0 0 1px #df777a, 0 1px #a03a38,
        0 3px #be4b49, 0 4px #a03a38, 0 5px 2px rgb(0 0 0 / 40%);
    }
    &.active {
      color: #702526;
      text-shadow: 0 1px #ea8f99;
      border-color: #e1696e #c85252 #a03a38;
      background-color: #e46565;
      background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        color-stop(0%, #eb9093),
        color-stop(70%, #e46565),
        color-stop(100%, #e25755)
      );
      background-image: -webkit-linear-gradient(
        top,
        #eb9093 0%,
        #e46565 70%,
        #e25755 100%
      );
      background-image: -moz-linear-gradient(
        top,
        #eb9093 0%,
        #e46565 70%,
        #e25755 100%
      );
      background-image: -ms-linear-gradient(
        top,
        #eb9093 0%,
        #e46565 70%,
        #e25755 100%
      );
      background-image: -o-linear-gradient(
        top,
        #eb9093 0%,
        #e46565 70%,
        #e25755 100%
      );
      background-image: linear-gradient(
        top,
        #eb9093 0%,
        #e46565 70%,
        #e25755 100%
      );
      -webkit-box-shadow: inset 0 1px #dcaaaa, inset 0 0 0 1px #df777a,
        0 1px #a03a38, 0 3px #be4b49, 0 4px #a03a38, 0 5px 2px rgb(0 0 0 / 40%);
      box-shadow: inset 0 1px #dcaaaa, inset 0 0 0 1px #df777a, 0 1px #a03a38,
        0 3px #be4b49, 0 4px #a03a38, 0 5px 2px rgb(0 0 0 / 40%);
    }
    &.other:hover {
      background-color: #f2a900;
      background-image: unset;
    }
  }
`;
const DetaiPage = () => {
  const { movie } = useContext(UserContext);
  const urldefault =
    movie && movie.episode && movie.episode.length > 0 && movie.episode[0]?.url;
  const [urlMovie, setUrlMovie] = useState(urldefault);
  console.log(movie);
  return (
    <DetaiPageContainer>
      {movie && movie.episode && movie.episode.length > 0 ? (
        <div className='video'>
          <Iframe
            url={urlMovie}
            height='400px'
            width='710px'
            className='myClassname'
            display='initial'
            frameBorder='0'
            // position='relative'
            allow='fullscreen'
            allowFullScreen='true'
          />
          <div className='wrap-title'>
            {/* <h1 className='title'>{movie.category} : </h1> */}
            <h1 className='title'> {movie.title}</h1>
          </div>
          <div className='episode-list'>
            {movie.episode.map((episode, index) => (
              <div
                key={index}
                className={`episode ${
                  episode.url === urlMovie ? "active" : ""
                }`}
                onClick={() => {
                  setUrlMovie(episode.url);
                }}>
                {movie.episode.length >= 2 ? "Tập" : "Sever"}: {index + 1}
              </div>
            ))}
            <a href={movie.url} className='episode other'>
              Xem tại sever khác
            </a>
          </div>
        </div>
      ) : (
        <Empty description={<span>Phim này hiện chưa có...!!</span>} />
      )}
    </DetaiPageContainer>
  );
};

export default DetaiPage;

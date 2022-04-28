/** @format */

import React, { useContext } from "react";
import styled from "styled-components";
import PlayButton from "../../../Components/playbutton/playbutton";
import { UserContext } from "../../../context/itemmovie-context";
import Iframe from "react-iframe";

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
`;
const DetaiPage = () => {
  const { movie } = useContext(UserContext);
  console.log(movie);
  return (
    <DetaiPageContainer>
      <div className='video'>
        <Iframe
          url={movie.episode[0].url}
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
          <h1 className='title'>{movie.category} : </h1>
          <h1 className='title'> {movie.title}</h1>
        </div>
      </div>
    </DetaiPageContainer>
  );
};

export default DetaiPage;

/** @format */
import styled from "styled-components";
const Container = styled.div`
  .video-play-button {
    box-sizing: content-box;
    display: block;
    width: 32px;
    height: 44px;
    border-radius: 50%;
    padding: 18px 20px 18px 28px;
    position: absolute;
    left: 5%;
  }

  .video-play-button:before {
    content: "";
    position: absolute;
    z-index: 0;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: block;
    width: 80px;
    height: 80px;
    background: #ba1f24;
    border-radius: 50%;
    animation: pulse-border 1500ms ease-out infinite;
  }

  .video-play-button:after {
    content: "";
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: block;
    width: 80px;
    height: 80px;
    background: #fa183d;
    border-radius: 50%;
    transition: all 200ms;
  }

  .video-play-button:hover:after {
    background-color: darken(#fa183d, 10%);
  }

  .video-play-button span {
    display: block;
    position: relative;
    z-index: 3;
    width: 0;
    height: 0;
    border-left: 32px solid #fff;
    border-top: 22px solid transparent;
    border-bottom: 22px solid transparent;
  }

  @keyframes pulse-border {
    0% {
      transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
      opacity: 1;
    }
    100% {
      transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
      opacity: 0;
    }
  }
`;
const PlayButton = ({ item }) => {
  return (
    <Container>
      <div className='video-play-button'>
        <span></span>
      </div>
    </Container>
  );
};

export default PlayButton;

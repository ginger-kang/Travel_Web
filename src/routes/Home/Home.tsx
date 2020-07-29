import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ImageSlide from "./ImageSlide";

const HomeContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StartButton = styled.button`
  width: 10vw;
  min-width: 100px;
  height: 40px;
  min-width: 90px;
  min-height: 30px;
  font-size: 15px;
  border-radius: 8px;
  color: white;
  background: rgba(200, 200, 200, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;

const TravelButtonContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 15%;
`;

function Home() {
  return (
    <HomeContainer>
      <ImageSlide />
      <TravelButtonContainer>
        <Link to="/travel">
          <StartButton>
            <span>여행시작</span>
          </StartButton>
        </Link>
      </TravelButtonContainer>
    </HomeContainer>
  );
}

export default React.memo(Home);

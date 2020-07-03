import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import main1 from "../../Images/HomeImage/main1.jpeg";

const HomeContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StartButton = styled.button`
  width: 10vw;
  height: 40px;
  min-width: 90px;
  min-height: 30px;
  font-size: 15px;
  border-radius: 6px;
  color: white;
  background: #000000;

  &:hover {
    background: #3e3e3e;
  }
`;

const HomeImageContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60%;
  padding-top: 10px;
`;

const HomeImageTrailer = styled.figure`
  width: 55%;
  height: 100%;
  transition: all 1s ease;
  border-radius: 10px;

  @media screen and (max-width: 800px) {
    width: 480px;
    height: 370px;
  }
`;

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 17%;
  color: black;
`;

const MainTitle = styled.h1`
  font-size: 4vw;
`;

const TravelButtonContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 23%;
`;

function Home() {
  return (
    <HomeContainer>
      <HeaderContainer>
        <MainTitle>Travel</MainTitle>
        <p>
          일본 여행을 가고 싶지만 코로나로 인해 가지 못하는 사람들을 위한 웹
          사이트
        </p>
      </HeaderContainer>
      <HomeImageContainer>
        <HomeImageTrailer>
          <img
            src={main1}
            alt="japan"
            style={{ width: "100%", height: "100%" }}
          />
        </HomeImageTrailer>
      </HomeImageContainer>
      <TravelButtonContainer>
        <Link to="/travel">
          <StartButton>여행시작</StartButton>
        </Link>
      </TravelButtonContainer>
    </HomeContainer>
  );
}

export default Home;

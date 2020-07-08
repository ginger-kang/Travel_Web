import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import mainTokyo from "../../Images/HomePhoto/mainOsaka.jpg";

const HomeContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & img {
    width: 100%;
    height: 100%;
  }
`;

const StartButton = styled.button`
  width: 10vw;
  height: 40px;
  min-width: 90px;
  min-height: 30px;
  font-size: 15px;
  border-radius: 8px;
  color: white;
  background: rgba(170, 170, 170, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: rgba(220, 220, 220, 0.5);
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
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translateX(-50%);
`;

const MainTitle = styled.h1`
  font-size: 150px;
  color: white;
  font-family: "Montserrat", sans-serif;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
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
      <img src={mainTokyo} alt="main" />
      <HeaderContainer>
        <MainTitle>SAPPORO</MainTitle>
      </HeaderContainer>
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

export default Home;

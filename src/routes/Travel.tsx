import React from "react";
import styled from "styled-components";
import tokyo1 from "../Images/Tokyo/1.jpeg";
import tokyo2 from "../Images/Tokyo/2.jpeg";
import tokyo3 from "../Images/Tokyo/3.jpeg";
import tokyo4 from "../Images/Tokyo/4.jpeg";
import tokyo5 from "../Images/Tokyo/5.jpeg";
import tokyo6 from "../Images/Tokyo/6.jpeg";
import tokyo7 from "../Images/Tokyo/7.jpeg";
import tokyo8 from "../Images/Tokyo/8.jpeg";

const TravelContainer = styled.section`
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TravelNav = styled.nav`
  width: 100%;
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #c1d4ff, #ff83e9);
`;

const TravelPhotoContainer = styled.main`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3.5vw;
`;

const GridWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
`;

const PhotoContainer = styled.figure`
  width: 300px;
  height: 300px;

  & img {
    width: 100%;
    height: 100%;
  }
`;

function Travel() {
  return (
    <TravelContainer>
      <TravelNav></TravelNav>
      <TravelPhotoContainer>
        <GridWrapper>
          <PhotoContainer>
            <img src={tokyo1} alt="1" />
          </PhotoContainer>
          <PhotoContainer>
            <img src={tokyo2} alt="2" />
          </PhotoContainer>
          <PhotoContainer>
            <img src={tokyo3} alt="3" />
          </PhotoContainer>
          <PhotoContainer>
            <img src={tokyo4} alt="4" />
          </PhotoContainer>
          <PhotoContainer>
            <img src={tokyo5} alt="5" />
          </PhotoContainer>
          <PhotoContainer>
            <img src={tokyo6} alt="6" />
          </PhotoContainer>
          <PhotoContainer>
            <img src={tokyo7} alt="7" />
          </PhotoContainer>
          <PhotoContainer>
            <img src={tokyo8} alt="8" />
          </PhotoContainer>
        </GridWrapper>
      </TravelPhotoContainer>
    </TravelContainer>
  );
}

export default Travel;

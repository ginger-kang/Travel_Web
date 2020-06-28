import React from "react";
import styled from "styled-components";

const TravelContainer = styled.section`
  width: 100%;
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SideCityNav = styled.aside`
  width: 20%;
  min-width: 200px;
  height: 100vh;
  background: #fe3528;
`;

const TravelPhotoContainer = styled.section`
  width: 80%;
  height: 100%;
  background: #000000;
`;

function Travel() {
  return (
    <TravelContainer>
      <SideCityNav></SideCityNav>
      <TravelPhotoContainer></TravelPhotoContainer>
    </TravelContainer>
  );
}

export default Travel;

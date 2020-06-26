import React from "react";
import styled from "styled-components";

const TravelContainer = styled.section`
  width: 100%;
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SideCityNav = styled.aside`
  width: 20%;
  height: 100vh;
  background: red;
`;

function Travel() {
  return (
    <TravelContainer>
      <SideCityNav></SideCityNav>
    </TravelContainer>
  );
}

export default Travel;

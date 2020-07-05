import React from "react";
import styled from "styled-components";

const CityListContainer = styled.ul`
  width: 100%;
  height: 90%;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: row;
  }

  & li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    width: 100%;
    height: 220px;

    @media screen and (max-width: 800px) {
      width: 150px;
      height: 100%;
    }
  }
`;

const Tokyo = styled.li`
  & div {
    margin-bottom: 10px;
    width: 150px;
    height: 150px;
    border-radius: 100%;
    background: white;
  }
`;
const Hokkaido = styled.li`
  & div {
    margin-bottom: 10px;
    width: 150px;
    height: 150px;
    border-radius: 100%;
    background: white;
  }
`;
const Osaka = styled.li`
  & div {
    margin-bottom: 10px;
    width: 150px;
    height: 150px;
    border-radius: 100%;
    background: white;
  }
`;
const Kyoto = styled.li`
  & div {
    margin-bottom: 10px;
    width: 150px;
    height: 150px;
    border-radius: 100%;
    background: white;
  }
`;
const Hukuoka = styled.li`
  & div {
    margin-bottom: 10px;
    width: 150px;
    height: 150px;
    border-radius: 100%;
    background: white;
  }
`;

export default function CityList() {
  return (
    <CityListContainer>
      <Tokyo>
        <div />
        도쿄
      </Tokyo>
      <Hokkaido>
        <div />
        홋카이도
      </Hokkaido>
      <Osaka>
        <div />
        오사카
      </Osaka>
      <Kyoto>
        <div />
        교토
      </Kyoto>
      <Hukuoka>
        <div />
        후쿠오카
      </Hukuoka>
    </CityListContainer>
  );
}

import React from "react";
import styled from "styled-components";
import tokyoImage from "../Images/tokyo_list_image.jpg";
import osakaImage from "../Images/osaka_list_image.jpg";
import sapporoImage from "../Images/HomePhoto/mainSapporo.jpg";

interface cityIndexProps {
  currentIndex: number;
}

// const CurrentCityImageContainer = styled.figure`
//   margin-top: 15px;
//   margin-bottom: 15px;
//   width: 18vw;
//   height: 18vw;
//   border-radius: 100%;

//   & img {
//     border-radius: 100%;
//   }
// `;

const CityListContainer = styled("ul")`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: row;
  }

  & li {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    width: 100%;
    height: 130px;
    cursor: pointer;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 10px;

    & img {
      width: 40%;
      height: 100%;
      border-radius: 100%;
      margin-right: 20px;
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    }

    & span {
      width: 70%;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }

    @media screen and (max-width: 800px) {
      width: 150px;
      height: 100%;
    }
  }
`;

const Tokyo = styled.li``;
const Hokkaido = styled.li``;
const Osaka = styled.li``;
const Kyoto = styled.li``;
const Hukuoka = styled.li``;

interface cProps {
  handleChangeCity: any;
  currentIndex: number;
}

function CityList({ handleChangeCity, currentIndex }: cProps) {
  //console.log(currentIndex);
  const cityImages = [tokyoImage, sapporoImage, osakaImage];

  return (
    <React.Fragment>
      {/* <CurrentCityImageContainer>
        <img src={cityImages[currentIndex]} alt="currentcity" />
      </CurrentCityImageContainer> */}
      <CityListContainer>
        <Tokyo onClick={() => handleChangeCity(0)}>
          <img src={cityImages[0]} alt="currentcity" />
          <span>Tokyo</span>
        </Tokyo>
        <Hokkaido onClick={() => handleChangeCity(1)}>
          <img src={cityImages[1]} alt="currentcity" />
          <span>Sapporo</span>
        </Hokkaido>
        <Osaka onClick={() => handleChangeCity(2)}>
          <img src={cityImages[2]} alt="currentcity" />
          <span>Osaka</span>
        </Osaka>
        <Kyoto onClick={() => handleChangeCity(3)}>교토</Kyoto>
        <Hukuoka>후쿠오카</Hukuoka>
      </CityListContainer>
    </React.Fragment>
  );
}

export default React.memo(CityList);

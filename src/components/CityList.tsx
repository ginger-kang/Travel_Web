import React from "react";
import styled from "styled-components";
import { GET_CITY_LIST } from "../routes/Travel/TravelQuery";
import { useQuery } from "@apollo/react-hooks";
import Loading from "./LoadingPage";

interface cityIndexProps {
  currentIndex: number;
}

const CityListContainer = styled("ul")<cityIndexProps>`
  width: 100%;
  height: 60%;
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
    justify-content: center;
    align-items: center;
    font-size: 20px;
    width: 80%;
    height: 50px;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin: 5px;
    padding: 15px;
    background: white;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }

    @media screen and (max-width: 800px) {
      width: 150px;
      height: 100%;
    }
  }
`;

const CurrentCityImageContainer = styled.figure`
  margin-top: 15px;
  margin-bottom: 15px;
  width: 19vw;
  height: 19vw;
  border-radius: 100%;

  & img {
    border-radius: 100%;
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
  console.log(currentIndex);
  const { loading, error, data } = useQuery(GET_CITY_LIST, {
    variables: { first: 1 },
  });

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>error</div>;
  }

  const cityImages: any = [];
  data.citys.forEach((city: any) => {
    cityImages.push(city.photo[0].url);
  });

  return (
    <React.Fragment>
      <CurrentCityImageContainer>
        <img src={cityImages[currentIndex]} alt="currentcity" />
      </CurrentCityImageContainer>
      <CityListContainer currentIndex={currentIndex}>
        <Tokyo onClick={() => handleChangeCity("tokyo")}>도쿄</Tokyo>
        <Hokkaido onClick={() => handleChangeCity("hokkaido")}>삿포로</Hokkaido>
        <Osaka onClick={() => handleChangeCity("osaka")}>오사카</Osaka>
        <Kyoto onClick={() => handleChangeCity("kyoto")}>교토</Kyoto>
        <Hukuoka>
          <div />
          후쿠오카
        </Hukuoka>
      </CityListContainer>
    </React.Fragment>
  );
}

export default React.memo(CityList);

import React from "react";
import styled from "styled-components";
import { GET_CITY_LIST } from "../routes/Travel/TravelQuery";
import { useQuery } from "@apollo/react-hooks";
import Loading from "./LoadingPage";

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

    & div {
      margin-bottom: 10px;
      width: 150px;
      height: 150px;
      border-radius: 100%;
      background-size: cover;
      background-position: center;
      cursor: pointer;
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
}

export default function CityList({ handleChangeCity }: cProps) {
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
    <CityListContainer>
      <Tokyo>
        <div
          style={{ backgroundImage: `url(${cityImages[0]})` }}
          onClick={() => handleChangeCity("tokyo")}
        />
        도쿄
      </Tokyo>
      <Hokkaido>
        <div
          style={{ backgroundImage: `url(${cityImages[1]})` }}
          onClick={() => handleChangeCity("hokkaido")}
        />
        홋카이도
      </Hokkaido>
      <Osaka>
        <div
          style={{ backgroundImage: `url(${cityImages[2]})` }}
          onClick={() => handleChangeCity("osaka")}
        />
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

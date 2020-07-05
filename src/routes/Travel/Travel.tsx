import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
import { CITYS } from "./TravelQuery";
import Loading from "../../components/LoadingPage";
import CityList from "../../components/CityList";

const TravelContainer = styled.section`
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface NavProps {
  city: string;
}

const TravelCityNav = styled("nav")<NavProps>`
  width: 20%;
  height: 100vh;
  min-width: 200px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ city }) => {
    if (city === "tokyo") {
      return "linear-gradient(45deg, #c1d4ff, #ff83e9)";
    } else if (city === "hokkaido") {
      return "linear-gradient(45deg, #ffffff, #73b2ff)";
    }
  }};
  overflow: auto;
  @media screen and (max-width: 800px) {
    position: absolute;
    width: 100%;
    height: 150px;
  }
`;

const TravelPhotoContainer = styled.main`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5vw;
  margin-left: 8px;
  position: absolute;
  top: 0;
  left: 25.5%;

  @media screen and (max-width: 800px) {
    position: unset;
    left: 50%;
    margin-top: 180px;
  }
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
  width: 22vw;
  height: 22vw;
  min-width: 140px;
  min-height: 140px;

  & img {
    width: 100%;
    height: 100%;
  }
`;

function Travel() {
  const [cityName, setCityName] = useState<string>("tokyo");
  const [cityIndex, setCityIndex] = useState<number>(0);

  useEffect(() => {
    cmsCityIndex();
  });

  const cmsCityIndex = () => {
    if (cityName === "tokyo") {
      setCityIndex(0);
    } else if (cityName === "hokkaido") {
      setCityIndex(1);
    } else if (cityName === "osaka") {
      setCityIndex(2);
    }
  };

  return (
    <Query
      query={CITYS}
      notifyOnNetworkStatusChange={true}
      fetchPolicy={"cache-and-network"}
    >
      {({ loading, error, data }: any) => {
        if (loading) {
          return <Loading />;
        }
        if (error) {
          return <div>error</div>;
        }
        console.log(cityIndex);
        const tokyoData = data.citys[cityIndex].photo;
        return (
          <TravelContainer>
            <TravelCityNav city={cityName}>
              <CityList />
            </TravelCityNav>
            <TravelPhotoContainer>
              <GridWrapper>
                {tokyoData &&
                  tokyoData.map((photo: any) => (
                    <PhotoContainer key={photo.id}>
                      <img src={photo.url} alt="tokyo" />
                    </PhotoContainer>
                  ))}
              </GridWrapper>
            </TravelPhotoContainer>
          </TravelContainer>
        );
      }}
    </Query>
  );
}

export default Travel;

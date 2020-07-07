import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GET_CITYS } from "./TravelQuery";
import { useQuery } from "@apollo/react-hooks";
import Loading from "../../components/LoadingPage";
import CityList from "../../components/CityList";

const TravelContainer = styled.section`
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
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
  background: white;
  overflow: auto;
  box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 800px) {
    position: absolute;
    width: 100%;
    height: 150px;
  }
`;

const TravelPhotoContainer = styled.main`
  height: auto;
  display: flex;
  flex-direction: column;
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

const GetPhotoButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  margin-top: 30px;
`;

// 사진 순서 셔플
// let shuffledData: any = [];

// const shuffleImageData = (a: any) => {
//   for (let i = a.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [a[i], a[j]] = [a[j], a[i]];
//   }
//   return a;
// };

function Travel() {
  const [cityName, setCityName] = useState<string>("tokyo");
  const [photoVariable, setPhotoVariable] = useState<number>(6);
  const [cityIndex, setCityIndex] = useState<number>(0);
  // const [cityPhotos, setCityPhotos] = useState({});

  const { loading, error, data } = useQuery(GET_CITYS, {
    variables: { first: photoVariable },
  });

  useEffect(() => {
    cmsCityIndex();
  }, [cityName]);

  const cmsCityIndex = () => {
    if (cityName === "tokyo") {
      setCityIndex(0);
    } else if (cityName === "hokkaido") {
      setCityIndex(1);
    } else if (cityName === "osaka") {
      setCityIndex(2);
    } else if (cityName === "kyoto") {
      setCityIndex(3);
    }
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>error</div>;
  }
  let cityPhotos: any = data.citys[cityIndex].photo;

  const handleChangeCity = (city: string) => {
    setCityName(city);
    setPhotoVariable(6);
  };

  return (
    <TravelContainer>
      <TravelCityNav city={cityName}>
        <CityList handleChangeCity={handleChangeCity} />
      </TravelCityNav>
      <TravelPhotoContainer>
        <GridWrapper>
          {cityPhotos &&
            cityPhotos.map((photo: any) => (
              <PhotoContainer key={photo.id}>
                <img src={photo.url} alt="photo" />
              </PhotoContainer>
            ))}
        </GridWrapper>
        <GetPhotoButton
          style={{ width: "50px", height: "50px", borderRadius: "100%" }}
          onClick={() => setPhotoVariable(photoVariable + 6)}
        ></GetPhotoButton>
      </TravelPhotoContainer>
    </TravelContainer>
  );
}

export default Travel;

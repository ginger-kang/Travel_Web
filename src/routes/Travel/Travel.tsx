import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GET_CITYS } from "./TravelQuery";
import { useQuery } from "@apollo/react-hooks";
import Loading from "../../components/LoadingPage";
import CityList from "../../components/CityList";
import { TiArrowSortedDown } from "react-icons/ti";
import TravelPhotos from "./TravelPhotos";

const TravelContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TravelCityNav = styled("nav")`
  width: 20%;
  height: 100vh;
  min-width: 200px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  overflow: auto;
  background: rgba(0, 0, 0, 0.01);
  border-right: 1px solid rgba(0, 0, 0, 0.05);
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
  margin-top: 3vw;
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

const GetPhotoButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  margin-top: 30px;
  margin-bottom: 30px;

  & svg {
    color: white;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
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
  //const [cityName, setCityName] = useState<string>("tokyo");
  const [photoVariable, setPhotoVariable] = useState<number>(6);
  const [cityIndex, setCityIndex] = useState<number>(0);

  const { loading, error, data } = useQuery(GET_CITYS, {
    variables: { first: photoVariable },
  });

  useEffect(() => {
    console.log(cityIndex, photoVariable);
  });

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>error</div>;
  }

  let cityPhotos: any = data.citys[cityIndex].photo;

  const handleChangeCity = (city: number) => {
    setCityIndex(city);
    setPhotoVariable(6);
  };

  return (
    <>
      <TravelCityNav>
        <CityList
          handleChangeCity={handleChangeCity}
          currentIndex={cityIndex}
        />
      </TravelCityNav>
      <TravelContainer>
        <TravelPhotoContainer>
          <TravelPhotos cityPhotos={cityPhotos} />
          <GetPhotoButton
            style={{ width: "50px", height: "50px", borderRadius: "100%" }}
            onClick={() => setPhotoVariable(photoVariable + 6)}
          >
            <TiArrowSortedDown size={30} />
          </GetPhotoButton>
        </TravelPhotoContainer>
      </TravelContainer>
    </>
  );
}

export default React.memo(Travel);

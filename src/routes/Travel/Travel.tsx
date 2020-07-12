import React, { useState } from "react";
import styled from "styled-components";
import { GET_CITYS } from "./TravelQuery";
import { useQuery } from "@apollo/react-hooks";
import Loading from "../../components/LoadingPage";
import CityList from "../../components/CityList";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import TravelPhotos from "./TravelPhotos";

const TravelContainer = styled.section`
  width: 100%;
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
  @media screen and (max-width: 950px) {
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
  margin-left: 2.7vw;
  position: relative;
  top: 0;
  left: 8.5%;

  @media screen and (max-width: 950px) {
    position: unset;
    left: 50%;
    margin-top: 180px;
    margin-left: 0px;
  }
`;

const ScrollUpButton = styled.button`
  width: 50px;
  height: 50px;
  position: fixed;
  right: 10px;
  bottom: 10px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);

  & svg {
    color: white;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.5);
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
  const [cityIndex, setCityIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(6);

  const { loading, error, data } = useQuery(GET_CITYS);
  //console.log(cityIndex);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>error</div>;
  }

  const cityPhotos: any = data.citys[cityIndex].photo.slice(0, endIndex);

  const handleChangeCity = (city: number) => {
    setCityIndex(city);
    setEndIndex(6);
  };

  const handleScrollControll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleClick = () => {
    setEndIndex((endIndex) => endIndex + 6);
    console.log(endIndex);
  };

  return (
    <>
      <TravelCityNav>
        <CityList
          handleChangeCity={handleChangeCity}
          currentIndex={cityIndex}
        />
      </TravelCityNav>
      <ScrollUpButton onClick={handleScrollControll}>
        <TiArrowSortedUp size={30} />
      </ScrollUpButton>
      <TravelContainer>
        <TravelPhotoContainer>
          <TravelPhotos cityPhotos={cityPhotos} />
          <GetPhotoButton
            style={{ width: "50px", height: "50px", borderRadius: "100%" }}
            onClick={handleClick}
          >
            <TiArrowSortedDown size={30} />
          </GetPhotoButton>
        </TravelPhotoContainer>
      </TravelContainer>
    </>
  );
}

export default React.memo(Travel);

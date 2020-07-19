import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { GET_CITYS } from "./TravelQuery";
import { useQuery } from "@apollo/react-hooks";
import Loading from "../../components/LoadingPage";
import CityList from "../../components/CityList";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import TravelPhotos from "./TravelPhotos";
import LikedPhoto from "../../components/LikedPhoto";

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
  background: #ffffff;
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

const HomeLinkContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background: #ffffff;

    & svg {
      color: rgba(0, 0, 0, 0.6);
    }

    &:hover {
      background: #f3f3f3;

      & svg {
        color: black;
      }
    }
  }

  & svg {
    cursor: pointer;
  }
`;

interface scrollVisual {
  isVisual: number;
}

const ScrollUpButton = styled("button")<scrollVisual>`
  width: 50px;
  height: 50px;
  position: fixed;
  right: 10px;
  bottom: 10px;
  border-radius: 100%;
  display: ${({ isVisual }) => (isVisual >= 12 ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background: #000000;
  & svg {
    color: white;
  }
  &:hover {
    background: #3e3e3e;
  }
`;

const GetPhotoButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000000;
  margin-top: 30px;
  margin-bottom: 30px;
  & svg {
    color: white;
  }
  &:hover {
    background: #3e3e3e;
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
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likedPhoto, setLikedPhoto] = useState<any>([]);

  let localData: any = window.localStorage.getItem("id");

  useEffect(() => {
    //console.log(localData);
    if (!localData) {
      localData = [];
      window.localStorage.setItem("id", JSON.stringify(localData));
    } else {
      localData = JSON.parse(localData);
    }

    setLikedPhoto(localData);
  }, [localData]);

  const { loading, error, data } = useQuery(GET_CITYS);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>error</div>;
  }

  let like: any = [];
  for (let i = 0; i < data.citys.length; i++) {
    for (let j = 0; j < data.citys[i].photo.length; j++) {
      if (localData.indexOf(data.citys[i].photo[j].id) >= 0) {
        like.push(data.citys[i].photo[j]);
      }
    }
  }
  const cityPhotos: any = data.citys[cityIndex].photo.slice(0, endIndex);
  const cityName: string = data.citys[cityIndex].name;

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
    //console.log(endIndex);
  };

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <>
      <TravelCityNav>
        <HomeLinkContainer>
          <Link to="/">
            <TiArrowBackOutline size={30} />
          </Link>
          {isLiked ? (
            <IoMdHeart size={30} onClick={handleLikeClick} />
          ) : (
            <IoMdHeartEmpty size={30} onClick={handleLikeClick} />
          )}
        </HomeLinkContainer>
        <CityList
          handleChangeCity={handleChangeCity}
          currentIndex={cityIndex}
        />
      </TravelCityNav>
      <ScrollUpButton onClick={handleScrollControll} isVisual={endIndex}>
        <TiArrowSortedUp size={30} />
      </ScrollUpButton>
      <TravelContainer>
        <TravelPhotoContainer>
          {isLiked ? (
            <LikedPhoto
              likedPhoto={like}
              cityName={cityName}
              handleLiked={handleLikeClick}
            />
          ) : (
            <TravelPhotos cityPhotos={cityPhotos} cityName={cityName} />
          )}
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

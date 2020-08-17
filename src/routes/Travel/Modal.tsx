import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { BsArrowsFullscreen } from "react-icons/bs";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import GoogleMapContainer from "../../components/GoogleMapContainer";
import Geocoding from "../../components/Geocoding";

interface isModalOpen {
  showModal: boolean;
}

const ModalContainer = styled("div")<isModalOpen>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  display: ${({ showModal }) => (showModal ? "flex" : "none")};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
`;

const ModalBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & img {
    width: 50%;
    height: 50%;
  }

  @media screen and (max-width: 430px) {
    flex-direction: column;
  }
`;

const ModalCloseButton = styled.button`
  position: absolute;
  right: 8px;
  top: 8px;
  cursor: pointer;
  background: none;
  & svg {
    color: white;
  }
`;

const IconContainer = styled.div`
  width: 30vw;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & svg {
    color: white;
    margin: 8px;
    cursor: pointer;
  }

  & span {
    color: white;
    font-size: 3vw;
    font-family: "Montserrat", sans-serif;
  }

  @media screen and (max-width: 430px) {
    margin-top: 20px;
  }
`;

interface mProps {
  url: string;
  cityName: string;
  showModal: boolean;
  hideModal: any;
  photoId: any;
  location: any;
  isLiked: boolean;
  handleLikeButton: Function;
}

export default function Modal({
  url,
  cityName,
  showModal,
  hideModal,
  photoId,
  location,
  isLiked,
  handleLikeButton,
}: mProps) {
  const [mapVisible, setMapVisible] = useState(false);
  const [geoLocation, setGeoLocation] = useState("");

  useEffect(() => {
    const start = location.indexOf("_");
    const end = location.indexOf(".");
    if (start === -1) {
      setGeoLocation(location.substring(0, end));
    } else {
      setGeoLocation(location.substring(start + 1, end));
    }
    //console.log(geoLocation);
    //console.log(location);
  });

  let localData: any = window.localStorage.getItem("id");

  if (!localData) {
    localData = [];
    window.localStorage.setItem("id", JSON.stringify(localData));
  } else {
    localData = JSON.parse(localData);
  }

  const handleLike = (photoId: any) => {
    //console.log(photoId);
    const photoIdx = localData.indexOf(photoId);

    if (photoIdx === -1) {
      const tmpData = [...localData, photoId];
      window.localStorage.setItem("id", JSON.stringify(tmpData));
    }
    handleLikeButton();
    //console.log(window.localStorage.getItem("id"))
  };

  const handleUnlike = (photoId: any) => {
    const photoIdx = localData.indexOf(photoId);
    //console.log(photoIdx);
    localData.splice(photoIdx, 1);
    window.localStorage.setItem("id", JSON.stringify(localData));
    handleLikeButton();
  };

  const handleCloseMap = () => {
    setMapVisible(!mapVisible);
  };

  return (
    <ModalContainer showModal={showModal}>
      <ModalBox>
        <img src={url} alt="modal" />
        <IconContainer>
          <GoLocation size={45} onClick={() => setMapVisible(!mapVisible)} />
          {isLiked ? (
            <IoMdHeart size={50} onClick={() => handleUnlike(photoId)} />
          ) : (
            <IoMdHeartEmpty size={50} onClick={() => handleLike(photoId)} />
          )}
          <BsArrowsFullscreen size={45} />
        </IconContainer>
      </ModalBox>
      <ModalCloseButton>
        <MdClose size={33} onClick={hideModal} />
      </ModalCloseButton>
      {mapVisible && (
        <Geocoding location={geoLocation} handleCloseMap={handleCloseMap} />
      )}
    </ModalContainer>
  );
}

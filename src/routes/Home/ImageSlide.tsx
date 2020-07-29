import React, { useState } from "react";
import styled from "styled-components";
import mainTokyo from "../../Images/HomePhoto/TokyoMain.jpg";
import mainSapporo from "../../Images/HomePhoto/SapporoMain.jpg";
import mainKyoto from "../../Images/HomePhoto/KyotoMain.jpg";
import mainOsaka from "../../Images/HomePhoto/OsakaMain.jpg";
import mainEnosima from "../../Images/HomePhoto/EnosimaMain.jpg";
import mainOdaiba from "../../Images/HomePhoto/OdaibaMain.jpg";
import mainYamanashi from "../../Images/HomePhoto/YamanashiMain.jpg";

import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";

const ImageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: row;
`;

const MainTitle = styled.h1`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 10.5vw;
  color: white;
  font-family: "Merienda One", cursive;
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.3);
`;

const LeftButtonContainer = styled.div`
  position: absolute;
  width: 5vw;
  min-width: 4vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;

  & svg {
    color: white;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;

const RightButtonContainer = styled.div`
  position: absolute;
  width: 5%;
  height: 100vh;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;

  & svg {
    color: white;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;

interface indexProps {
  currentIndex: number;
}

const DotContainer = styled("div")<indexProps>`
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;

  & div:nth-child(${({ currentIndex }) => currentIndex + 1}) {
    background: white;
  }

  & div {
    width: 10px;
    height: 10px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 100%;
    background: none;
    margin: 0 5px;
  }
`;

export default function ImageSlide() {
  const [imageIndex, setImageIndex] = useState<number>(0);

  const image = [mainTokyo, mainSapporo, mainYamanashi, mainEnosima, mainKyoto];
  const name = ["TOKYO", "SAPPORO", "YAMANASHI", "ENOSIMA", "KYOTO"];

  const imageLeftSlide = () => {
    if (imageIndex === 0) {
      setImageIndex(4);
    } else {
      setImageIndex((imageIndex) => imageIndex - 1);
    }
  };

  const imageRightSlide = () => {
    if (imageIndex === 4) {
      setImageIndex(0);
    } else {
      setImageIndex((imageIndex) => imageIndex + 1);
    }
  };

  return (
    <>
      <ImageContainer>
        <div style={{ position: "relative" }}>
          <img
            src={image[imageIndex]}
            alt="tokyo"
            style={{ width: "100vw", height: "100vh" }}
          />
          <MainTitle>{name[imageIndex]}</MainTitle>
          <DotContainer currentIndex={imageIndex}>
            <div />
            <div />
            <div />
            <div />
            <div />
          </DotContainer>
        </div>
      </ImageContainer>
      <LeftButtonContainer onClick={imageLeftSlide}>
        <RiArrowLeftSLine size={50} />
      </LeftButtonContainer>
      <RightButtonContainer onClick={imageRightSlide}>
        <RiArrowRightSLine size={50} />
      </RightButtonContainer>
    </>
  );
}

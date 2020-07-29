import React, { useState } from "react";
import styled from "styled-components";
import tokyoImage from "../Images/tokyo_list_image.jpg";
import osakaImage from "../Images/osaka_list_image.jpg";
import sapporoImage from "../Images/HomePhoto/SapporoMain.jpg";
import enosimaImage from "../Images/HomePhoto/EnosimaMain.jpg";
import odaibaImage from "../Images/HomePhoto/OdaibaMain.jpeg";
import yamanashiImage from "../Images/HomePhoto/YamanashiMain.jpg";
import kyotoImage from "../Images/HomePhoto/KyotoMain.jpg";

interface cityIndexProps {
  currentIndex: number;
}

const CurrentCityImageContainer = styled.figure`
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & img {
    width: 18vw;
    height: 18vw;
    border-radius: 100%;
  }
  & h1 {
    font-family: "Courgette", cursive;
    margin-top: 15px;
    font-size: 4vw;
  }
  & button {
    width: 10vw;
    height: 3vw;
    min-width: 100px;
    min-height: 30px;
    font-size: 15px;
    color: white;
    background: black;
    border-radius: 8px;
    margin-top: 20px;
  }
`;

interface isViewModal {
  selectModal: boolean;
}

const CityListModal = styled("div")<isViewModal>`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  position: fixed;
  top: 0;
  left: 0;
  display: ${({ selectModal }) => (selectModal ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CityListContainer = styled("ul")`
  width: 45vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: none;

  & li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    width: 13vw;
    height: 13vw;
    min-width: 123px;
    min-height: 123px;
    cursor: pointer;
    padding: 10px;
    background: none;
    color: white;
    margin-bottom: 20px;

    & img {
      width: 90%;
      height: 90%;
      border-radius: 100%;
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
      margin-bottom: 15px;
    }

    & h1 {
      font-family: "Courgette", cursive;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      transform: scale(1.05);
    }
  }
`;

const ModalCloseButton = styled.button`
  width: 150px;
  height: 40px;
  color: white;
  font-size: 15px;
  border-radius: 8px;
  background: rgba(200, 200, 200, 0.8);
  margin-top: 15px;

  &:hover {
    background: #d0d0d0b3;
  }
`;

const Tokyo = styled.li``;
const Hokkaido = styled.li``;
const Osaka = styled.li``;
const Kyoto = styled.li``;
const Enosima = styled.li``;
const Yamanashi = styled.li``;
const Odaiba = styled.li``;
const Hukuoka = styled.li``;

interface cProps {
  handleChangeCity: any;
  currentIndex: number;
  cityName: string;
}

function CityList({ handleChangeCity, currentIndex, cityName }: cProps) {
  const [selectModal, setSelectModal] = useState<boolean>(false);

  //console.log(currentIndex);
  const cityImages = [
    tokyoImage,
    sapporoImage,
    osakaImage,
    kyotoImage,
    enosimaImage,
    yamanashiImage,
    odaibaImage,
  ];

  return (
    <React.Fragment>
      <CurrentCityImageContainer>
        <img src={cityImages[currentIndex]} alt="currentcity" />
        <h1>{cityName}</h1>
        <button onClick={() => setSelectModal(!selectModal)}>도시 선택</button>
      </CurrentCityImageContainer>
      <CityListModal selectModal={selectModal}>
        <CityListContainer>
          <Tokyo onClick={() => handleChangeCity(0)}>
            <img
              src={cityImages[0]}
              alt="currentcity"
              onClick={() => setSelectModal(!selectModal)}
            />
            <h1>Tokyo</h1>
          </Tokyo>
          <Hokkaido onClick={() => handleChangeCity(1)}>
            <img
              src={cityImages[1]}
              alt="currentcity"
              onClick={() => setSelectModal(!selectModal)}
            />
            <h1>Sapporo</h1>
          </Hokkaido>
          <Osaka onClick={() => handleChangeCity(2)}>
            <img
              src={cityImages[2]}
              alt="currentcity"
              onClick={() => setSelectModal(!selectModal)}
            />
            <h1>Osaka</h1>
          </Osaka>
          <Kyoto onClick={() => handleChangeCity(3)}>
            <img
              src={cityImages[3]}
              alt="currentcity"
              onClick={() => setSelectModal(!selectModal)}
            />
            <h1>Kyoto</h1>
          </Kyoto>
          <Enosima onClick={() => handleChangeCity(4)}>
            <img
              src={cityImages[4]}
              alt="currentcity"
              onClick={() => setSelectModal(!selectModal)}
            />
            <h1>Enosima</h1>
          </Enosima>
          <Yamanashi onClick={() => handleChangeCity(5)}>
            <img
              src={cityImages[5]}
              alt="currentcity"
              onClick={() => setSelectModal(!selectModal)}
            />
            <h1>Yamanashi</h1>
          </Yamanashi>
          <Odaiba onClick={() => handleChangeCity(6)}>
            <img
              src={cityImages[6]}
              alt="currentcity"
              onClick={() => setSelectModal(!selectModal)}
            />
            <h1>Odaiba</h1>
          </Odaiba>
        </CityListContainer>
        <ModalCloseButton onClick={() => setSelectModal(!selectModal)}>
          닫기
        </ModalCloseButton>
      </CityListModal>
    </React.Fragment>
  );
}

export default React.memo(CityList);

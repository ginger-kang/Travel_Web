import React, { useState } from "react";
import styled from "styled-components";
import tokyoImage from "../Images/tokyo_list_image.jpg";
import osakaImage from "../Images/osaka_list_image.jpg";
import sapporoImage from "../Images/HomePhoto/mainSapporo.jpg";

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
  & span {
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
  width: 30vw;
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
    width: 130px;
    height: 130px;
    cursor: pointer;
    padding: 10px;
    background: none;
    color: white;

    & img {
      width: 100px;
      height: 100px;
      border-radius: 100%;
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
      margin-bottom: 10px;
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

  &:hover {
    background: #d0d0d0b3;
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
  cityName: string;
}

function CityList({ handleChangeCity, currentIndex, cityName }: cProps) {
  const [selectModal, setSelectModal] = useState<boolean>(false);

  //console.log(currentIndex);
  const cityImages = [tokyoImage, sapporoImage, osakaImage];

  return (
    <React.Fragment>
      <CurrentCityImageContainer>
        <img src={cityImages[currentIndex]} alt="currentcity" />
        <span>{cityName}</span>
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
            <span>Tokyo</span>
          </Tokyo>
          <Hokkaido onClick={() => handleChangeCity(1)}>
            <img
              src={cityImages[1]}
              alt="currentcity"
              onClick={() => setSelectModal(!selectModal)}
            />
            <span>Sapporo</span>
          </Hokkaido>
          <Osaka onClick={() => handleChangeCity(2)}>
            <img
              src={cityImages[2]}
              alt="currentcity"
              onClick={() => setSelectModal(!selectModal)}
            />
            <span>Osaka</span>
          </Osaka>
          <Kyoto onClick={() => handleChangeCity(3)}>교토</Kyoto>
          <Hukuoka>후쿠오카</Hukuoka>
        </CityListContainer>
        <ModalCloseButton onClick={() => setSelectModal(!selectModal)}>
          닫기
        </ModalCloseButton>
      </CityListModal>
    </React.Fragment>
  );
}

export default React.memo(CityList);

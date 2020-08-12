import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const GridWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-column-gap: 1vw;
  grid-row-gap: 1vw;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 430px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 4vw;
  }
`;

const PhotoContainer = styled.figure`
  width: 21vw;
  height: 21vw;
  min-width: 155px;
  min-height: 155px;

  & img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  &:hover {
    transition: all 0.5s ease;
    transform: scale(1.02);
  }

  @media screen and (max-width: 430px) {
    min-width: 300px;
    min-height: 300px;
  }
`;

interface tProps {
  cityPhotos: any;
  cityName: string;
}

function TravelPhotos({ cityPhotos, cityName }: tProps) {
  const [modal, setModal] = useState<boolean>(false);
  const [photoPath, setPhotoPath] = useState<string>("");
  const [photoId, setPhotoId] = useState<string>("");
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [location, setLocation] = useState<string>("");

  let localData: any = window.localStorage.getItem("id");

  const showModal = (
    photoProps: string,
    photoId: string,
    photoFileName: string
  ) => {
    setModal(true);
    setPhotoPath(photoProps);
    setPhotoId(photoId);
    setLocation(photoFileName);

    const pIndex = localData.indexOf(photoId);

    if (pIndex > -1) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  };

  const handleLikeButton = () => {
    setIsLiked(!isLiked);
  };

  const hideModal = () => {
    setModal(false);
  };

  return (
    <>
      <GridWrapper>
        {cityPhotos &&
          cityPhotos.map((photo: any) => (
            <React.Fragment key={photo.id}>
              <PhotoContainer>
                <img
                  src={photo.url}
                  alt="city_photos"
                  onClick={() => showModal(photo.url, photo.id, photo.fileName)}
                />
              </PhotoContainer>
              <Modal
                photoId={photoId}
                url={photoPath}
                location={location}
                cityName={cityName}
                showModal={modal}
                hideModal={hideModal}
                isLiked={isLiked}
                handleLikeButton={handleLikeButton}
              />
            </React.Fragment>
          ))}
      </GridWrapper>
    </>
  );
}

export default React.memo(TravelPhotos);

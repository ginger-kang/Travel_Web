import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const GridWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-column-gap: 1vw;
  grid-row-gap: 1vw;
  grid-template-columns: repeat(3, 1fr);
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
    opacity: 0.7;
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

  //console.log(cityPhotos);

  const showModal = (photoProps: string, photoId: string) => {
    setModal(true);
    setPhotoPath(photoProps);
    setPhotoId(photoId);
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
                  onClick={() => showModal(photo.url, photo.id)}
                />
              </PhotoContainer>
              <Modal
                photoId={photoId}
                url={photoPath}
                cityName={cityName}
                showModal={modal}
                hideModal={hideModal}
              />
            </React.Fragment>
          ))}
      </GridWrapper>
    </>
  );
}

export default React.memo(TravelPhotos);

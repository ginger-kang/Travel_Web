import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

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
`;

interface tProps {
  cityPhotos: any;
}

export default function TravelPhotos({ cityPhotos }: tProps) {
  const [modal, setModal] = useState<boolean>(false);
  const [photoPath, setPhotoPath] = useState<string>("");

  const showModal = (photoProps: any) => {
    setModal(true);
    setPhotoPath(photoProps);
  };

  const hideModal = () => {
    setModal(false);
  };

  return (
    <>
      {cityPhotos &&
        cityPhotos.map((photo: any) => (
          <React.Fragment key={photo.id}>
            <PhotoContainer>
              <img
                src={photo.url}
                alt="city_photos"
                onClick={() => showModal(photo.url)}
              />
            </PhotoContainer>
            <Modal url={photoPath} showModal={modal} hideModal={hideModal} />
          </React.Fragment>
        ))}
    </>
  );
}

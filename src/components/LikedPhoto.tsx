import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../routes/Travel/Modal";

const GridWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-column-gap: 1vw;
  grid-row-gap: 1vw;
  grid-template-columns: repeat(3, 1fr);
`;

const LikedPhotoContainer = styled.figure`
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

interface lProps {
  likedPhoto: any;
  handleLiked: Function;
  cityName: string;
}

function LikedPhoto({ likedPhoto, handleLiked, cityName }: lProps) {
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
      <GridWrapper>
        {likedPhoto &&
          likedPhoto.map((photo: any) => (
            <React.Fragment key={photo.id}>
              <LikedPhotoContainer>
                <img
                  src={photo.url}
                  alt="city_photos"
                  onClick={() => showModal(photo.url)}
                />
              </LikedPhotoContainer>
              <Modal
                photoId={photo.id}
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

export default LikedPhoto;

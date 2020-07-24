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
    transition: all 0.5s ease;
    transform: scale(1.02);
  }
`;

interface lProps {
  handleLiked: Function;
  cityName: string;
  likedPhoto: any;
}

function LikedPhoto({ likedPhoto, handleLiked, cityName }: lProps) {
  const [modal, setModal] = useState<boolean>(false);
  const [photoPath, setPhotoPath] = useState<string>("");
  const [photoId, setPhotoId] = useState<string>("");
  const [isLiked, setIsLiked] = useState<boolean>(false);

  let localData: any = window.localStorage.getItem("id");

  const showModal = (photoProps: any, photoId: string) => {
    setModal(true);
    setPhotoPath(photoProps);
    setPhotoId(photoId);
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
        {likedPhoto &&
          likedPhoto.map((photo: any) => (
            <React.Fragment key={photo.id}>
              <LikedPhotoContainer>
                <img
                  src={photo.url}
                  alt="city_photos"
                  onClick={() => showModal(photo.url, photo.id)}
                />
              </LikedPhotoContainer>
              <Modal
                photoId={photoId}
                url={photoPath}
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

export default LikedPhoto;

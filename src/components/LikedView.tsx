import React from "react";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";

const LikedViewBox = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 950px) {
    flex-direction: row;
  }

  & span {
    font-size: 20px;
    margin-top: 40px;

    @media screen and (max-width: 950px) {
      display: none;
    }
  }
`;

export default function LikedView() {
  return (
    <LikedViewBox>
      <FaHeart size={95} />
      <span>좋아요 누른 사진</span>
    </LikedViewBox>
  );
}

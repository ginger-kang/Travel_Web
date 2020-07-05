import React from "react";
import styled from "styled-components";
import Loading from "../Images/loading.png";

const LoadingContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingIconBox = styled("div")`
  width: 200px;
  height: 200px;
  transition: 1s ease;

  & img {
    animation: LoadingIcon infinite 1s ease-in-out both;
    @keyframes LoadingIcon {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;

export default function LoadingPage() {
  return (
    <LoadingContainer>
      <LoadingIconBox>
        <img src={Loading} alt="loading" />
      </LoadingIconBox>
    </LoadingContainer>
  );
}

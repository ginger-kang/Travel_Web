import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background: rgba(0, 0, 0, 0.1);
`;

const ModalBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 45vw;
  height: 46vw;
  transition: all 1s ease;
  transform: translateX(-50%) translateY(-50%);
  & img {
    width: 100%;
    height: 100%;
  }
`;

const ModalCloseButton = styled.button`
  position: absolute;
  right: 8px;
  top: 8px;
  cursor: pointer;
  background: none;
  & svg {
    color: white;
  }
`;

interface mProps {
  url: string;
  showModal: boolean;
  hideModal: any;
}

export default function Modal({ url, showModal, hideModal }: mProps) {
  return showModal ? (
    <ModalContainer>
      <ModalBox>
        <img src={url} alt="modal" />
      </ModalBox>
      <ModalCloseButton>
        <MdClose size={33} onClick={hideModal} />
      </ModalCloseButton>
    </ModalContainer>
  ) : null;
}

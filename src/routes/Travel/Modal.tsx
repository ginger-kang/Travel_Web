import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { GoLocation } from "react-icons/go";

interface isModalOpen {
  showModal: boolean;
}

const ModalContainer = styled("div")<isModalOpen>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  display: ${({ showModal }) => (showModal ? "flex" : "none")};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
`;

const ModalBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & img {
    width: 50%;
    height: 50%;
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

const IconContainer = styled.div`
  width: 30vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

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
  return (
    <ModalContainer showModal={showModal}>
      <ModalBox>
        <img src={url} alt="modal" />
        <IconContainer>
          <GoLocation size={50} />
        </IconContainer>
      </ModalBox>
      <ModalCloseButton>
        <MdClose size={33} onClick={hideModal} />
      </ModalCloseButton>
    </ModalContainer>
  );
}

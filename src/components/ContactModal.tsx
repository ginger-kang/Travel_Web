import React from "react";
import styled from "styled-components";
import { FiMail } from "react-icons/fi";

interface ModalShow {
  showModal: boolean;
}

const ContactModalContainer = styled("div")<ModalShow>`
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
`;

const ContactBox = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 6px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  & span {
    font-family: "Courgette", cursive;
    font-size: 20px;
  }
`;

const ModalCloseButton = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 8px;
  color: white;
  background: black;
`;

interface cProps {
  showModal: boolean;
  handleCloseModal: Function;
}

export default function ContactModal({ showModal, handleCloseModal }: cProps) {
  return (
    <ContactModalContainer showModal={showModal}>
      <ContactBox>
        <FiMail size={33} />
        <span>kdhoon07@gmail.com</span>
        <ModalCloseButton onClick={() => handleCloseModal()}>
          닫기
        </ModalCloseButton>
      </ContactBox>
    </ContactModalContainer>
  );
}

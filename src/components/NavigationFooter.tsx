import React, { useState } from "react";
import styled from "styled-components";
import ContactModal from "./ContactModal";

import { GoMarkGithub } from "react-icons/go";
import { GrInstagram } from "react-icons/gr";
import { FiMail } from "react-icons/fi";

const NavFooter = styled.footer`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-top: 1px solid rgba(0, 0, 0, 0.2);

  & svg {
    cursor: pointer;
  }
`;

export default function NavigationFooter() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleCloseModal = () => {
    setShowModal(!showModal);
  };

  return (
    <NavFooter>
      <GoMarkGithub size={30} />
      <GrInstagram size={30} />
      <FiMail size={35} onClick={() => setShowModal(!showModal)} />
      <ContactModal showModal={showModal} handleCloseModal={handleCloseModal} />
    </NavFooter>
  );
}

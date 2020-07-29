import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { GrInstagram } from "react-icons/gr";
import { FiMail, FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

import ContactModal from "./ContactModal";
import NavigationFooter from "./NavigationFooter";

interface navShow {
  showNav: boolean;
}

const RespoNavContainer = styled("nav")<navShow>`
  width: 100vw;
  height: 150px;
  position: absolute;
  left: 0;
  top: 150px;
  display: ${({ showNav }) => (showNav ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;

  @media screen and (min-width: 950px) {
    display: none;
  }

  & div {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    & a {
      width: 100%;
      height: 50px;
      color: black;
      display: flex;
      justify-content: center;
      align-items: center;

      & span {
        text-align: center;
        width: 200px;
      }
    }

    & span {
      text-align: center;
      width: 200px;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }
  }
`;

const NavbarIcon = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 950px) {
    display: flex;
  }
`;

const NavFooter = styled.footer`
  width: 100%;
  height: 50px;
  display: none;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 950px) {
    display: flex;
  }

  & svg {
    cursor: pointer;
  }
`;

interface nProps {
  handleLikeClick: Function;
}

export default function ResponsiveNav({ handleLikeClick }: nProps) {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleCloseModal = () => {
    setShowNav(!showNav);
    setShowModal(!showModal);
  };

  const handleLikedClick = () => {
    setShowNav(!showNav);
    handleLikeClick();
  };

  return (
    <>
      <NavbarIcon>
        <GiHamburgerMenu size={30} onClick={() => setShowNav(!showNav)} />
      </NavbarIcon>
      <RespoNavContainer showNav={showNav}>
        <div>
          <Link to="/">
            <FiHome size={30} />
            <span>홈으로 가기</span>
          </Link>
        </div>
        <div onClick={() => handleLikedClick()}>
          <FaRegHeart size={30} />
          <span>좋아요 표시한 사진</span>
        </div>
        <NavFooter>
          <a
            onClick={() =>
              window.open("https://github.com/ginger-kang", "_blank")
            }
          >
            <GoMarkGithub size={30} />
          </a>
          <a
            onClick={() =>
              window.open("https://www.instagram.com/dehhun/", "_blank")
            }
          >
            <GrInstagram size={30} />
          </a>
          <FiMail size={35} onClick={() => setShowModal(!showModal)} />
        </NavFooter>
      </RespoNavContainer>
      <ContactModal showModal={showModal} handleCloseModal={handleCloseModal} />
    </>
  );
}

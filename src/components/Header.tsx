import React, { useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo-dark.png";
import burgerMenu from "../assets/shared/mobile/icon-hamburger.svg";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 64px 165px;
  height: 27px;

  > img {
    width: 202px;
    cursor: pointer;
  }
  @media (max-width: 1400px) {
    padding: 64px 60px;
  }
  @media (max-width: 1080px) {
    padding: 64px 20px;
  }
  @media (max-width: 768px) {
    padding: 64px 20px;
  }
`;
interface NavProps {
  isOpen: boolean;
}

const ResponsiveNav = styled.nav<NavProps>`
  width: 370px;
  img {
    display: none;
  }

  ul {
    z-index: 50;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    overflow: hidden;
    transition: height 0.15s ease-in-out;
    padding: 0;
  }
  a {
    letter-spacing: 2px;
    color: #000;
    text-decoration: none;
    position: relative;
    &:after {
      content: "";
      height: 1px;
      width: 0;
      transition: width 0.2s ease-in-out;
      bottom: 0;
      left: 0;
      background-color: #00000077;
      position: absolute;
    }
    &:hover:after {
      width: 100%;
    }
  }
  @media (max-width: 680px) {
    width: auto;
    img {
      display: block;
    }
    a {
      color: #fff;
    }
    ul {
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      position: absolute;
      top: 128px;
      left: 0;
      right: 0;
      zindex: 10;
      height: ${(props) => (props.isOpen ? "240px" : "0")};
      background-color: #000;
    }
  }
`;
const Header = () => {
  const navigate = useNavigate();

  const [isOpen, switchOpen] = useReducer((isOpen) => !isOpen, false);
  return (
    <StyledHeader>
      <img
        src={logo}
        alt="Designo Logo"
        title="Designo"
        onClick={() => navigate("/")}
      />
      <ResponsiveNav isOpen={isOpen}>
        <img
          src={burgerMenu}
          alt="burger menu"
          onClick={switchOpen}
          data-testid="burger-menu"
        />
        <ul data-testid="nav-list">
          <li onClick={switchOpen}>
            <Link to="/about">OUR COMPANY</Link>
          </li>
          <li onClick={switchOpen}>
            <Link to="/locations">LOCATIONS</Link>
          </li>
          <li onClick={switchOpen}>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </ResponsiveNav>
    </StyledHeader>
  );
};

export default Header;

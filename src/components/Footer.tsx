import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import lightLogo from "../assets/shared/desktop/logo-light.png";
import faceBook from "../assets/shared/desktop/icon-facebook.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
import youtube from "../assets/shared/desktop/icon-youtube.svg";
import pinterest from "../assets/shared/desktop/icon-pinterest.svg";
import pattern from "../assets/shared/desktop/bg-pattern-small-circle.svg";
import LightButton from "./shared/LightButton";

const StyledFooter = styled.footer`
  position: relative;
  background-color: #000;
  span {
    color: #fff7;
  }
  > div:first-child {
    border-bottom: 1px solid #ffffff66;
    padding-bottom: 60px;
  }

  display: flex;
  flex-direction: column;
  gap: 64px;
  padding: 64px 165px;
  align-items: center;
  z-index: 10;
  .logo > img {
    width: 100%;
  }
  .logo {
    width: 202px;
    cursor: pointer;
  }
  > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .contactInfo {
    > div {
      display: flex;
      flex-direction: column;
      align-items: start;
    }
    > div:last-child {
      flex-direction: row;
      align-items: end;
      gap: 16px;
    }
    img {
      cursor: pointer;
      transition: 0.15s ease-in-out;
    }
    img:hover {
      transform: scale(1.2);
    }
    img:active {
      transform: scale(1.1);
    }
  }
  margin-top: 300px;

  @media (max-width: 1400px) {
    padding: 64px 60px;
  }
  @media (max-width: 1080px) {
    padding: 64px 20px;
  }
  @media (max-width: 768px) {
    padding: 64px 20px;
  }
  @media (max-width: 680px) {
    margin-top: 400px;

    .logo > img {
      width: 202px;
    }
    .logo {
      justify-content: center;
      padding-bottom: 20px;
      display: flex;
      width: 100%;
      border-bottom: 1px solid #ffffff66;
    }
    > div:first-child {
      flex-direction: column;
      align-items: center;
      border-bottom: none;
      padding-bottom: 0;
    }
    .contactInfo {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
  }
`;
const ResponsiveNav = styled.nav`
  width: 370px;
  img {
    display: none;
  }

  ul {
    z-index: 10;
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
    color: #fff;
    text-decoration: none;
    position: relative;
    &:after {
      content: "";
      height: 1px;
      width: 0;
      transition: width 0.2s ease-in-out;
      bottom: 0;
      left: 0;
      background-color: #ffffff77;
      position: absolute;
    }
    &:hover:after {
      width: 100%;
    }
  }
  @media (max-width: 680px) {
    width: 100%;
    ul {
      margin-top: 20px;
      align-items: center;
      width: 100%;
      flex-direction: column;
      gap: 20px;
    }
  }
`;
const ContactNow = styled.div`
  position: absolute;
  top: -65%;
  > div {
    background-image: linear-gradient(
        90deg,
        rgba(231, 129, 107, 1) 0%,
        rgba(255, 255, 255, 0) 34%
      ),
      url(${pattern});
    background-fit: cover;
    background-repeat: repeat;
    background-size: 25%;
    background-position: 0 140px;
    padding: 80px;
    width: 100%;
    border-radius: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #e7816b;

    > div {
      display: flex;
      gap: 16px;
      flex-direction: column;
      width: 50%;
    }
  }

  padding: 0 165px;

  h2,
  p {
    color: #fff;
  }
  @media (max-width: 1400px) {
    padding: 0 60px;
  }
  @media (max-width: 1080px) {
    padding: 0 20px;
    > div > div {
      width: 62%;
    }
  }
  @media (max-width: 768px) {
    padding: 0 20px;
  }
  @media (max-width: 690px) {
    top: -40%;
    > div {
      padding: 40px;
      text-align: center;
      gap: 20px;
      flex-direction: column;
      > div {
        width: 100%;
      }
    }
  }
  @media (max-width: 425px) {
    top: -40%;
    padding: 0 20px;
    > div {
      padding: 25px 15px;
    }
  }
  @media (max-width: 340px) {
    top: -45%;
    padding: 0 20px;
    > div {
      padding: 25px 15px;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <div className="logo">
          <img src={lightLogo} alt="dark logo" />
        </div>
        <ResponsiveNav>
          <ul>
            <li>
              <Link to="/about">OUR COMPANY</Link>
            </li>
            <li>
              <Link to="/locations">LOCATIONS</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </ResponsiveNav>
      </div>
      <div className="contactInfo">
        <div>
          <span>Designo Central Office</span>
          <span>3886 Wellington Street</span>
          <span>Toronto, Ontario M9C 3J5</span>
        </div>
        <div>
          <span>Contact Us (Central Office)</span>
          <span>P : +1 253-863-8967</span>
          <span>M : contact@designo.co</span>
        </div>
        <div>
          <img src={faceBook} alt="Facebook" />
          <img src={youtube} alt="Youtube" />
          <img src={twitter} alt="Twitter" />
          <img src={pinterest} alt="Pintrist" />
          <img src={instagram} alt="Instagram" />
        </div>
      </div>
      <ContactNow>
        <div>
          <div>
            <h2>Let’s talk about your project</h2>
            <p>
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>

          <LightButton>Get in touch</LightButton>
        </div>
      </ContactNow>
    </StyledFooter>
  );
};
export default Footer;

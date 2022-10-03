import React from "react";
import styled from "styled-components";
import heroPhone from "../assets/home/desktop/image-hero-phone.png";
import webDesign from "../assets/home/desktop/image-web-design-large.jpg";
import graphicDesign from "../assets/home/desktop/image-graphic-design.jpg";
import appDesign from "../assets/home/desktop/image-app-design.jpg";
import heroBG from "../assets/home/desktop/bg-pattern-hero-home.svg";
import rightArrow from "../assets/shared/desktop/icon-right-arrow.svg";
import friendly from "../assets/home/desktop/illustration-friendly.svg";
import passionate from "../assets/home/desktop/illustration-passionate.svg";
import resourceful from "../assets/home/desktop/illustration-resourceful.svg";
import LightButton from "./shared/LightButton";
import Card from "./shared/Card";
import { useNavigate } from "react-router-dom";

const StyledMain = styled.main`
  display: flex;
  gap: 140px;
  flex-direction: column;
  align-items: center;
  padding: 0 165px;
  @media (max-width: 1400px) {
    padding: 64px 60px;
  }
  @media (max-width: 1080px) {
    padding: 64px 20px;
  }
  @media (max-width: 768px) {
    padding: 0 20px;
  }
  @media (max-width: 425px) {
    padding: 0;
  }
`;
const Portfolio = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, 320px);
  grid-gap: 25px;
  > div:first-child {
    grid-row: 1 / span 2;
  }
  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(3, 320px);
    > div:first-child {
      grid-row: 1 / span 1;
    }
  }
  @media (max-width: 425px) {
    padding: 0 20px;
  }
`;

const AboutInfo = styled.div`
  overflow: hidden;
  background-color: #e7816b;
  color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  position: relative;
  background: url(${heroBG}), #e7816b;
  background-repeat: no-repeat;
  background-position: right;
  h1 {
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 1;
  }
  div {
    height: 430px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    margin: 110px 95px;
  }
  p {
    padding: 0 90px 0 0;
    font-weight: 400;
    font-size: 1.1rem;
  }
  img {
    position: absolute;
    right: -52px;
    top: -45px;
  }
  @media (max-width: 1080px) {
    img{
      right: -80px;
    }
    div{
      margin: 110px 40px;
    }
  }
  @media (max-width: 768px) {
    div {
      margin: 0;
      width: 100%;
      align-items: center;
      text-align: center;
      height: 1000px;
      padding: 80px 100px 500px 100px;
    }
    p {
      padding: 0 20px;
    }
    img {
      top: auto;
      right: 50%;
      bottom: -350px;
      transform: translateX(50%);
    }
  }
  @media (max-width: 620px) {
    div {
      gap:40px;
      padding: 80px 20px 0 20px;
      justify-content: flex-start;
      height: calc(100vh *2 - 100vw);
  }
  @media (max-width: 425px) {
      border-radius: 0;
    

`;

const WhyUs = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }
  > div > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    font-size: 1.8rem;
    font-weight: 400;
    letter-spacing: 2px;
  }
  p {
    text-align: center;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    > div {
      flex-direction: row;
    }
    > div > div {
      align-items: flex-start;
    }
    p {
      text-align: left;
    }
  }
  @media (max-width: 450px) {
    padding: 0 20px;
    > div {
      flex-direction: column;
    }
    > div > div {
      align-items: center;
    }
    p {
      text-align: center;
    }
  }
`;
const Home = () => {
  const navigate = useNavigate();
  return (
    <StyledMain>
      <AboutInfo>
        <div>
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <LightButton>LEARN MORE</LightButton>
          <img src={heroPhone} alt="phone frame" />
        </div>
      </AboutInfo>
      <Portfolio>
        <Card type={"WEB"} />
        <Card type={"APP"} />
        <Card type={"GRAPHIC"} />
      </Portfolio>
      <WhyUs>
        <div>
          <img src={passionate} alt="passionate" />

          <div>
            <h1>PASSIONATE</h1>
            <p>
              Each project starts with an in-depth brand research to ensure we
              only create products that serve a purpose. We merge art, design,
              and technology into exciting new solutions.
            </p>
          </div>
        </div>
        <div>
          <img src={resourceful} alt="resourceful" />
          <div>
            <h1>RESOURCEFUL</h1>
            <p>
              Everything that we do has a strategic purpose. We use an agile
              approach in all of our projects and value customer collaboration.
              It guarantees superior results that fulfill our clients’ needs.
            </p>
          </div>
        </div>
        <div>
          <img src={friendly} alt="friendly" />
          <div>
            <h1>FRIENDLY</h1>
            <p>
              We are a group of enthusiastic folks who know how to put people
              first. Our success depends on our customers, and we strive to give
              them the best experience a company can provide.
            </p>
          </div>
        </div>
      </WhyUs>
    </StyledMain>
  );
};
export default Home;

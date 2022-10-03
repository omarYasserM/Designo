import React from "react";
import styled from "styled-components";
import aboutImage from "../assets/about/desktop/image-about-hero.jpg";
import talentImage from "../assets/about/desktop/image-world-class-talent.jpg";
import realDealImage from "../assets/about/desktop/image-real-deal.jpg";
import LocationsSelect from "./shared/LocationsSelect";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 165px;
  gap: 140px;
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
const AboutUs = styled.div`
  display: flex;
  background-color: #e7816b;
  border-radius: 15px;
  color: white;
  height: 500px;
  h1 {
    font-weight: 500;
    font-size: 3.2rem;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 65%;
    justify-content: center;
    padding-left: 100px;
    padding-right: 120px;
  }
  img {
    object-fit: cover;
    height: 100%;
    width: 40%;
    border-radius: 0 15px 15px 0;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    height: auto;
    div {
      width: 100%;
      text-align: center;
      margin-bottom: auto;
      padding: 80px 30px;
    
    }
    img {
      width: 100%;
      height: 60%;
      border-radius: 15px 15px 0 0;
      margin-bottom: auto;
  }
  @media (max-width: 425px) {
    border-radius: 0;
    img{
      border-radius: 0;
    }
  }
`;
const Section = styled.div`
  display: flex;
  ${(props: { reverse: boolean }) =>
    props.reverse && `flex-direction: row-reverse;`}
  align-items: center;
  gap: 80px;
  background-color: #fdf3f0;
  border-radius: 15px;
  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    ${(props: { reverse: boolean }) =>
      props.reverse
        ? `padding: 20px 100px 20px 0;`
        : `padding: 20px 0 20px 100px;`}
    
  }
  h1 {
    color: #e7816b;
    font-weight: 500;
  }

  img {
    width: 45%;
    ${(props: { reverse: boolean }) =>
      props.reverse
        ? `border-radius: 15px 0 0 15px;`
        : `border-radius: 0 15px 15px 0;`}
  }
  @media (max-width: 1400px) {
    
    div {
      ${(props: { reverse: boolean }) =>
        props.reverse
          ? `padding: 20px 80px 20px 0;`
          : `padding: 20px 0 20px 80px;`}
      
    }
  }
  @media (max-width: 840px) {
    gap: 20px;
    div {
      ${(props: { reverse: boolean }) =>
        props.reverse
          ? `padding: 20px 20px 20px 0;`
          : `padding: 20px 0 20px 20px;`}
      
    }
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    div {
      align-items: center;
      padding: 20px 40px;
      text-align: center;
    }
    img {
      border-radius: 15px 15px 0 0;
      width: 100%;
      height: 400px;
      object-fit: cover;
    }
  }
  @media (max-width: 425px) {
    border-radius: 0;
    &:not(:last-child) {
    margin-top: -140px;
    }
    img{
      border-radius: 0;
    }

`;
const About = () => {
  return (
    <StyledMain>
      <AboutUs>
        <div>
          <h1>About Us</h1>
          <p>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients' audiences.
          </p>
        </div>
        <img src={aboutImage} alt="team working together" />
      </AboutUs>
      <Section reverse={true}>
        <div>
          <h1>World-class Talent</h1>
          <p>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p>
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>
        <img src={talentImage} alt="team working together" />
      </Section>
      <LocationsSelect />
      <Section reverse={false}>
        <div>
          <h1>The real deal</h1>
          <p>
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p>
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>
        <img src={realDealImage} alt="team working together" />
      </Section>
    </StyledMain>
  );
};
export default About;

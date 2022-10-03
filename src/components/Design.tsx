import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import pattern from "../assets/shared/desktop/bg-pattern-small-circle.svg";
import Card from "./shared/Card";
import rightArrow from "../assets/shared/desktop/icon-right-arrow.svg";
import graphicDesign from "../assets/home/desktop/image-graphic-design.jpg";
import { useDownloadURL } from "react-firebase-hooks/storage";
import {
  useCollectionData,
  useCollectionDataOnce,
  useCollectionOnce,
} from "react-firebase-hooks/firestore";
import { ref } from "firebase/storage";
import { firestore, storage } from "../firebase/config";
import { collection } from "firebase/firestore";

const data = {
  web: {
    title: "Web Design",
    description:
      "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    projects: [
      {
        title: "Express",
        description:
          "A multi-carrier shipping website for ecommerce businesses",
      },
      {
        title: "Transfer",
        description:
          "Site for low-cost money transfers and sending money within seconds",
      },
      {
        title: "Photon",
        description:
          "A state-of-the-art music player with high-resolution audio and DSP effects",
      },
      {
        title: "Builder",
        description:
          "Connects users with local contractors based on their location",
      },
      {
        title: "Blogr",
        description:
          "Blogr is a platform for creating an online blog or publication",
      },
      {
        title: "Camp",
        description:
          "Get expert training in coding, data, design, and digital marketing",
      },
    ],
  },
  app: {
    title: "App Design",
    description:
      "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
    projects: [
      {
        title: "Express",
        description:
          "A multi-carrier shipping website for ecommerce businesses",
        image: "../assets/app/image-express.jpg",
      },
      {
        title: "Transfer",
        description:
          "Site for low-cost money transfers and sending money within seconds",
        image: "../assets/app/image-transfer.jpg",
      },
      {
        title: "Photon",
        description:
          "A state-of-the-art music player with high-resolution audio and DSP effects",
        image: "../assets/app/image-photon.jpg",
      },
      {
        title: "Builder",
        description:
          "Connects users with local contractors based on their location",
        image: "../assets/app/image-builder.jpg",
      },
      {
        title: "Blogr",
        description:
          "Blogr is a platform for creating an online blog or publication",
        image: "../assets/app/image-blogr.jpg",
      },
      {
        title: "Camp",
        description:
          "Get expert training in coding, data, design, and digital marketing",
        image: "../assets/app/image-camp.jpg",
      },
    ],
  },
  graphic: {
    title: "Graphic Design",
    description:
      "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
    projects: [
      {
        title: "Express",
        description:
          "A multi-carrier shipping website for ecommerce businesses",
        image: "../assets/graphic/image-express.jpg",
      },
      {
        title: "Transfer",
        description:
          "Site for low-cost money transfers and sending money within seconds",
        image: "../assets/graphic/image-transfer.jpg",
      },
      {
        title: "Photon",
        description:
          "A state-of-the-art music player with high-resolution audio and DSP effects",
        image: "../assets/graphic/image-photon.jpg",
      },
      {
        title: "Builder",
        description:
          "Connects users with local contractors based on their location",
        image: "../assets/graphic/image-builder.jpg",
      },
      {
        title: "Blogr",
        description:
          "Blogr is a platform for creating an online blog or publication",
        image: "../assets/graphic/image-blogr.jpg",
      },
      {
        title: "Camp",
        description:
          "Get expert training in coding, data, design, and digital marketing",
        image: "../assets/graphic/image-camp.jpg",
      },
    ],
  },
  notFound: {
    title: "Not Found",
    description: "Sorry, we couldn't find that page",
    projects: [],
  },
};

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
const Banner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 15px;
  background-color: #e7816b;
  color: white;
  padding: 60px;
  gap: 30px;
  background-image: linear-gradient(
      180deg,
      rgba(231, 129, 107, 1) 10%,
      rgba(255, 255, 255, 0) 20%
    ),
    url(${pattern});
  background-fit: cover;
  background-repeat: repeat;
  background-size: 700px;
  background-position: 0 140px;
  h1:first-letter {
    text-transform: uppercase;
  }
  h1 {
    font-weight: 500;
    font-size: 3.2rem;
  }
  p {
    width: 28%;
  }
  @media (max-width: 1040px) {
    p {
      width: 50%;
    }
  }
  @media (max-width: 680px) {
    p {
      width: 100%;
    }
  }
  @media (max-width: 425px) {
    padding: 100px 20px;
    border-radius: 0;
  }
`;
const StyledSamples = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(30%, 1fr));
  grid-auto-rows: minmax(500px, 1fr);
  grid-gap: 25px;
  @media (max-width: 865px) {
    grid-template-columns: 100%;
    grid-auto-rows: 300px;
  }
  @media (max-width: 425px) {
    grid-auto-rows: 450px;
  }
`;

const StyledSample = styled.div`
  cursor: pointer;
  &:hover {
    background-color: #e7816b;
    * {
      color: white;
    }
  }
  border-radius: 15px;
  background-color: #fdf3f0;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  text-align: center;
  .img-place-holder {
    background-color: #cfcfcf99;
  }
  img,
  .img-place-holder {
    width: 100%;
    height: 60%;
    border-radius: 15px 15px 0 0;
    object-fit: cover;
  }
  h3 {
    font-size: 1.6rem;
    font-weight: 500;
    text-transform: uppercase;
    color: #e7816b;
    letter-spacing: 0.1rem;
  }
  p {
    padding: 0 32px;
    color: #333136;
    font-size: 1.2rem;
  }
  @media (max-width: 865px) {
    flex-direction: row;
    img,
    .img-place-holder {
      height: 100%;
      border-radius: 15px 0 0 15px;
      width: 45%;
    }
  }
  @media (max-width: 680px) {
    gap: 20px;
    p {
      padding: 16px;
    }
  }
  @media (max-width: 425px) {
    margin: 0 20px;
    flex-direction: column;
    gap: 40px;
    img,
    .img-place-holder {
      width: 100%;
      border-radius: 15px 15px 0 0;
      height: 50%;
    }
  }
`;

interface Sample {
  title: string;
  description: string;
  image: string;
}

const Sample = (props: {
  title: string;
  description: string;
  image: string;
  type: string | undefined;
}) => {
  const { title, description, image } = props;
  const [downloadUrl, loading, error] = useDownloadURL(
    ref(
      storage,
      `images/${props.type}-design/${
        image === "no-image" ? "image-" + title.toLowerCase() + ".jpg" : image
      }`
    )
  );

  return (
    <StyledSample>
      {loading || error ? (
        <div className="img-place-holder"></div>
      ) : (
        <img src={downloadUrl} alt={title} />
      )}
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </StyledSample>
  );
};

const Samples = (props: { type: string | undefined }) => {
  const [values, loading, error, snapshot] = useCollectionData(
    collection(firestore, `${props.type}`)
  );
  if (loading) return <div>Loading...</div>;

  return (
    <StyledSamples>
      {values?.map((sample) => (
        <Sample
          key={sample.title}
          title={sample.title}
          description={sample.description}
          image={sample.image || "no-image"}
          type={props.type}
        />
      ))}
    </StyledSamples>
  );
};

const typeSelector = (type: string | undefined) => {
  switch (type) {
    case "web":
      return "web";
    case "app":
      return "app";
    case "graphic":
      return "graphic";
    default:
      return "notFound";
  }
};

const OtherTypes = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  height: 350px;

  @media (max-width: 768px) {
    height: 300px;
    flex-direction: column;
  }
  @media (max-width: 425px) {
    padding: 0 20px;
    h1{
      font-size: 1.8rem;
    }
`;
const Types = ["APP", "WEB", "GRAPHIC"];

const Design = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  return (
    <StyledMain>
      <Banner>
        <h1>{data[typeSelector(type)].title}</h1>
        <p>{data[typeSelector(type)].description}</p>
      </Banner>
      <Samples type={type} />

      <OtherTypes>
        {Types.filter((item) => item !== type?.toUpperCase()).map((type) => (
          <Card type={type} key={type} />
        ))}
      </OtherTypes>
    </StyledMain>
  );
};
export default Design;

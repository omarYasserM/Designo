import styled from "styled-components";
import rightArrow from "../../assets/shared/desktop/icon-right-arrow.svg";
import graphicDesign from "../../assets/home/desktop/image-graphic-design.jpg";
import webDesign from "../../assets/home/desktop/image-web-design-large.jpg";
import appDesign from "../../assets/home/desktop/image-app-design.jpg";
import { useNavigate } from "react-router-dom";

const StyledCard = styled.div`
  background-color: #00000050;
  color: #fff;
  border-radius: 15px;
  position: relative;
  transition: background-color 0.1s ease-in-out;
  flex: 1;
  > div {
    display: flex;
    flex-direction: column;
    z-index: 10;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    gap: 20px;
    cursor: pointer;
  }
  &:hover {
    background-color: #e7816bbb;
  }
  h1 {
    font-size: 2.5rem;
    font-weight: 400;
    text-align: center;
    letter-spacing: 1px;
  }
  span {
    letter-spacing: 3px;
  }
  > img {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
`;
const imageSelector = (type: string) => {
  switch (type) {
    case "web":
      return webDesign;
    case "graphic":
      return graphicDesign;
    case "app":
      return appDesign;
    default:
      return webDesign;
  }
};
const Card = (props: { type: string }) => {
  const { type } = props;
  const navigate = useNavigate();
  return (
    <StyledCard onClick={() => navigate(`/design/${type.toLowerCase()}`)}>
      <div>
        <h1>{type} DESIGN</h1>
        <span>
          VIEW PROJECTS <img src={rightArrow} alt="right arrow" />
        </span>
      </div>
      <img src={imageSelector(type.toLowerCase())} alt="Graphic design" />
    </StyledCard>
  );
};

export default Card;

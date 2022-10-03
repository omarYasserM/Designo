import styled from "styled-components";

const LightButton = styled.button`
  background-color: white;
  color: #151515;
  padding: 18px 24px;
  border-radius: 8px;
  ouline: none;
  border: none;
  letter-spacing: 1px;
  font-weight: 500;
  font-size: 1.15rem;
  width: max-content;
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    background-color: #ffad9b;
    color: white;
  }
  &:active {
    background-color: #ee9c8a;
  }
`;
export default LightButton;

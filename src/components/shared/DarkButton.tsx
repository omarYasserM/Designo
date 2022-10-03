import styled from "styled-components";

const DarkButton = styled.button`
  background-color: #e7816b;
  color: white;
  padding: 18px 24px;
  border-radius: 8px;
  ouline: none;
  border: none;
  letter-spacing: 1px;
  font-weight: 400;
  font-size: 1rem;
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
export default DarkButton;

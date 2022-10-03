import React from "react";
import styled from "styled-components";
import canada from "../assets/locations/desktop/image-map-canada.png";
import australia from "../assets/locations/desktop/image-map-australia.png";
import uk from "../assets/locations/desktop/image-map-united-kingdom.png";
import pattern from "../assets/shared/desktop/bg-pattern-two-circles.svg";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 165px;
  gap: 40px;
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
const StyledLocation = styled.div`
${(props: { reverse: boolean }) =>
  props.reverse && "flex-direction: row-reverse;"}}
  display: flex;
  gap: 40px;
  width: 100%;
  color: #333136;
  span:first-child {
    font-weight: 600;
    font-size: 1.1rem;
  }
  h2 {
    font-weight: 500;
    color: #e7816b;
    font-size: 2.4rem;
  }
  .info {
    background: url(${pattern}) no-repeat bottom left / auto 100%;
    padding: 100px 0 100px 120px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex: 2;
    background-color: #fdf3f0;
    border-radius: 15px;
    > div {
      display: flex;
      gap: 20%;
      > div {
        width: 50%;
        display: flex;
        flex-direction: column;
      }
    }
  }
  .map {
    flex: 1;
    background-color: #fdf3f0;
    border-radius: 15px;
    object-fit: cover;
    height: 320px;
    width: 100%;
    >*{
      z-index: 10;
      height: 100%;
      width: 100%;
      border-radius: 15px;
    }
    
  }
  @media (max-width: 1400px) {
    .info {
      padding: 100px 20px 100px 40px;
      >div{
        gap: 10%;
      }
    }
  }
  
  @media (max-width: 900px) {
    flex-direction: column-reverse;
    height: 500px;
    gap:20px;
    .info {
      padding: 20px 20px 20px 40px;
      flex:1;
    }
    .map {
      background-color: #fd00f0;
      height: 200px;
      width: 100%;
      overflow: hidden;
      
    }
  }
  @media (max-width: 500px) {
    height: 700px;
    .info {
      
      align-items: center;
      padding: 50px 0 50px 0;
      text-align: center;
      >*{
        width: 100%;
      }
      >div{
        gap: 20px;
        align-items: center;
        flex-direction: column;
        >div{
          width: 90%;
        }
      }


    }
  }
`;

const locationImg = (location: string) => {
  switch (location) {
    case "Canada":
      return canada;
    case "Australia":
      return australia;
    case "United Kingdom":
      return uk;
    default:
      return canada;
  }
};
const position = L.latLng(43.6532, -79.3832);

const Location = (props: { reverse: boolean; location: string }) => {
  return (
    <StyledLocation reverse={props.reverse}>
      <div className="info">
        <h2>{props.location}</h2>
        <div>
          <div>
            <span>Designo Central Office</span>
            <span>3886 Wellington Street</span>
            <span>Toronto, Ontario M9C 3J5</span>
          </div>
          <div>
            <span>Contact</span>
            <span>P : +1 253-863-8967</span>
            <span>M : contact@designo.co</span>
          </div>
        </div>
      </div>
      <div className="map">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </StyledLocation>
  );
};

const Locations = () => {
  return (
    <StyledMain>
      <Location reverse={false} location="Canada" />
      <Location reverse={true} location="Australia" />
      <Location reverse={false} location="United Kingdom" />
    </StyledMain>
  );
};
export default Locations;

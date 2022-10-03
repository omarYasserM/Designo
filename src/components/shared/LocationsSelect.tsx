import DarkButton from "./DarkButton";
import locationPattern from "../../assets/shared/desktop/bg-pattern-small-circle.svg";
import styled from "styled-components";
import australia from "../../assets/shared/desktop/illustration-australia.svg";
import canada from "../../assets/shared/desktop/illustration-canada.svg";
import uk from "../../assets/shared/desktop/illustration-united-kingdom.svg";

const Locations = styled.div`
display: flex;
width: 100%;
padding: 0 50px;
justify-content: space-between;
align-items: center;
> div {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  span {
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 500;
    color: #333136;
  }
}
.australia {
  background-image: url(${locationPattern});
  background-repeat: no-repeat;
}

.uk {
  background-image: url(${locationPattern});
  background-repeat: no-repeat;
  transform: rotate(270deg);
  img {
    transform: rotate(-270deg);
  }
}
.canada {
  background-image: url(${locationPattern});
  background-repeat: no-repeat;
  transform: rotate(90deg);
  img {
    transform: rotate(-90deg);
  }
}
@media (max-width: 768px) {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
`;

const LocationsSelect = () => {
  return (
    <Locations>
      <div>
        <div className="canada">
          <img src={canada} alt="United Kingdom" />
        </div>
        <span>canada</span>
        <DarkButton>see location</DarkButton>
      </div>
      <div>
        <div className="australia">
          <img src={australia} alt="Australia" />
        </div>
        <span>australia</span>
        <DarkButton>see location</DarkButton>
      </div>
      <div>
        <div className="uk">
          <img src={uk} alt="United Kingdom" />
        </div>
        <span>united kingdom</span>
        <DarkButton>see location</DarkButton>
      </div>
    </Locations>
  );
};

export default LocationsSelect;

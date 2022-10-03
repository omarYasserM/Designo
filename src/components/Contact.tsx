import React, { useState } from "react";
import styled from "styled-components";
import LightButton from "./shared/LightButton";
import LocationsSelect from "./shared/LocationsSelect";
import pattern from "../assets/home/desktop/bg-pattern-hero-home.svg";
import IconError from "../assets/shared/desktop/icon-error.svg";

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

const ContactCard = styled.div`
  display: flex;
  gap: 200px;
  background-color: ;
  color: white;
  padding: 50px 100px;
  border-radius: 15px;
  background: #e7816b url(${pattern}) no-repeat bottom left;

  > * {
    width: 50%;
  }
  form {
    textArea {
      resize: none;
    }
    div {
      width: 100%;
      position: relative;
      > span {
        position: absolute;
        right: 20px;
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 12px;
        color: #ffffffc0;
      }
    }
    button {
      padding: 18px 50px;
    }
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;
    input,
    textArea {
      width: 100%;
      color: white;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid #fff;
      padding: 20px;
      outline: none;
    }
    *::placeholder {
      color: #ffffffaa;
    }
  }
  div {
    p {
      font-size: 1.2rem;
    }
    h1 {
      font-weight: 500;
      font-size: 3.2rem;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
  }
  @media (max-width: 1080px) {
    gap: 90px;
  }
  @media (max-width: 840px) {
    flex-direction: column;
    padding: 50px 30px;
    > * {
      width: 100%;
    }
  }
  @media (max-width: 425px) {
    border-radius: 0;
    button {
      align-self: center;
    }
  }
`;

const Contact = () => {
  const [Errors, setErrors] = useState(["", "", "", ""]);

  const validate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form["cname"].value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;
    let errors = ["", "", "", ""];
    if (!name) {
      errors[0] = "Name is required";
    }
    if (!email) {
      errors[1] = "Email is required";
    }
    if (!phone) {
      errors[2] = "Phone is required";
    }
    if (!message) {
      errors[3] = "Message is required";
    }
    if (email && !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      errors[1] = "Email is not valid";
    }
    setErrors(errors);
  };

  return (
    <StyledMain>
      <ContactCard>
        <div>
          <h1>Contact Us</h1>
          <p>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        <form onSubmit={validate}>
          <div>
            <input type="text" placeholder="Name" name="cname" />
            <span className="alert">
              {Errors[0]} {Errors[0] && <img src={IconError} alt="error" />}
            </span>
          </div>
          <div>
            <input type="text" placeholder="Email Address" name="email" />
            <span className="alert">
              {Errors[1]} {Errors[1] && <img src={IconError} alt="error" />}
            </span>
          </div>

          <div>
            <input type="text" placeholder="Phone" name="phone" />
            <span className="alert">
              {Errors[2]} {Errors[2] && <img src={IconError} alt="error" />}
            </span>
          </div>

          <div>
            <textarea placeholder="Your Message" name="message"></textarea>
            <span className="alert">
              {Errors[3]} {Errors[3] && <img src={IconError} alt="error" />}
            </span>
          </div>
          <LightButton>Submit</LightButton>
        </form>
      </ContactCard>
      <LocationsSelect />
    </StyledMain>
  );
};
export default Contact;

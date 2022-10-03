import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("Header tests", () => {
  test("navigation options includes [Our company, Locations, Contact]", () => {
    render(<App />);
    const navList = screen.getByTestId("nav-list");
    expect(navList).toHaveTextContent(/our company/i);
    expect(navList).toHaveTextContent(/Locations/i);
    expect(navList).toHaveTextContent(/Contact/i);
  });

  test("Burger menu is not visible on large screens", () => {
    render(<App />);
    const navBurger = screen.getByTestId("burger-menu");
    expect(navBurger).toHaveStyle(`display: none`);
  });

  test("Navigation works correctly", () => {
    render(<App />);
    const aboutLink = screen.getByText(/our company/i);
    fireEvent.click(aboutLink);
    expect(screen.getByText(/About us/i)).toBeInTheDocument();

    const locationsLink = screen.getByText(/Locations/i);
    fireEvent.click(locationsLink);
    expect(screen.getByText(/Designo Central Office/i)).toBeInTheDocument();

    const contactLink = screen.getByText(/Contact/i);
    fireEvent.click(contactLink);
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
  });
});

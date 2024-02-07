import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

test('renders the content wrapped in a div with "navbar" class', () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );

  const navbarDiv = screen.getByTestId("navbar");
  expect(navbarDiv).toBeInTheDocument();
  expect(navbarDiv).toHaveClass("navbar");
});

test("renders a Home <NavLink>", () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );

  const homeNavLink = screen.getByText(/Home/);
  expect(homeNavLink).toBeInTheDocument();
});

test("renders a Movies <NavLink>", () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );

  const moviesNavLink = screen.getByText(/Movies/);
  expect(moviesNavLink).toBeInTheDocument();
});

test("renders a Actors <NavLink>", () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );

  const actorsNavLink = screen.getByText(/Actors/);
  expect(actorsNavLink).toBeInTheDocument();
});

test("renders a Directors <NavLink>", () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );

  const directorsNavLink = screen.getByText(/Directors/);
  expect(directorsNavLink).toBeInTheDocument();
});

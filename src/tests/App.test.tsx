import React from "react";
import { render, screen } from "@testing-library/react";
import Monochromize from "../components/Monochromize";

test("renders learn react link", () => {
  render(<Monochromize />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

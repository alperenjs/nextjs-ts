import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("button component", () => {
  render(<Button />);

  const btn = screen.getByTestId("btn1");

  it("check if btn exist in document", () => {
    expect(btn).toBeInTheDocument();
  });

  it("check button text", () => {
    expect(btn).toHaveTextContent("Enter");
  });
});

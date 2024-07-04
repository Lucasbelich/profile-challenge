import React from "react";
import { render } from "@testing-library/react";
import About from "./About";

describe("About component", () => {
  const mockProps = {
    description: "Esta es una breve descripción del usuario.",
  };

  it("renders description correctly", () => {
    const { getByText } = render(<About {...mockProps} />);
    expect(getByText("Sobre mí")).toBeInTheDocument();
    expect(getByText(mockProps.description)).toBeInTheDocument();
  });
});

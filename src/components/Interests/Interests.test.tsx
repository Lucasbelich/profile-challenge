import React from "react";
import { render } from "@testing-library/react";
import Interests from "./Interests";

describe("Interests component", () => {
  const mockProps = {
    interests: ["Interés 1", "Interés 2", "Interés 3"],
  };

  it("renders interests correctly", () => {
    const { getByText } = render(<Interests {...mockProps} />);
    expect(getByText("Mis Intereses")).toBeInTheDocument();
    mockProps.interests.forEach((interest) => {
      expect(getByText(interest)).toBeInTheDocument();
    });
  });
});

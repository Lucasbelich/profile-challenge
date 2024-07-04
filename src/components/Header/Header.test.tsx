import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";
import avatar from "../../../public/images/undraw_profile.png";

describe("Header component", () => {
  const mockProps = {
    name: "Lionel Messi",
    profileImage: avatar,
    tag: "Jugador de futbol",
  };

  it("renders header correctly with given props", () => {
    const { getByText, getByAltText } = render(<Header {...mockProps} />);
    expect(getByText(mockProps.name)).toBeInTheDocument();
    expect(getByText(mockProps.tag)).toBeInTheDocument();
    expect(getByAltText("avatar")).toBeInTheDocument();
  });
});

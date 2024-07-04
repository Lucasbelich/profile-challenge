import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import ContactForm from "./ContactForm";

describe("ContactForm component", () => {
  it("renders form fields and submits correctly", async () => {
    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <ContactForm />
      </Provider>
    );

    fireEvent.change(getByLabelText("Nombre"), {
      target: { value: "Lionel Messi" },
    });
    fireEvent.change(getByLabelText("Email"), {
      target: { value: "lionel@messi.com" },
    });
    fireEvent.change(getByLabelText("Mensaje"), {
      target: { value: "Este es un mensaje de prueba." },
    });

    fireEvent.click(getByText("Enviar"));
  });

  it("displays validation errors correctly", async () => {
    const { getByText } = render(
      <Provider store={store}>
        <ContactForm />
      </Provider>
    );

    fireEvent.click(getByText("Enviar"));

    await waitFor(() => {
      expect(getByText("El nombre es requerido.")).toBeInTheDocument();
      expect(getByText("El email es requerido.")).toBeInTheDocument();
      expect(
        getByText("No puedes enviar un mensaje vacío.")
      ).toBeInTheDocument();
    });
  });
});

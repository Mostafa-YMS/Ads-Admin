import React from "react";
import { render, fireEvent } from "@testing-library/react";
import PhoneLogin from "../PhoneLogin";

it("renders without crashing", () => {
  const { getByText } = render(<PhoneLogin />);
  getByText("or login with phone number");
  getByText("Submit");
});

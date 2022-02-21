import React from "react";
import { render, fireEvent } from "@testing-library/react";
import PhoneLogin from "../PhoneLogin";

it("renders without crashing", () => {
  const { getByText } = render(<PhoneLogin />);
  getByText("or login with phone number");
  getByText("Submit");
});

// it("renders change on expanding", () => {
//   const { getByText, getByPlaceholderText } = render(<PhoneLogin />);
//   getByText("or login with phone number");
//   fireEvent.change(getByPlaceholderText("Phone number"), { target: { value: "+201152935995" }});
//   fireEvent.click(getByText("Submit"));
//   getByText("Login");
// });

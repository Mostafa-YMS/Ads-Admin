import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import SignUp from "../SignUp";

it("renders without crashing", () => {
  const { getByText } = render(
    <MemoryRouter>
      <SignUp />
    </MemoryRouter>
  );
  getByText("Login");
  getByText("Register");
  getByText("Have an account ?");
});

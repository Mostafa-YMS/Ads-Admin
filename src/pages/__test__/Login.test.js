import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import Login from '../Login';

it("renders without crashing", () => {
  const { getByText } = render(
    <MemoryRouter>
        <Login />
    </MemoryRouter>
  );
  getByText("Login");
  getByText("Register");
  getByText("Doesn't have account ?");
});

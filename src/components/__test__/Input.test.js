import React from "react";
import Header from "../Header";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "../../context/AuthContext";
import { render } from "@testing-library/react";
import { Input } from "../Input";

it("renders without crashing", () => {
  render(<Input label="label" />);
});

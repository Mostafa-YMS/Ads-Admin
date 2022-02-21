import React from "react";
import { AuthProvider } from "./AuthContext";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
  render(<AuthProvider></AuthProvider>);
});

import React from "react";
import { render } from "@testing-library/react";
import CreationForm from '../CreationForm';

it("renders without crashing", () => {
  const { getByText } = render(<CreationForm btn="Submit" />);
  getByText("Submit");
});

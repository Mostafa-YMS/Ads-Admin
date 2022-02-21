import React from "react";
import Header from "../Header";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "../../context/AuthContext";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
   act(() => {
    const { getByText } = render(
      <MemoryRouter>
        <AuthProvider>
          <Header />
        </AuthProvider>
      </MemoryRouter>
    );
    getByText("Ads Dashboard");
  });

});

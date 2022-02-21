import { render, screen } from "@testing-library/react";
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";

test("renders without crashing", () => {
  act(() => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </MemoryRouter>
    );
  });
  const headerTitle = screen.getByText("Ads Dashboard");
  expect(headerTitle).toBeInTheDocument();

});

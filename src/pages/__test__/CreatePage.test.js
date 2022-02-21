import React from "react";
import { Provider } from "react-redux";
import { store } from "../../ads-redux/store";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import CreatePage from "../CreatePage";

it("renders without crashing", () => {
  const { getAllByText } = render(
    <MemoryRouter>
      <Provider store={store}>
        <CreatePage />
      </Provider>
    </MemoryRouter>
  );
  getAllByText("Create");
});

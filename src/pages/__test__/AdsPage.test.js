import React from "react";
import { Provider } from "react-redux";
import { store } from "../../ads-redux/store";
import { render } from "@testing-library/react";
import AdsPage from "../AdsPage";

it("renders without crashing", () => {
  render(
    <Provider store={store}>
      <AdsPage />
    </Provider>
  );
});

import React from "react";
import { Provider } from "react-redux";
import { store } from "../../ads-redux/store";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import UpdatePage from "../UpdatePage";

const ad = {
  image: "",
  video: "http://www.exit109.com/~dnn/clips/RW20seconds_1.mp4",
  from_time: "12/05/2021 06:25:00 PM",
  to_time: "12/05/2021 06:27:00 PM",
};

const state = { ad: ad, index: 1 };

it("renders without crashing", () => {
  const { getAllByText } = render(
    <MemoryRouter initialEntries={[{ pathname: "/update", state: state }]}>
      <Provider store={store}>
        <UpdatePage state={state} />
      </Provider>
    </MemoryRouter>
  );
  getAllByText("Update");
});

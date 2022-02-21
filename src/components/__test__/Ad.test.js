import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { Ad } from "../Ad";
import { Provider } from "react-redux";
import { store } from "../../ads-redux/store";

it("renders without crashing", () => {
  const ad = {
    image: "",
    video: "http://www.exit109.com/~dnn/clips/RW20seconds_1.mp4",
    from_time: "12/05/2021 06:25:00 PM",
    to_time: "12/05/2021 06:27:00 PM",
  };
  const { getByText, getByLabelText } = render(
    <MemoryRouter>
      <Provider store={store}>
        <Ad ad={ad} index={1} />
      </Provider>
    </MemoryRouter>
  );
  getByText("Update");
  getByText("Delete");
  getByText("12/05/2021 06:25:00 PM");
  getByText("Start at:");
  getByText("12/05/2021 06:27:00 PM");
  getByText("End at:");
});

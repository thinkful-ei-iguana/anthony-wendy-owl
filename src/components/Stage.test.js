import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Stage from "./Stage";

describe("Participants component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Stage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders the UI as expected", () => {
    const tree = renderer
      .create(<Stage participants={["test person", "another person"]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

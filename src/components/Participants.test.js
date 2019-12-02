import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Participants from "./Participants";

describe("Participants component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Participants />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders the UI as expected", () => {
    const tree = renderer.create(<Participants name="test person" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

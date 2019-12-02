import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import ChatLog from "./ChatLog";

describe("ChatLog component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ChatLog />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders the UI as expected", () => {
    const tree = renderer.create(<ChatLog message="test message" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import { shallow } from "enzyme";
import KickoffComponent from "./KickoffComponent";
import { assoc, pipe } from "ramda";
import React from "react";

const props = pipe(
  assoc("getData", () => "hi"),
  assoc("label", "blah")
)({});

describe("Kickoff Component", () => {
  it("renders the page ", () => {
    const wrapper = shallow(<KickoffComponent {...props} />);
    expect(wrapper.find("input")).not.toHaveLength(0);
  });
});

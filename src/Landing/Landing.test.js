import React from "react";
import Landing from "../Landing/Landing";
import { shallow } from "enzyme";

describe("People", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Landing />);
  });

  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

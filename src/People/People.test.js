import React from "react";
import People from "../People/People";
import { shallow } from "enzyme";

describe("People", () => {
  let wrapper;
  let peopleArray = [1, 2, 3]
  

  beforeEach(() => {
    wrapper = shallow(<People peopleArray={peopleArray} />)

  });

  it("should match snapshot when all data is passed correctly", () => {
    
    expect(wrapper).toMatchSnapshot();
  });
});
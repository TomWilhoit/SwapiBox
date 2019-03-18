import React from "react";
import Vehicles from "../Vehicles/Vehicles";
import { shallow } from "enzyme";

describe("People", () => {
  let wrapper;
  let vehiclesArray = [1,2,3]

  beforeEach(() => {
    wrapper = shallow(<Vehicles vehiclesArray={vehiclesArray} />);
  });

  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

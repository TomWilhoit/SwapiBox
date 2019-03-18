import React from "react";
import Planets from "../Planets/Planets";
import { shallow } from "enzyme";

describe("People", () => {
  let wrapper;
  let planetsArray = [
    {
        "name": "Alderaan",
        "rotation_period": "24",
        "orbital_period": "364",
        "diameter": "12500",
        "climate": "temperate",
        "gravity": "1 standard",
        "terrain": "grasslands, mountains",
        "surface_water": "40",
        "population": "2000000000",
        "residents": [
            "https://swapi.co/api/people/5/",
            "https://swapi.co/api/people/68/",
            "https://swapi.co/api/people/81/"
        ],
      }
    ]

  beforeEach(() => {
    wrapper = shallow(<Planets planetsArray={planetsArray} />);
  });

  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

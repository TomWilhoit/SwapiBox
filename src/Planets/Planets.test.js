import React from "react";
import { Planets, mapStateToProps } from "../Planets/Planets";
import { shallow } from "enzyme";

describe("Planets", () => {
  let wrapper;
  let planets = [
    {
      name: "Alderaan",
      rotation_period: "24",
      orbital_period: "364",
      diameter: "12500",
      climate: "temperate",
      gravity: "1 standard",
      terrain: "grasslands, mountains",
      surface_water: "40",
      population: "2000000000",
      residents: [
        "https://swapi.co/api/people/5/",
        "https://swapi.co/api/people/68/",
        "https://swapi.co/api/people/81/"
      ]
    }
  ];

  beforeEach(() => {
    wrapper = shallow(<Planets planets={planets} />);
  });

  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should map state to props", () => {
    const mockStore = {
      people: [
        { name: "Jim", age: 23 },
        { name: "Frank", age: 23 },
        { name: "Harry", age: 23 }
      ],
      films: [
        { title: "StarWars1", year: 1991 },
        { title: "StarWars2", year: 1998 },
        { title: "StarWars3", year: 2000 },
        { title: "StarWars4", year: 1998 },
        { title: "StarWars5", year: 2000 }
      ],
      vehicles: [
        { name: "Ford", wheels: 4 },
        { name: "Tesla", wheels: 4 },
        { name: "Nissan", wheels: 4 }
      ],
      planets: [
        { name: "Earth", population: 200 },
        { name: "Uranus", population: 0 },
        { name: "Mars", population: 1 }
      ]
    };
    const expected = {
      people: [
        { name: "Jim", age: 23 },
        { name: "Frank", age: 23 },
        { name: "Harry", age: 23 }
      ],
      films: [
        { title: "StarWars1", year: 1991 },
        { title: "StarWars2", year: 1998 },
        { title: "StarWars3", year: 2000 },
        { title: "StarWars4", year: 1998 },
        { title: "StarWars5", year: 2000 }
      ],
      vehicles: [
        { name: "Ford", wheels: 4 },
        { name: "Tesla", wheels: 4 },
        { name: "Nissan", wheels: 4 }
      ],
      planets: [
        { name: "Earth", population: 200 },
        { name: "Uranus", population: 0 },
        { name: "Mars", population: 1 }
      ]
    };
    const mappedProps = mapStateToProps(mockStore);
    expect(mappedProps).toEqual(expected);
  });
});

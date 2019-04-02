import React from "react";
import { App, mapStateToProps, mapDispatchtoProps } from "./App";
import { shallow } from "enzyme";
import * as API from "../utils/API";
import * as randomNum from "../utils/randomNum";
import { getFilms, getPlanets, getPeople, getVehicles } from "../actions/index";

randomNum.randomNumberGen = jest.fn(() => 0);

jest.mock('../utils/API')
API.fetchData.mockImplementation(() => Promise.resolve({
  results: []
})
  
)

describe("App", () => {
  let wrapper;
  const mockFunc = jest.fn();
  const people = [
    { name: "Jim", age: 23 },
    { name: "Frank", age: 23 },
    { name: "Harry", age: 23 }
  ];
  const films = [
    { title: "StarWars1", year: 1991 },
    { title: "StarWars2", year: 1998 },
    { title: "StarWars3", year: 2000 },
    { title: "StarWars4", year: 1998 },
    { title: "StarWars5", year: 2000 }
  ];
  const vehicles = [
    { name: "Ford", wheels: 4 },
    { name: "Tesla", wheels: 4 },
    { name: "Nissan", wheels: 4 }
  ];
  const planets = [
    { name: "Earth", population: 200 },
    { name: "Uranus", population: 0 },
    { name: "Mars", population: 1 }
  ];

  beforeEach(() => {
    wrapper = shallow(
      <App
        getVehicles={mockFunc}
        getPlanets={mockFunc}
        getFilms={mockFunc}
        getPeople={mockFunc}
        goToVehicles={mockFunc}
        goToPeople={mockFunc}
        goToPlanets={mockFunc}
        goToLanding={mockFunc}
        goToMain={mockFunc}
        randomNumberGen={mockFunc}
        people={people}
        films={films}
        vehicles={vehicles}
        planets={planets}
      />
    );
  });

  it("should have a proper default state", () => {
    wrapper.setState({ landingPage: "landing", randomNum: 0 });
    expect(wrapper.state()).toEqual({
      landingPage: "landing",
      randomNum: 0
    });
  });

  it("should match the snapshot with all data passed in correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("componentDidMount", () => {
  const mockFunc = jest.fn();
  let wrapper;
  const mockURL = "https://swapi.co/api/films";
  const data = [
    { title: "A New Hope", released: 1977 },
    { title: "The Phantom Menace", released: 2001 }
  ];
  const people = [
    { name: "Jim", age: 23 },
    { name: "Frank", age: 23 },
    { name: "Harry", age: 23 }
  ];
  const films = [
    { title: "StarWars1", year: 1991 },
    { title: "StarWars2", year: 1998 },
    { title: "StarWars3", year: 2000 },
    { title: "StarWars4", year: 1998 },
    { title: "StarWars5", year: 2000 }
  ];
  const vehicles = [
    { name: "Ford", wheels: 4 },
    { name: "Tesla", wheels: 4 },
    { name: "Nissan", wheels: 4 }
  ];
  const planets = [
    { name: "Earth", population: 200 },
    { name: "Uranus", population: 0 },
    { name: "Mars", population: 1 }
  ];

  beforeEach(() => {
    API.fetchData = jest.fn(() => Promise.resolve(data));
    wrapper = shallow(
      <App
        getVehicles={mockFunc}
        getPlanets={mockFunc}
        getFilms={mockFunc}
        getPeople={mockFunc}
        goToVehicles={mockFunc}
        goToPeople={mockFunc}
        goToPlanets={mockFunc}
        goToLanding={mockFunc}
        goToMain={mockFunc}
        randomNumberGen={mockFunc}
        people={people}
        films={films}
        vehicles={vehicles}
        planets={planets}
      />
    );
  });

  it("should call fetchData with the correct parameter", async () => {
    API.fetchData = jest.fn(() => Promise.resolve({ results: [] }));
    await wrapper.instance().componentDidMount();
    expect(API.fetchData).toHaveBeenCalledWith(mockURL);
  });

  it("should call fetchFilms when invoked", () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, "fetchFilms");
    wrapper.instance().componentDidMount();
    expect(instance.fetchFilms).toBeCalled();
  });

  it("should call fetchPeople when invoked", () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, "fetchPeople");
    wrapper.instance().componentDidMount();
    expect(instance.fetchPeople).toBeCalled();
  });

  it("should call fetchVehicles when invoked", () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, "fetchVehicles");
    wrapper.instance().componentDidMount();
    expect(instance.fetchVehicles).toBeCalled();
  });

  it("should call fetchPlanets when invoked", () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, "fetchPlanets");
    wrapper.instance().componentDidMount();
    expect(instance.fetchPlanets).toBeCalled();
  });
});

describe("App", () => {
  let wrapper;
  const mockFunc = jest.fn();
  const people = [
    { name: "Jim", age: 23 },
    { name: "Frank", age: 23 },
    { name: "Harry", age: 23 }
  ];
  const films = [
    { title: "StarWars1", year: 1991 },
    { title: "StarWars2", year: 1998 },
    { title: "StarWars3", year: 2000 },
    { title: "StarWars4", year: 1998 },
    { title: "StarWars5", year: 2000 }
  ];
  const vehicles = [
    { name: "Ford", wheels: 4 },
    { name: "Tesla", wheels: 4 },
    { name: "Nissan", wheels: 4 }
  ];
  const planets = [
    { name: "Earth", population: 200 },
    { name: "Uranus", population: 0 },
    { name: "Mars", population: 1 }
  ];
  beforeEach(() => {
    wrapper = shallow(
      <App
        getVehicles={mockFunc}
        getPlanets={mockFunc}
        getFilms={mockFunc}
        getPeople={mockFunc}
        goToVehicles={mockFunc}
        goToPeople={mockFunc}
        goToPlanets={mockFunc}
        goToLanding={mockFunc}
        goToMain={mockFunc}
        randomNumberGen={mockFunc}
        people={people}
        films={films}
        vehicles={vehicles}
        planets={planets}
      />
    );
  });
  it("should change the state of landing when goToMain is invoked", () => {
    wrapper.instance().goToMain();
    expect(wrapper.state("landingPage")).toEqual("main");
  });
  it("should change the state of landing when goToLanding is invoked", () => {
    wrapper.instance().goToLanding();
    expect(wrapper.state("landingPage")).toEqual("landing");
  });
  it("should change the state of landing when goToPlanets is invoked", () => {
    wrapper.instance().goToPlanets();
    expect(wrapper.state("landingPage")).toEqual("planets");
  });
  it("should change the state of landing when goToPeople is invoked", () => {
    wrapper.instance().goToPeople();
    expect(wrapper.state("landingPage")).toEqual("people");
  });
  it("should change the state of landing when goToVehicles is invoked", () => {
    wrapper.instance().goToVehicles();
    expect(wrapper.state("landingPage")).toEqual("vehicles");
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
  it("should map getFilms to props", () => {
    const mockData = [
      { title: "StarWars1", year: 1991 },
      { title: "StarWars2", year: 1998 },
      { title: "StarWars3", year: 2000 },
      { title: "StarWars4", year: 1998 },
      { title: "StarWars5", year: 2000 }
    ];
    const mockDispatch = jest.fn();
    const actionToDispatch = getFilms(mockData);
    const mappedProps = mapDispatchtoProps(mockDispatch);
    mappedProps.getFilms(mockData);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
  it("should map getPeople to props", () => {
    const mockData = [
      { name: "Jim", age: 23 },
      { name: "Frank", age: 23 },
      { name: "Harry", age: 23 }
    ];
    const mockDispatch = jest.fn();
    const actionToDispatch = getPeople(mockData);
    const mappedProps = mapDispatchtoProps(mockDispatch);
    mappedProps.getPeople(mockData);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
  it("should map getPlanets to props", () => {
    const mockData = [
      { name: "Earth", population: 200 },
      { name: "Uranus", population: 0 },
      { name: "Mars", population: 1 }
    ];
    const mockDispatch = jest.fn();
    const actionToDispatch = getPlanets(mockData);
    const mappedProps = mapDispatchtoProps(mockDispatch);
    mappedProps.getPlanets(mockData);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
  it("should map getVehicles to props", () => {
    const mockData = [
      { name: "Ford", wheels: 4 },
      { name: "Tesla", wheels: 4 },
      { name: "Nissan", wheels: 4 }
    ];
    const mockDispatch = jest.fn();
    const actionToDispatch = getVehicles(mockData);
    const mappedProps = mapDispatchtoProps(mockDispatch);
    mappedProps.getVehicles(mockData);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});

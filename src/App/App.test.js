import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import * as API from "../utils/API";

describe("App", () => {
  let wrapper;
  const mockFunc = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<App randomNumberGen={mockFunc} />);
  });

  // State and Snapshot tests

  it("should have a proper default state", () => {
    wrapper.setState({ randomNum: 0 });
    expect(wrapper.state()).toEqual({
      landingPage: "landing",
      films: [],
      randomNum: 0,
      people: [],
      vehicles: [],
      planets: []
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

  beforeEach(() => {
    API.fetchData = jest.fn(() => Promise.resolve(data));
    wrapper = shallow(<App />);
  });

  it("should call fetchData with the correct parameter", async () => {
    await wrapper.instance().componentDidMount();
    expect(API.fetchData).toHaveBeenCalledWith(mockURL);
  });

  it("should set films in state if working correctly", async () => {
    await wrapper.instance().componentDidMount();
    expect(wrapper.state("films")).toEqual(data);
  });
});

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("should change the state of landing when goToMain is invoked", () => {
    wrapper.instance().goToMain();
    expect(wrapper.state("landingPage")).toEqual("main");
  });
});

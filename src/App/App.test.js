import React from "react";
import App from "./App";
import { shallow } from "enzyme";
global.localStorage = require("../setupTests");
import * as API from '../utils/API';


describe("App", () => {
  let wrapper;
  const mockFunc = jest.fn();
  

  beforeEach(() => {
    wrapper = shallow(<App randomNumberGen={mockFunc} />);
  });

  // State and Snapshot tests

  it("should have a proper default state", () => {
    wrapper.setState({randomNum:0})
    expect(wrapper.state()).toEqual({
      landingPage: "landing",
      films: [],
      randomNum: 0,
      people: [],
      vehicles:[],
      planets:[]
    });
  });

  it("should match the snapshot with all data passed in correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });



  



})

describe('componentDidMount', () => {
  beforeEach(() => {
    API.fetchData = jest.fn(() => mockFilms)
  });

  it('should call fetchData with the correct parameter', () => {

  });

  it('should set films in state if everything is good', () => {

  })
  //test that the error message is set in state when things are bad
  //API.fetchData = jest.fn(() => {
    // throw Error('some message')
  // })
  //spy on randomNumberGen, fetchPeople, fetchVehicles, and getPlanets
  //test that those are called
});

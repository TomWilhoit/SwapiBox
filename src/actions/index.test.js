import * as actions from "../actions";

describe("actions", () => {
  it("should return a type of GET_FILMS with data", () => {
    const data = [{"film": "starwars1"},{"film": "starwars2"},{"film": "starwars3"}];
    const expected = {
      type: "GET_FILMS",
      data
    };
    const result = actions.getFilms(data);
    expect(result).toEqual(expected);
  });
  it("should return a type of GET_PLANETS with data", () => {
    const data = [{"planet": "Tattoine"},{"planet": "Naboo"},{"planet": "Hoth"}];
    const expected = {
      type: "GET_PLANETS",
      data
    };
    const result = actions.getPlanets(data);
    expect(result).toEqual(expected);
  });
  it("should return a type of GET_VEHICLES with data", () => {
    const data = [{"vehicle": "Ford"},{"vehicle": "Tesla"},{"vehicle": "Nissan"}];
    const expected = {
      type: "GET_VEHICLES",
      data
    };
    const result = actions.getVehicles(data);
    expect(result).toEqual(expected);
  });
  it("should return a type of GET_PEOPLE with data", () => {
    const data = [{"planet": "Tattoine"},{"planet": "Naboo"},{"planet": "Hoth"}];
    const expected = {
      type: "GET_PEOPLE",
      data
    };
    const result = actions.getPeople(data);
    expect(result).toEqual(expected);
  });
});

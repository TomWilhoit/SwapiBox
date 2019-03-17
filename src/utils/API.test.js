import { fetchData } from "./API";

describe("fetchData", () => {
  const mockURL = "www.turing.io";
  const mockPlanets = [
    { name: "tattoine", population: 25 },
    { name: "earth", population: 100 }
  ];
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({ planets: mockPlanets })
      })
    );
  });

  it("should be called with the correct parameter", () => {
    fetchData(mockURL);
    expect(window.fetch).toHaveBeenCalledWith(mockURL);
  });

  it("should return mockPlanets when there is no error", async () => {
    const result = await fetchData(mockURL);
    expect(result).toEqual({ planets: mockPlanets });
  });

  it("should return an error message when there is an error", () => {
    const mockURL = "www.reddit.com";
    window.fetch = jest.fn(() => {
      return Promise.resolve({
        ok: false,
        status: 404
      });
    });
    const expected = Error('Error fetching data');
    expect(fetchData(mockURL)).rejects.toEqual(expected);
  });
});

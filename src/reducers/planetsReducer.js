export const planetsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_PLANETS":
      return action.data;
    default:
      return state;
  }
};

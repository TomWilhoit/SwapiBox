import { vehicleReducer } from './vehicleReducer';
import * as actions from '../actions';

describe('vehicleReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = vehicleReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return state vehicles', () => {
    const data = [{name: 'Tie Fighter'}, {name: 'X-Wing'}]
    const expected = [{name: 'Tie Fighter'}, {name: 'X-Wing'}];
    const result = vehicleReducer( {}, actions.getVehicles(data));
    expect(result).toEqual(expected);
});
});
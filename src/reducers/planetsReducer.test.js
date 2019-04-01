import { planetsReducer } from './planetsReducer';
import * as actions from '../actions';

describe('planetsReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = planetsReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return state planets', () => {
    const data = [{name: 'Naboo'}, {name: 'Hoth'}]
    const expected = [{name: 'Naboo'}, {name: 'Hoth'}];
    const result = planetsReducer( {}, actions.getPlanets(data));
    expect(result).toEqual(expected);
});
});
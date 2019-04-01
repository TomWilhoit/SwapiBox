import { peopleReducer } from './peopleReducer';
import * as actions from '../actions';

describe('peopleReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = peopleReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return state people', () => {
    const data = [{name: 'ObiWan'}, {name: 'Ben'}]
    const expected = [{name: 'ObiWan'}, {name: 'Ben'}];
    const result = peopleReducer( {}, actions.getPeople(data));
    expect(result).toEqual(expected);
});
});
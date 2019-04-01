import { filmsReducer } from './filmsReducer';
import * as actions from '../actions';

describe('filmsReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = filmsReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return state films', () => {
    const data = [{title: 'StarWars1'}, {title: 'StarWars2'}]
    const expected = [{title: 'StarWars1'}, {title: 'StarWars2'}];
    const result = filmsReducer( {}, actions.getFilms(data));
    expect(result).toEqual(expected);
});
});
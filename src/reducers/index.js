import { combineReducers } from 'redux';
import { filmsReducer} from './filmsReducer'
import { vehicleReducer } from './vehicleReducer'
import { peopleReducer } from './peopleReducer';
import { planetsReducer } from './planetsReducer';

export const rootReducer = combineReducers({
	films: filmsReducer,
	vehicles: vehicleReducer,
  planets: planetsReducer,
  people: peopleReducer,
})
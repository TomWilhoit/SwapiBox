export const vehicleReducer = (state = [], action) => {
	switch(action.type){
		case 'GET_VEHICLES':
			return action.data
		
		default:
		return state

	}
}
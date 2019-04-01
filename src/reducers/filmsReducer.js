export const filmsReducer = (state = [], action) => {
	switch(action.type){
		case 'GET_FILMS':
			return action.data
		default:
		return state

	}
}
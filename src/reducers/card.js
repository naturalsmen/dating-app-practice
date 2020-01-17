import { 
	CARD_POINTER_UPDATE, 
	CARD_INFO_OPENED, 
	CARD_INFO_CLOSED
} from '../constants/actionTypes'; 

const initialState = {
	curr: 0, 
	showInfo: false
}

export default (state=initialState, action) => {
	switch(action.type) {
		case CARD_POINTER_UPDATE: 
			return {
				...state, 
				...action.payload
			}
		case CARD_INFO_OPENED: 
			return {
				...state, 
				showInfo: true
			}
		case CARD_INFO_CLOSED: 
			return {
				...state, 
				showInfo: false
			}
		default: 
			return state; 
	}
}
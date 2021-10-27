import { GET_HOTELS } from "../actions/hotels"

const initialState = {
    hotels: []
}

export const hotelsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_HOTELS: {
            return {
                ...state,
                hotels: action.payload
            }
        }
        default:
            return state;
    }
}
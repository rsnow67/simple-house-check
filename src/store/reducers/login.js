import { CHANGE_IS_AUTHED } from "../actions/login";

const initialState = {
    isAuthed: localStorage.getItem('isAuthed')
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_IS_AUTHED: {
            return {
                ...state,
                isAuthed: action.payload.isAuthed
            }
        }
        default:
            return state
    }
}
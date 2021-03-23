import {
    LOGIN_USER,
    LOGOUT_USER,
    INVALID_TOKEN,
    REGISTER_USER,
    LOAD_USER, AUTH_ERROR
} from "./types";


const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    userLoading: null,
    userLoad: null,
    somethink: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER: {
            return {
                ...state,
                token: action.payload,
                userLoading: true,
                isAuthenticated: true
            }
        }
        case REGISTER_USER: {
            return {
                ...state,
                somethink: action.payload,
            }
        }
        case LOAD_USER: {
            return {
                ...state,
                userLoad: true,
                userLoading: false,
            }
        }
        case AUTH_ERROR:
        {
            return {
                ...state,
                isAuthenticated: null,
                userLoading: null,
                userLoad: null,
                somethink: null,
                token: null
            }
        }
        default:
            return state
    }
}
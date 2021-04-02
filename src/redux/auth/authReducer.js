import {
    LOGIN_USER,
    LOGOUT_USER,
    INVALID_TOKEN,
    REGISTER_USER,
    LOAD_USER, AUTH_ERROR,REGISTER_END
} from "./types";


const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    userLoading: null,
    userLoad: null,
    registerIs: null,
    user: null,
    isRegister: null
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
                registerIs: true,
            }
        }
        case REGISTER_END: {
            return {
                ...state,
                registerIs: false,
            }
        }
        case LOAD_USER: {
            return {
                ...state,
                userLoad: true,
                userLoading: false,
                user: action.payload
            }
        }
        case INVALID_TOKEN:
        case LOGOUT_USER:
        case AUTH_ERROR:
        {
            return {
                ...state,
                isAuthenticated: null,
                userLoading: null,
                userLoad: null,
                somethink: null,
                token: null,
                user: null,
                registerIs: null
            }
        }
        default:
            return state
    }
}
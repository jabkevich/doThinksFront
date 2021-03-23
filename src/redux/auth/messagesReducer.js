import {GET_ERROR} from "./types"


const initialState = {
    msg: {},
    status: null,
};


export const errorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ERROR: {
            return (state = action.payload)
        }
        default:
            return state

    }
}
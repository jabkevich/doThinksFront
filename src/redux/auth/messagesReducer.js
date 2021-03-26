import {GET_ERRORS} from "./types"


const initialState = {
    msg: {},
};


export const errorsReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_ERRORS: {
            return {
                msg: action.payload,
            }
        }
        default:
            return state

    }
}
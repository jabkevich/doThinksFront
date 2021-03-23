import {GET_ERRORS} from "./types"

const initialState = {
    msg: null,
    status: null,
    data: null
};


export const errorReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ERRORS: {
            console.log(action.payload)
            return {
                ...state,
                // msg: action.payload.msg,
                // status: action.payload.status,
                data: action.payload
            }
        }
        default:
            return  state

    }
}
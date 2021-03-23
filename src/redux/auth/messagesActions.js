import {  GET_ERRORS } from './types';

// CREATE MESSAGE
// export const createMessage = (msg) => {
//     return {
//         type: GET_MESSAGES,
//         payload: msg,
//     };
// };

// RETURN ERRORS
export const returnErrors = (msg, status) => {
    return {
        type: GET_ERRORS,
        payload: { msg, status },
    };
};
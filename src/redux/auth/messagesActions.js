import {  GET_ERRORS } from './types';

// CREATE MESSAGE
// export const createMessage = (msg) => {
//     return {
//         type: GET_MESSAGES,
//         payload: msg,
//     };
// };

// RETURN ERRORS
export const returnErrors = (data) => {
    return {
        type: GET_ERRORS,
        payload:  data ,
    };
};
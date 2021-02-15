import {
    LOGIN_USER,
    LOGOUT_USER,
    INVALID_TOKEN,
    DATA_USER,
    ADD_GROUP,
    LOAD_USER,
    USER_LOADING,
    DELETE_GROUP,
    OPEN_GROUP,
    UPDATE_TASK
} from "./types";
import axios from "axios";

const URL = "http://127.0.0.1:8000"

export const login = (username, password) => dispatch => {
    const config = {
        headers: {
            "Content-Type": 'application/json'
        }
    }
    const body = JSON.stringify({username, password})

    axios.post(URL + '/auth/token/login/', body, config).then(res => {
        dispatch({
            type: LOGIN_USER,
            payload: res.data
        })
    }).catch(err => console.log(err))

}
export const loadUser = () => (dispatch, getState) => {
    dispatch({type: USER_LOADING})
    axios.get(URL + '/auth/users/me/', tokenConfig(getState)).then(res => {
        dispatch({
            type: LOAD_USER,
            payload: res.data
        })
    }).catch(err => console.log(err))
}

export const tokenConfig = getState => {
    const token = getState().auth.token;
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    if (token) {
        config.headers["Authorization"] = `Token ${token["auth_token"]}`
    }
    return config
}


export const logout = () => (dispatch, getState) => {
    axios.post(URL + '/auth/token/logout/', null, tokenConfig(getState)).then(res => {
        dispatch({
            type: LOGOUT_USER,
        })
    }).catch(err => {
        console.log(err)
        dispatch({
            type: INVALID_TOKEN,
        })
    })
}


export const groupUser = () => (dispatch, getState) => {
    const user = getState().auth.user;
    axios.get(URL + `/api/group/?owner=${user["id"]}`)
        .then(res => {
            dispatch({
                type: DATA_USER,
                payload: res.data

            })
        }).catch(err => console.log(err))
}
export const addGroup = (title, owner) => (dispatch) => {
    axios.post('http://127.0.0.1:8000/api/group/', {title: title["groupName"], owner: owner})
        .then(res => {
            dispatch({
                type: ADD_GROUP,
                payload: res.data
            })
        }).catch(err => console.log(err))
}


export const delGroup = (id) => (dispatch) =>{
    axios.delete(`http://127.0.0.1:8000/api/group/${id}`)
    .then(res => {
        dispatch({
            type: DELETE_GROUP,
            payload: id
        })
    }).catch(err => console.log(err))
}


export const openGroup = (id) => (dispatch) =>{
    dispatch({
        type: OPEN_GROUP,
        payload: id
    })
}

export const updateTask = (Title,  Deadline, Other, Text, Priority, Owner, Group, id) => (dispatch) => {
    const value = {Title,  Deadline, Other, Text, Priority, Owner, Group}
    axios.put(`http://127.0.0.1:8000/api/group/${id}/`, value).then(res => {
        dispatch({
            type: UPDATE_TASK,
            payload: value
        })
    }).catch(err => {console.log(err)})
}
import {
    CREATE_PROJECT_FAIL,
    CREATE_PROJECT_LOADING,
    CREATE_PROJECT_SUCCESS,
    GET_PROJECTS_FAIL,
    GET_PROJECTS_LOADING,
    GET_PROJECTS_SUCCESS,
    UPDATE_PROJECT_FAIL,
    UPDATE_PROJECT_LOAD,
    UPDATE_PROJECT_SUCCESS
} from '../types/types';


export const createProjectReducer = (state = { project: {} }, action) => {
    console.log('creae project reducer <<<<<<>>>>>');
    switch (action.type) {
        case CREATE_PROJECT_LOADING:
            return {
                ...state,
                loading: true
            };
        case CREATE_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                createMessage: action.message
            };
        
        case CREATE_PROJECT_FAIL:
            return { 
                ...state,
                loading: false,
                error: action.error
             };
        default:
            return state;
    }

};

//get all projects reducer

export const fetchProjectsReducer = (state = { projects: []}, action) => {
    switch (action.type) {
        case GET_PROJECTS_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_PROJECTS_SUCCESS:
            return {
                ...state,
                loading: false,
                projects: [...action.projects]
            };
        case GET_PROJECTS_FAIL:
            return { 
                ...state,
                loading: false,
                error: action.error
             };
        default:
            return state;
    }
};

//update the project
const initialState = {
    projects: []
}
export const updateProjectReducer = (state = { message: '' }, action) => {
    switch (action.type) {
        case UPDATE_PROJECT_LOAD:
            return {
                ...state,
                loading: true,
            }
        case UPDATE_PROJECT_SUCCESS:
            return {
                ...state,
                updateMessage: action.message
            }
        case UPDATE_PROJECT_FAIL: 
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

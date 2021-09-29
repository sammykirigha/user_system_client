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


export const createProjectLoad = (project) => {
    return ({
        type: CREATE_PROJECT_LOADING,
        project
    });
};

export const createProjectSuccess = (message) => {
    return({
        type: CREATE_PROJECT_SUCCESS,
        message
    });
};

export const createProjectFail = (error) => {
    return ({
        type: CREATE_PROJECT_FAIL,
        error
    });
};

//GET ALL PROJECTS FROM DATABASE
export const getProjects = () => {
    return ({
        type: GET_PROJECTS_LOADING,
    });
};

export const getProjectsSuccess = (projects) => {
    return({
        type: GET_PROJECTS_SUCCESS,
        projects
    });
};

export const getProjectsFail = (error) => {
    return ({
        type: GET_PROJECTS_FAIL,
        error
    });
};

//UPDATE THE PROJECT
export const updateProjectLoad = (id, updateBody) => {
    return ({
        type: UPDATE_PROJECT_LOAD,
        id,
        updateBody
    });
};

export const updateProjectSuccess = (message) => {
    return({
        type: UPDATE_PROJECT_SUCCESS,
        message
    });
};

export const updateProjectFail = (error) => {
    return ({
        type: UPDATE_PROJECT_FAIL,
        error
    });
};
import axios from 'axios';

export const projectCreateService = async(project) => {
    const CREATE_PROJECT_API_ENDPOINT = 'http://localhost:5002/api/v3/projects/create';
    const {data} = await axios.post(CREATE_PROJECT_API_ENDPOINT, project);
    console.log('create project data from service: ', data);
    return data;
};

export const getAllProjectsService = async () => {
    const GET_PROJECTS_ENDPOINT = 'http://localhost:5002/api/v3/projects/';
    const { data } = await axios.get(GET_PROJECTS_ENDPOINT);
    console.log('all projects from database:', data);
    return data;
};

export const updateProjectService = async (id) => {
    const UPDATE_PROJECT_ENDPOINT = `http://localhost:5002/api/v3/projects/id/${id}`;
    const { data } = await axios.patch(UPDATE_PROJECT_ENDPOINT);
    console.log('project update from database:', data);
    return data;
};
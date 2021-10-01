import axios from 'axios';

export const projectCreateService = async (project) => {
  const CREATE_PROJECT_API_ENDPOINT =
    'http://localhost:5000/api/v2/projects/create';
  const { data } = await axios.post(CREATE_PROJECT_API_ENDPOINT, project);
  return data;
};

export const getAllProjectsService = async () => {
  const GET_PROJECTS_ENDPOINT = 'http://localhost:5000/api/v2/projects/';
  const { data } = await axios.get(GET_PROJECTS_ENDPOINT);
  return data;
};

export const getSingleProjectService = async (id) => {
  const GET_ONE_PROJECT_ENDPOINT = `http://localhost:5000/api/v2/projects/id/${id}`;
  const { data } = await axios.get(GET_ONE_PROJECT_ENDPOINT);
  return data;
};

export const updateProjectService = async (id, project) => {
  const UPDATE_PROJECT_ENDPOINT = `http://localhost:5000/api/v2/projects/id/${id}`;
  console.log('<<<<<<<<<<<<<>>>>>>>>>> service', { project });
  const { data } = await axios.put(UPDATE_PROJECT_ENDPOINT, project);
  return data;
};

export const deleteProjectService = async (id) => {
  const DELETE_PROJECT_ENDPOINT = `http://localhost:5000/api/v2/projects/id/${id}`;
  const { data } = await axios.patch(DELETE_PROJECT_ENDPOINT, id);
  return data;
};

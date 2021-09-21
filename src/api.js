import axios from 'axios';


const usersApi = axios.create({
    baseUrl: 'http://localhost:5001/api/v3/',
    timeout: 20000,
    headers: {
        Accept: 'application/json',
        ContentType: 'application/json'
    }
});


const projectsApi = axios.create({
    baseUrl: 'http://localhost:5002/api/v3/',
    timeout: 20000,
    headers: {
        Accept: 'application/json',
        ContentType: 'application/json'
    }
});


const tasksApi = axios.create({
    baseUrl: 'http://localhost:5003/api/v3/',
    timeout: 20000,
    headers: {
        Accept: 'application/json',
        ContentType: 'application/json'
    }
});

export {
    usersApi,
    projectsApi,
    tasksApi
};

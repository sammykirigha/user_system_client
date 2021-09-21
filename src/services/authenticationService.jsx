import axios from 'axios';

export const registerUserService = async(user) => {
    const REGISTER_API_ENDPOINT = 'http://localhost:5001/api/v3/users/signup';
    const {data} = await axios.post(REGISTER_API_ENDPOINT, user);
    console.log('data from backend<<<<<>>>>',data);
    return data;
};
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api/auth';

interface User {
    username: string;
    password: string;
}

type registerData = {
    username: string;
    password: string;
    email: string;
    companyName: string;
}

export const registerRequest = async (user: registerData) => await axios.post('/register', user);

export const loginRequest = async (user: User) => await axios.post('/login', user);


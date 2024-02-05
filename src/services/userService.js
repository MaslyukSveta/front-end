import axios from 'axios';

const BASE_URL = 'http://localhost:8080/users/registration';

const registerUser = async (userData) => {
    try {
        const response = await axios.post(BASE_URL, userData);
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message || 'Error during registration');
        } else {
            throw new Error('Network error, please try again later');
        }
    }
};

export default {
    registerUser
};

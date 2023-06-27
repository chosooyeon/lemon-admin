import axios from 'axios';

export const comments = async () => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/1`);
        return response.data;
    } catch (error) {
        const msg = `checkAccessRights API Fail`
        throw new Error(msg);
    }
} 
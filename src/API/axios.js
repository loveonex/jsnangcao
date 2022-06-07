import axios from 'axios';
const apiAxios = axios.create({
    baseURL: "https://6291d18f9d159855f08095e4.mockapi.io/"
});
export default apiAxios;
import axios from 'axios';

 const baseAxios = axios.create({
    baseURL : 'http://localhost:9090/'
 });

 export default baseAxios;
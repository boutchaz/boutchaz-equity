import axios from 'axios';
import config from 'config'
const client = axios.create({
    baseURL: config.backend.url + '/api/',
    timeout: 1000,
    headers: {'Authorization': `Bearer ${config.backend.apiKey}`}
});
export default client
import axios from 'axios';
import config from 'config'
console.log(config.backend.apiKey)
const client = axios.create({
    baseURL: config.backend.url,
    timeout: 1000,
    headers: {'Authorization': `Bearer ${config.backend.apiKey}`}
  });
export default client
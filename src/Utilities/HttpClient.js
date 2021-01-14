import axios from 'axios';
import { API_URL } from '../Config/Constant';

class HttpClient {
    constructor() {
        this.api_url = API_URL;
    }
    
    generateHeader() {
        const headers = {
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        }
        console.log('Header', headers)
        return headers;
    }
    
    async request(endpoint) {
        return await axios.get(this.api_url + endpoint, this.generateHeader)
    }
}

export default new HttpClient()
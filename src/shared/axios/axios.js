import axios from "axios";

const instance = axios.create({
    baseURL: 'https://portfolio-react-21ddb.firebaseio.com/'
});

export default instance;
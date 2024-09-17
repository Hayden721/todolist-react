import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_CORS_ALLOWED_ORIGINS;


export default axios;
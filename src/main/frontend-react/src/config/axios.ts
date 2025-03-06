import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_CORS_ALLOWED_ORIGINS;


export default axios;
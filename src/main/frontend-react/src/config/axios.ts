import axios from "axios";

// axios 기본 URL 지정
// 개발용, 배포용 URL은 .env 파일에 작성
axios.defaults.baseURL = import.meta.env.VITE_CORS_ALLOWED_ORIGINS;

export default axios;
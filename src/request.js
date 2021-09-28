import axios from "axios";

export default axiosInstance = axios.create({
    baseURL: "https://api.coingecko.com/api/v3"
});
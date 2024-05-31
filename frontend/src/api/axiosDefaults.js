import axios from "axios";

// axios.defaults.baseURL = "https://drf-api.herokuapp.com/"
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosRec = axios.create();
export const axiosRes = axios.create();

import axios from "axios";
import {BASE_URL} from "../Config/api";

axios.defaults.baseURL = BASE_URL;

export default axios;
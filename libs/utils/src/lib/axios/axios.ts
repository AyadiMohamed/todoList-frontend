import axios from "axios";
import process from 'process'

const url = process.env.REACT_APP_BASE_URL;
export const instance = axios.create({
    baseURL: url,
});
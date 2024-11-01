import axios from "axios";
import { ELocalStorageKey } from "../const";

export const api = axios.create({
    baseURL:__API__,
})

api.interceptors.request.use((config) => {

    if(config.headers){
        config.headers.Authorization = localStorage.getItem(ELocalStorageKey.USER) || '';
    }

    return config
})
import axios from "axios";
import { ELocalStorageKey } from "../const";

export const api = axios.create({
    baseURL:__API__, 
    headers: {
        authorization: localStorage.getItem(ELocalStorageKey.USER) ? 'authorization' : undefined
    }
})
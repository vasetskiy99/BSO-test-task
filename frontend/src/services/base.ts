import axios from 'axios';

import { getCurrentAccessToken } from '@utils/getCurrentAccessToken';

export const BASE_URL = `http://localhost:1337`;

export const API = axios.create({
    baseURL: BASE_URL + '/',
    withCredentials: true,
});

API.interceptors.request.use(
    config => {
        const token = getCurrentAccessToken();

        if (config.withCredentials && token) {
            config.headers.Authorization = 'Bearer ' + token;
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

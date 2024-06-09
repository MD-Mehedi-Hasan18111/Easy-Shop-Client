import axios from 'axios';
import { BASE_URL } from '@config';
import { store } from '@src/app/lib/store';

const defaultOptions = {
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  }
};

// Create Base instance
export const API = axios.create(defaultOptions);
// Set the AUTH token for any request
API.interceptors.request.use(function (config) {
  const token: string | null = store.getState().Auth.TOKEN;
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

const defaultFormOptions = {
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
    'Cache-Control': 'no-cache'
  }
};

// Create Form Api instance
export const FORM_API = axios.create(defaultFormOptions);
// Set the AUTH token for any request
FORM_API.interceptors.request.use(function (config) {
  const token: string | null = store.getState().Auth.TOKEN;
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

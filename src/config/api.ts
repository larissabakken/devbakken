import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.linkedin.com/',
  timeout: 5000,
  withCredentials: true,
});

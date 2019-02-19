import axios from 'axios';

const api = axios.create({
  baseURL: 'https://launchlibrary.net/1.4',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const API_STATUS = {
  INIT: 'INIT',
  LOADING: 'LOADING',
  FETCHED: 'FETCHED',
  FAILED: 'FAILED',
};

export default api;

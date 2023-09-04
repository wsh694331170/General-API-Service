import axios from 'axios';

const config = {
  baseURL: 'https://www.mxnzp.com/api',
  timeout: 60000,
  withCredentials: true,
  params: {
    app_id: 'rg6pqtnigrpkktlv',
    app_secret: 'aDNDMzZwVUhPSlhlTUhrSlU0a3VKZz09',
  },
};

export const generalAPIClient = axios.create(config);

generalAPIClient.interceptors.response.use((response) => response.data);
